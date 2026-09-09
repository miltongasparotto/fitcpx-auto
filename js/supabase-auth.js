// ══════════════════════════════════════════════════════════════════════════
// SUPABASE — BANCO ONLINE + LOGIN (email/senha)
// ══════════════════════════════════════════════════════════════════════════
const SUPA_URL = 'https://subqjcnztqzprtpqqrlt.supabase.co';
const SUPA_KEY = 'sb_publishable_TpGanQ5F3BP082ptzYpYyQ_XyLU1l65';
const supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);

let _supaUser = null;
let _supaSaveTimer = null;

function authMostrarErro(msg){
  const el = document.getElementById('auth-erro');
  el.textContent = msg;
  el.style.display = 'block';
}
function authLimparErro(){
  document.getElementById('auth-erro').style.display = 'none';
}
function traduzErroAuth(msg){
  if(/Invalid login credentials/i.test(msg)) return 'E-mail ou senha incorretos.';
  if(/already registered/i.test(msg))        return 'Esse e-mail já tem conta. Clica em "Entrar".';
  if(/Password should be/i.test(msg))        return 'Senha muito curta (mínimo 6 caracteres).';
  return msg;
}

async function authEntrar(){
  authLimparErro();
  const email = document.getElementById('auth-email').value.trim();
  const senha = document.getElementById('auth-senha').value;
  if(!email || !senha){ authMostrarErro('Preenche e-mail e senha.'); return; }
  const { data, error } = await supa.auth.signInWithPassword({ email, password: senha });
  if(error){ authMostrarErro(traduzErroAuth(error.message)); return; }
  await onLoginSucesso(data.user);
}

async function authCadastrar(){
  authLimparErro();
  const email = document.getElementById('auth-email').value.trim();
  const senha = document.getElementById('auth-senha').value;
  if(!email || !senha){ authMostrarErro('Preenche e-mail e senha.'); return; }
  if(senha.length < 6){ authMostrarErro('Senha precisa de pelo menos 6 caracteres.'); return; }
  const { data, error } = await supa.auth.signUp({ email, password: senha });
  if(error){ authMostrarErro(traduzErroAuth(error.message)); return; }
  if(data.session){
    await onLoginSucesso(data.user);
  } else {
    const r = await supa.auth.signInWithPassword({ email, password: senha });
    if(r.data?.user) await onLoginSucesso(r.data.user);
    else authMostrarErro('Conta criada. Tenta "Entrar" agora.');
  }
}

async function authSair(){
  // Salva o que estiver pendente ANTES de descarregar — o timer do autosave
  // pode ainda não ter disparado quando o personal clica em sair.
  clearTimeout(_supaSaveTimer);
  if(_supaUser){ try{ await supaSalvarAgora(); }catch(e){} }

  await supa.auth.signOut();

  // Descarrega o estado da conta que está saindo. Sem isto, students/LIBS
  // continuavam em memória e no localStorage, e a próxima conta a logar neste
  // navegador enxergava — e subia para a nuvem — os alunos da conta anterior.
  // Era esta a origem dos alunos duplicados entre as duas contas.
  limparLocalDoUsuario();
  students = [];
  LIBS     = gerarLibsDefault();
  if(typeof _migrarLocais==='function') _migrarLocais(LIBS);
  ARQUIVO  = [];
  LOG      = [];
  activeId = null;
  setLsUser(null);
  _supaUser = null;

  document.getElementById('app-root').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('supa-user-info').style.display = 'none';
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-senha').value = '';
}

async function onLoginSucesso(user){
  _supaUser = user;
  // Todas as chaves de localStorage passam a ser sufixadas com este id.
  setLsUser(user.id);
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app-root').style.display = 'grid';
  document.getElementById('supa-user-info').style.display = 'flex';
  document.getElementById('supa-user-email').textContent = user.email;
  await supaCarregarDados();
}

// ── Carregar dados do usuário logado ─────────────────────────────────────────
async function supaCarregarDados(){
  if(!_supaUser) return;

  // Cache local DESTA conta (chaves sufixadas com o user_id). Carregado antes
  // da nuvem para o app abrir com conteúdo mesmo se a rede falhar. É seguro:
  // são as chaves do próprio usuário, não um balde compartilhado.
  students = lsGet('acm-students', []) || [];
  const libsLocal = lsGet('fitcpx_libs', null);
  if(libsLocal && Object.keys(libsLocal).length) LIBS = libsLocal;
  carregarArquivoLocal();

  const { data, error } = await supa.from('app_data').select('key,data').eq('user_id', _supaUser.id);
  if(error){ console.error('Erro ao carregar dados do Supabase:', error); return; }
  const rowStudents = data?.find(r=>r.key==='students');
  const rowLibs      = data?.find(r=>r.key==='libs');
  const rowArquivo   = data?.find(r=>r.key==='arquivo');
  const rowLog       = data?.find(r=>r.key==='log');

  // Supabase é a fonte de verdade quando tem dados.
  if(rowStudents && Array.isArray(rowStudents.data)){
    students = rowStudents.data;
  }
  // Nuvem vazia → lista vazia, e NADA é enviado. Antes, o app mantinha os
  // `students` que estivessem carregados (vindos do localStorage global, ou
  // seja, da outra conta) e os subia para esta conta. Quem tiver dados locais
  // antigos importa por Arquivadas → "Importar dados antigos", escolhendo a
  // conta de destino.

  if(rowArquivo && Array.isArray(rowArquivo.data)) ARQUIVO = rowArquivo.data;
  if(rowLog && Array.isArray(rowLog.data))         LOG     = rowLog.data;

  // Contador de ids parte do maior id já existente — nunca reaproveita número.
  semearIds(students, ARQUIVO.map(e=>({id:e.arqId})), LOG);

  LIBS = (rowLibs && rowLibs.data && Object.keys(rowLibs.data).length)
    ? rowLibs.data
    : ((typeof LIBS!=='undefined' && LIBS && Object.keys(LIBS).length) ? LIBS : gerarLibsDefault());

  // Migração pós-Supabase: garante que o local interno (id=-1) existe.
  // Não remove locais do usuário.
  if(typeof _migrarLocais==='function') _migrarLocais(LIBS);

  // Normalização de identificadores (chave ASCII) — TEM que rodar aqui também.
  // loadLibs() só cobre o caminho do localStorage; logado, o LIBS vem do
  // Supabase e é atribuído direto na linha acima, sem passar por loadLibs().
  // Sem esta chamada o dado da nuvem nunca migrava: os equipamentos ficavam
  // eternamente em "Abdominal Máquina" e os grupos da distribuição em
  // "Reto Abdominal", que converterDivisaoLibParaTemplate() (que compara por
  // chave) não reconhece — o grupo sumia da divisão em silêncio. (2026-09-03)
  let _libsChavesMigrado = false;
  if(typeof _migrarLibsChaves==='function') _libsChavesMigrado = _migrarLibsChaves(LIBS);

  activeId = null;
  lsSet('acm-students', students);
  renderObjGrid();
  renderStudentList();
  if(typeof renderArquivadas==='function') renderArquivadas();
  // Abre no Painel: a primeira coisa a ver ao entrar e quem precisa de atencao
  // hoje, nao a lista inteira de alunos. (2026-09-03)
  navGo('dashboard');
  if(typeof detectarDraftsNaoSalvos==='function') setTimeout(detectarDraftsNaoSalvos, 400);

  // LIBS faltando ou migração alterou os locais: grava a estrutura no banco.
  // Não chama mais por causa de `students` vazio — conta sem alunos é um
  // estado legítimo, e salvar aqui era o que empurrava a lista da outra conta.
  if(!rowLibs?.data) supaSalvarAgora();
  else if(typeof _libsMigrado!=='undefined' && _libsMigrado) supaSalvarAgora();
  else if(_libsChavesMigrado) supaSalvarAgora();   // converteu para chave: persiste já
}

// ── Salvar (debounced) ─────────────────────────────────────────────────────
function supaAutoSave(){
  if(!_supaUser) return;
  clearTimeout(_supaSaveTimer);
  setSyncStatus('☁ Sincronizando...', false);
  _supaSaveTimer = setTimeout(supaSalvarAgora, 1500);
}

async function supaSalvarAgora(){
  if(!_supaUser) return;
  try{
    const agora = new Date().toISOString();
    const { error } = await supa.from('app_data').upsert([
      { user_id: _supaUser.id, key: 'students', data: students, updated_at: agora },
      { user_id: _supaUser.id, key: 'libs',     data: LIBS,     updated_at: agora },
    ]);
    lsSet('acm-students', students);
    if(error) throw error;
    setSyncStatus('☁ Salvo', false);
  }catch(e){
    console.error('Erro ao salvar no Supabase:', e);
    setSyncStatus('⚠ Erro ao salvar', true);
  }
}

// ── Salvar Arquivo + Log ───────────────────────────────────────────────────
// Chamada própria, fora do autosave de students/libs: o arquivo só muda quando
// alguém exclui ou restaura algo. Mandá-lo junto do autosave de 1,5s faria o
// navegador reenviar o histórico inteiro a cada campo preenchido no formulário.
let _supaArqTimer = null;
function supaSalvarArquivo(){
  if(!_supaUser) return;
  clearTimeout(_supaArqTimer);
  _supaArqTimer = setTimeout(async ()=>{
    try{
      const agora = new Date().toISOString();
      const { error } = await supa.from('app_data').upsert([
        { user_id: _supaUser.id, key: 'arquivo', data: ARQUIVO, updated_at: agora },
        { user_id: _supaUser.id, key: 'log',     data: LOG,     updated_at: agora },
      ]);
      if(error) throw error;
    }catch(e){
      console.error('Erro ao salvar o arquivo no Supabase:', e);
      setSyncStatus('⚠ Erro ao salvar arquivo', true);
    }
  }, 800);
}

document.getElementById('auth-senha')?.addEventListener('keydown', e=>{ if(e.key==='Enter') authEntrar(); });
document.getElementById('auth-email')?.addEventListener('keydown', e=>{ if(e.key==='Enter') authEntrar(); });

// ── Sessão já existente? entra direto sem pedir login de novo ────────────────
(async function supaInitSessao(){
  const { data } = await supa.auth.getSession();
  if(data?.session?.user) await onLoginSucesso(data.session.user);
})();
