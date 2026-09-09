// ══════════════════════════════════════════════════════════════════════════
// DASHBOARD — tela de abertura
// ══════════════════════════════════════════════════════════════════════════
// Responde uma pergunta só: quem precisa de atenção hoje.
//
// Regra de corte (fechada com o Milton em 2026-09-03): o prazo é o do PRÓPRIO
// treino — cada treino aprovado guarda `prazoSemanas` e `dataVencimento`, e o
// getStatusVencimento() (treinos-store.js) já classifica em vencido/proximo/
// agendar/ok. A dash só LÊ isso; não inventa prazo paralelo.
//
// Avaliação NÃO tem prazo próprio de propósito: a avaliação é pré-condição
// para criar treino, então treino em dia implica avaliação em dia. Um corte
// separado só criaria duas verdades para a mesma coisa. O único caso em que a
// avaliação aparece sozinha é o aluno SEM treino nenhum — aí importa saber se
// ele já pode ser prescrito ou se ainda falta avaliar. Isso é estado, não data.
//
// Zero dependência nova: usa students, getUltimoTreino, getStatusVencimento,
// selectStudent e os tokens de CSS que já existem.

// Treino aprovado antes do campo `prazoSemanas` existir não tem
// `dataVencimento`. Nesse caso assume o padrão do sistema (12 semanas) contado
// da aprovação — mesmo número que aprovarRascunho() usa como default.
const DASH_PRAZO_PADRAO_SEMANAS = 12;

function _dashParseBR(str){
  if(!str || typeof str !== 'string') return null;
  const p = str.split('/').map(Number);
  if(p.length !== 3 || !p[0] || !p[1] || !p[2]) return null;
  const d = new Date(p[2], p[1]-1, p[0]);
  return isNaN(+d) ? null : d;
}

function _dashDiasAte(data){
  if(!data) return null;
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  const alvo = new Date(data); alvo.setHours(0,0,0,0);
  return Math.round((alvo - hoje) / 86400000);
}

function _dashFmt(data){
  return data ? data.toLocaleDateString('pt-BR') : '—';
}

// Última avaliação do aluno: a lista de snapshots manda; anamnese é fallback.
function _dashUltimaAvaliacao(s){
  const avs = s.avaliacoesAntro || [];
  const bruta = (avs.length ? avs[avs.length-1].data_avaliacao : null)
             || (s.anamnese || {}).data_avaliacao
             || null;
  if(!bruta) return null;
  // avaliacoesAntro vem do <input type="date"> → ISO (yyyy-mm-dd);
  // dado antigo pode estar em BR (dd/mm/yyyy).
  const d = bruta.includes('/') ? _dashParseBR(bruta) : new Date(bruta + 'T00:00:00');
  return (d && !isNaN(+d)) ? d : null;
}

// Classifica UM aluno. Devolve sempre o mesmo formato, para a tela não precisar
// saber de onde veio a data.
function dashClassificarAluno(s){
  const nome = (s.perfil || {}).nome || 'Sem nome';
  const ultAval = _dashUltimaAvaliacao(s);
  const treino = (typeof getUltimoTreino === 'function') ? getUltimoTreino(s) : {};
  const temTreino = !!treino.aprovado;

  if(!temTreino){
    return {
      id: s.id, nome, bucket: 'sem-treino',
      temAvaliacao: !!ultAval,
      ultAval,
      detalhe: ultAval
        ? 'Avaliado em ' + _dashFmt(ultAval) + ' — pronto para prescrever'
        : 'Sem avaliação — avaliar antes de prescrever',
      ordem: ultAval ? 1 : 0,   // quem nem foi avaliado vem primeiro
    };
  }

  // Prazo do próprio treino (fonte de verdade).
  let st = (typeof getStatusVencimento === 'function') ? getStatusVencimento(treino) : null;
  let venc = st ? _dashParseBR(st.dataVencimento) : null;
  let dias = st ? st.diasRestantes : null;

  // Treino antigo, sem dataVencimento: deriva do padrão de 12 semanas.
  if(!st){
    const aprov = _dashParseBR(treino.dataAprovacao)
               || (treino.id ? new Date(treino.id) : null);
    if(aprov){
      venc = new Date(aprov);
      venc.setDate(venc.getDate() + DASH_PRAZO_PADRAO_SEMANAS * 7);
      dias = _dashDiasAte(venc);
    }
  }

  if(dias === null){
    return {
      id: s.id, nome, bucket: 'sem-data', ultAval, treino,
      detalhe: 'Treino aprovado sem data — conferir cadastro',
      ordem: 0,
    };
  }

  const bucket = dias < 0 ? 'vencido' : dias <= 7 ? 'proximo' : dias <= 14 ? 'agendar' : 'ok';
  const detalhe = dias < 0
    ? 'Venceu em ' + _dashFmt(venc) + ' — ' + Math.abs(dias) + ' dia' + (Math.abs(dias)===1?'':'s') + ' atrás'
    : 'Vence em ' + _dashFmt(venc) + ' — ' + dias + ' dia' + (dias===1?'':'s');

  return { id: s.id, nome, bucket, dias, venc, ultAval, treino, detalhe, ordem: dias };
}

function dashLevantarPendencias(){
  const lista = (typeof students !== 'undefined' && Array.isArray(students)) ? students : [];
  const grupos = { vencido:[], proximo:[], agendar:[], 'sem-treino':[], 'sem-data':[], ok:[] };
  lista.forEach(s => {
    const c = dashClassificarAluno(s);
    (grupos[c.bucket] || grupos.ok).push(c);
  });
  Object.keys(grupos).forEach(k => grupos[k].sort((a,b) => (a.ordem||0) - (b.ordem||0)));
  return grupos;
}

// ── Tela ──────────────────────────────────────────────────────────────────

const _DASH_SECOES = [
  { chave:'vencido',     titulo:'Treino vencido',        cor:'var(--red)',    dim:'var(--red-dim)',    icone:'🔴',
    vazio:'Nenhum treino vencido.' },
  { chave:'proximo',     titulo:'Vence esta semana',     cor:'var(--amber)',  dim:'var(--amber-dim)',  icone:'🟠',
    vazio:'Nada vencendo nos próximos 7 dias.' },
  { chave:'agendar',     titulo:'Agendar reavaliação',   cor:'var(--amber)',  dim:'var(--amber-dim)',  icone:'🟡',
    vazio:'Nada para agendar nas próximas 2 semanas.' },
  { chave:'sem-treino',  titulo:'Sem treino',            cor:'var(--blue)',   dim:'var(--blue-dim)',   icone:'⚪',
    vazio:'Todo aluno tem treino.' },
  { chave:'sem-data',    titulo:'Treino sem data',       cor:'var(--text3)',  dim:'var(--bg4)',        icone:'⚠️',
    vazio:'' },
];

function _dashCardContador(sec, n){
  const ativo = n > 0;
  return '<div onclick="dashIrPara(\'' + sec.chave + '\')" ' +
    'style="flex:1;min-width:120px;cursor:' + (ativo?'pointer':'default') + ';' +
    'background:' + (ativo ? sec.dim : 'var(--bg3)') + ';' +
    'border:1px solid ' + (ativo ? sec.cor : 'var(--border)') + ';' +
    'border-radius:var(--radius2);padding:12px 14px;' + (ativo?'':'opacity:.55') + '">' +
      '<div style="font-family:var(--mono);font-size:26px;font-weight:700;line-height:1;' +
        'color:' + (ativo ? sec.cor : 'var(--text3)') + '">' + n + '</div>' +
      '<div style="font-size:11px;color:var(--text2);margin-top:5px">' + sec.titulo + '</div>' +
    '</div>';
}

function _dashLinhaAluno(c, sec){
  const extra = (c.bucket === 'sem-treino' && !c.temAvaliacao)
    ? '<span class="badge badge-amber" style="font-size:9px;margin-left:6px">avaliar</span>' : '';
  return '<div onclick="dashAbrirAluno(' + c.id + ')" class="dash-linha" ' +
    'style="display:flex;align-items:center;gap:10px;padding:9px 12px;cursor:pointer;' +
    'border-bottom:1px solid var(--border)">' +
      '<span style="width:3px;height:26px;border-radius:2px;background:' + sec.cor + ';flex-shrink:0"></span>' +
      '<span style="font-size:13px;font-weight:600;color:var(--text);min-width:150px">' +
        escHTML(c.nome) + extra + '</span>' +
      '<span style="font-size:12px;color:var(--text2);flex:1">' + escHTML(c.detalhe) + '</span>' +
      '<span style="font-size:11px;color:var(--text3);flex-shrink:0">abrir →</span>' +
    '</div>';
}

function renderDashboard(){
  const el = document.getElementById('dash-conteudo');
  if(!el) return;

  const g = dashLevantarPendencias();
  const total = (typeof students !== 'undefined' ? students.length : 0);
  const pendentes = g.vencido.length + g.proximo.length + g.agendar.length
                  + g['sem-treino'].length + g['sem-data'].length;

  let html = '';

  // Contadores
  html += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px">';
  _DASH_SECOES.forEach(sec => {
    if(sec.chave === 'sem-data' && !g['sem-data'].length) return; // só aparece se houver
    html += _dashCardContador(sec, g[sec.chave].length);
  });
  html += '</div>';

  // Tudo em dia
  if(pendentes === 0){
    html += '<div style="text-align:center;padding:46px 20px;background:var(--accent-dim);' +
      'border:1px solid var(--accent);border-radius:var(--radius2)">' +
      '<div style="font-size:34px;line-height:1">✓</div>' +
      '<div style="font-size:15px;font-weight:600;color:var(--accent2);margin-top:8px">Tudo em dia</div>' +
      '<div style="font-size:12px;color:var(--text2);margin-top:4px">' +
        total + ' aluno' + (total===1?'':'s') + ', nenhuma pendência.</div></div>';
    el.innerHTML = html;
    return;
  }

  // Seções
  _DASH_SECOES.forEach(sec => {
    const itens = g[sec.chave];
    if(!itens.length) return;
    html += '<div id="dash-sec-' + sec.chave + '" style="margin-bottom:16px">' +
      '<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px">' +
        '<span style="font-size:13px">' + sec.icone + '</span>' +
        '<span style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;' +
          'letter-spacing:.04em">' + sec.titulo + '</span>' +
        '<span style="font-family:var(--mono);font-size:11px;color:var(--text3)">' + itens.length + '</span>' +
      '</div>' +
      '<div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius2);' +
        'overflow:hidden">' +
        itens.map(c => _dashLinhaAluno(c, sec)).join('') +
      '</div></div>';
  });

  html += '<div style="font-size:11px;color:var(--text3);margin-top:14px;line-height:1.6">' +
    'O prazo é o de cada treino (<span style="font-family:var(--mono)">prazoSemanas</span>, ' +
    'padrão ' + DASH_PRAZO_PADRAO_SEMANAS + ' semanas), definido na aprovação. ' +
    'Avaliação não tem corte próprio: ela é pré-condição do treino, então treino em dia já a cobre.' +
    '</div>';

  el.innerHTML = html;
}

function dashAbrirAluno(id){
  if(typeof selectStudent === 'function') selectStudent(id);
}

function dashIrPara(chave){
  const alvo = document.getElementById('dash-sec-' + chave);
  if(alvo) alvo.scrollIntoView({ behavior:'smooth', block:'start' });
}
