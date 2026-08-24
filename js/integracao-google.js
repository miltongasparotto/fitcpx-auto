// ── Login / Logout ────────────────────────────────────────────────────────────

function iniciarLoginGoogle(){
  if(!GAUTH.tokenClient){
    // Scripts ainda carregando — aguardar
    setSyncStatus('Aguardando Google...', false);
    setTimeout(()=>{
      if(GAUTH.tokenClient) iniciarLoginGoogle();
      else setSyncStatus('Erro ao carregar Google. Recarregue a página.', true);
    }, 2000);
    return;
  }
  GAUTH.tokenClient.requestAccessToken({ prompt: 'consent' });
}

async function gauthTokenCallback(resp){
  if(resp.error){ setSyncStatus('Erro no login: '+resp.error, true); return; }

  GAUTH.token = resp.access_token;
  gapi.client.setToken({ access_token: resp.access_token });

  // Buscar perfil do usuário
  try {
    const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: 'Bearer ' + resp.access_token }
    });
    GAUTH.user = await r.json();
  } catch(e){ GAUTH.user = { name: 'Usuário', picture: '' }; }

  // Salvar sessão
  localStorage.setItem('fitcpx_gauth', JSON.stringify({
    token: GAUTH.token,
    user: GAUTH.user,
    fileId: GAUTH.driveFileId,
  }));

  gauthAtualizarUI(true);
  setSyncStatus('Logado! Buscando dados...', false);
  await carregarDoDrive(false);
}

function deslogarGoogle(){
  if(GAUTH.token) google.accounts.oauth2.revoke(GAUTH.token);
  GAUTH.token = null;
  GAUTH.user = null;
  GAUTH.driveFileId = null;
  localStorage.removeItem('fitcpx_gauth');
  gauthAtualizarUI(false);
  setSyncStatus('', false);
}

function gauthAtualizarUI(logado){
  const btnLogin    = $('btn-google-login');
  const userInfo    = $('google-user-info');
  const cloudActs   = $('cloud-actions');

  if(logado && GAUTH.user){
    if(btnLogin)  btnLogin.style.display  = 'none';
    if(userInfo)  {
      userInfo.style.display = 'flex';
      const av = $('google-avatar');
      const nm = $('google-username');
      if(av) av.src = GAUTH.user.picture || '';
      if(nm) nm.textContent = GAUTH.user.given_name || GAUTH.user.name || 'Usuário';
    }
    if(cloudActs) cloudActs.style.display = 'flex';
  } else {
    if(btnLogin)  btnLogin.style.display  = 'flex';
    if(userInfo)  userInfo.style.display  = 'none';
    if(cloudActs) cloudActs.style.display = 'none';
  }
}

// ── Sincronização com Drive ───────────────────────────────────────────────────

function setSyncStatus(msg, erro){
  const el = $('sync-status');
  if(!el) return;
  if(!msg){ el.style.display='none'; el.textContent=''; return; }
  el.style.display = 'block';
  el.style.color = erro ? '#ff5050' : 'var(--text3)';
  el.textContent = msg;
}

async function buscarFileIdNoDrive(){
  // Procura o arquivo fitcpx-dados.json no appDataFolder do Drive
  const resp = await fetch(
    `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name='${GAUTH.DRIVE_FILE_NAME}'&fields=files(id,name,modifiedTime)`,
    { headers: { Authorization: 'Bearer ' + GAUTH.token } }
  );
  const data = await resp.json();
  if(data.files && data.files.length > 0){
    return data.files[0].id;
  }
  return null;
}

async function carregarDoDrive(silencioso){
  if(!GAUTH.token){ if(!silencioso) setSyncStatus('Faça login primeiro.', true); return; }
  try {
    if(!silencioso) setSyncStatus('☁ Buscando dados no Drive...', false);

    // Encontrar arquivo
    let fileId = GAUTH.driveFileId || await buscarFileIdNoDrive();

    if(!fileId){
      if(!silencioso) setSyncStatus('Nenhum dado no Drive ainda. Salve para criar.', false);
      setTimeout(()=>setSyncStatus('',false), 3000);
      return;
    }

    GAUTH.driveFileId = fileId;
    salvarSessaoLocal();

    // Baixar conteúdo
    const resp = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      { headers: { Authorization: 'Bearer ' + GAUTH.token } }
    );
    const dados = await resp.json();

    // Merge: carregar alunos do Drive
    if(dados.students && Array.isArray(dados.students)){
      students = dados.students;
      activeId = dados.activeId || (students[0]?.id ?? null);
      renderStudentList();
      if(activeId) loadStudentData(getActive());
      setSyncStatus('✓ Dados carregados do Drive', false);
      setTimeout(()=>setSyncStatus('',false), 3000);
    } else {
      if(!silencioso){ setSyncStatus('Arquivo encontrado mas sem dados válidos.', false); setTimeout(()=>setSyncStatus('',false),3000); }
    }
  } catch(e){
    if(!silencioso){ setSyncStatus('Erro ao carregar: '+e.message, true); setTimeout(()=>setSyncStatus('',false),5000); }
  }
}

async function salvarNoDrive(){
  if(!GAUTH.token){ setSyncStatus('Faça login para salvar no Drive.', true); return; }

  const btnDrive = $('btn-drive-save');
  if(btnDrive) btnDrive.textContent = '☁ Salvando...';
  setSyncStatus('☁ Salvando no Drive...', false);

  try {
    const payload = JSON.stringify({
      students,
      activeId,
      versao: '1.3',
      salvoEm: new Date().toISOString(),
    });

    let fileId = GAUTH.driveFileId || await buscarFileIdNoDrive();

    if(fileId){
      // Atualizar arquivo existente (PATCH)
      await fetch(
        `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
        {
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer ' + GAUTH.token,
            'Content-Type': 'application/json',
          },
          body: payload,
        }
      );
    } else {
      // Criar arquivo novo no appDataFolder
      const meta = JSON.stringify({
        name: GAUTH.DRIVE_FILE_NAME,
        parents: ['appDataFolder'],
      });
      const form = new FormData();
      form.append('metadata', new Blob([meta], {type:'application/json'}));
      form.append('file', new Blob([payload], {type:'application/json'}));
      const resp = await fetch(
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
        { method: 'POST', headers: { Authorization: 'Bearer ' + GAUTH.token }, body: form }
      );
      const data = await resp.json();
      fileId = data.id;
      GAUTH.driveFileId = fileId;
      salvarSessaoLocal();
    }

    const agora = new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
    setSyncStatus(`✓ Salvo no Drive às ${agora}`, false);
    setTimeout(()=>setSyncStatus('',false), 4000);
  } catch(e){
    setSyncStatus('Erro ao salvar: '+e.message, true);
  } finally {
    if(btnDrive) btnDrive.textContent = '☁ Drive';
  }
}

function salvarSessaoLocal(){
  localStorage.setItem('fitcpx_gauth', JSON.stringify({
    token: GAUTH.token,
    user: GAUTH.user,
    fileId: GAUTH.driveFileId,
  }));
}

// ── Auto-save: salva no Drive 3s após qualquer alteração ─────────────────────
let _driveAutoSaveTimer = null;
function driveAutoSave(){
  if(!GAUTH.token) return;
  clearTimeout(_driveAutoSaveTimer);
  _driveAutoSaveTimer = setTimeout(()=>{
    setSyncStatus('☁ Sincronizando...', false);
    salvarNoDrive();
  }, 3000);
}

// ── Exportar / Importar JSON local ───────────────────────────────────────────

function exportarJSON(){
  const dados = {
    students,
    activeId,
    versao: '1.3',
    exportadoEm: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(dados, null, 2)], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const data = new Date().toLocaleDateString('pt-BR').replace(/\//g,'-');
  a.href = url;
  a.download = `fitcpx-backup-${data}.json`;
  a.click();
  URL.revokeObjectURL(url);
  setSyncStatus('✓ Backup exportado', false);
  setTimeout(()=>setSyncStatus('',false), 3000);
}

function importarJSON(event){
  const file = event.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const dados = JSON.parse(e.target.result);
      if(!dados.students || !Array.isArray(dados.students)){
        alert('Arquivo inválido — não encontrei dados de alunos.'); return;
      }
      const qtd = dados.students.length;
      const conf = confirm(
        `Importar ${qtd} aluno(s) do backup?\n\nIsso vai SUBSTITUIR os dados atuais.`
      );
      if(!conf) return;
      students = dados.students;
      activeId = dados.activeId || (students[0]?.id ?? null);
      renderStudentList();
      if(activeId) loadStudentData(getActive());
      setSyncStatus(`✓ ${qtd} aluno(s) importado(s)`, false);
      setTimeout(()=>setSyncStatus('',false), 4000);
      // Se logado, salvar no Drive também
      if(GAUTH.token) salvarNoDrive();
    } catch(err){
      alert('Erro ao ler o arquivo: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = ''; // reset input
}

// ── Inicializar quando os scripts do Google carregarem ───────────────────────

window.addEventListener('load', ()=>{
  // Aguardar scripts externos
  let tentativas = 0;
  const aguardar = setInterval(()=>{
    tentativas++;
    const gapiOk = typeof gapi !== 'undefined';
    const gisOk  = typeof google !== 'undefined' && google.accounts;
    if(gapiOk || gisOk) gauthInit();
    if((gapiOk && gisOk) || tentativas > 20) clearInterval(aguardar);
  }, 300);
});

// Hook: chamar driveAutoSave após cada alteração de dado
const _origOnPerfilChange    = onPerfilChange;
const _origOnAnamneseChange  = onAnamneseChange;
onPerfilChange   = function(){ _origOnPerfilChange();   driveAutoSave(); };
onAnamneseChange = function(){ _origOnAnamneseChange(); driveAutoSave(); };


// ══════════════════════════════════════════════════════════════════════════
// NAVEGAÇÃO LATERAL — telas de biblioteca
// ══════════════════════════════════════════════════════════════════════════

const NAV_SCREENS = ['welcome-screen','student-view','screen-alunos','screen-locais','screen-biblioteca','screen-distribuicao','screen-periodizacao','screen-exercicios'];
const NAV_ITEMS   = ['nav-alunos','nav-locais','nav-biblioteca','nav-distribuicao','nav-periodizacao','nav-exercicios'];

function noop(){}

function navGo(tela){
  NAV_SCREENS.forEach(id=>{ const el=$(id); if(el) el.classList.add('hidden'); });
  NAV_ITEMS.forEach(id=>{ const el=$(id); if(el) el.classList.remove('active'); });

  if(tela==='alunos'){
    show('screen-alunos');
    renderScreenAlunos();
    const nav=$('nav-alunos'); if(nav) nav.classList.add('active');
  } else if(tela==='student-view'){
    // Direct navigation to student view (from alunos screen)
    const s=getActive();
    if(s){ show('student-view'); } else { navGo('alunos'); return; }
  } else {
    const screenId = 'screen-'+tela;
    show(screenId);
    const nav=$('nav-'+tela); if(nav) nav.classList.add('active');
    if(tela==='locais')       renderLocais();
    if(tela==='biblioteca')   renderBiblioteca();
    if(tela==='distribuicao') renderDistrib();
    if(tela==='periodizacao') renderPeriod();
    if(tela==='exercicios')   renderExercicios();
  }
}

function toggleNavTreino(){
  const sub=$('nav-treino-sub'), arr=$('nav-treino-arrow');
  if(!sub) return;
  const open = sub.style.display==='none'||sub.style.display==='';
  sub.style.display = open ? 'block' : 'none';
  if(arr) arr.textContent = open ? '▾' : '▸';
}


// ══════════════════════════════════════════════════════════════════════════
// BANCO DE EXERCÍCIOS — tela Exercícios
// ══════════════════════════════════════════════════════════════════════════

const RES_LABEL = {PL:'Peso Livre',MA:'Máquina',CA:'Cabo',PC:'Peso Corporal',EL:'Elástico',SU:'Suspenso'};
const NV_LABEL  = {I:'Iniciante',M:'Intermediário',A:'Avançado'};
const NV_COLOR  = {I:'badge-green',M:'badge-amber',A:'badge-red'};

function initExerciciosScreen(){
  // Popular filtro de grupos
  const sel = $('ex-f-gp'); if(!sel || sel.options.length > 1) return;
  const grupos = [...new Set(VAULT_EX.map(e=>e.g||e.gp.split('|')[0].trim()))].sort();
  grupos.forEach(g=>{ const o=document.createElement('option'); o.value=g; o.textContent=g; sel.appendChild(o); });
  // Popular filtro de tipos (se existir)
  const selTp = $('ex-f-tp');
  if(selTp && selTp.options.length <= 1){
    const tipos = [...new Set(VAULT_EX.map(e=>e.tp).filter(Boolean))].sort();
    tipos.forEach(t=>{ const o=document.createElement('option'); o.value=t; o.textContent=t; selTp.appendChild(o); });
  }
  // Popular filtro de cadeia cinética (se existir)
  const selCad = $('ex-f-cad');
  if(selCad && selCad.options.length <= 1){
    ['CCF','CCA','Complementar','Misto'].forEach(c=>{
      const o=document.createElement('option'); o.value=c; o.textContent=c; selCad.appendChild(o);
    });
  }
}


