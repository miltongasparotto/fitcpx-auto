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
  await supa.auth.signOut();
  _supaUser = null;
  document.getElementById('app-root').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('supa-user-info').style.display = 'none';
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-senha').value = '';
}

async function onLoginSucesso(user){
  _supaUser = user;
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app-root').style.display = 'grid';
  document.getElementById('supa-user-info').style.display = 'flex';
  document.getElementById('supa-user-email').textContent = user.email;
  await supaCarregarDados();
}

// ── Carregar dados do usuário logado ─────────────────────────────────────────
async function supaCarregarDados(){
  if(!_supaUser) return;
  const { data, error } = await supa.from('app_data').select('key,data').eq('user_id', _supaUser.id);
  if(error){ console.error('Erro ao carregar dados do Supabase:', error); return; }
  const rowStudents = data?.find(r=>r.key==='students');
  const rowLibs      = data?.find(r=>r.key==='libs');

  // BUGFIX 2026-08-27: se este navegador já tem alunos carregados (vieram do
  // localStorage, via init-seed.js, no início da página), NÃO sobrescreve com
  // o snapshot da nuvem. O envio pra nuvem é debounced (supaAutoSave, 1.5s) —
  // um F5/Ctrl+Shift+R logo após salvar podia recarregar a página, puxar a
  // versão ANTIGA que ainda estava na nuvem, e apagar silenciosamente a
  // edição recém-feita. Só usa o snapshot da nuvem quando não há nada local
  // ainda (primeiro acesso neste navegador/dispositivo); havendo dados locais,
  // eles são a verdade e a nuvem converge pra eles.
  if(students.length){
    LIBS = (typeof LIBS!=='undefined' && LIBS && Object.keys(LIBS).length) ? LIBS : ((rowLibs && rowLibs.data && Object.keys(rowLibs.data).length) ? rowLibs.data : gerarLibsDefault());
    activeId = null;
    renderObjGrid();
    renderStudentList();
    navGo('alunos');
    supaSalvarAgora(); // converge a nuvem pro que já está salvo neste dispositivo
    return;
  }

  students = (rowStudents && Array.isArray(rowStudents.data)) ? rowStudents.data : [];
  LIBS = (rowLibs && rowLibs.data && Object.keys(rowLibs.data).length) ? rowLibs.data : gerarLibsDefault();

  activeId = null;
  renderObjGrid();
  renderStudentList();
  navGo('alunos');

  // Conta nova: grava o estado inicial pra já existir registro no banco
  if(!rowStudents || !rowLibs) supaSalvarAgora();
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
    if(error) throw error;
    setSyncStatus('☁ Salvo', false);
  }catch(e){
    console.error('Erro ao salvar no Supabase:', e);
    setSyncStatus('⚠ Erro ao salvar', true);
  }
}

document.getElementById('auth-senha')?.addEventListener('keydown', e=>{ if(e.key==='Enter') authEntrar(); });
document.getElementById('auth-email')?.addEventListener('keydown', e=>{ if(e.key==='Enter') authEntrar(); });

// ── Sessão já existente? entra direto sem pedir login de novo ────────────────
(async function supaInitSessao(){
  const { data } = await supa.auth.getSession();
  if(data?.session?.user) await onLoginSucesso(data.session.user);
})();
