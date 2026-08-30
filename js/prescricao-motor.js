// ══════════════════════════════════════════════════════
// MOTOR DE PRESCRIÇÃO FitCPX Auto — Constantes e utilitários
// ══════════════════════════════════════════════════════

// VOL_REF removida (2026-06) — era tabela órfã, redundante com LIM_SESSAO_REF
// (linha ~6057), que já é a fonte única de verdade para Volume Total da Sessão
// (vault REF-Volume-Derivado-MAV §9). O único uso real era um fallback dentro
// de gerarFichaMotorV2 — substituído para usar LIM_SESSAO_REF diretamente.

// Séries por Exercício — faixas por Família × Nível (vault REF-Volume-Derivado-MAV §6).
// Reab usa a mesma faixa de Resist (vault §6: "Reabilitação (→ Resistência)").
const SERIES_POR_EX = {
  Hip:      {Inic:[1,3], Inte:[3,4], Avan:[3,6]},
  Forca:    {Inic:[1,3], Inte:[3,4], Avan:[3,6]},
  Resist:   {Inic:[1,2], Inte:[2,3], Avan:[2,4]},
  Reab:     {Inic:[1,2], Inte:[2,3], Avan:[2,4]},
  Gestacao: {Inic:[1,2], Inte:[2,3], Avan:[2,4]},
};

// ── Progressão de Séries por Exercício (vault §10.2) ──────────────────────────
// Passo 1: moda das séries dos exercícios de um treino; empate → menor valor (conservador).
function calcularSerieRegistrada(exerciciosDoTreino){
  if(!exerciciosDoTreino || !exerciciosDoTreino.length) return null;
  const contagem = {};
  exerciciosDoTreino.forEach(ex => {
    const serie = parseInt(ex.series);
    if(!serie) return;
    contagem[serie] = (contagem[serie] || 0) + 1;
  });
  let modaValor = null, modaFreq = 0;
  Object.keys(contagem).forEach(serie => {
    const freq = contagem[serie];
    const serieNum = Number(serie);
    if(freq > modaFreq || (freq === modaFreq && (modaValor === null || serieNum < modaValor))){
      modaFreq = freq;
      modaValor = serieNum;
    }
  });
  return modaValor;
}

// Passo 2: sugestão do próximo treino — moda+1, travado entre piso e teto da faixa atual.
// Sem histórico nesse objetivo → piso da faixa.
function getSeriesPorEx(objetivo, nivel, ultimaSerieRegistrada){
  const familia = FAMILIA_OBJETIVO[objetivo] || 'Resist';
  const faixa = (SERIES_POR_EX[familia] || SERIES_POR_EX['Resist'])[nivel] || [1,3];
  if(ultimaSerieRegistrada == null) return faixa[0];
  const proximo = ultimaSerieRegistrada + 1;
  return Math.max(faixa[0], Math.min(proximo, faixa[1]));
}

// Busca a "última série registrada" para um objetivo — lê direto do campo dedicado
// s.historicoSeries (vault §10.2: histórico sobrevive a qualquer número de trocas de
// objetivo no meio, não só 1-2 ciclos). Gravação/reset ficam em registrarHistoricoSeries.
function buscarUltimaSerieRegistrada(s, objetivoAtual){
  if(!s || !s.historicoSeries) return null;
  const v = s.historicoSeries[objetivoAtual];
  return (v == null) ? null : v;
}

// Grava a moda do ciclo recém-aprovado no histórico do próprio objetivo (vault §10.2,
// independência por objetivo — sobrevive indefinidamente a trocas no meio).
// Exceção Reab (vault §10.2): ENTRAR em Reab (veio de outro objetivo, não estava já em
// Reab) zera tanto o histórico do próprio Reab quanto o do objetivo principal que estava
// em andamento antes dela — ambos retomam do piso depois.
function registrarHistoricoSeries(s, objetivoAprovado, exerciciosDoTreino, objetivoAnterior){
  if(!s) return;
  if(!s.historicoSeries) s.historicoSeries = {};

  if(objetivoAprovado === 'Reab' && objetivoAnterior && objetivoAnterior !== 'Reab'){
    delete s.historicoSeries['Reab'];
    delete s.historicoSeries[objetivoAnterior];
  }

  const moda = calcularSerieRegistrada(exerciciosDoTreino);
  if(moda != null) s.historicoSeries[objetivoAprovado] = moda;
}

const REPS_REF = {
  Hip:'6–12',     Forca:'1–5',   Emagr:'6–12',  Comp:'6–12',
  Resist:'15+',   CardioR:'15+', Func:'15+',    Saude:'15+',
  Esport:'1–5',   Reab:'10–20',  Envelhec:'15+', Gestacao:'12–15',
};

const INT_REF = {
  Hip:'60–85% 1RM', Forca:'80–95% 1RM', Emagr:'50–75% 1RM',
  Comp:'60–80% 1RM', Resist:'40–60% 1RM', CardioR:'60–90% FCmáx',
  Func:'40–65% 1RM', Saude:'50–70% 1RM', Esport:'70–90% 1RM',
  Reab:'20–50% 1RM', Envelhec:'40–65% 1RM', Gestacao:'40–60% 1RM',
};

const INT_DESCANSO = {
  Hip:'60–120s', Forca:'180–300s', Emagr:'30–60s', Comp:'45–90s',
  Resist:'30–45s', CardioR:'30–45s', Func:'60–90s', Saude:'60–90s',
  Esport:'120–240s', Reab:'90–120s', Envelhec:'90–120s', Gestacao:'90–120s',
};


const DIVISOES = {
  2: {
    default:[
      [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'},{g:'RetoAbdominal'}],
      [{g:'Latissimo'},{g:'Biceps'},{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'}],
    ],
    label:['Treino A — Empurrar + Core','Treino B — Puxar + Pernas'],
  },
  3: {
    default:[
      [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'}],
      [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
      [{g:'Latissimo'},{g:'Biceps'},{g:'RetoAbdominal'},{g:'Obliquo'}],
    ],
    label:['Treino A — Peito/Tríceps/Ombro','Treino B — Pernas','Treino C — Costas/Bíceps/Core'],
  },
  4: {
    default:[
      [{g:'Peitoral'},{g:'Triceps'}],
      [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'}],
      [{g:'Quadriceps'},{g:'Gluteos'},{g:'Panturrilhas'}],
      [{g:'Deltoide'},{g:'Isquiossurais'},{g:'RetoAbdominal'},{g:'Obliquo'}],
    ],
    label:['Treino A — Peito/Tríceps','Treino B — Costas/Bíceps','Treino C — Quadríceps/Glúteos','Treino D — Ombros/Posteriores/Core'],
  },
  5: {
    default:[
      [{g:'Peitoral'}],
      [{g:'Latissimo'},{g:'Biceps'}],
      [{g:'Quadriceps'},{g:'Gluteos'},{g:'Panturrilhas'}],
      [{g:'Deltoide'},{g:'Trapezio'}],
      [{g:'Isquiossurais'},{g:'Triceps'},{g:'RetoAbdominal'},{g:'Obliquo'}],
    ],
    label:['Treino A — Peito','Treino B — Costas/Bíceps','Treino C — Pernas','Treino D — Ombros','Treino E — Posteriores/Tríceps/Core'],
  },
  6: {
    default:[
      [{g:'Peitoral'},{g:'Triceps'}],
      [{g:'Latissimo'},{g:'Biceps'}],
      [{g:'Quadriceps'},{g:'Gluteos'}],
      [{g:'Deltoide'},{g:'Trapezio'}],
      [{g:'Isquiossurais'},{g:'Panturrilhas'}],
      [{g:'RetoAbdominal'},{g:'Obliquo'}],
    ],
    label:['Treino A — Peito/Tríceps','Treino B — Costas/Bíceps','Treino C — Quadríceps/Glúteos','Treino D — Ombros','Treino E — Posteriores/Panturrilhas','Treino F — Core'],
  },
};

const PORCOES = {
  Peitoral:    ['Superior','Médio','Inferior',null],
  Triceps:     ['Longa Porção','Lateral',null],
  // Bíceps e Reto Abdominal: pesquisa (2026-08) não sustenta ativação
  // independente por feixe o suficiente pra justificar ranking de porção —
  // não diferenciar, mas o motor tenta variar o exercício via critério de
  // padrão de movimento/impacto articular (ver sortearExercicioC4).
  Biceps:      [null],
  Deltoide:    ['Anterior','Medial','Posterior'],
  // Glúteo Mínimo adicionado (pesquisa 2026-08): abdução + rotação interna de
  // quadril ativa bem o Mínimo e também recruta o Médio.
  Gluteos:     ['Máximo','Médio','Mínimo',null],
  Quadriceps:  [null],
  Isquiossurais:[null],
  Latissimo:   [null],
  RetoAbdominal:[null],
  Obliquo:     [null],
  Panturrilhas:[null],
  Trapezio:    [null],
  Romboides:   [null],
  Adutores:    [null],
  QuadradoLombar:[null],
  Antebracos:  [null],
};

// IDs de "Tipo de Resistência" — direto da aba "Corelação" da planilha oficial
// (Cabo=1, Elástico=2, Máquina=3, Peso Corporal=4, Peso Livre=5, Suspenso=6).
// Trocado de sigla (TRPL/TRM/...) pra ID na reimportação de 2026-08-28.
const RESIST_ID = { CABO:1, ELASTICO:2, MAQUINA:3, PESO_CORPORAL:4, PESO_LIVRE:5, SUSPENSO:6 };
const LOCAL_RESIST = {
  'academia': [RESIST_ID.PESO_LIVRE, RESIST_ID.MAQUINA, RESIST_ID.CABO, RESIST_ID.ELASTICO, RESIST_ID.PESO_CORPORAL, RESIST_ID.SUSPENSO],
  'casa':     [RESIST_ID.PESO_CORPORAL, RESIST_ID.ELASTICO, RESIST_ID.PESO_LIVRE],
  'ar livre': [RESIST_ID.PESO_CORPORAL],
  'híbrido':  [RESIST_ID.PESO_LIVRE, RESIST_ID.MAQUINA, RESIST_ID.CABO, RESIST_ID.ELASTICO, RESIST_ID.PESO_CORPORAL],
};

// ── Perfil de equipamento personalizado por local ────────────────────────────
// Mapeamento nome de equipamento → IDs de tipo de resistência (RESIST_ID).
// Equipamentos que não determinam tipo de resistência (cardio, banco) = null.
const EQUIP_PARA_RESIST = {
  'Halteres':              RESIST_ID.PESO_LIVRE,
  'Barra olimpica':        RESIST_ID.PESO_LIVRE,
  'Barra olímpica':        RESIST_ID.PESO_LIVRE,
  'Anilhas':               RESIST_ID.PESO_LIVRE,
  'Kettlebells':           RESIST_ID.PESO_LIVRE,
  'Máquinas de cabo':      RESIST_ID.CABO,
  'Pulley':                RESIST_ID.CABO,
  'Leg press':             RESIST_ID.MAQUINA,
  'Smith machine':         RESIST_ID.MAQUINA,
  'Elásticos/Faixas':      RESIST_ID.ELASTICO,
  'TRX/Suspensão':         RESIST_ID.SUSPENSO,
  'Peso corporal':         RESIST_ID.PESO_CORPORAL,
  'Pull-up bar':           RESIST_ID.PESO_CORPORAL,
  'Paralelas':             RESIST_ID.PESO_CORPORAL,
  'Step/Plataforma':       RESIST_ID.PESO_CORPORAL,
  'Colchonete':            RESIST_ID.PESO_CORPORAL,
};

// Deriva quais tipos de resistência estão disponíveis a partir da lista de
// equipamentos de um local (LIBS.locais[i].equipamentos). Inclui sempre
// PESO_CORPORAL como fallback (o corpo do aluno sempre está disponível).
function _resistFromEquipamentos(equipamentos){
  const ids = new Set([RESIST_ID.PESO_CORPORAL]);
  (equipamentos || []).forEach(eq => {
    const id = EQUIP_PARA_RESIST[eq];
    if(id) ids.add(id);
  });
  return [...ids];
}

// Lookup central de tipos de resistência permitidos para um valor de local.
// Aceita os valores genéricos ("academia", "casa", etc.) E valores de LIBS
// no formato "libs:ID" (local personalizado do personal).
function getResistPermitida(local){
  if(local && local.startsWith('libs:')){
    const libsId = parseInt(local.split(':')[1]);
    const libsLocal = (typeof LIBS !== 'undefined') ? (LIBS?.locais||[]).find(l => l.id === libsId) : null;
    if(libsLocal) return _resistFromEquipamentos(libsLocal.equipamentos);
  }
  return getResistPermitida(local);
}

// Popula o select #pr-local com opções genéricas + locais personalizados do
// LIBS. Chamado ao abrir o Step 1 da prescrição (preencherStep1DaAnamnese).
function populateLocalSelect(){
  const sel = document.getElementById('pr-local');
  if(!sel) return;
  const currentVal = sel.value;
  // Mantém as 4 opções hardcoded + acrescenta as do LIBS se existirem
  const libsLocais = (typeof LIBS !== 'undefined') ? (LIBS?.locais||[]) : [];
  // Remove opções LIBS antigas (não remove as genéricas)
  [...sel.options].filter(o => o.dataset.libsLocal).forEach(o => o.remove());
  // Remove separador antigo
  const sepAntigo = sel.querySelector('option[data-libs-sep]');
  if(sepAntigo) sepAntigo.remove();
  if(libsLocais.length){
    const sep = document.createElement('option');
    sep.disabled = true;
    sep.textContent = '── Locais personalizados ──';
    sep.dataset.libsSep = '1';
    sel.appendChild(sep);
    libsLocais.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = `libs:${loc.id}`;
      opt.textContent = loc.nome || `Local ${loc.id}`;
      opt.title = (loc.equipamentos||[]).join(', ');
      opt.dataset.libsLocal = '1';
      sel.appendChild(opt);
    });
  }
  // Restaura valor anterior se ainda válido
  if(currentVal && [...sel.options].some(o => o.value === currentVal)){
    sel.value = currentVal;
  }
}

function motorRand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

// ── Modal de Vídeo Embutido ──────────────────────────────────────────────────
// Extrai o ID do YouTube de qualquer formato de URL (youtu.be/ID ou ?v=ID)
// e abre um modal inline sem redirecionar pro YouTube.
function _ytId(url){
  if(!url) return null;
  const m = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/);
  return m ? m[1] : null;
}
function abrirVideoModal(url, titulo){
  const id = _ytId(url);
  if(!id){ window.open(url,'_blank'); return; } // fallback: abre em nova aba
  const modal = document.getElementById('modal-video');
  const iframe = document.getElementById('modal-video-iframe');
  const tituloEl = document.getElementById('modal-video-titulo');
  if(!modal || !iframe) return;
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  if(tituloEl) tituloEl.textContent = titulo || '';
  modal.classList.remove('hidden');
  // Fecha no ESC
  modal._escHandler = (e) => { if(e.key==='Escape') fecharVideoModal(); };
  document.addEventListener('keydown', modal._escHandler);
}
function fecharVideoModal(){
  const modal = document.getElementById('modal-video');
  const iframe = document.getElementById('modal-video-iframe');
  if(!modal) return;
  modal.classList.add('hidden');
  if(iframe) iframe.src = ''; // para o áudio
  if(modal._escHandler){ document.removeEventListener('keydown', modal._escHandler); modal._escHandler = null; }
}

// ── Tempo de execução — Momento 1 (tela de modelos) ─────────────────────────
// Fechado e validado com o Milton em 2026-08-29 (planilha linha a linha,
// bateu 100%). Usa REPS_REF[objetivo] e INT_DESCANSO[objetivo] diretamente
// (keyed por código de objetivo). A variação mín/máx da sessão vem da
// lateralidade dos exercícios, não de faixas de valência.

// Troca (30s) — acontece entre exercícios de um mesmo biset/triset E entre os
// dois lados de um exercício Unilateral. Mesmo valor nos dois casos (regra
// fechada em 2026-08-29). Não aparece pro personal/aluno, só entra no cálculo.
const TEMPO_TROCA_SEG = 30;

// Tempo (em segundos) de execução de UMA repetição — min/médio/máx — olhando
// todos os exercícios do banco cujo grupo PRINCIPAL bate com `grupoNome`.
// Não considera lateralidade/dobra aqui (isso entra no momento 2, quando o
// exercício real já foi escolhido — ver _blocosExecucao/calcularTempoEstimadoTreino).
function tempoRepPorGrupo(grupoNome){
  const exs = DB_EXERCICIOS.filter(e => e.g.some(x => textoIgual(x.nome, grupoNome)));
  const tempos = exs.map(e => e.tempo).filter(t => t > 0);
  if(!tempos.length) return null;
  return {
    min: Math.min(...tempos),
    max: Math.max(...tempos),
    medio: +(tempos.reduce((a,b)=>a+b,0) / tempos.length).toFixed(2),
    nExercicios: exs.length,
  };
}

// Estimativa de duração de UMA sessão pra um grupo, dado o objetivo e o
// número de séries planejadas (vem do modelo de volume já existente). Usa
// REPS_REF[objetivo] e INT_DESCANSO[objetivo] direto + o tempo
// MÉDIO de execução do grupo (tempoRepPorGrupo) — ainda não sabemos qual
// exercício específico vai ser escolhido nesta tela, só o grupo. Retorna
// segundos, considerando 2 cenários (regra fechada com o Milton em
// 2026-08-29): mínimo = tudo Bilateral (sem dobra, sem troca de lado);
// máximo = tudo Unilateral (dobra a execução + 1 troca de 30s por
// exercício/série). O médio (mostrado pro personal) é a média dos dois.
function estimarTempoSessaoGrupo(grupoNome, objetivo, numSeries){
  const tempo = tempoRepPorGrupo(grupoNome);
  const ref = { reps: parseFaixaMedia(REPS_REF[objetivo]||REPS_REF['Hip']), descansoSeg: parseFaixaMedia(INT_DESCANSO[objetivo]||INT_DESCANSO['Hip']) };
  if(!tempo || !numSeries) return null;
  const min = numSeries * (tempo.medio * ref.reps + ref.descansoSeg);
  const max = numSeries * (tempo.medio * ref.reps * 2 + TEMPO_TROCA_SEG + ref.descansoSeg);
  return { min, max, medio: (min + max) / 2 };
}

// Mesma lógica de estimarTempoSessaoGrupo, mas pra SESSÃO INTEIRA (vários
// grupos de uma vez) — é a função que a tela de modelos usa de fato.
// `gruposPlanejados`: [{ grupo, nExercicios, nSeries }, ...] — o que o modelo
// de divisão já decidiu antes de escolher qualquer exercício específico.
// Retorna { min, max, medio } em segundos (soma de todos os grupos).
function estimarTempoModeloSessao(gruposPlanejados, objetivo){
  const ref = { reps: parseFaixaMedia(REPS_REF[objetivo]||REPS_REF['Hip']), descansoSeg: parseFaixaMedia(INT_DESCANSO[objetivo]||INT_DESCANSO['Hip']) };
  let min = 0, max = 0;
  for(const { grupo, nExercicios, nSeries } of (gruposPlanejados || [])){
    const tempo = tempoRepPorGrupo(grupo);
    if(!tempo || !nExercicios || !nSeries) continue;
    min += nExercicios * nSeries * (tempo.medio * ref.reps + ref.descansoSeg);
    max += nExercicios * nSeries * (tempo.medio * ref.reps * 2 + TEMPO_TROCA_SEG + ref.descansoSeg);
  }
  return { min, max, medio: (min + max) / 2 };
}

// ── Normalização de texto — ignora acentos e caixa em todas as comparações ──
// Resolve o descasamento estrutural entre GRUPOS_MAPA (sem acento: 'Latissimo',
// 'Deltoide', 'Gluteos'...) e DB_EXERCICIOS (com acento: 'Latíssimo', 'Deltóide',
// 'Glúteos'...). Antes desta correção, 8 dos 12 grupos musculares da tela de
// Volume retornavam ZERO exercícios sempre, porque e.g!==musculo nunca casava
// para esses grupos — comparação direta de string é frágil para dados em
// português com acentuação que vêm de fontes diferentes.
// Normalização para BUSCA FUZZY — remove acentos e baixa caixa, mas preserva
// espaços (necessários para o split por palavra em buscaFuzzy).
function normalizarTexto(str){
  if(!str) return '';
  return str
    .toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .trim();
}

// Normalização para COMPARAÇÃO EXATA de identificadores — remove acentos,
// espaços e caixa. Cobre casos como "RetoAbdominal" (GRUPOS_MAPA) vs.
// "Reto Abdominal" (DB_EXERCICIOS), além do problema original de acentuação.
function normalizarIdentificador(str){
  return normalizarTexto(str).replace(/\s+/g, '');
}

// Compara dois identificadores ignorando acento/espaço/caixa — usar em vez de
// === sempre que uma string vier de fonte diferente da outra (ex: GRUPOS_MAPA
// 'RetoAbdominal' vs DB_EXERCICIOS 'Reto Abdominal').
function textoIgual(a, b){
  return normalizarIdentificador(a) === normalizarIdentificador(b);
}

// `uni` (flag binária) virou `lateralidade` — 3 categorias (2026-08-28):
// Bilateral / Bilateral com Carga Unilateral / Unilateral. Só "Unilateral" de
// fato exige trocar de lado (dobra o tempo de execução) — "Bilateral com Carga
// Unilateral" (ex.: agachamento com halteres) é um movimento só, sem troca.
function _exercicioUnilateral(e){
  return e.lateralidade?.nome === 'Unilateral';
}
function _exercicioBilateralCU(e){
  return e.lateralidade?.nome === 'Bilateral com Carga Unilateral';
}

// Alto impacto (2026-08-28) — não existe campo no banco (nem `tp` nem `pad`
// identificam isso de forma confiável: só 1 exercício tem tp="Potência" e
// "Aeróbio" hoje inclui abdominais que não têm nada de impacto). Detecção por
// nome — lista curta e curada manualmente, resultado de varredura na base
// atual (9 exercícios em 692). Revisar/expandir conforme a base crescer.
const _REGEX_ALTO_IMPACTO = /salto|polichinelo|burpee|corrida|correr/i;
function _exercicioAltoImpacto(e){
  const n = e.n.toLowerCase();
  if(n.includes('sem salto')) return false; // "Burpee sem Salto" etc — não conta
  return _REGEX_ALTO_IMPACTO.test(e.n);
}

// Busca fuzzy por fragmento — ignora acentos/caixa e permite que o personal
// digite abreviações como "sup re" para encontrar "Supino Reto - Barra" ou
// "sup hal" para encontrar as variações de Supino com Halter. Cada palavra do
// termo de busca deve aparecer como substring em algum lugar do texto alvo,
// na ordem em que foi digitada — não precisa ser contígua nem completa.
function buscaFuzzy(termoBusca, textoAlvo){
  const termo = normalizarTexto(termoBusca);
  const alvo  = normalizarTexto(textoAlvo);
  if(!termo) return true;
  const palavras = termo.split(/\s+/).filter(Boolean);
  let posicaoAtual = 0;
  for(const palavra of palavras){
    const idx = alvo.indexOf(palavra, posicaoAtual);
    if(idx === -1) return false;
    posicaoAtual = idx + palavra.length;
  }
  return true;
}

// Filtra uma lista de exercícios por termo de busca fuzzy no nome (e opcionalmente
// no equipamento), para uso nos campos de busca de exercício da interface.
function filtrarExerciciosPorBusca(lista, termoBusca){
  if(!termoBusca || !termoBusca.trim()) return lista;
  return lista.filter(e => buscaFuzzy(termoBusca, e.n) || buscaFuzzy(termoBusca, e.eq||''));
}

function nivelOk(exNivel, alunoNivel){
  const ordem={Iniciante:1,Intermediário:2,Avançado:3};
  return (ordem[exNivel]||1)<=(ordem[alunoNivel]||1);
}

function nivelLabel(n){
  return n==='Inic'?'Iniciante':n==='Inte'?'Intermediário':'Avançado';
}

// Prefixos/padrões de exercícios não-prescritos (mobilidade, aeróbio, etc.)
const _NOM_EXCLUI_PRESCRICAO = [
  'Mobilidade','Alongamento','Auto-Liberação','Liberação','Esteira','Bicicleta Indor',
  'Escada Indor','Corrida no Lugar','Polichinelo','Burpee','Isométrico',
];

function filtrarExerciciosFicha(musculo, porcao, resistPermitida, nivelAluno, contraindicacoes){
  // Filtro base (nível, recurso, ci, grupo+porção)
  // Porção deixou de ser campo à parte (`e.p`) — agora é lida como uma variação
  // do próprio grupo muscular (ex.: "Peitoral" casa com "Peitoral" e também com
  // "Peitoral Superior" dentro de `e.g`), conforme decisão da revisão de 2026-08-28.
  const termoGrupo = porcao ? `${musculo} ${porcao}` : musculo;
  let pool = DB_EXERCICIOS.filter(e=>{
    if(!e.g.some(x=>buscaFuzzy(termoGrupo, x.nome))) return false;
    if(!e.r || !resistPermitida.includes(e.r.id)) return false;
    if(!e.nv || !nivelOk(e.nv.nome, nivelLabel(nivelAluno))) return false;
    // Excluir exercícios de mobilidade, liberação e aeróbio da prescrição
    if(_NOM_EXCLUI_PRESCRICAO.some(pref => e.n.startsWith(pref))) return false;
    if(e.ci?.length && contraindicacoes){
      const ciAluno = contraindicacoes.toLowerCase();
      if(e.ci.some(c => ciAluno.includes(c.nome.toLowerCase()))) return false;
    }
    return true;
  });

  // ── Camada 3: aplicar filtro clínico ──────────────────────────────────────
  const { bloqueios } = extrairFlagsClinicas();
  if(bloqueios.length){
    const poolFiltrado = pool.filter(e=>{
      for(const flag of bloqueios){
        const regra = FLAGS_FILTRO[flag];
        if(regra?.bloqueio(e)) return false;
      }
      return true;
    });
    // Só aplicar se restar pelo menos 1 exercício — senão usar pool original
    if(poolFiltrado.length > 0) pool = poolFiltrado;
  }

  return pool;
}

function sortearExercicio(pool, jaUsados){
  const disponivel = pool.filter(e => !jaUsados.has(e.n));
  if(disponivel.length === 0) return pool[Math.floor(Math.random() * pool.length)] || null;
  return disponivel[Math.floor(Math.random() * disponivel.length)];
}

// ── Camada 4 — Classificação de exercícios ─────────────────────────────────
// Renomeado de "PESO_SORTEIO"/"score" pra CLASSIFICACAO (2026-08-28) — não é
// aleatoriedade sem critério, é uma nota final por exercício. Regra fechada
// com o Milton: cada característica que muda a nota vale sempre 1 ponto (pra
// mais ou pra menos) — nunca 2, 3 etc. A nota final é a soma de tudo; pode dar
// 0 (neutro, nenhum fator bateu), positivo (vários fatores bons) ou negativo
// (fator ruim pesa mais que os bons). O que decide é o valor final, não um
// fator isolado. Nenhum fator aqui BLOQUEIA — só sobe/desce a nota, e quem tem
// nota mais alta tem mais chance de ser sorteado (nunca zero chance).
const CLASSIFICACAO = {
  novo:              1, // +1 — exercício nunca prescrito pra esse aluno (visto = 0, neutro)
  prioridadeClinica: 1, // +1 — prioritário por flag clínica (assimetria etc.)
  tipoCadeia:        1, // +1 — combina com tipo/cadeia preferida da condição clínica (item 16)
  variedadePad:      1, // +1 — traz padrão de movimento ainda não usado neste treino (item 19)
  eficiente:         1, // +1 — multiarticular + atinge grupo secundário, quando a sessão está apertada
  naoRecomendado:    1, // −1 — "não recomendado" pro aluno (hoje: Baixo Impacto com IMC≥30). Mesmo tratamento visual/de nota que lesão vai receber quando a arquitetura de pontuação clínica completa for implementada (item pendente).
  favorito:          1, // +1 — favoritado pelo personal (LIBS.favoritos) — preferência de curadoria
  preferidoAluno:    1, // +1 — exercício está na lista de preferidos do aluno (anamnese)
};

// ── Favoritar exercício por personal ────────────────────────────────────────
// LIBS.favoritos: array de exercise IDs (numérico) que o personal marcou como
// favoritos. Vinculado à CONTA do personal, nunca ao banco original nem ao
// aluno — substitui o antigo `base_exercicio` que foi removido (2026-08-28).
// A preferência dá +1 na classificação (ver CLASSIFICACAO.favorito) e mostra
// ⭐ no seletor. Persistido em localStorage + Supabase via saveLibs/supaAutoSave.
function ehFavorito(exId){
  return (typeof LIBS !== 'undefined' && (LIBS?.favoritos||[])).includes(Number(exId));
}
function toggleFavorito(exId, elOuEvt){
  if(typeof LIBS === 'undefined') return;
  if(!LIBS.favoritos) LIBS.favoritos = [];
  const id = Number(exId);
  const idx = LIBS.favoritos.indexOf(id);
  if(idx >= 0) LIBS.favoritos.splice(idx, 1);
  else LIBS.favoritos.push(id);
  if(typeof saveLibs === 'function') saveLibs(LIBS);
  if(typeof supaAutoSave === 'function') supaAutoSave();
  // Atualiza ícone inline sem re-render completo
  const agora = ehFavorito(id); // após toggle
  if(elOuEvt && elOuEvt.nodeType === 1){
    if(elOuEvt.tagName === 'BUTTON'){
      elOuEvt.textContent = agora ? '⭐ Favoritado' : '☆ Favoritar';
    } else {
      elOuEvt.textContent = agora ? '⭐' : '☆';
      elOuEvt.title = agora ? 'Remover favorito' : 'Favoritar exercício';
    }
  }
}

function sortearExercicioC4(pool, jaUsados, musculo, exerciciosTreino, aperto){
  const { prioridades } = extrairFlagsClinicas();
  const prefTipoCadeia = preferenciasTipoCadeia();
  const s = getActive();
  const historico = new Set(s?.historicoExercicios || []);

  // Exercícios preferidos e a evitar pelo aluno (anamnese.gosta_ex / evitar_ex)
  let _prefIds = new Set(), _evitIds = new Set();
  try{
    const _ae = s?.anamnese;
    if(_ae?.gosta_ex)  JSON.parse(_ae.gosta_ex).forEach(e=>_prefIds.add(Number(e.id)));
    if(_ae?.evitar_ex) JSON.parse(_ae.evitar_ex).forEach(e=>_evitIds.add(Number(e.id)));
  }catch(e){}

  // Variedade dentro do treino baseada em característica do exercício: tipo de
  // movimentação (campo `pad`). Ângulo já é coberto separadamente pelo filtro
  // de porção (PORCOES/filtrarExerciciosFicha) nos grupos que têm essa
  // informação; comprimento muscular (alongado/encurtado) ainda não existe no
  // banco — fica pra quando esse campo for criado. `imp` (impacto articular) é
  // classificação de risco, não característica de variabilidade — não entra aqui.
  const padsUsadosTreino = new Set((exerciciosTreino||[]).map(e=>e._pad).filter(Boolean));
  const trazVariedade = (e) => e.pad && !padsUsadosTreino.has(e.pad.id);

  // Prioritário clínico (flags Camada 4 — assimetria etc.)
  const isPrio = (e) => prioridades.some(p => { const fn=FLAGS_PRIORIDADE[p]; return fn && fn(e); });

  // Combina com a condição clínica do aluno (tipo ou cadeia preferida — item 16).
  // `tp` e `cad` agora são lista/objeto {id,nome} — compara pelo nome.
  const combinaComCondicao = (e) =>
    (e.tp||[]).some(t => prefTipoCadeia.tp.has(t.nome)) ||
    (e.cad && prefTipoCadeia.cad.has(e.cad.nome));

  // Eficiência (Fase F): multiarticular + atinge grupo muscular secundário
  // (campo `gs`) rende mais estímulo por série — vale mais quando a sessão
  // está apertada em relação ao tempo disponível. Antes era bônus contínuo
  // (escalava com `aperto`); virou fixo +1 pra seguir a regra "cada fator
  // vale sempre 1" (2026-08-28).
  const eficiente = (e) => e.art?.nome === 'Multiarticular' && !!(e.gs && e.gs.length);

  // "Não recomendado" (2026-08-28) — hoje só cobre Baixo Impacto (alto impacto
  // + IMC≥30). Não bloqueia, só tira 1 ponto da classificação e mostra aviso
  // visual (ver tag_naoRecomendado em abrirListaExercicios).
  const { bloqueios: flagsAtivas } = extrairFlagsClinicas();
  const naoRecomendado = (e) => flagsAtivas.includes('Baixo Impacto') && _exercicioAltoImpacto(e);

  // 1. Filtrar já usados nesta sessão
  const todos = pool.filter(e => !jaUsados.has(e.n));
  if(!todos.length) return pool[Math.floor(Math.random() * pool.length)] || null;

  // 2. Classificação por exercício — soma de todos os fatores (cada um ±1).
  const classificacaoDe = (e) => {
    let nota = historico.has(e.n) ? 0 : CLASSIFICACAO.novo;
    if(isPrio(e))              nota += CLASSIFICACAO.prioridadeClinica;
    if(combinaComCondicao(e))  nota += CLASSIFICACAO.tipoCadeia;
    if(trazVariedade(e))       nota += CLASSIFICACAO.variedadePad;
    if(aperto>0 && eficiente(e)) nota += CLASSIFICACAO.eficiente;
    if(naoRecomendado(e))      nota -= CLASSIFICACAO.naoRecomendado;
    if(ehFavorito(e.id))       nota += CLASSIFICACAO.favorito;
    if(_prefIds.has(Number(e.id))) nota += CLASSIFICACAO.preferidoAluno;
    return nota;
  };

  // 3. Montar pool ponderado repetindo cada exercício conforme sua nota —
  // nota mais alta = mais chance, mas nunca zero chance (mínimo 1 entrada).
  // Exercícios explicitamente evitados pelo aluno são removidos do pool.
  const ponderado = [];
  todos.forEach(e => {
    if(_evitIds.has(Number(e.id))) return; // aluno pediu pra evitar — exclui
    const n = Math.max(1, Math.round(classificacaoDe(e)));
    for(let i=0; i<n; i++) ponderado.push(e);
  });

  const final = ponderado.length ? ponderado : todos;
  return final[Math.floor(Math.random() * final.length)];
}

// ── Painel de assimetrias ativas (Camada 4) ─────────────────────────────────
function renderPainelAssimetrias(){
  const el = $('ficha-assimetrias'); if(!el) return;
  const s = getActive();
  if(!s?.anamnese){ el.style.display='none'; return; }
  const a = s.anamnese;
  const notas = [];

  // Coxa
  const coxaD=parseFloat(a.coxa_d), coxaE=parseFloat(a.coxa_e);
  if(coxaD&&coxaE&&Math.abs(coxaD-coxaE)>=1){
    const lado=coxaD>coxaE?'E':'D';
    notas.push(`⚑ Quadríceps/Glúteos: iniciar exercícios unilaterais pelo lado <strong>${lado}</strong> (coxa Δ${Math.abs(coxaD-coxaE).toFixed(1)}cm)`);
  }
  // Equilíbrio
  const eqD=parseFloat(a.equilibrio_d), eqE=parseFloat(a.equilibrio_e);
  if(eqD&&eqE&&Math.abs(eqD-eqE)>=3){
    const lado=eqD<eqE?'D':'E';
    notas.push(`⚑ Equilíbrio: priorizar estabilização lado <strong>${lado}</strong> (Δ${Math.abs(eqD-eqE).toFixed(0)}s)`);
  }
  // Braço
  const bracoD=parseFloat(a.braco_d), bracoE=parseFloat(a.braco_e);
  if(bracoD&&bracoE&&Math.abs(bracoD-bracoE)>=1){
    const lado=bracoD>bracoE?'E':'D';
    notas.push(`⚑ MMSS: iniciar exercícios unilaterais pelo lado <strong>${lado}</strong> (braço Δ${Math.abs(bracoD-bracoE).toFixed(1)}cm)`);
  }
  // Preensão
  const grD=parseFloat(a.grip_d), grE=parseFloat(a.grip_e);
  if(grD&&grE&&Math.abs(grD-grE)>=2){
    const lado=grD<grE?'D':'E';
    notas.push(`⚑ Preensão: lado <strong>${lado}</strong> mais fraco (Δ${Math.abs(grD-grE).toFixed(1)}kg) — usar carga independente`);
  }
  // Prancha lateral
  const pld=parseFloat(a.prancha_lat_d), ple=parseFloat(a.prancha_lat_e);
  if(pld&&ple&&(Math.abs(pld-ple)/Math.max(pld,ple))>0.10){
    const lado=pld<ple?'D':'E';
    notas.push(`⚑ Core lateral: lado <strong>${lado}</strong> mais fraco na prancha (Δ${(Math.abs(pld-ple)/Math.max(pld,ple)*100).toFixed(0)}%) — duplicar séries laterais`);
  }
  // Isquiotibial
  if(['Moderado','Acentuado'].some(v=>(a.isquio_d||'').includes(v)||(a.isquio_e||'').includes(v))){
    notas.push('⚑ Isquiotibiais: incluir mobilização pré-exercício de cadeia posterior');
  }
  // Valgo
  if((a.fms_slsq_flag||'').includes('Valgo')||(a.fms_ohsa_flag||'').includes('Valgo')){
    notas.push('⚑ Valgo de joelho: ativação de glúteo médio no aquecimento — abdução e side step');
  }

  if(!notas.length){ el.style.display='none'; return; }
  el.style.display='block';
  el.innerHTML = `
    <div style="padding:10px 14px;background:rgba(255,180,0,.06);border:1px solid rgba(255,180,0,.2);border-radius:var(--radius)">
      <div style="font-size:11px;font-family:var(--mono);text-transform:uppercase;color:#ffb400;margin-bottom:7px;letter-spacing:.05em">
        ⚑ Ajustes por assimetrias — Camada 4
      </div>
      <div style="display:flex;flex-direction:column;gap:5px">
        ${notas.map(n=>`<div style="font-size:12px;color:var(--text2);line-height:1.5">${n}</div>`).join('')}
      </div>
    </div>`;
}


function gerarNotaAssimetria(musculo){
  const s = getActive();
  if(!s?.anamnese) return '';
  const a = s.anamnese;
  const notas = [];

  // Assimetria de coxa → iniciar pelo lado mais fraco em MMII unilaterais
  const coxaD = parseFloat(a.coxa_d), coxaE = parseFloat(a.coxa_e);
  if(coxaD && coxaE && Math.abs(coxaD - coxaE) >= 1 &&
     ['Quadriceps','Isquiossurais','Gluteos'].includes(musculo)){
    const lado = coxaD > coxaE ? 'E' : 'D';
    notas.push(`⚑ Iniciar pelo lado ${lado} (assimetria coxa Δ${Math.abs(coxaD-coxaE).toFixed(1)}cm)`);
  }

  // Assimetria de equilíbrio
  const eqD = parseFloat(a.equilibrio_d), eqE = parseFloat(a.equilibrio_e);
  if(eqD && eqE && Math.abs(eqD - eqE) >= 3 &&
     ['Quadriceps','Gluteos'].includes(musculo)){
    const lado = eqD < eqE ? 'D' : 'E';
    notas.push(`⚑ Priorizar estabilização lado ${lado} (equilíbrio Δ${Math.abs(eqD-eqE).toFixed(0)}s)`);
  }

  // Assimetria de braço
  const bracoD = parseFloat(a.braco_d), bracoE = parseFloat(a.braco_e);
  if(bracoD && bracoE && Math.abs(bracoD - bracoE) >= 1 &&
     ['Biceps','Triceps','Peitoral','Latissimo','Deltoide'].includes(musculo)){
    const lado = bracoD > bracoE ? 'E' : 'D';
    notas.push(`⚑ Iniciar pelo lado ${lado} (assimetria braço Δ${Math.abs(bracoD-bracoE).toFixed(1)}cm)`);
  }

  // Assimetria de preensão
  const grD = parseFloat(a.grip_d), grE = parseFloat(a.grip_e);
  if(grD && grE && Math.abs(grD - grE) >= 2 &&
     ['Biceps','Triceps','Latissimo'].includes(musculo)){
    const lado = grD < grE ? 'D' : 'E';
    notas.push(`⚑ Lado ${lado} mais fraco na preensão (Δ${Math.abs(grD-grE).toFixed(1)}kg) — usar carga independente`);
  }

  // Assimetria de prancha lateral → core antirotacional
  const pld = parseFloat(a.prancha_lat_d), ple = parseFloat(a.prancha_lat_e);
  if(pld && ple && (Math.abs(pld-ple)/Math.max(pld,ple)) > 0.10 &&
     ['RetoAbdominal','Obliquo'].includes(musculo)){
    const lado = pld < ple ? 'D' : 'E';
    notas.push(`⚑ Lado ${lado} mais fraco na prancha lateral — duplicar séries laterais deste lado`);
  }

  // Isquiotibial → encurtamento
  if(musculo === 'Isquiossurais'){
    const iD = a.isquio_d || '', iE = a.isquio_e || '';
    if(['Moderado','Acentuado'].some(v => iD.includes(v) || iE.includes(v))){
      notas.push('⚑ Encurtamento de isquio — incluir mobilização pré-exercício');
    }
  }

  return notas.join(' | ');
}



// ─── STEP 3: VOLUME → DIVISÃO → FICHA ───────────────────────────────────────

// MEV/MRV: Israetel, Hoffman & Smith (2019) — Scientific Principles of Hypertrophy Training
// Fonte: FASE-3-Variaveis-e-Metodos.md (ACM Obsidian v2.0)
const GRUPOS_MAPA = [
  {id:'Peitoral',      label:'Peito',       mev:8,  mav_min:12, mav_max:20, mrv:22},
  {id:'Latissimo',     label:'Costas',      mev:8,  mav_min:14, mav_max:22, mrv:25},
  {id:'Deltoide',      label:'Ombro',       mev:8,  mav_min:16, mav_max:22, mrv:26},
  {id:'Triceps',       label:'Tríceps',     mev:6,  mav_min:12, mav_max:18, mrv:22},
  {id:'Biceps',        label:'Bíceps',      mev:6,  mav_min:14, mav_max:20, mrv:26},
  {id:'Quadriceps',    label:'Quadríceps',  mev:8,  mav_min:12, mav_max:18, mrv:20},
  {id:'Isquiossurais', label:'Posteriores', mev:6,  mav_min:10, mav_max:16, mrv:20},
  {id:'Gluteos',       label:'Glúteos',     mev:4,  mav_min:8,  mav_max:16, mrv:20},
  {id:'Panturrilhas',  label:'Panturrilha', mev:8,  mav_min:12, mav_max:16, mrv:20},
  {id:'RetoAbdominal', label:'Abdômen',     mev:4,  mav_min:8,  mav_max:16, mrv:20},
  {id:'Obliquo',       label:'Oblíquos',    mev:4,  mav_min:8,  mav_max:14, mrv:18},
  {id:'Trapezio',      label:'Trapézio',    mev:6,  mav_min:10, mav_max:16, mrv:20},
];

// visualização de volume via tabela (vol-tbody)

// ── Mapeamento de família por objetivo (vault REF-Volume-Derivado-MAV §3/§6) ──
const FAMILIA_OBJETIVO = {
  Hip:'Hip', Emagr:'Hip', Comp:'Hip',
  Forca:'Forca', Esport:'Forca',
  Resist:'Resist', Envelhec:'Resist', Saude:'Resist', Func:'Resist', CardioR:'Resist',
  Reab:'Reab', Gestacao:'Gestacao',
};

// ── Fator de escala por Objetivo sobre Volume por Grupo (vault §3, base 2026-06) ──
// Base de referência = Resistência (1.00). Nenhum fator > 1.00 (regra: sempre reduzir do teto).
// Reab/Gestacao não usam este fator — fonte clínica própria, fora deste pacote de variável.
const FATOR_OBJETIVO_VOLGRUPO = {
  Resist:   {Inic:1.00, Inte:1.00, Avan:1.00},
  Hip:      {Inic:0.88, Inte:0.84, Avan:0.80},
  Forca:    {Inic:0.62, Inte:0.60, Avan:0.58},
  Saude:    {Inic:1.00, Inte:1.00, Avan:1.00}, // provisório, sem fonte própria — vault §3/§5
  Envelhec: {Inic:1.00, Inte:1.00, Avan:1.00},
  Func:     {Inic:1.00, Inte:1.00, Avan:1.00},
  CardioR:  {Inic:1.00, Inte:1.00, Avan:1.00},
};

// ── Zonas de Volume por Grupo × Sexo (vault §8) — valores já escalados para Avançado ──
// Inte/Inic aplicam 0.80/0.60 sobre estes valores (vault §8.1/§8.2), com piso no MEV do grupo.
// Vale para QUALQUER objetivo (correção 2026-06) — fator de Objetivo aplica-se POR CIMA do resultado.
const ZONAS_VOLUME_SEXO = {
  M: {
    Latissimo:     [24,28], Peitoral:      [24,28], Deltoide:      [24,28],
    Quadriceps:    [18,22],
    Isquiossurais: [12,16], Biceps:        [12,16], Triceps:       [12,16],
    Gluteos:       [4,8],   RetoAbdominal: [4,8],   Trapezio:      [4,8],
    Panturrilhas:  [8,12],
  },
  F: {
    Quadriceps:    [18,22], Gluteos:       [18,22], Isquiossurais: [18,22],
    Latissimo:     [14,17], Deltoide:      [14,17],
    Panturrilhas:  [8,12],  Triceps:       [8,12],  Biceps:        [8,12],
    RetoAbdominal: [4,8],   Trapezio:      [4,8],
    Peitoral:      [8,12],
  },
};

function getZonaVolumeGrupo(grupoId, sexo, nivel){
  // Oblíquo herda de RetoAbdominal (vault §8.1/§8.2, sem fonte própria)
  const idEfetivo = (grupoId === 'Obliquo') ? 'RetoAbdominal' : grupoId;
  const s = (sexo === 'F') ? 'F' : 'M';
  const base = (ZONAS_VOLUME_SEXO[s] || ZONAS_VOLUME_SEXO.M)[idEfetivo];
  if(!base) return null; // sem zona definida para este grupo — caller usa fallback do MAV puro
  const fatorNivel = nivel === 'Avan' ? 1.00 : nivel === 'Inte' ? 0.80 : 0.60;
  return [Math.round(base[0]*fatorNivel), Math.round(base[1]*fatorNivel)];
}

// ── Volume por Grupo — fórmula final (vault §1: Grupo → Sexo → Nível → Objetivo → piso MEV) ──
function getVolumePorGrupo(grupoId, sexo, nivel, objetivo){
  const grupo = GRUPOS_MAPA.find(g => g.id === grupoId);
  if(!grupo) return [0,0];
  const { mev, mav_min, mav_max, mrv } = grupo;

  const familia = FAMILIA_OBJETIVO[objetivo] || 'Resist';

  // Reab/Gestacao: fora de escopo deste fator — fonte clínica própria (vault §3, §9), não tratada aqui
  if(familia === 'Reab' || familia === 'Gestacao'){
    return [mav_min || mev, mav_max || mrv];
  }

  const zona = getZonaVolumeGrupo(grupoId, sexo, nivel);
  const fatorObjetivo = (FATOR_OBJETIVO_VOLGRUPO[familia] || FATOR_OBJETIVO_VOLGRUPO['Resist'])[nivel] ?? 1.00;

  let semMin, semMax;
  if(zona){
    semMin = Math.round(zona[0] * fatorObjetivo);
    semMax = Math.round(zona[1] * fatorObjetivo);
  } else {
    // Sem zona de sexo definida para o grupo (ex.: Trapézio em algumas combinações) →
    // cai direto no MAV puro do grupo (vault §2), ainda escalado pelo fator de Objetivo.
    semMin = Math.round((mav_min || mev) * fatorObjetivo);
    semMax = Math.round((mav_max || mrv) * fatorObjetivo);
  }

  // Piso de segurança — nunca abaixo do MEV do próprio grupo (vault §1, passo 5)
  semMin = Math.max(semMin, mev);
  semMax = Math.max(semMax, mev);

  return [semMin, semMax];
}

let _s3 = {
  seriesPorEx: 3,
  volPorGrupo: {},      // {id: {sem, sessao, freq}}
  divisaoIdx: 0,
  divisaoOpcoes: [],    // calculadas a partir do volume
  fichaObj: null,
  treinoAtivo: 0,
  aquecTipos: ['Mobilidade'], // tipos de aquecimento selecionados (TIPOS_AQUECIMENTO valores)
};

// Modelos de periodização — alinhados com FASE-2 do Obsidian
// DORMENTE por decisão do personal (não usado hoje — todo treino roda em
// padrão Linear). Estrutura de dados mantida intacta pra reativação futura;
// só não é mais chamada em nenhum ponto do fluxo ativo enquanto
// PERIODIZACAO_ATIVA=false. Ver `_modeloSelecionado` mais abaixo.
const PERIODIZACAO_ATIVA = false;

const MODELOS_PERIODO = {
  LP:  { nome:'Linear Progressiva',    sigla:'LP',  desc:'Progressão de carga semana a semana. Ideal para iniciantes e retorno após pausa.', icon:'📈' },
  DUP: { nome:'DUP — Ondulação Diária', sigla:'DUP', desc:'Varia volume/intensidade a cada sessão. Excelente para intermediários e mulheres.', icon:'〰️' },
  BLO: { nome:'Blocos (Block)',         sigla:'BLO', desc:'Mesociclos concentrados em uma qualidade por vez. Ideal para quem tem data-alvo.', icon:'🧱' },
  LPR: { nome:'Linear Reversa',         sigla:'LPR', desc:'Alta intensidade → maior volume. Foco em resistência muscular e condicionamento.', icon:'🔄' },
  CON: { nome:'Conjugado',              sigla:'CON', desc:'Esforço máximo + dinâmico simultâneos. Restrito a homens avançados em força.', icon:'⚡' },
};

// Tabela de decisão: Objetivo × Nível × Sexo → Modelo recomendado
// Fonte: FASE-2-Objetivos-e-Periodizacao.md (ACM Obsidian v2.0)
const MODELO_TABELA = {
  Hip:    {Inic:{M:'LP',  F:'LP'},  Inte:{M:'DUP', F:'DUP'}, Avan:{M:'CON', F:'DUP'}},
  Forca:  {Inic:{M:'LP',  F:'LP'},  Inte:{M:'DUP', F:'DUP'}, Avan:{M:'CON', F:'BLO'}},
  Emagr:  {Inic:{M:'LP',  F:'LP'},  Inte:{M:'DUP', F:'DUP'}, Avan:{M:'DUP', F:'DUP'}},
  Comp:   {Inic:{M:'LP',  F:'LP'},  Inte:{M:'DUP', F:'DUP'}, Avan:{M:'BLO', F:'DUP'}},
  Resist: {Inic:{M:'LPR', F:'LPR'}, Inte:{M:'LPR', F:'LPR'}, Avan:{M:'LPR', F:'LPR'}},
  CardioR:{Inic:{M:'LPR', F:'LPR'}, Inte:{M:'LPR', F:'LPR'}, Avan:{M:'LPR', F:'LPR'}},
  Func:   {Inic:{M:'LP',  F:'LP'},  Inte:{M:'DUP', F:'DUP'}, Avan:{M:'DUP', F:'DUP'}},
  Saude:  {Inic:{M:'LP',  F:'LP'},  Inte:{M:'LP',  F:'LP'},  Avan:{M:'LP',  F:'LP'}},
  Esport: {Inic:{M:'LP',  F:'LP'},  Inte:{M:'BLO', F:'BLO'}, Avan:{M:'BLO', F:'BLO'}},
  Reab:   {Inic:{M:'LP',  F:'LP'},  Inte:{M:'LP',  F:'LP'},  Avan:{M:'LP',  F:'LP'}},
  Envelhec:{Inic:{M:'LP', F:'LP'},  Inte:{M:'LP',  F:'LP'},  Avan:{M:'LP',  F:'LP'}},
  Gestacao:{Inic:{M:'LP', F:'LP'},  Inte:{M:'LP',  F:'LP'},  Avan:{M:'LP',  F:'LP'}},
};

function recomendarModelo(obj, nivel, sexo){
  const s = (sexo === 'M') ? 'M' : 'F';
  return (MODELO_TABELA[obj]?.[nivel]?.[s]) || 'LP';
}

// Enquanto PERIODIZACAO_ATIVA=false, todo treino novo roda em Linear fixo —
// sem card clicável, sem recomendação automática por objetivo/nível/sexo.
// Treinos reabertos (aprovados ou vindos de biblioteca) preservam o modelo
// que já tinham gravado, não são forçados pra LP.
let _modeloSelecionado = '';

// ── Step 1 (Configurações Gerais) — resumo/sugestão do sistema ─────────────
// Substitui o antigo fillStep2() (tela de Periodização, agora dormente).
// Chamado a cada mudança relevante de objetivo/nível/frequência no step 1.
function atualizarResumoConfigGeral(){
  const s   = getActive(); if(!s) return;
  const nivel = val('pr-nivel');
  const freq  = val('pr-frequencia');
  const resumoEl = $('resumo-config-geral');
  if(!selectedObj || !nivel || !freq){
    if(resumoEl) resumoEl.style.display='none';
    return;
  }
  if(resumoEl) resumoEl.style.display='block';

  const sexo  = s.perfil?.sexo || '—';
  const obj   = OBJETIVOS.find(o=>o.code===selectedObj);
  const v     = VARIAVEIS_REF[selectedObj]||{};

  // Periodização dormente (ver PERIODIZACAO_ATIVA) — modelo sempre exibido
  // como Linear, sem recomendação dinâmica por objetivo/nível/sexo.
  $('modelo-recomendado').innerHTML = `<span>✓</span><div>Base: <strong>${selectedObj}</strong> · <strong>${nivelLabel(nivel)}</strong> · <strong>${sexo}</strong> — sugestão do sistema pronta para a Distribuição.</div>`;
  $('info-objetivo').textContent  = obj ? obj.label : '—';
  $('info-modelo').textContent    = 'Linear (padrão)';
  $('info-freq').textContent      = freq + '/semana';
  $('info-nivel').textContent     = nivelLabel(nivel);
  $('info-sexo').textContent      = sexo;
  $('info-duracao').textContent   = (val('pr-duracao')||s.anamnese?.duracao||60) + ' min';

  const mods2 = calcModificadoresPerfil();
  const intervaloExibido = mods2.intervaloFator > 1.0 && v.intervalo && v.intervalo !== '—'
    ? `<span style="color:#ffb400">${v.intervalo} → preferir limite superior ${mods2.intervaloMsg?'('+mods2.intervaloMsg.replace(/^[⚠ℹ] /,'').split(' —')[0]+')':''}</span>`
    : v.intervalo || '—';
  $('ref-variaveis').innerHTML = `<strong>Referência para ${selectedObj}:</strong><br>Séries: ${v.series||'—'} | Reps: ${v.reps||'—'}<br>Intensidade: ${v.intensidade||'—'}<br>Intervalo: ${intervaloExibido} | TUT: ${v.tut||'—'}`;

  if(PERIODIZACAO_ATIVA){
    _modeloSelecionado = _modeloSelecionado || recomendarModelo(selectedObj, nivel, sexo);
  }
}

// Mensagens de contexto de perfil (idade/impacto/métodos) — úteis
// independente de periodização, então seguem ativas. Ancoradas agora no
// topo da tela de Distribuição (step 2), que é onde volume/divisão são
// realmente ajustados.
function renderContextoPerfil(mods){
  let el = $('step2-perfil-ctx');
  if(!el){
    el = document.createElement('div');
    el.id = 'step2-perfil-ctx';
    el.style.cssText = 'display:flex;flex-direction:column;gap:5px;margin-bottom:10px';
    const anchor = $('step2-perfil-ctx-anchor');
    if(anchor) anchor.after(el);
  }
  const msgs = [mods.progressaoMsg, mods.metodosMsg, mods.impactoMsg].filter(Boolean);
  if(!msgs.length){ el.style.display='none'; return; }
  el.style.display='flex';
  el.innerHTML = msgs.map(msg=>{
    const isWarn=msg.startsWith('⚠');
    const cor=isWarn?'rgba(255,180,0,.25)':'rgba(0,160,255,.2)';
    const corTxt=isWarn?'#ffb400':'rgba(0,160,255,.9)';
    return `<div style="padding:6px 12px;background:var(--bg4);border-left:3px solid ${cor};border-radius:0 var(--radius) var(--radius) 0;font-size:12px;color:${corTxt}">${msg}</div>`;
  }).join('');
}

function renderModeloCards(nivel, sexo, mods){
  const cont = $('modelo-cards'); if(!cont) return;
  const modificadores = mods || calcModificadoresPerfil();
  cont.innerHTML = '';
  Object.entries(MODELOS_PERIODO).forEach(([key, m]) => {
    const sel  = (key === _modeloSelecionado);
    const bloqCON = (key === 'CON' && (nivel !== 'Avan' || sexo !== 'M'));
    const bloqBLO = (key === 'BLO' && nivel === 'Inic');
    // 65+: apenas LP e LPR permitidos
    const bloq65  = modificadores.bloquearMetodosAvancados && !['LP','LPR'].includes(key);
    const bloq = bloqCON || bloqBLO || bloq65;
    const bloqLabel = bloq65 ? '🔒 65+' : bloqCON ? '🔒 Avan ♂' : bloqBLO ? '🔒 Inte+' : '';
    const card = document.createElement('div');
    card.style.cssText = `padding:10px 12px;border-radius:var(--radius);border:1px solid ${sel?'rgba(0,229,160,.5)':'var(--border)'};background:${sel?'var(--accent-dim)':'var(--bg3)'};cursor:${bloq?'not-allowed':'pointer'};opacity:${bloq?'0.4':'1'};transition:all .15s`;
    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <span style="font-size:14px">${m.icon}</span>
        <span style="font-family:var(--mono);font-size:11px;color:${sel?'var(--accent)':'var(--text2)'};font-weight:600">${m.sigla}</span>
        <span style="font-size:10px;color:var(--text2)">${m.nome}</span>
        ${sel?'<span style="margin-left:auto;font-size:9px;color:var(--accent);background:rgba(0,229,160,.1);padding:1px 5px;border-radius:2px;border:1px solid rgba(0,229,160,.2)">SELECIONADO</span>':''}
        ${bloq?`<span style="margin-left:auto;font-size:9px;color:var(--text3)">${bloqLabel}</span>`:''}
      </div>
      <div style="font-size:10px;color:var(--text3);line-height:1.5">${m.desc}</div>`;
    if(!bloq) card.onclick = () => { _modeloSelecionado = key; renderModeloCards(nivel, sexo); };
    cont.appendChild(card);
  });
}

// ── STEP 3 ENTRY ─────────────────────────────────────────────

function fillStep3(){
  iniciarTelaVolume();
  // Volume e Divisão ficam na mesma tela, lado a lado — gera as opções de
  // divisão junto com a tabela de volume, em vez de esperar um clique em
  // "Distribuir Treinos →" (essa navegação não existe mais).
  irParaDivisao();
  // Listeners dos botões +/- do campo séries/ex padrão
  const btnM = $('btn-series-menos');
  const btnP = $('btn-series-mais');
  if(btnM && !btnM._bound){
    btnM._bound = true;
    btnM.addEventListener('click', function(){
      const inp = $('vol-series');
      inp.value = Math.max(1, (parseInt(inp.value)||3) - 1);
      resetSeriesGlobal();
    });
  }
  if(btnP && !btnP._bound){
    btnP._bound = true;
    btnP.addEventListener('click', function(){
      const inp = $('vol-series');
      inp.value = Math.min(8, (parseInt(inp.value)||3) + 1);
      resetSeriesGlobal();
    });
  }
}

// ── CAMADA 2 — Modificadores de parâmetros por perfil ────────────────────────
// Retorna objeto com ajustes a aplicar no motor de prescrição
// Baseado em: idade (FASE-2 §5, Envelhec), IMC ≥30 (FASE-1 §3)

function calcModificadoresPerfil(){
  const s = getActive();
  const mods = {
    // Intervalos
    intervaloFator: 1.0,  // multiplicador: 1.0 = padrão, 1.2 = +20% (limit upper)
    intervaloMsg: '',
    // Progressão de carga
    progressaoMsg: '',
    // Métodos avançados
    bloquearMetodosAvancados: false,
    metodosMsg: '',
    // IMC
    baixoImpacto: false,
    impactoMsg: '',
  };

  if(!s?.perfil || !s?.anamnese) return mods;
  const p = s.perfil, a = s.anamnese;

  // ── Idade ─────────────────────────────────────────────────────────────────
  // Idade não influencia mais Volume por Grupo (vault REF-Volume-Derivado-MAV §1,
  // revisão 2026-06 — ACSM 2026). A proteção do aluno 50+/65+ continua aqui, mas
  // só nas variáveis de intervalo, progressão de carga e métodos avançados.
  const idade = p.nascimento
    ? new Date().getFullYear() - new Date(p.nascimento).getFullYear()
    : 0;

  if(idade >= 65){
    mods.intervaloFator = 1.2;
    mods.intervaloMsg   = `⚠ 65+ anos — intervalos de descanso no limite superior da faixa.`;
    mods.progressaoMsg  = `⚠ 65+ anos — progressão de carga ≤ 5% por semana. Priorizar técnica e controle.`;
    mods.bloquearMetodosAvancados = true;
    mods.metodosMsg = `⚠ 65+ anos — métodos avançados (drop set, rest-pause, série gigante) não recomendados neste nível. Usar pirâmide crescente e circuito.`;
  } else if(idade >= 50){
    mods.intervaloFator = 1.1;
    mods.intervaloMsg   = `⚠ 50+ anos — preferir intervalos no limite superior da faixa prescrita.`;
    mods.progressaoMsg  = `⚠ 50+ anos — progressão de carga conservadora (< 5%/semana). Atenção à recuperação.`;
  } else if(idade >= 40){
    mods.progressaoMsg = `ℹ 40–49 anos — progressão de carga moderada. Tendões menos adaptativos. Monitorar recuperação.`;
  }

  // ── IMC ≥ 30 ───────────────────────────────────────────────────────────────
  const peso = parseFloat(a.peso), alt = parseFloat(a.altura);
  if(peso && alt){
    const imc = peso / Math.pow(alt/100, 2);
    if(imc >= 35){
      mods.baixoImpacto = true;
      mods.impactoMsg = `⚠ IMC ${imc.toFixed(1)} (Obesidade grau II/III) — priorizar exercícios de baixo impacto. Evitar corrida, saltos e cargas axiais pesadas sem progressão prévia.`;
    } else if(imc >= 30){
      mods.baixoImpacto = true;
      mods.impactoMsg = `ℹ IMC ${imc.toFixed(1)} (Obesidade grau I) — preferir exercícios de baixo impacto no início. Progressão gradual de amplitude e carga.`;
    }
  }

  return mods;
}

// ── TELA A: VOLUME ────────────────────────────────────────────

function iniciarTelaVolume(){
  const s       = getActive(); if(!s) return;
  const nivel   = val('pr-nivel') || s.anamnese?.nivel || 'Inic';
  const freq    = val('pr-frequencia') || s.anamnese?.frequencia || '3x';
  const obj     = selectedObj || 'Saude';
  const sexo    = s.perfil?.sexo || 'M';
  const numDias = parseInt(freq) || 3;

  // ── Calcular modificadores de perfil (Camada 2) ──────────────────────────
  // Idade não influencia mais Volume por Grupo (vault REF-Volume-Derivado-MAV §1,
  // revisão 2026-06 — ACSM 2026 não sustenta corte de volume por idade; proteção
  // do idoso passa a viver em intensidade/RIR/frequência, fora desta tela).
  const mods = calcModificadoresPerfil();

  // Renderizar avisos de modificadores acima da tabela
  renderAvisosVolume(mods);

  // Séries por Exercício — progressão por histórico (vault §10.2): consulta a moda
  // do último treino deste aluno no mesmo objetivo (com reset cruzado por Reab) e
  // sugere um degrau acima, travado na faixa do objetivo×nível atual.
  const ultimaSerie = buscarUltimaSerieRegistrada(s, obj);
  _s3.seriesPorEx = getSeriesPorEx(obj, nivel, ultimaSerie);
  $('vol-series').value = _s3.seriesPorEx;

  // Frequência estimada por grupo
  const freqEst = {
    Peitoral:1, Latissimo:1, Deltoide:1, Triceps:1, Biceps:1,
    Quadriceps:1, Isquiossurais:1, Gluteos:1, Panturrilhas:1,
    RetoAbdominal:1, Obliquo:1, Trapezio:1,
  };
  if(numDias >= 4){ freqEst.Quadriceps=2; freqEst.Gluteos=2; }
  if(numDias >= 5){ freqEst.Peitoral=2; freqEst.Latissimo=2; }

  GRUPOS_MAPA.forEach(({id}) => {
    // chave inclui sexo — recalcula sempre que objetivo/nível/sexo mudar (vault §1: Grupo→Sexo→Nível→Objetivo)
    const chave = obj + nivel + sexo;
    if(!_s3.volPorGrupo[id] || _s3.volPorGrupo[id]._chave !== chave){
      const freq_g = freqEst[id] || 1;
      const serEx  = _s3.seriesPorEx;

      const [semMin, semMax] = getVolumePorGrupo(id, sexo, nivel, obj);
      const semMid = Math.round((semMin + semMax) / 2);

      _s3.volPorGrupo[id] = {
        semMin, semMax,
        sem: semMid,
        serEx,
        freq: freq_g,
        ativo: true,
        _chave: chave,
      };
    }
  });

  renderTabelaVolumeGlobal();
  // Volume e Divisão ficam juntos na mesma tela (ver irParaDivisao, chamado
  // logo depois em fillStep3) — não esconde mais 's3-divisao' aqui, senão a
  // caixa de Modelos de Divisão desaparece assim que o volume é recalculado.
  show('s3-volume');
  show('s3-divisao');
  show('s3-vd-btnrow');
  hide('s3-ficha');
}

function renderAvisosVolume(mods){
  // Renderiza (ou limpa) o bloco de avisos de perfil acima da tabela de volume
  let el = $('vol-mods-avisos');
  if(!el){
    // Criar container se não existe ainda
    el = document.createElement('div');
    el.id = 'vol-mods-avisos';
    el.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin-bottom:12px';
    const tbl = $('vol-tbody');
    if(tbl && tbl.closest('table')) tbl.closest('table').before(el);
  }

  const avisos = [
    mods.intervaloMsg,
    mods.progressaoMsg, mods.impactoMsg, mods.metodosMsg,
  ].filter(Boolean);

  if(!avisos.length){ el.style.display='none'; return; }
  el.style.display = 'flex';
  el.innerHTML = avisos.map(msg => {
    const isWarn = msg.startsWith('⚠');
    const cor = isWarn ? 'rgba(255,180,0,.25)' : 'rgba(0,160,255,.2)';
    const corTxt = isWarn ? '#ffb400' : 'rgba(0,160,255,.9)';
    return `<div style="padding:7px 12px;background:var(--bg4);border-left:3px solid ${cor};border-radius:0 var(--radius) var(--radius) 0;font-size:12px;color:${corTxt};line-height:1.5">${msg}</div>`;
  }).join('');
}

function calcExercicios(semMin, semMax, serEx){
  // Exercícios = séries/sem ÷ séries/exercício (apenas inteiros)
  if(!serEx || serEx === 0) return '—';
  const exMin = Math.floor(semMin / serEx);
  const exMax = Math.ceil(semMax / serEx);
  if(exMin === exMax || exMin === 0) return String(exMax);
  return exMin + '–' + exMax;
}

function renderTabelaVolumeGlobal(){
  const tbody = $('vol-tbody'); if(!tbody) return;
  tbody.innerHTML = '';
  GRUPOS_MAPA.forEach(({id, label, mev, mav_min, mav_max, mrv}) => {
    const vg     = _s3.volPorGrupo[id] || {sem:0,semMin:mav_min||mev,semMax:mav_max||mrv,serEx:_s3.seriesPorEx,freq:1,ativo:true};
    if(vg.ativo === undefined) vg.ativo = true;
    if(!vg.serEx) vg.serEx = _s3.seriesPorEx;
    const ativo  = vg.ativo !== false;
    const semMin = vg.semMin !== undefined ? vg.semMin : (mav_min||mev);
    const semMax = vg.semMax !== undefined ? vg.semMax : (mav_max||mrv);
    const semMid = Math.round((semMin + semMax) / 2);
    const serEx  = vg.serEx || _s3.seriesPorEx;
    const cor    = ativo ? getVolColor(semMid, mev, mrv) : '#333';
    const status = getVolStatus(semMid, mev, mrv, ativo);
    const exRange = ativo ? calcExercicios(semMin, semMax, serEx) : '—';
    const pct    = ativo && mrv > 0 ? Math.min(100, Math.round((semMid / mrv) * 100)) : 0;

    const tr = document.createElement('tr');
    tr.id = 'row-' + id;
    if(!ativo) tr.style.opacity = '0.45';

    // td0: switch on/off
    const td0 = document.createElement('td');
    td0.style.textAlign = 'center';
    const switchWrap = document.createElement('div');
    switchWrap.style.cssText = 'display:inline-flex;align-items:center;cursor:pointer;user-select:none';
    switchWrap.title = (ativo ? 'Desativar' : 'Ativar') + ' ' + label;
    switchWrap.dataset.grupo = id;

    const track = document.createElement('div');
    track.style.cssText = 'width:32px;height:18px;border-radius:9px;background:' + (ativo ? '#22c55e' : '#444') +
      ';position:relative;transition:background .2s;border:1px solid ' + (ativo ? '#16a34a' : '#555');
    const thumb = document.createElement('div');
    thumb.style.cssText = 'width:14px;height:14px;border-radius:50%;background:#fff;position:absolute;top:1px;' +
      'left:' + (ativo ? '15px' : '1px') + ';transition:left .2s;box-shadow:0 1px 3px rgba(0,0,0,.3)';
    track.appendChild(thumb);
    switchWrap.appendChild(track);
    switchWrap.addEventListener('click', function(){ toggleGrupo(this.dataset.grupo); });
    td0.appendChild(switchWrap);

    // td1: label
    const td1 = document.createElement('td');
    td1.style.cssText = 'font-size:11px;font-weight:' + (ativo ? '500' : '400') +
      ';color:' + (ativo ? 'var(--text)' : 'var(--text3)');
    td1.textContent = label;

    // helper: cria célula input + −/+
    function makeInpCell(campo, val, minV, maxV, w){
      const td = document.createElement('td');
      td.style.textAlign = 'center';
      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;align-items:center;gap:2px;justify-content:center';

      const btnM = document.createElement('button');
      btnM.textContent = '−';
      btnM.style.cssText = 'width:18px;height:22px;background:var(--bg2);border:1px solid var(--border);' +
        'border-radius:3px 0 0 3px;color:var(--text2);font-size:13px;cursor:pointer;line-height:1;padding:0' +
        (ativo ? '' : ';opacity:.3;cursor:default');
      if(ativo){ btnM.dataset.g=id; btnM.dataset.c=campo;
        btnM.addEventListener('click', function(){ stepVol(this.dataset.g, this.dataset.c, -1); }); }

      const inpEl = document.createElement('input');
      inpEl.type = 'number'; inpEl.id = 'inp-' + id + '-' + campo;
      inpEl.value = val; inpEl.min = minV; inpEl.max = maxV;
      inpEl.disabled = !ativo;
      inpEl.style.cssText = 'width:' + w + 'px;background:var(--bg4);border-top:1px solid var(--border);' +
        'border-bottom:1px solid var(--border);border-left:none;border-right:none;padding:3px 2px;' +
        'color:var(--text);font-family:var(--mono);font-size:11px;outline:none;text-align:center' +
        (ativo ? '' : ';opacity:.3');
      if(ativo){ inpEl.dataset.g=id; inpEl.dataset.c=campo;
        inpEl.addEventListener('input', function(){ atualizarVolGrupo(this.dataset.g, this.dataset.c, this.value); }); }

      const btnP = document.createElement('button');
      btnP.textContent = '+';
      btnP.style.cssText = 'width:18px;height:22px;background:var(--bg2);border:1px solid var(--border);' +
        'border-radius:0 3px 3px 0;color:var(--text2);font-size:13px;cursor:pointer;line-height:1;padding:0' +
        (ativo ? '' : ';opacity:.3;cursor:default');
      if(ativo){ btnP.dataset.g=id; btnP.dataset.c=campo;
        btnP.addEventListener('click', function(){ stepVol(this.dataset.g, this.dataset.c, 1); }); }

      wrap.appendChild(btnM); wrap.appendChild(inpEl); wrap.appendChild(btnP);
      td.appendChild(wrap);
      return td;
    }

    const td2 = makeInpCell('semMin', semMin, 0, 50, 38);
    const td3 = makeInpCell('semMax', semMax, 0, 50, 38);
    const td4 = makeInpCell('serEx',  serEx,  1,  8, 38);

    const td5 = document.createElement('td');
    td5.style.cssText = 'font-family:var(--mono);font-size:11px;color:var(--accent);text-align:center;font-weight:600';
    td5.textContent = exRange;

    const td6 = document.createElement('td');
    td6.style.cssText = 'font-family:var(--mono);font-size:10px;color:var(--text3);text-align:center';
    td6.textContent = (mav_min||mev) + '–' + (mav_max||mrv);

    // td7: barra de status MEV/MRV
    const td7 = document.createElement('td');
    td7.style.cssText = 'min-width:100px';
    const barWrap = document.createElement('div');
    barWrap.style.cssText = 'display:flex;align-items:center;gap:6px';
    const barBg = document.createElement('div');
    barBg.style.cssText = 'flex:1;height:5px;background:var(--bg2);border-radius:3px;overflow:hidden';
    const barFill = document.createElement('div');
    barFill.id = 'bar-fill-' + id;
    barFill.style.cssText = 'height:100%;width:' + pct + '%;background:' + cor + ';border-radius:3px;transition:width .3s';
    barBg.appendChild(barFill);
    const statusSpan = document.createElement('span');
    statusSpan.id = 'bar-status-' + id;
    statusSpan.style.cssText = 'font-size:9px;font-family:var(--mono);color:' + cor +
      ';white-space:nowrap;min-width:64px;text-align:right';
    statusSpan.textContent = status;
    barWrap.appendChild(barBg); barWrap.appendChild(statusSpan);
    td7.appendChild(barWrap);

    // td_filtro: resumo de filtros clínicos Camada 3
    const tdFiltro = document.createElement('td');
    tdFiltro.style.cssText = 'text-align:center;font-size:10px;font-family:var(--mono)';
    try {
      const fc = contarFiltros(id);
      if(fc.bloqueado > 0){
        tdFiltro.innerHTML = `<span style="color:#ff5050" title="${fc.bloqueado} exercício(s) bloqueado(s) por flags clínicos">🔴 ${fc.bloqueado} bloq.</span>`;
      } else if(fc.prio > 0){
        tdFiltro.innerHTML = `<span style="color:var(--accent)" title="${fc.prio} exercício(s) prioritário(s) para correção">🟢 ${fc.prio} prior.</span>`;
      } else {
        tdFiltro.innerHTML = `<span style="color:var(--text3)">✓ ${fc.ok}</span>`;
      }
    } catch(e){ tdFiltro.textContent = '—'; }

    // td8: botão reset linha
    const td8 = document.createElement('td');
    td8.style.textAlign = 'center';
    const btnReset = document.createElement('button');
    btnReset.textContent = '↺';
    btnReset.title = 'Restaurar ' + label + ' para MEV–MRV';
    btnReset.style.cssText = 'width:22px;height:22px;background:var(--bg2);border:1px solid var(--border);border-radius:3px;color:var(--text3);font-size:11px;cursor:pointer;line-height:1;padding:0;transition:color .15s';
    btnReset.dataset.grupo = id;
    btnReset.addEventListener('mouseover', function(){ this.style.color='var(--text)'; });
    btnReset.addEventListener('mouseout',  function(){ this.style.color='var(--text3)'; });
    btnReset.addEventListener('click', function(){ resetarLinhaGrupo(this.dataset.grupo); });
    td8.appendChild(btnReset);

    [td0,td1,td2,td3,td4,td5,td6,td7,tdFiltro,td8].forEach(td => tr.appendChild(td));
    tbody.appendChild(tr);
  });
}

function stepVol(id, campo, delta){
  const inp = $('inp-' + id + '-' + campo);
  if(!inp) return;
  const novo = Math.max(0, (parseInt(inp.value)||0) + parseInt(delta));
  inp.value = novo;
  atualizarVolGrupo(id, campo, novo);
}

function toggleGrupo(id){
  const vg = _s3.volPorGrupo[id]; if(!vg) return;
  vg.ativo = !(vg.ativo !== false);
  if(!vg.ativo){
    // Guarda backup dos valores
    vg._semMinBak = vg.semMin;
    vg._semMaxBak = vg.semMax;
    vg._serExBak  = vg.serEx;
  } else {
    // Restaura — usa MAV do grupo se não tinha backup
    const grupo = GRUPOS_MAPA.find(g => g.id === id);
    vg.semMin = vg._semMinBak !== undefined ? vg._semMinBak : (grupo ? (grupo.mav_min||grupo.mev) : 10);
    vg.semMax = vg._semMaxBak !== undefined ? vg._semMaxBak : (grupo ? (grupo.mav_max||grupo.mrv) : 16);
    vg.serEx  = vg._serExBak  !== undefined ? vg._serExBak  : _s3.seriesPorEx;
    vg.sem    = Math.round((vg.semMin + vg.semMax) / 2);
  }
  renderTabelaVolumeGlobal();
  recalcularCargasDivisoes();
}

function atualizarNumEx(){
  resetSeriesGlobal();
}

function resetSeriesGlobal(){
  const novo = parseInt($('vol-series').value) || 3;
  _s3.seriesPorEx = novo;
  GRUPOS_MAPA.forEach(({id}) => {
    if(_s3.volPorGrupo[id]) _s3.volPorGrupo[id].serEx = novo;
  });
  renderTabelaVolumeGlobal();
  recalcularCargasDivisoes();
}

function resetarLinhaGrupo(id){
  const grupo = GRUPOS_MAPA.find(g => g.id === id); if(!grupo) return;
  const vg = _s3.volPorGrupo[id]; if(!vg) return;
  const s     = getActive();
  const nivel = val('pr-nivel') || s?.anamnese?.nivel || 'Inic';
  const obj   = selectedObj || 'Saude';
  const sexo  = s?.perfil?.sexo || 'M';
  const [semMin, semMax] = getVolumePorGrupo(id, sexo, nivel, obj);
  vg.semMin  = semMin;
  vg.semMax  = semMax;
  vg.serEx   = _s3.seriesPorEx;
  vg.sem     = Math.round((vg.semMin + vg.semMax) / 2);
  vg.ativo   = true;
  delete vg._chave; // força reinicialização na próxima entrada
  // Atualiza inputs visualmente
  const inpMin = $('inp-' + id + '-semMin');
  const inpMax = $('inp-' + id + '-semMax');
  const inpEx  = $('inp-' + id + '-serEx');
  if(inpMin) inpMin.value = vg.semMin;
  if(inpMax) inpMax.value = vg.semMax;
  if(inpEx)  inpEx.value  = _s3.seriesPorEx;
  atualizarLinhaTabela(id);
  recalcularCargasDivisoes();
}

function resetarVolumes(){
  iniciarTelaVolume();
  recalcularCargasDivisoes();
}

function atualizarVolGrupo(id, campo, valor){
  if(!_s3.volPorGrupo[id]) return;
  const vg = _s3.volPorGrupo[id];
  vg[campo] = parseInt(valor) || 0;
  // Recalcula semMid
  vg.sem = Math.round(((vg.semMin || 0) + (vg.semMax || 0)) / 2);
  atualizarLinhaTabela(id);
  recalcularCargasDivisoes();
}

function atualizarLinhaTabela(id){
  const grupo = GRUPOS_MAPA.find(g => g.id === id); if(!grupo) return;
  const {mev, mrv} = grupo;
  const vg = _s3.volPorGrupo[id]; if(!vg) return;
  const ativo  = vg.ativo !== false;
  const semMid = Math.round(((vg.semMin||0) + (vg.semMax||0)) / 2);
  const serEx  = vg.serEx || _s3.seriesPorEx;
  const cor    = ativo ? getVolColor(semMid, mev, mrv) : '#333';
  const status = getVolStatus(semMid, mev, mrv, ativo);
  const pct    = ativo && mrv > 0 ? Math.min(100, Math.round((semMid/mrv)*100)) : 0;
  const exRange = ativo ? calcExercicios(vg.semMin||0, vg.semMax||0, serEx) : '—';

  const row = $('row-' + id); if(!row) return;

  // Atualiza switch (track + thumb)
  const track = row.cells[0].querySelector('div > div');
  if(track){
    track.style.background = ativo ? '#22c55e' : '#444';
    track.style.borderColor = ativo ? '#16a34a' : '#555';
    const thumb = track.querySelector('div');
    if(thumb) thumb.style.left = ativo ? '15px' : '1px';
  }
  // Atualiza label opacity
  if(row.cells[1]) row.cells[1].style.color = ativo ? 'var(--text)' : 'var(--text3)';
  // Atualiza exercícios
  if(row.cells[5]) row.cells[5].textContent = exRange;
  // Atualiza status (barra + label) — via ID direto
  const fill = $('bar-fill-' + id);
  if(fill){ fill.style.width = pct + '%'; fill.style.background = cor; }
  const span = $('bar-status-' + id);
  if(span){ span.textContent = status; span.style.color = cor; }
  // Opacidade da linha
  row.style.opacity = ativo ? '1' : '0.45';
}


function getVolColor(series, mev, mrv){
  if(series === 0)         return '#333333';
  if(series < mev - 1)    return '#ef4444';
  if(series <= mev + 1)   return '#f97316';
  if(series <= mrv - 1)   return '#22c55e';
  if(series <= mrv + 1)   return '#f97316';
  return '#ef4444';
}

function getVolStatus(series, mev, mrv, ativo){
  if(!ativo)               return 'OFF';
  if(series === 0)         return 'Zerado';
  if(series < mev - 1)    return 'Crítico ↓';
  if(series <= mev + 1)   return 'Aceitável';
  if(series <= mrv - 1)   return 'Ideal';
  if(series <= mrv + 1)   return 'Aceitável';
  return 'Crítico ↑';
}

// ── MAPA (no-op — status integrado na tabela) ─────────────────────────────────

function renderMapaMuscular(){
  // Status integrado na tabela — sem painel separado
}

// ── TELA B: DIVISÃO ────────────────────────────────────────────────────────────


// Volume Total da Sessão — faixas oficiais (vault REF-Volume-Derivado-MAV §9, 2026-06)
// Substitui a tabela antiga de valor único. Família segue FAMILIA_OBJETIVO (Hip/Forca/Resist/Reab/Gestacao).
const LIM_SESSAO_REF = {
  //          Inic     Inte     Avan
  Hip:      { Inic:[15,20], Inte:[18,24], Avan:[20,28] },
  Forca:    { Inic:[10,15], Inte:[12,18], Avan:[15,20] },
  Emagr:    { Inic:[15,20], Inte:[18,24], Avan:[20,28] },
  Comp:     { Inic:[15,20], Inte:[18,24], Avan:[20,28] },
  Resist:   { Inic:[16,24], Inte:[20,30], Avan:[24,36] },
  CardioR:  { Inic:[16,24], Inte:[20,30], Avan:[24,36] },
  Func:     { Inic:[16,24], Inte:[20,30], Avan:[24,36] },
  Saude:    { Inic:[16,24], Inte:[20,30], Avan:[24,36] },
  Esport:   { Inic:[10,15], Inte:[12,18], Avan:[15,20] },
  Reab:     { Inic:[2,4],   Inte:[4,8],   Avan:[6,12] },
  Envelhec: { Inic:[16,24], Inte:[20,30], Avan:[24,36] },
  Gestacao: { Inic:[10,10], Inte:[20,20], Avan:[20,30] },
};

// 3 fases fixas dentro da faixa de Volume da Sessão (vault §10.2-bis)
// Progride só se a ficha IMEDIATAMENTE anterior foi do mesmo objetivo — qualquer
// quebra de sequência (inclusive Reabilitação) reseta para 'baixa'.
function getFaseVolumeSessao(objetivoAtual, objetivoUltimaFicha, faseUltimaFicha){
  if(objetivoUltimaFicha == null || objetivoUltimaFicha !== objetivoAtual){
    return 'baixa'; // sem histórico ou sequência quebrada → reinicia
  }
  if(faseUltimaFicha === 'baixa') return 'media';
  return 'alta'; // já estava em média ou alta → avança/trava em alta
}

function getVolumeSessaoPorFase(faixaMin, faixaMax, fase){
  const largura = faixaMax - faixaMin;
  const terco = largura / 3;
  switch(fase){
    case 'baixa': return Math.round(faixaMin);
    case 'media': return Math.round(faixaMin + terco);
    case 'alta':  return Math.round(faixaMin + 2 * terco);
    default: return Math.round(faixaMin);
  }
}

function getDivisoesDisponiveis(numDias, objetivo){
  const mapa = {
    2:[
      {nome:'Full Body A/B',               treinos:['A — Empurrar+Core','B — Puxar+Pernas'],                                              chave:2},
      {nome:'Full Body A/B — Superior/Inferior', treinos:['A — Membros Superiores+Core','B — Membros Inferiores+Core'],                    chave:'2b'},
    ],
    3:[
      {nome:'Push / Pull / Legs (PPL)',     treinos:['A — Peito·Tríceps·Ombro','B — Pernas','C — Costas·Bíceps·Core'],                    chave:3},
      {nome:'Full Body A/B/A',             treinos:['A — Ênf. Superior Emp.','B — Ênf. Inferior','A — Ênf. Superior Pux.'],               chave:'3b'},
      {nome:'Full Body Metabólico',        treinos:['A — Metabólico (MMSS+Core)','B — Metabólico (MMII+Core)','A — Metabólico (Full)'],   chave:'3c',
        objetivos_compativeis:['Emagr','Comp','CardioR']},
    ],
    4:[
      {nome:'Upper / Lower × 2',           treinos:['A — Sup. Emp.','B — Inferior','C — Sup. Pux.','D — Inf.+Core'],                      chave:'4b'},
      {nome:'Push / Pull / Legs + Ombros', treinos:['A — Peito·Trí','B — Costas·Bíc','C — Pernas','D — Ombros·Core'],                    chave:4},
    ],
    5:[
      {nome:'PPL + Especialização',        treinos:['A — Peito','B — Costas·Bíc','C — Pernas','D — Ombros','E — Post.·Trí·Core'],         chave:5},
      {nome:'Upper/Lower + PPL',           treinos:['A — Superior','B — Inferior','C — Peito·Trí','D — Costas·Bíc','E — Pernas+Core'],    chave:'5b'},
    ],
    6:[
      {nome:'PPL × 2',                     treinos:['A — Peito·Trí','B — Costas·Bíc','C — Quad·Glút','D — Ombros','E — Post.·Pant','F — Core'], chave:6},
      {nome:'Upper/Lower × 3',             treinos:['A — Sup. Emp.','B — Inferior','C — Sup. Pux.','D — Inferior+Core','E — Ombros+Core','F — Especialização'], chave:'6b'},
    ],
  };
  const base = (mapa[numDias] || mapa[3]).slice();

  // ── Mescla modelos salvos pelo personal (LIBS.distribuicao) compatíveis com numDias ──
  // Sem isto, um modelo salvo nunca aparecia como opção real na prescrição — só existia
  // na aba de gestão de biblioteca (renderDistrib), desconectada deste fluxo.
  (LIBS.distribuicao || []).forEach(d => {
    if(!d.dias || !d.dias.length) return;
    if(d.dias.length !== numDias) return; // só oferece modelos com o número certo de sessões
    const chave = 'lib-' + d.id;
    const divisao = converterDivisaoLibParaTemplate(d);
    if(!divisao) return;
    DIVISOES_TEMPLATES[chave] = divisao;
    base.push({
      nome: '★ ' + d.nome,
      treinos: d.dias.map(dia => (dia.label||'Treino') + (dia.enfase ? ' — '+dia.enfase : '')),
      chave,
      _libId: d.id,
      objetivos_compativeis: d.objetivos_compativeis || [],
    });
  });

  // ── Filtro por objetivo ────────────────────────────────────────────────
  // Um modelo sem objetivos_compativeis definido (ou array vazio) é considerado
  // genérico/universal — a maioria das divisões (PPL, Upper/Lower, Full Body
  // clássico) é só um "contêiner" de sessões, serve pra qualquer objetivo.
  // Só filtramos modelos que foram explicitamente marcados como específicos
  // (ex: Full Body Metabólico → Emagrecimento/Composição/Cardio), pra não
  // esconder, por exemplo, um Push/Pull/Legs de quem escolheu Hipertrofia.
  if(!objetivo) return base;
  return base.filter(op => !op.objetivos_compativeis || !op.objetivos_compativeis.length || op.objetivos_compativeis.includes(objetivo));
}

// Converte um item de LIBS.distribuicao (nomes de grupo com acento, ex: "Reto Abdominal")
// para o formato DIVISOES_TEMPLATES (ids sem acento de GRUPOS_MAPA, ex: "RetoAbdominal").
// Usa textoIgual/normalizarIdentificador — mesma técnica que corrigiu o mesmo tipo de
// descasamento entre GRUPOS_MAPA e DB_EXERCICIOS. Grupos sem correspondência em
// GRUPOS_MAPA (ex: "Adutores", "Transverso do Abdômen") são ignorados silenciosamente,
// pois não fazem parte dos 12 grupos oficiais de volume do sistema.
function converterDivisaoLibParaTemplate(d){
  const def = [];
  const label = [];
  d.dias.forEach((dia, i) => {
    const grupos = (dia.grupos||[])
      .map(nomeDisplay => {
        const achado = GRUPOS_MAPA.find(gm => textoIgual(gm.id, nomeDisplay));
        return achado ? { g: achado.id } : null;
      })
      .filter(Boolean);
    def.push(grupos);
    label.push(dia.label || ('Treino ' + String.fromCharCode(65+i)));
  });
  if(!def.some(s => s.length)) return null; // nenhum grupo reconhecido em nenhuma sessão
  return { default: def, label };
}

const DIVISOES_TEMPLATES = {
  2:   {default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'},{g:'RetoAbdominal'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'}]],
        label:['Treino A — Empurrar+Core','Treino B — Puxar+Pernas']},
  3:   {default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'}],
          [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Peito·Tríceps·Ombro','Treino B — Pernas','Treino C — Costas·Bíceps·Core']},
  '3b':{default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'},{g:'Quadriceps'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Peitoral'},{g:'Latissimo'},{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Full Body Emp.','Treino B — Full Body Pux.','Treino C — Full Body Core']},
  4:   {default:[
          [{g:'Peitoral'},{g:'Triceps'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'}],
          [{g:'Quadriceps'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Deltoide'},{g:'Isquiossurais'},{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Peito·Tríceps','Treino B — Costas·Bíceps','Treino C — Pernas','Treino D — Ombros·Post·Core']},
  '4b':{default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'}],
          [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'}],
          [{g:'Quadriceps'},{g:'Gluteos'},{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Superior Emp.','Treino B — Inferior','Treino C — Superior Pux.','Treino D — Inferior+Core']},
  5:   {default:[
          [{g:'Peitoral'}],
          [{g:'Latissimo'},{g:'Biceps'}],
          [{g:'Quadriceps'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Deltoide'},{g:'Trapezio'}],
          [{g:'Isquiossurais'},{g:'Triceps'},{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Peito','Treino B — Costas·Bíceps','Treino C — Pernas','Treino D — Ombros','Treino E — Post.·Tríceps·Core']},
  6:   {default:[
          [{g:'Peitoral'},{g:'Triceps'}],
          [{g:'Latissimo'},{g:'Biceps'}],
          [{g:'Quadriceps'},{g:'Gluteos'}],
          [{g:'Deltoide'},{g:'Trapezio'}],
          [{g:'Isquiossurais'},{g:'Panturrilhas'}],
          [{g:'RetoAbdominal'},{g:'Obliquo'}]],
        label:['Treino A — Peito·Trí','Treino B — Costas·Bíc','Treino C — Quad·Glút','Treino D — Ombros','Treino E — Post.·Pant','Treino F — Core']},
  // ── Divisões adicionadas do vault ACM ──────────────────────────────────
  '2b': {default:[
          [{g:'Peitoral'},{g:'Deltoide'},{g:'Triceps'},{g:'RetoAbdominal'},{g:'Obliquo'}],
          [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'},{g:'Latissimo'},{g:'Biceps'}]],
         label:['Treino A — Membros Superiores+Core','Treino B — Membros Inferiores+Puxar']},
  // Full Body Metabólico — 3 sessões com alta densidade metabólica (vault Saude/Emagr 3x)
  '3c': {default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'},{g:'RetoAbdominal'}],
          [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'},{g:'Obliquo'}]],
         label:['Treino A — MMSS Empurrar+Core','Treino B — Membros Inferiores','Treino C — MMSS Puxar+Core']},
  // Upper/Lower + PPL — 5 sessões (vault Hip/Emagr 5x avançado)
  '5b': {default:[
          [{g:'Peitoral'},{g:'Deltoide'},{g:'Triceps'},{g:'RetoAbdominal'}],
          [{g:'Quadriceps'},{g:'Isquiossurais'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'}],
          [{g:'Quadriceps'},{g:'Gluteos'},{g:'Isquiossurais'},{g:'Obliquo'}]],
         label:['Treino A — Superior','Treino B — Inferior','Treino C — Push','Treino D — Pull','Treino E — Pernas+Core']},
  // Upper/Lower × 3 — 6 sessões com especialização
  '6b': {default:[
          [{g:'Peitoral'},{g:'Triceps'},{g:'Deltoide'}],
          [{g:'Quadriceps'},{g:'Gluteos'},{g:'Panturrilhas'}],
          [{g:'Latissimo'},{g:'Biceps'},{g:'Trapezio'}],
          [{g:'Isquiossurais'},{g:'Gluteos'},{g:'RetoAbdominal'},{g:'Obliquo'}],
          [{g:'Deltoide'},{g:'Trapezio'},{g:'Triceps'},{g:'RetoAbdominal'}],
          [{g:'Quadriceps'},{g:'Latissimo'},{g:'Peitoral'},{g:'Obliquo'}]],
         label:['Treino A — Sup. Emp.','Treino B — Inferior A','Treino C — Sup. Pux.','Treino D — Inf+Core','Treino E — Ombros+Trí','Treino F — Full Body']},
};


// ── LIMITE DE SÉRIES POR SESSÃO ────────────────────────────────────────────

function calcLimSessaoRecomendado(){
  const s     = getActive(); if(!s) return 20;
  const nivel = val('pr-nivel') || s.anamnese?.nivel || 'Inic';
  const obj   = selectedObj || 'Saude';
  const faixa = (LIM_SESSAO_REF[obj] || LIM_SESSAO_REF['Saude'])[nivel] || [16,24];

  // Progressão por 3 fases (vault §10.2-bis) — consulta apenas a última ficha
  // criada para este aluno (objetivo + fase), não um histórico completo.
  const ultima = s.ultimaFaseVolSessao || null;
  const fase = getFaseVolumeSessao(obj, ultima?.objetivo ?? null, ultima?.fase ?? null);
  _s3._faseVolSessaoAtual = fase; // lido por aprovarTreinoMotor para persistir junto da ficha aprovada

  return getVolumeSessaoPorFase(faixa[0], faixa[1], fase);
}

function iniciarLimiteSessao(){
  if(_s3.limSessao === undefined){
    _s3.limSessao = calcLimSessaoRecomendado();
  }
  const inp = $('lim-sessao');
  if(inp) inp.value = _s3.limSessao;

  // Listeners botões +/-
  const btnM = $('btn-lim-menos');
  const btnP = $('btn-lim-mais');
  if(btnM && !btnM._bound){
    btnM._bound = true;
    btnM.addEventListener('click', () => {
      const inp = $('lim-sessao');
      inp.value = Math.max(4, (_s3.limSessao||20) - 1);
      _s3.limSessao = parseInt(inp.value);
      onLimSessaoChange();
    });
  }
  if(btnP && !btnP._bound){
    btnP._bound = true;
    btnP.addEventListener('click', () => {
      const inp = $('lim-sessao');
      inp.value = Math.min(60, (_s3.limSessao||20) + 1);
      _s3.limSessao = parseInt(inp.value);
      onLimSessaoChange();
    });
  }
  atualizarBadgeLimite();
}

function onLimSessaoChange(){
  const v = parseInt($('lim-sessao')?.value) || 20;
  _s3.limSessao = v;
  atualizarBadgeLimite();
  // Recalcula média/desvio do header de cada card — dependem do limite de sessão
  // através de calcSeriesSessaoComLimite. Preserva chaves de edição em andamento
  // (op.chave já apontando pra 'edit-i'/'lib-id') recalculando só cargasSessao/media/desvio,
  // sem regenerar a lista de opções do zero (regenerá-la perderia o ajuste em curso).
  if(_s3.divisaoOpcoes){
    const lim = _s3.limSessao;
    _s3.divisaoOpcoes.forEach((op, opIdx) => {
      const numDias = parseInt(val('pr-frequencia')||'3') || 3;
      const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
      op.cargasSessao = divisao.default.map(sessaoGrupos =>
        calcSeriesSessaoOuZerado(sessaoGrupos, lim, divisao).totalAlvo
      );
      const media = op.cargasSessao.reduce((a,b)=>a+b,0) / op.cargasSessao.length;
      op.media  = Math.round(media);
      op.desvio = Math.round(Math.sqrt(op.cargasSessao.reduce((s,v)=>s+Math.pow(v-media,2),0) / op.cargasSessao.length) * 10) / 10;
      // Mudar o limite invalida os valores congelados anteriormente (foram
      // calculados pro limite antigo) — limpa e re-congela com o novo limite,
      // só na divisão atualmente selecionada (as outras opções da lista nem
      // têm overrides, só importa pra quem está sendo de fato editado).
      if(opIdx === _s3.divisaoIdx && _s3._sessionOverrides && !divisao._naoCalculada){
        divisao.default.forEach((sessao, ti) => {
          sessao.forEach(({g}) => { delete _s3._sessionOverrides[String(ti) + '-' + g]; });
        });
        dcCongelarValoresAtuais(divisao);
      }
    });
  }
  renderTelaDivisao();
}

function atualizarBadgeLimite(){
  const badge = $('lim-badge'); if(!badge) return;
  const rec = calcLimSessaoRecomendado();
  const lim = _s3.limSessao || rec;
  const baseCss = 'font-size:13px;font-family:var(--mono);padding:1px 5px;border-radius:3px;margin-left:4px;display:inline-block;min-width:8.5em;text-align:center;white-space:nowrap;flex-shrink:0;';
  if(Math.abs(lim - rec) <= 2){
    badge.textContent = 'Recomendado';
    badge.style.cssText = baseCss + 'background:rgba(34,197,94,.15);color:#22c55e;border:1px solid rgba(34,197,94,.3)';
  } else if(lim < rec - 2){
    badge.textContent = 'Conservador';
    badge.style.cssText = baseCss + 'background:rgba(249,115,22,.15);color:#f97316;border:1px solid rgba(249,115,22,.3)';
  } else {
    badge.textContent = 'Intenso';
    badge.style.cssText = baseCss + 'background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.3)';
  }
}

// Calcula série-alvo por grupo em uma sessão, respeitando o limite
// Parte do mínimo e sobe até o máximo sem ultrapassar o limite global da sessão
function calcExPorGrupo(semVol, freq, serEx, minimo){
  // Para grupos com freq > 1: arredonda volume semanal para número par antes de dividir
  let semAdj = semVol;
  if(freq > 1 && semAdj % 2 !== 0) semAdj = semAdj + 1; // próximo par
  const exSessao = Math.max(minimo, Math.floor(semAdj / freq / serEx));
  return exSessao;
}

// ══════════════════════════════════════════════════════════════════════════
// MOTOR DE VOLUME — calcula TODA a divisão de uma vez (visão semanal completa),
// porque a regra de mínimo semanal depende de somar todas as sessões onde um
// grupo aparece, não pode ser decidida sessão por sessão isoladamente.
//
// Regra validada com o personal trainer em 3 exemplos reais:
// 1. Todo grupo começa em 1 exercício em cada sessão onde aparece.
// 2. SUBIDA PRO MÍNIMO SEMANAL, em rodadas: cada rodada percorre as sessões em
//    ordem e, dentro de cada sessão, os grupos em ordem de hierarquia (#1
//    primeiro). Para cada grupo ainda abaixo do PRÓPRIO mínimo semanal
//    (somando todas as sessões onde aparece), tenta subir 1 exercício — só
//    aplica se isso não estourar o limite da sessão onde está essa ocorrência.
//    Se estourar, pula (tenta de novo na rodada seguinte, caso a situação
//    mude por outro grupo ter parado de subir). Repete até todos baterem o
//    mínimo semanal ou nenhuma sessão conseguir mais subir ninguém que precise
//    (situação travada — fica abaixo da faixa, sistema nunca remove/move nada,
//    só sinaliza visualmente).
// 3. DISTRIBUIÇÃO DA SOBRA: sessões com margem restante depois do passo 2
//    sobem o #1 (e seguintes, em rodada) até bater o limite ou o próprio teto
//    semanal (exMax) — só entre os grupos que já estão naquela sessão.
// ══════════════════════════════════════════════════════════════════════════
const _cacheVolumeDivisao = { chave: null, resultado: null };

function calcVolumeDivisaoCompleta(divisao, limSessao){
  // Cache simples: evita reprocessar a mesma divisão+limite repetidamente
  // quando chamada em sequência dentro do mesmo .map()/.forEach() de render.
  const chaveCache = JSON.stringify({ d: divisao.default, lim: limSessao, vp: _s3.volPorGrupo });
  if(_cacheVolumeDivisao.chave === chaveCache) return _cacheVolumeDivisao.resultado;

  const serExGlobal = _s3.seriesPorEx || 3;
  const volPorGrupo = _s3.volPorGrupo;

  // 1. Monta estrutura por sessão, partindo de 1 exercício.
  const sessoesProcessadas = divisao.default.map(sessaoGrupos =>
    sessaoGrupos.map(({g}, idx) => {
      const vg    = volPorGrupo[g];
      const ativo = vg && vg.ativo !== false;
      if(!ativo) return { g, idx, ativo:false };
      const freq_g = Math.max(1, vg.freq || 1);
      const serEx  = vg.serEx || serExGlobal;
      const semMinRaw = vg.semMin || 0;
      const semMaxRaw = vg.semMax || 0;
      const semMinAdj = freq_g > 1 && semMinRaw % 2 !== 0 ? semMinRaw + 1 : semMinRaw;
      const semMaxAdj = freq_g > 1 && semMaxRaw % 2 !== 0 ? semMaxRaw + 1 : semMaxRaw;
      return { g, idx, serEx, freq: freq_g, semMin: semMinAdj, semMax: semMaxAdj, exAlvo: 1, ativo: true };
    })
  );

  // 2. Mapa grupo -> todas as ocorrências (pode estar em mais de uma sessão).
  const porGrupo = {};
  sessoesProcessadas.forEach(sessao => sessao.forEach(item => {
    if(!item.ativo) return;
    if(!porGrupo[item.g]) porGrupo[item.g] = [];
    porGrupo[item.g].push(item);
  }));

  function serSemanalAtual(g){
    return (porGrupo[g]||[]).reduce((s,item) => s + item.exAlvo*item.serEx, 0);
  }
  function totalSessaoAtual(ti){
    return sessoesProcessadas[ti].reduce((s,item) => item.ativo ? s + item.exAlvo*item.serEx : s, 0);
  }

  // 3. SUBIDA PRO MÍNIMO SEMANAL — em rodadas, nunca estoura sessão nenhuma.
  let mudouAlgumaCoisa = true;
  while(mudouAlgumaCoisa){
    mudouAlgumaCoisa = false;
    for(let ti = 0; ti < sessoesProcessadas.length; ti++){
      const sessao = sessoesProcessadas[ti];
      for(let idx = 0; idx < sessao.length; idx++){
        const item = sessao[idx];
        if(!item.ativo) continue;
        if(serSemanalAtual(item.g) >= item.semMin) continue; // já bateu o próprio mínimo
        if(totalSessaoAtual(ti) + item.serEx > limSessao) continue; // estouraria — pula
        item.exAlvo++;
        mudouAlgumaCoisa = true;
      }
    }
  }

  // 4. DISTRIBUIÇÃO DA SOBRA — agora coordenada GLOBALMENTE entre TODAS as
  // sessões ao mesmo tempo (não sessão por sessão até esgotar). Cada rodada
  // percorre TODAS as sessões dando no máximo +1 exercício por ocorrência,
  // respeitando o teto semanal (semMax) do grupo e o limite de cada sessão.
  // Sem isso, um grupo repetido em mais de uma sessão (ex: Peitoral 2x/sem)
  // tinha a PRIMEIRA sessão onde aparece consumindo toda a margem semanal
  // restante antes das outras sessões do mesmo grupo serem visitadas — bug
  // real, confirmado: 3 sessões idênticas do mesmo grupo ficavam com
  // 18s/6s/6s em vez de ~9s/9s/9s.
  let sobrouMargemGlobal = true;
  while(sobrouMargemGlobal){
    sobrouMargemGlobal = false;
    for(let ti = 0; ti < sessoesProcessadas.length; ti++){
      const sessao = sessoesProcessadas[ti];
      for(let idx = 0; idx < sessao.length; idx++){
        const item = sessao[idx];
        if(!item.ativo) continue;
        if(serSemanalAtual(item.g) + item.serEx > item.semMax) continue; // teto semanal
        if(totalSessaoAtual(ti) + item.serEx > limSessao) continue;
        item.exAlvo++;
        sobrouMargemGlobal = true;
      }
    }
  }

  // 5. Monta resultado por sessão (formato compatível com o uso anterior).
  // Grupos INATIVOS (desligados na tela de Volume) são EXCLUÍDOS aqui, não
  // mapeados para uma entrada zerada — uma entrada fantasma zerada consumia
  // uma posição no array sem nunca ser desenhada na tela, o que desalinhava
  // o índice usado pelo zebrado (linhas claras/escuras alternadas) de todas
  // as linhas seguintes, e também acabava sendo congelada como override
  // fantasma sempre que a divisão era selecionada/recalculada.
  const resultado = sessoesProcessadas.map(sessao => {
    const grupos = sessao.filter(item => item.ativo).map(item => {
      const semAtual = serSemanalAtual(item.g);
      // forcouAbaixoDoMinimo: travado por falta de margem em TODAS as sessões onde aparece
      const forcou = semAtual < item.semMin;
      return {
        g: item.g, idx: item.idx, exAlvo: item.exAlvo, serEx: item.serEx, freq: item.freq,
        exMin: Math.max(1, Math.ceil(item.semMin/item.freq/item.serEx)), // referência informativa
        exMax: Math.max(1, Math.floor(item.semMax/item.freq/item.serEx)),
        serSessao: item.exAlvo * item.serEx,
        serSemana: semAtual,
        exSemana: item.exAlvo * item.freq,
        exMinSem: item.semMin, exMaxSem: item.semMax,
        serMinSem: item.semMin, serMaxSem: item.semMax,
        _forcouAbaixoDoMinimo: forcou,
      };
    });
    const totalAlvo = grupos.reduce((s,g) => s + g.serSessao, 0);
    const forcouAbaixoDoMinimo = grupos.some(g => g._forcouAbaixoDoMinimo);
    const estourou = totalAlvo > limSessao;
    const pct = limSessao > 0 ? Math.round((totalAlvo/limSessao)*100) : 0;
    const totalMin = grupos.reduce((s,g) => s + g.serSessao, 0); // referência informativa
    return { grupos, totalMin, totalAlvo, limSessao, estourou, forcouAbaixoDoMinimo, pct };
  });

  _cacheVolumeDivisao.chave = chaveCache;
  _cacheVolumeDivisao.resultado = resultado;
  return resultado;
}

// Mantém a assinatura antiga (por sessão) pra compatibilidade com os pontos de
// chamada existentes — internamente delega pro motor de divisão completa,
// já que a regra de mínimo semanal exige ver todas as sessões de uma vez.
// Mantém a assinatura antiga (por sessão) pra compatibilidade com os pontos de
// chamada existentes — internamente delega pro motor de divisão completa, já
// que a regra de mínimo semanal exige ver todas as sessões de uma vez.
// Aceita um terceiro parâmetro opcional `divisaoForcada`: usado por chamadores
// que já sabem exatamente qual divisão estão processando (ex: onLimSessaoChange
// iterando por TODAS as opções, não só a selecionada) — sem isso, o código
// inferia a divisão via _s3.divisaoIdx, o que processava a divisão ERRADA
// sempre que o loop estivesse processando uma opção diferente da selecionada.
function calcSeriesSessaoComLimite(sessaoGrupos, limSessao, divisaoForcada){
  let divisao = divisaoForcada;
  if(!divisao){
    const op = _s3.divisaoOpcoes && _s3.divisaoOpcoes[_s3.divisaoIdx];
    divisao = op && DIVISOES_TEMPLATES[op.chave];
  }
  if(divisao){
    const ti = divisao.default.indexOf(sessaoGrupos);
    if(ti >= 0){
      const resultadoCompleto = calcVolumeDivisaoCompleta(divisao, limSessao);
      return resultadoCompleto[ti];
    }
  }
  // Fallback: sessaoGrupos não pertence à divisão informada/selecionada (ex:
  // chamada isolada/teste) — processa como divisão de 1 sessão só, mesma regra.
  const divisaoIsolada = { default: [sessaoGrupos] };
  return calcVolumeDivisaoCompleta(divisaoIsolada, limSessao)[0];
}

// Wrapper usado nos pontos de RENDERIZAÇÃO de uma divisão já selecionada
// (resumo semanal e acordeão por sessão). Se a divisão de trabalho estiver
// marcada como _naoCalculada (nasceu de "⚡ Divisão Rápida" e ainda não passou
// por "Recalcular volume"), devolve tudo zerado em vez de calcular de verdade
// — o personal monta a composição como quiser, sem o sistema preencher
// número nenhum, até clicar explicitamente em recalcular. Modelos prontos
// (templates fixos, LIBS, ou um modelo existente em ajuste via dc*) nunca têm
// essa flag, então continuam calculando normalmente como sempre fizeram.
function calcSeriesSessaoOuZerado(sessaoGrupos, limSessao, divisao){
  if(divisao && divisao._naoCalculada){
    const grupos = sessaoGrupos.map(({g}, idx) => ({
      g, idx, exMin:0, exMax:0, exAlvo:0, serEx:0, freq:0,
      serSessao:0, serSemana:0, exSemana:0, exMinSem:0, exMaxSem:0, serMinSem:0, serMaxSem:0,
    }));
    return { grupos, totalMin:0, totalAlvo:0, limSessao, estourou:false, forcouAbaixoDoMinimo:false, pct:0 };
  }
  return calcSeriesSessaoComLimite(sessaoGrupos, limSessao, divisao);
}

// Retorna o resultado de uma sessão usando os valores REALMENTE EXIBIDOS nas
// linhas — override manual (_sessionOverrides) tem prioridade sobre o cálculo
// puro da engine, exatamente como cada linha individual já decide o que
// mostrar. Usado em todo lugar que soma/totaliza uma sessão (badge do header,
// resumo semanal) — sem isso, reordenar um grupo (que não toca em overrides,
// só troca posição) fazia o BADGE mostrar o total recalculado do zero,
// enquanto as linhas continuavam mostrando os valores congelados antigos,
// gerando uma divergência visual real entre o número grande e a soma das
// linhas abaixo dele (bug confirmado: badge ia de 16s pra 28s sem nenhuma
// linha mudar).
function calcSeriesSessaoExibida(sessaoGrupos, limSessao, divisao, ti){
  const calc = calcSeriesSessaoOuZerado(sessaoGrupos, limSessao, divisao);
  const overrides = _s3._sessionOverrides || {};
  let totalAlvo = 0;
  const grupos = calc.grupos.map(g => {
    const ov = overrides[String(ti) + '-' + g.g];
    const exAlvo = ov ? ov.numEx : g.exAlvo;
    const serEx  = ov ? ov.serEx : g.serEx;
    const serSessao = ov ? ov.serSessao : g.serSessao;
    totalAlvo += serSessao;
    return { ...g, exAlvo, serEx, serSessao };
  });
  const estourou = totalAlvo > limSessao;
  const pct = limSessao > 0 ? Math.round((totalAlvo/limSessao)*100) : 0;
  return { ...calc, grupos, totalAlvo, estourou, pct };
}

// Prepara a caixa "Modelos de Divisão" — chamada junto com iniciarTelaVolume()
// ao entrar no step 2, já que Volume e Divisão agora vivem na mesma tela,
// lado a lado, e não são mais telas navegáveis separadamente (voltarVolume/
// irParaDivisao existiam quando eram sub-telas alternadas; hoje as duas caixas
// ficam sempre visíveis e sincronizadas).
function irParaDivisao(){
  const s       = getActive(); if(!s) return;
  const freq    = val('pr-frequencia') || s.anamnese?.frequencia || '3x';
  const numDias = parseInt(freq) || 3;
  const obj     = selectedObj || 'Saude';

  // Preserva edições de divisão em andamento (dc*) ao apenas re-entrar nesta
  // tela — só gera opções do zero na primeira visita, ou quando o nº de
  // sessões ou o objetivo (que filtra quais modelos aparecem) mudou de fato.
  const chaveGeracao = numDias + '|' + obj;
  const jaTinhaOpcoes = _s3.divisaoOpcoes && _s3.divisaoOpcoes.length && _s3._divChaveGeracao === chaveGeracao;
  if(!jaTinhaOpcoes){
    _s3.divisaoOpcoes     = gerarDivisoesBalanceadas(numDias, obj);
    _s3._divNumDias       = numDias;
    _s3._divChaveGeracao  = chaveGeracao;
    _s3.divisaoIdx        = Math.min(_s3.divisaoIdx||0, _s3.divisaoOpcoes.length - 1);
  }

  requestAnimationFrame(() => {
    // Reseta limSessao se mudou objetivo/nível
    const chave = (selectedObj||'') + (val('pr-nivel')||'');
    if(_s3._limChave !== chave){ _s3.limSessao = undefined; _s3._limChave = chave; }
    iniciarLimiteSessao();
    // Congela o card selecionado por padrão com o limite já resolvido e
    // estável — feito aqui (depois de iniciarLimiteSessao), não antes, pra
    // não congelar com um limite que está prestes a ser invalidado pela
    // checagem de objetivo/nível acima.
    if(!jaTinhaOpcoes){
      const opInicial = _s3.divisaoOpcoes[_s3.divisaoIdx];
      const divisaoInicial = opInicial && DIVISOES_TEMPLATES[opInicial.chave];
      if(divisaoInicial && !divisaoInicial._naoCalculada){
        sincronizarFreqGrupos(); // limpa grupos inativos fantasmas antes de congelar
        dcCongelarValoresAtuais(divisaoInicial);
      }
    }
    renderTelaDivisao();
  });
}

// Recalcula média/desvio de cada modelo de divisão já listado, sem regerar a
// lista nem reordenar os cards — chamado toda vez que o volume por grupo muda
// (Grupo 1 alimentando a Tela de Divisão ao vivo, sem precisar de um botão
// "Avançar"). Reordenar aqui bagunçaria a posição dos cards enquanto o
// personal ainda está ajustando os números.
function recalcularCargasDivisoes(){
  if(!_s3.divisaoOpcoes || !_s3.divisaoOpcoes.length) return;
  const lim = _s3.limSessao || calcLimSessaoRecomendado();
  _s3.divisaoOpcoes.forEach(op => {
    const divisao = DIVISOES_TEMPLATES[op.chave];
    if(!divisao) return;
    const cargasSessao = divisao.default.map(sessaoGrupos =>
      calcSeriesSessaoOuZerado(sessaoGrupos, lim, divisao).totalAlvo
    );
    const media  = cargasSessao.reduce((a,b) => a+b, 0) / cargasSessao.length;
    const desvio = Math.sqrt(cargasSessao.reduce((s,v) => s + Math.pow(v-media,2), 0) / cargasSessao.length);
    op.cargasSessao = cargasSessao;
    op.media  = Math.round(media);
    op.desvio = Math.round(desvio*10)/10;
  });
  renderTelaDivisao();
}

function gerarDivisoesBalanceadas(numDias, objetivo){
  const templates = getDivisoesDisponiveis(numDias, objetivo || selectedObj || 'Saude');
  const lim = _s3.limSessao || calcLimSessaoRecomendado();
  return templates.map(op => {
    const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
    // Usa o cálculo real pós-corte de limite (calcSeriesSessaoComLimite) — o mesmo
    // que é exibido em cada sessão do acordeão — em vez do volume semanal alvo bruto
    // por grupo (vg.sem), que ignorava a divisão por frequência e o corte de limite.
    // Sem isso, o header mostrava média/desvio inconsistentes com o que cada sessão
    // de fato entrega (ex: 3 sessões a 20/20s reais, mas header dizia 62/54/59s).
    const cargasSessao = divisao.default.map(sessaoGrupos =>
      calcSeriesSessaoOuZerado(sessaoGrupos, lim, divisao).totalAlvo
    );
    const media  = cargasSessao.reduce((a,b) => a+b, 0) / cargasSessao.length;
    const desvio = Math.sqrt(cargasSessao.reduce((s,v) => s + Math.pow(v-media,2), 0) / cargasSessao.length);
    return { ...op, cargasSessao, media: Math.round(media), desvio: Math.round(desvio*10)/10 };
  }).sort((a,b) => a.desvio - b.desvio);
}

// ══════════════════════════════════════════════════════════════════════════
// EDITOR LEVE DE DIVISÃO (dc*) — ajuste rápido de sessões direto no acordeão,
// sem modal, sem formulário de critérios. Por padrão NÃO salva nada: o ajuste
// vive só em _s3 (estado da prescrição atual) e é descartado se o personal sair
// sem usar "Salvar como modelo". Para catalogar formalmente, use o botão ✏
// (abre o formulário completo, que sempre grava em LIBS.distribuicao).
// ══════════════════════════════════════════════════════════════════════════

// Liga/desliga o modo de edição leve para o card i. Ao ligar, clona a divisão
// atual desse card para uma chave de trabalho própria (DIVISOES_TEMPLATES['edit-'+i])
// e aponta op.chave pra ela — assim TODO o resto do sistema (cálculo de limite,
// resumo semanal, geração de ficha) lê a versão editada sem precisar de nenhum
// código especial em nenhuma outra função.
function dcToggleEdicao(i){
  const ligando = _s3._dcEditando !== i;
  _s3._dcEditando = ligando ? i : undefined;
  if(ligando){
    const op = _s3.divisaoOpcoes[i]; if(!op) return;
    const numDias = parseInt(val('pr-frequencia')||'3') || 3;
    const origem  = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
    // Clone profundo — nunca muta o template original (compartilhado/persistido)
    const chaveEdit = 'edit-' + i;
    DIVISOES_TEMPLATES[chaveEdit] = {
      default: origem.default.map(sessao => sessao.map(x => ({...x}))),
      label:   [...origem.label],
    };
    op._chaveOriginal = op._chaveOriginal || op.chave; // guarda a original pra referência/restaurar nome
    op.chave = chaveEdit;
  }
  // Reabre o acordeão deste card automaticamente e re-renderiza
  setTimeout(() => {
    const body  = $('acc-body-' + i);
    const arrow = $('acc-arrow-' + i);
    if(body)  body.style.display = 'block';
    if(arrow) arrow.textContent  = '▼';
  }, 0);
  renderTelaDivisao();
}

// Reordena um grupo DENTRO da mesma sessão — sobe (-1) ou desce (+1) na lista.
// A posição na lista determina a prioridade de corte em calcSeriesSessaoComLimite
// (remove do último pro primeiro quando o limite aperta): grupo no topo = protegido.
// NÃO recalcula nada — a chave de override (ti+g) não muda com a reordenação,
// então o número exibido continua exatamente o mesmo até o personal clicar
// "Recalcular volume" (cálculo automático só roda ao abrir a tela e nesse clique).
function dcReordenarGrupo(cardIdx, ti, g, direcao){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  const sessao = divisao.default[ti]; if(!sessao) return;
  const idx = sessao.findIndex(x => x.g === g); if(idx < 0) return;
  const novoIdx = idx + direcao;
  if(novoIdx < 0 || novoIdx >= sessao.length) return;
  [sessao[idx], sessao[novoIdx]] = [sessao[novoIdx], sessao[idx]];
  renderTelaDivisao();
}

// Move um grupo da sessão ti para outra sessão (tiDestino), mesma divisão de
// trabalho. NÃO recalcula nada — congela o número que o grupo já tinha
// (override existente ou valor calculado que estava exibido) e o transfere
// pra chave da sessão destino, já que a chave de override é "ti-g" e muda
// quando o grupo muda de sessão. Os demais grupos das duas sessões (origem e
// destino) mantêm seus próprios valores intactos.
function dcMoverGrupo(cardIdx, ti, g, tiDestino){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  tiDestino = parseInt(tiDestino);
  if(tiDestino === ti || isNaN(tiDestino)) return;
  const origemArr = divisao.default[ti]; const destinoArr = divisao.default[tiDestino];
  if(!origemArr || !destinoArr) return;
  const idx = origemArr.findIndex(x => x.g === g); if(idx < 0) return;

  // Captura o valor ATUAL do grupo (override já existente, senão o calculado
  // que estava sendo mostrado na sessão de origem) antes de mover.
  const lim = _s3.limSessao || calcLimSessaoRecomendado();
  const chaveAntiga = String(ti) + '-' + g;
  let valorAtual = (_s3._sessionOverrides||{})[chaveAntiga];
  if(!valorAtual){
    const calcOrigem = calcSeriesSessaoOuZerado(origemArr, lim, divisao);
    const grupoCalc = calcOrigem.grupos.find(x => x.g === g);
    if(grupoCalc) valorAtual = { numEx: grupoCalc.exAlvo, serEx: grupoCalc.serEx, serSessao: grupoCalc.serSessao };
  }

  const [item] = origemArr.splice(idx, 1);
  // Evita duplicar se o grupo já existe na sessão destino
  const novoNaDestino = !destinoArr.some(x => x.g === item.g);
  if(novoNaDestino) destinoArr.push(item);

  if(!_s3._sessionOverrides) _s3._sessionOverrides = {};
  delete _s3._sessionOverrides[chaveAntiga];
  if(novoNaDestino && valorAtual){
    // Congela o mesmo valor na chave nova — o grupo mantém o número que tinha.
    _s3._sessionOverrides[String(tiDestino) + '-' + g] = valorAtual;
  }
  sincronizarFreqGrupos();
  renderTelaDivisao();
}

// Adiciona um grupo a UMA sessão específica. Diferente de dcMoverGrupo: aqui a
// duplicação ENTRE sessões é o objetivo (ex: Peitoral em A e também em C = 2x/sem),
// só bloqueia duplicar dentro da MESMA sessão (não faz sentido o mesmo grupo 2x
// na mesma sessão). O grupo novo entra ZERADO (sem cálculo nenhum) — os outros
// grupos da sessão mantêm seus próprios valores intactos, sem recálculo.
function dcAdicionarGrupo(cardIdx, ti, g){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  const sessao = divisao.default[ti]; if(!sessao) return;
  if(sessao.some(x => x.g === g)) return; // já está nesta sessão, não duplica
  sessao.push({ g });
  if(!_s3._sessionOverrides) _s3._sessionOverrides = {};
  _s3._sessionOverrides[String(ti) + '-' + g] = { numEx: 0, serEx: 0, serSessao: 0 };
  sincronizarFreqGrupos();
  renderTelaDivisao();
}

// Remove um grupo de uma sessão específica. Se era a última sessão em que esse
// grupo aparecia na divisão, ele passa a ficar "ausente" — o aviso de cobertura
// vai sinalizar isso automaticamente no próximo render (via dcVerificarCobertura).
// Os demais grupos da sessão mantêm seus próprios valores intactos, sem recálculo.
function dcRemoverGrupo(cardIdx, ti, g){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  const sessao = divisao.default[ti]; if(!sessao) return;
  const idx = sessao.findIndex(x => x.g === g); if(idx < 0) return;
  sessao.splice(idx, 1);
  if(_s3._sessionOverrides) delete _s3._sessionOverrides[String(ti) + '-' + g];
  sincronizarFreqGrupos();
  renderTelaDivisao();
}

// Verifica cobertura: grupos ativos (selecionados na tela de Volume) que NÃO aparecem
// em nenhuma sessão da divisão de trabalho atual. Usado para o aviso visual ao vivo
// durante a edição — o personal vê na hora se "esqueceu" algum grupo selecionado.
function dcVerificarCobertura(cardIdx){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return {ausentes:[], extras:[]};
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return {ausentes:[], extras:[]};
  const noModelo = new Set();
  divisao.default.forEach(sessao => sessao.forEach(({g}) => noModelo.add(g)));
  const ativos = Object.keys(_s3.volPorGrupo).filter(g => _s3.volPorGrupo[g]?.ativo !== false);
  const ausentes = ativos.filter(g => !noModelo.has(g));
  const extras   = [...noModelo].filter(g => !ativos.includes(g));
  return { ausentes, extras };
}

// Congela os valores ATUALMENTE CALCULADOS de uma divisão inteira em
// overrides explícitos — usado assim que uma divisão é exibida/selecionada
// (entrada na tela, ou clique num card), e de novo logo após "Recalcular
// volume" terminar de calcular. A partir desse momento, qualquer ação
// (reordenar, mover, adicionar, remover) opera sobre números já congelados,
// nunca mais cai de volta no cálculo puro da engine — que só deve aparecer
// nesses dois momentos exatos (abertura do modelo e clique em recalcular),
// nunca como efeito colateral de reordenar ou qualquer outro ajuste.
function dcCongelarValoresAtuais(divisao){
  if(!_s3._sessionOverrides) _s3._sessionOverrides = {};
  // Não sobrescreve se JÁ existir pelo menos um override desta divisão —
  // significa que o personal já ajustou algo manualmente, e congelar de novo
  // jogaria fora esse ajuste. Só congela quando a divisão está "limpa"
  // (acabou de ser selecionada pela primeira vez, ou acabou de recalcular).
  const jaTemOverride = divisao.default.some((sessaoGrupos, ti) =>
    sessaoGrupos.some(({g}) => (String(ti) + '-' + g) in _s3._sessionOverrides)
  );
  if(jaTemOverride) return;
  divisao.default.forEach((sessaoGrupos, ti) => {
    const calc = calcSeriesSessaoComLimite(sessaoGrupos, _s3.limSessao || calcLimSessaoRecomendado(), divisao);
    calc.grupos.forEach(({g, exAlvo, serEx, serSessao}) => {
      _s3._sessionOverrides[String(ti) + '-' + g] = { numEx: exAlvo, serEx, serSessao };
    });
  });
}

// Descarta os ajustes manuais de exercício/série (_sessionOverrides) feitos via
// input direto nas sessões desta divisão, e deixa calcSeriesSessaoComLimite
// recalcular tudo do zero — respeitando a ordem de prioridade atual dos grupos
// (definida pelo reorder dc*) e o limite de séries/sessão. Não afeta os alvos
// de volume semanal por grupo (_s3.volPorGrupo), só a distribuição por sessão.
function dcRecalcularVolume(cardIdx){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  if(_s3._sessionOverrides){
    divisao.default.forEach((sessao, ti) => {
      sessao.forEach(({g}) => { delete _s3._sessionOverrides[String(ti) + '-' + g]; });
    });
  }
  // Libera o cálculo real — divisões criadas do zero (⚡ Divisão Rápida) ficam
  // com exercício/série zerados até este clique explícito.
  divisao._naoCalculada = false;
  sincronizarFreqGrupos();
  // Recalcula puro e imediatamente congela esse resultado — assim o próximo
  // reorder/mover/adicionar não recai de volta no cálculo puro.
  dcCongelarValoresAtuais(divisao);
  renderTelaDivisao();
}

// Abre o formulário completo da biblioteca (preencherModalDistrib) pré-preenchido
// com a divisão de trabalho atual — converte o formato interno (ids sem acento)
// de volta para nomes de display (com acento), pro personal só completar os
// critérios clínicos/objetivos e salvar permanentemente em LIBS.distribuicao.
function dcSalvarComoModelo(cardIdx){
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const divisao = DIVISOES_TEMPLATES[op.chave]; if(!divisao) return;
  const s = getActive();
  const numDias = parseInt(val('pr-frequencia')||'3') || 3;
  const nivelCodigo = val('pr-nivel') || s?.anamnese?.nivel || '';
  const NIVEL_LONGO = {Inic:'Iniciante', Inte:'Intermediário', Avan:'Avançado'};
  const nivelLongo  = NIVEL_LONGO[nivelCodigo] || '';
  const dias = divisao.default.map((sessao, ti) => ({
    label: divisao.label[ti] || ('Treino ' + String.fromCharCode(65+ti)),
    enfase: '',
    grupos: sessao.map(({g}) => {
      const gm = GRUPOS_MAPA.find(x => x.id === g);
      return gm ? gm.label : g; // usa o nome de display correspondente
    }),
  }));
  // Pseudo-objeto no formato esperado por preencherModalDistrib (sem id = "novo")
  // — importa nível/objetivo do perfil atual, igual abrirNovaDivisaoCompleta,
  // já que este caminho também nasce de uma prescrição em curso.
  const draft = {
    id: '', nome: (op.nome||'').replace(/^[★⚡]\s*/, '').replace(/\s*\(não salva\)$/,'') + ' (ajustado)',
    tipo_divisao: 'Personalizado', freq: numDias + 'x', freq_musculo: '',
    ref: '', nivel_min: nivelLongo, nivel_max: '',
    objetivos_compativeis: selectedObj ? [selectedObj] : [],
    freq_compativeis: [numDias + 'x'],
    bloq_nivel: [], bloq_cond: [], bloq_obj: [],
    dias, uso_itens: [], contra_itens: [], vant: '', desv: '',
  };
  preencherModalDistrib(draft);
  $('modal-distrib').classList.remove('hidden');
  _pendingDivisaoCallback = true;
}


function renderTelaDivisao(){
  sincronizarFreqGrupos();
  const opcoes = _s3.divisaoOpcoes;
  const cont   = $('divisao-opcoes'); if(!cont) return;
  cont.innerHTML = '';
  const LABEL = {};
  GRUPOS_MAPA.forEach(({id,label}) => { LABEL[id] = label; });

  // Índice do menor desvio ATUAL — não é sempre o índice 0: a lista só é
  // ordenada uma vez, na geração (gerarDivisoesBalanceadas). Depois disso o
  // volume muda ao vivo (recalcularCargasDivisoes) sem reordenar os cards —
  // pra não saltar a posição enquanto o personal ainda está ajustando — então
  // o selo "EQUILIBRADO" precisa ser recalculado à parte, sempre no card que
  // de fato tem o menor desvio no momento, mesmo que não seja mais o primeiro.
  let idxEquilibrado = 0;
  opcoes.forEach((op, i) => { if((op.desvio||0) < (opcoes[idxEquilibrado].desvio||0)) idxEquilibrado = i; });

  opcoes.forEach((op, i) => {
    const sel     = (i === _s3.divisaoIdx);
    const numDias = parseInt(val('pr-frequencia')||'3') || 3;
    const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
    const maxC    = Math.max(...op.cargasSessao, 1);
    const lim     = _s3.limSessao || calcLimSessaoRecomendado();

    // Grupos activos neste modelo
    const freqNoModelo = {};
    divisao.default.forEach(s => s.forEach(({g}) => { freqNoModelo[g] = (freqNoModelo[g]||0)+1; }));

    // Badge compatibilidade
    const gruposOff = GRUPOS_MAPA.map(({id}) => id).filter(g => g in freqNoModelo && _s3.volPorGrupo[g]?.ativo === false);

    // ── Card ────────────────────────────────────────────────────────────────
    const card = document.createElement('div');
    card.style.cssText =
      'border-radius:8px;border:2px solid ' + (sel ? 'var(--accent)' : 'var(--border)') +
      ';background:var(--bg3);overflow:hidden;margin-bottom:8px';

    // Header (clique = seleciona)
    const header = document.createElement('div');
    header.style.cssText =
      'display:flex;align-items:center;gap:8px;padding:10px 14px;cursor:pointer;' +
      'background:' + (sel ? 'var(--accent-dim)' : 'var(--bg4)');

    const radioEl = document.createElement('div');
    radioEl.style.cssText =
      'width:16px;height:16px;border-radius:50%;flex-shrink:0;' +
      'border:2px solid ' + (sel ? 'var(--accent)' : 'var(--text3)') +
      ';background:' + (sel ? 'var(--accent)' : 'transparent') +
      ';display:flex;align-items:center;justify-content:center';
    if(sel) radioEl.innerHTML = '<div style="width:6px;height:6px;border-radius:50%;background:var(--bg)"></div>';

    const infoEl = document.createElement('div');
    infoEl.style.cssText = 'flex:1';
    infoEl.innerHTML =
      '<span style="font-size:13px;font-weight:700;color:' + (sel ? 'var(--accent)' : 'var(--text)') + '">' + op.nome + '</span>' +
      '<span style="font-size:11px;color:var(--text3);margin-left:8px">média ' + op.media + 's/sessão · desvio ±' + op.desvio + 's</span>' +
      (gruposOff.length ? '<div style="margin-top:3px;font-size:10px;color:var(--amber)">⚠ Parcial: ' + gruposOff.map(g=>LABEL[g]||g).join(', ') + ' OFF</div>' : '');

    const badgeEl = document.createElement('div');
    if(i===idxEquilibrado) badgeEl.innerHTML = '<span style="font-size:10px;color:var(--accent);background:var(--accent-dim);padding:2px 7px;border-radius:4px;border:1px solid rgba(0,229,160,.3);font-weight:700">↑ EQUILIBRADO</span>';

    // Edit button for each divisão card — abre o formulário completo da biblioteca
    // (objetivo, nível, bloqueios, critérios). Pensado pra CATALOGAR um modelo formal.
    const editBtn = document.createElement('button');
    editBtn.className='btn btn-ghost btn-sm';
    editBtn.style.cssText='font-size:11px;padding:3px 8px;flex-shrink:0';
    editBtn.textContent='✏';
    editBtn.title='Editar critérios desta divisão (formulário completo da biblioteca)';
    editBtn.addEventListener('click', function(e){
      e.stopPropagation();
      const op = _s3.divisaoOpcoes[i];
      if(op) abrirEditarDivisaoStep2(op.chave);
    });

    // Botão "Ajustar sessões" — editor leve (dc*): reordenar/mover grupo direto no
    // acordeão, sem formulário, sem salvar nada por padrão. Ver dcToggleEdicao().
    const dcBtn = document.createElement('button');
    dcBtn.className='btn btn-ghost btn-sm';
    dcBtn.style.cssText='font-size:11px;padding:3px 8px;flex-shrink:0';
    const dcAtivo = _s3._dcEditando === i;
    dcBtn.textContent = dcAtivo ? '✓ Concluir ajuste' : '⚙ Ajustar sessões';
    dcBtn.title = 'Reordenar ou mover grupos entre sessões — ajuste rápido, não salva modelo';
    if(dcAtivo) dcBtn.style.cssText += ';background:var(--accent-dim);color:var(--accent);border-color:var(--accent)';
    dcBtn.addEventListener('click', function(e){
      e.stopPropagation();
      dcToggleEdicao(i);
    });

    header.appendChild(radioEl); header.appendChild(infoEl); header.appendChild(badgeEl); header.appendChild(dcBtn); header.appendChild(editBtn);
    // Excluir — só pra modelos que o personal pode de fato descartar: um modelo
    // salvo na biblioteca (op._libId) ou uma "Divisão rápida" nunca salva
    // (chave 'rapida-...'). Modelos padrão do sistema (PPL, Upper/Lower etc.,
    // vêm do "mapa" fixo em getDivisoesDisponiveis) nunca têm esse botão.
    if(podeExcluirDivisaoOpcao(op)){
      const delBtn = document.createElement('button');
      delBtn.className = 'btn btn-ghost btn-sm';
      delBtn.style.cssText = 'font-size:11px;padding:3px 8px;flex-shrink:0;color:var(--red)';
      delBtn.textContent = '🗑';
      delBtn.title = op._libId != null ? 'Excluir este modelo da biblioteca' : 'Excluir esta divisão rápida (não salva)';
      delBtn.addEventListener('click', function(e){
        e.stopPropagation();
        excluirDivisaoOpcaoStep2(i);
      });
      header.appendChild(delBtn);
    }
    header.dataset.idx = i;
    header.addEventListener('click', function(){
      _s3.divisaoIdx = parseInt(this.dataset.idx);
      const opSel = _s3.divisaoOpcoes[_s3.divisaoIdx];
      const divisaoSel = opSel && DIVISOES_TEMPLATES[opSel.chave];
      if(divisaoSel && !divisaoSel._naoCalculada){
        sincronizarFreqGrupos(); // limpa grupos inativos fantasmas antes de congelar
        dcCongelarValoresAtuais(divisaoSel);
      } else {
        sincronizarFreqGrupos();
      }
      renderTelaDivisao();
    });

    // Mini barras de carga + tempo estimado por sessão
    const minibars = document.createElement('div');
    minibars.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;padding:6px 14px 8px;background:var(--bg3)';
    const objAtual = selectedObj || val('pr-objetivo') || 'Saude';
    op.cargasSessao.forEach((c, ti) => {
      const letra = String.fromCharCode(65+ti);
      const pct   = Math.round((c/maxC)*100);

      // Tempo estimado para esta sessão específica (Momento 1 — antes de sortear exercícios).
      // Usa os grupos/volume reais calculados pra esta sessão, não uma estimativa geral.
      const sessaoGT = (divisao.default||[])[ti] || [];
      const calcT = calcSeriesSessaoExibida(sessaoGT, lim, divisao, ti);
      const gpT   = calcT.grupos.map(({g,exAlvo,serEx})=>({grupo:g,nExercicios:exAlvo,nSeries:serEx}));
      const tpT   = estimarTempoModeloSessao(gpT, objAtual);
      const tMin  = Math.round(tpT.min/60), tMax = Math.round(tpT.max/60);
      const tLabel = tMin > 0 ? `${tMin}–${tMax}min` : '';

      const d = document.createElement('div');
      d.style.cssText = 'display:flex;align-items:center;gap:5px';
      d.innerHTML =
        '<span style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--text);min-width:14px">' + letra + '</span>' +
        '<div style="width:60px;height:5px;background:var(--bg2);border-radius:3px;overflow:hidden">' +
          '<div style="width:' + pct + '%;height:100%;background:' + (sel?'var(--accent)':'var(--text3)') + ';border-radius:3px"></div>' +
        '</div>' +
        '<span style="font-family:var(--mono);font-size:11px;color:var(--text2)">' + c + 's</span>' +
        (tLabel ? '<span style="font-family:var(--mono);font-size:10px;color:var(--text3);margin-left:2px">⏱' + tLabel + '</span>' : '');
      minibars.appendChild(d);
    });

    // Accordion toggle — o estado aberto/fechado de cada card é guardado em
    // _s3._divExpandido (por índice), não só em memória do DOM: sem isso, o
    // card fechava sozinho toda vez que renderTelaDivisao() re-renderizava
    // (ex: ajustar o volume, selecionar outro card) porque o estado inicial
    // era decidido só por dcAtivo. Guardando à parte, vários cards podem
    // ficar abertos ao mesmo tempo pra comparação, e o botão realmente fecha.
    if(!_s3._divExpandido) _s3._divExpandido = {};
    const expandido = dcAtivo || !!_s3._divExpandido[i];
    const accToggle = document.createElement('div');
    accToggle.style.cssText = 'border-top:1px solid var(--border)';
    const btnExpand = document.createElement('button');
    btnExpand.dataset.accIdx = i;
    btnExpand.style.cssText =
      'width:100%;padding:7px 14px;background:transparent;border:none;cursor:pointer;' +
      'text-align:left;display:flex;align-items:center;gap:6px;font-size:11px;' +
      'font-family:var(--mono);color:var(--text3);letter-spacing:.05em;font-weight:600';
    btnExpand.innerHTML = '<span id="acc-arrow-' + i + '">' + (expandido ? '▼' : '▶') + '</span> '
      + (expandido ? 'OCULTAR DISTRIBUIÇÃO DOS TREINOS' : 'VER DISTRIBUIÇÃO DOS TREINOS');
    btnExpand.addEventListener('click', function(e){
      e.stopPropagation();
      const idx = parseInt(this.dataset.accIdx);
      const body  = $('acc-body-' + idx);
      const arrow = $('acc-arrow-' + idx);
      const open  = body.style.display !== 'none';
      const novoAberto = !open;
      _s3._divExpandido[idx] = novoAberto;
      body.style.display = novoAberto ? 'block' : 'none';
      arrow.textContent  = novoAberto ? '▼' : '▶';
      this.lastChild.textContent = ' ' + (novoAberto ? 'OCULTAR DISTRIBUIÇÃO DOS TREINOS' : 'VER DISTRIBUIÇÃO DOS TREINOS');
    });
    accToggle.appendChild(btnExpand);

    // Accordion body
    const accBody = document.createElement('div');
    accBody.id = 'acc-body-' + i;
    accBody.style.cssText = 'display:' + (expandido ? 'block' : 'none') + ';padding:10px 12px;background:var(--bg4);border-top:1px solid var(--border)';

    // ── Resumo semanal: soma de todas as sessões ────────────────────────────
    const volAtualPorGrupo = {};
    divisao.default.forEach((sessaoGrupos, tiResumo) => {
      const calc = calcSeriesSessaoExibida(sessaoGrupos, lim, divisao, tiResumo);
      calc.grupos.forEach(({g, exAlvo, serEx: sExT}) => {
        if(!volAtualPorGrupo[g]) volAtualPorGrupo[g] = {exSemana:0, serSemana:0};
        volAtualPorGrupo[g].exSemana  += exAlvo;
        volAtualPorGrupo[g].serSemana += exAlvo * sExT;
      });
    });

    const semResumo = document.createElement('div');
    semResumo.style.cssText = 'margin-bottom:10px';
    const semTitle = document.createElement('div');
    semTitle.style.cssText = 'font-size:10px;font-weight:700;color:var(--text2);font-family:var(--mono);margin-bottom:6px;letter-spacing:.06em;text-transform:uppercase';
    semTitle.textContent = 'Volume Semanal';
    semResumo.appendChild(semTitle);

    const semGrid = document.createElement('div');
    semGrid.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px';
    GRUPOS_MAPA.forEach(({id: g}) => {
      if(!(g in freqNoModelo)) return;
      const vg = _s3.volPorGrupo[g]; if(!vg||vg.ativo===false) return;
      const freq_g = freqNoModelo[g]||1;
      const serEx  = vg.serEx || _s3.seriesPorEx;
      const semMinAdj = freq_g>1&&(vg.semMin||0)%2!==0 ? (vg.semMin||0)+1 : (vg.semMin||0);
      const semMaxAdj = freq_g>1&&(vg.semMax||0)%2!==0 ? (vg.semMax||0)+1 : (vg.semMax||0);
      const atual = volAtualPorGrupo[g]||{serSemana:0};
      const ser   = atual.serSemana;
      const cor   = ser < semMinAdj-1 ? 'var(--red)' : ser > semMaxAdj+1 ? 'var(--amber)' : 'var(--accent)';

      const chip = document.createElement('div');
      chip.id = 'chip-sem-' + i + '-' + g;
      chip.style.cssText =
        'padding:6px 10px;background:var(--bg3);border:1px solid var(--border);' +
        'border-radius:6px;border-top:3px solid ' + cor + ';min-width:72px';
      chip.innerHTML =
        '<div style="font-size:12px;font-weight:700;color:var(--text)">' + (LABEL[g]||g) + '</div>' +
        '<div style="font-size:11px;color:var(--text2);font-family:var(--mono)">' + semMinAdj + '–' + semMaxAdj + 's</div>' +
        '<div data-val style="font-size:14px;font-weight:700;color:' + cor + ';font-family:var(--mono)">' + ser + 's</div>';
      semGrid.appendChild(chip);
    });
    semResumo.appendChild(semGrid);
    accBody.appendChild(semResumo);

    // ── Editor leve (dc*): aviso de cobertura ao vivo + ação salvar como modelo ──
    if(dcAtivo){
      const { ausentes, extras } = dcVerificarCobertura(i);
      if(ausentes.length){
        const avisoAusentes = document.createElement('div');
        avisoAusentes.style.cssText =
          'margin-bottom:8px;padding:8px 10px;border-radius:6px;border:1px solid var(--amber);' +
          'background:var(--amber-dim)';
        const titAus = document.createElement('div');
        titAus.style.cssText = 'font-size:11px;color:var(--amber);margin-bottom:6px';
        titAus.textContent = '⚠ Selecionados na tela de Volume mas AUSENTES desta divisão — escolha uma sessão e insira:';
        avisoAusentes.appendChild(titAus);
        const listaAus = document.createElement('div');
        listaAus.style.cssText = 'display:flex;flex-direction:column;gap:4px';
        ausentes.forEach(g => {
          const linha = document.createElement('div');
          linha.style.cssText = 'display:flex;align-items:center;gap:6px';
          const nomeSpan = document.createElement('span');
          nomeSpan.style.cssText = 'font-size:11px;font-weight:600;color:var(--text);min-width:90px';
          nomeSpan.textContent = LABEL[g]||g;
          const selSessao = document.createElement('select');
          selSessao.style.cssText = 'font-size:10px;padding:2px 4px;border:1px solid var(--border);border-radius:3px;background:var(--bg2);color:var(--text2)';
          divisao.default.forEach((_, tiOpt) => {
            const opt = document.createElement('option');
            opt.value = tiOpt;
            opt.textContent = (divisao.label[tiOpt]||'Treino '+String.fromCharCode(65+tiOpt));
            selSessao.appendChild(opt);
          });
          const btnInserir = document.createElement('button');
          btnInserir.className = 'btn btn-ghost btn-sm';
          btnInserir.style.cssText = 'font-size:10px;padding:2px 8px';
          btnInserir.textContent = '+ Inserir';
          btnInserir.addEventListener('click', function(e){
            e.stopPropagation();
            dcAdicionarGrupo(i, parseInt(selSessao.value), g);
          });
          linha.appendChild(nomeSpan); linha.appendChild(selSessao); linha.appendChild(btnInserir);
          listaAus.appendChild(linha);
        });
        avisoAusentes.appendChild(listaAus);
        accBody.appendChild(avisoAusentes);
      }
      if(extras.length){
        const avisoExtras = document.createElement('div');
        avisoExtras.style.cssText =
          'margin-bottom:8px;padding:6px 10px;border-radius:6px;border:1px solid var(--amber);' +
          'background:var(--amber-dim);font-size:11px;color:var(--amber)';
        avisoExtras.textContent = '· Presentes nesta divisão mas desligados na tela de Volume: ' + extras.map(g=>LABEL[g]||g).join(', ') + '.';
        accBody.appendChild(avisoExtras);
      }
      if(!ausentes.length && !extras.length){
        const okCobertura = document.createElement('div');
        okCobertura.style.cssText =
          'margin-bottom:10px;padding:6px 10px;border-radius:6px;border:1px solid var(--accent);' +
          'background:var(--accent-dim);font-size:11px;color:var(--accent)';
        okCobertura.textContent = '✓ Todos os grupos selecionados estão cobertos por esta divisão.';
        accBody.appendChild(okCobertura);
      }

      const dcAcoes = document.createElement('div');
      dcAcoes.style.cssText = 'display:flex;gap:8px;margin-bottom:10px';
      const btnRecalcular = document.createElement('button');
      btnRecalcular.className = 'btn btn-ghost btn-sm';
      btnRecalcular.textContent = '↺ Recalcular volume';
      btnRecalcular.title = 'Descarta ajustes manuais de exercício/série e recalcula tudo automaticamente pelas regras de prioridade e limite';
      btnRecalcular.addEventListener('click', function(e){ e.stopPropagation(); dcRecalcularVolume(i); });
      const btnSalvarModelo = document.createElement('button');
      btnSalvarModelo.className = 'btn btn-ghost btn-sm';
      btnSalvarModelo.textContent = '💾 Salvar como modelo';
      btnSalvarModelo.title = 'Abre o formulário completo pra catalogar este ajuste como modelo reutilizável';
      btnSalvarModelo.addEventListener('click', function(e){ e.stopPropagation(); dcSalvarComoModelo(i); });
      dcAcoes.appendChild(btnRecalcular);
      dcAcoes.appendChild(btnSalvarModelo);
      accBody.appendChild(dcAcoes);
    }

    // ── Treinos ─────────────────────────────────────────────────────────────
    divisao.default.forEach((sessaoGrupos, ti) => {
      const letra    = String.fromCharCode(65+ti);
      const label_d  = (divisao.label[ti]||'Treino '+letra).replace(/^Treino [A-Z] — /,'');
      const calcSess = calcSeriesSessaoExibida(sessaoGrupos, lim, divisao, ti);
      const {totalAlvo, estourou, forcouAbaixoDoMinimo, pct: pctLim} = calcSess;
      const corLim   = estourou ? 'var(--red)' : pctLim>=90 ? 'var(--amber)' : 'var(--accent)';
      const diffMsg  = estourou ? '+' + (totalAlvo-lim) + 's' : totalAlvo + '/' + lim + 's';

      const treinoDiv = document.createElement('div');
      treinoDiv.style.cssText =
        'margin-bottom:8px;border-radius:6px;border:1px solid ' +
        (estourou ? 'var(--red)' : 'var(--border)') +
        ';overflow:hidden;background:var(--bg3)';

      // Header do treino — inclui barra de limite
      const thd = document.createElement('div');
      thd.style.cssText =
        'display:flex;align-items:center;gap:8px;padding:6px 12px;' +
        'background:' + (estourou ? 'rgba(255,77,106,.08)' : 'var(--bg4)') +
        ';border-bottom:1px solid var(--border)';
      thd.innerHTML =
        '<span style="font-family:var(--mono);font-size:13px;font-weight:800;color:var(--accent);min-width:18px">' + letra + '</span>' +
        '<span style="font-size:12px;font-weight:600;color:var(--text);flex:1">' + label_d + '</span>' +
        // Limite
        '<span style="font-size:10px;color:var(--text3);font-family:var(--mono);margin-right:4px">Limite ' + lim + 's:</span>' +
        '<div style="width:80px;height:5px;background:var(--bg2);border-radius:3px;overflow:hidden;margin-right:4px">' +
          '<div id="lim-bar-fill-' + i + '-' + ti + '" style="width:' + Math.min(100,pctLim) + '%;height:100%;background:' + corLim + ';border-radius:3px;transition:width .3s"></div>' +
        '</div>' +
        '<span id="lim-bar-label-' + i + '-' + ti + '" style="font-family:var(--mono);font-size:10px;font-weight:700;color:' + corLim + ';min-width:60px;text-align:right">' +
          (estourou ? '⚠ ' : '') + diffMsg + ' (' + pctLim + '%)' +
        '</span>';

      // Aviso: volume mínimo definido não cabe no limite de séries/sessão
      if(forcouAbaixoDoMinimo && !estourou){
        const avisoMin = document.createElement('div');
        avisoMin.style.cssText =
          'padding:5px 12px;background:var(--amber-dim);border-bottom:1px solid var(--border);' +
          'font-size:11px;color:var(--amber)';
        avisoMin.textContent = '⚠ O volume mínimo definido não cabe no limite de séries/sessão — alguns grupos foram reduzidos abaixo do mínimo (ou removidos desta sessão) para respeitar o limite.';
        treinoDiv.appendChild(thd);
        treinoDiv.appendChild(avisoMin);
      } else {
        treinoDiv.appendChild(thd);
      }

      // Linhas de grupo
      const tbody = document.createElement('div');
      tbody.style.cssText = 'padding:2px 0';

      calcSess.grupos.forEach(({g, exAlvo, exMin, exMax, serEx: sEx,
          serSessao, serSemana, exSemana, serMinSem, serMaxSem, freq: fq}, gi) => {
        const vg    = _s3.volPorGrupo[g]; if(!vg||vg.ativo===false) return;
        const grupo = GRUPOS_MAPA.find(x => x.id===g);
        const {mev=0, mrv=0} = grupo||{};
        const semMid = Math.round(((vg.semMin||0)+(vg.semMax||0))/2);
        const cor    = getVolColor(semMid, mev, mrv);
        const pctBar = mrv>0 ? Math.min(100,Math.round((semMid/mrv)*100)) : 0;
        const rowBg  = gi%2===0 ? 'var(--bg3)' : 'var(--bg4)';

        const row = document.createElement('div');
        row.style.cssText =
          'display:flex;align-items:center;gap:8px;padding:7px 12px;' +
          'background:' + rowBg + ';border-bottom:1px solid var(--border)';

        // Dot cor
        const dot = document.createElement('div');
        dot.style.cssText = 'width:10px;height:10px;border-radius:3px;flex-shrink:0;background:' + cor;

        // Nome
        const nome = document.createElement('span');
        nome.style.cssText = 'font-size:12px;font-weight:600;color:var(--text);min-width:88px;flex-shrink:0';
        nome.textContent = LABEL[g]||g;

        // Barra MEV–MRV
        const barWrap = document.createElement('div');
        barWrap.style.cssText = 'flex:1;height:5px;background:var(--bg2);border-radius:3px;overflow:hidden;min-width:60px';
        barWrap.innerHTML = '<div style="width:' + pctBar + '%;height:100%;background:' + cor + ';border-radius:3px;transition:width .2s"></div>';

        // Controles: ex − [n] + × ser − [s] + = total
        const ctrl = document.createElement('div');
        ctrl.style.cssText = 'display:flex;align-items:center;gap:4px;flex-shrink:0';

        function mkBtn(txt, ds){
          const b = document.createElement('button');
          b.textContent = txt;
          Object.assign(b.dataset, ds);
          b.style.cssText =
            'width:20px;height:22px;background:var(--bg2);border:1px solid var(--border);' +
            'color:var(--text2);font-size:13px;cursor:pointer;line-height:1;padding:0;border-radius:' +
            (txt==='−' ? '4px 0 0 4px' : '0 4px 4px 0');
          b.addEventListener('click', function(){ stepGrupoSessao(this); });
          return b;
        }
        function mkInp(val, id, field, w){
          const inp = document.createElement('input');
          inp.type='number'; inp.value=val; inp.id=id; inp.min=1; inp.max=20;
          inp.dataset.g=g; inp.dataset.ti=ti; inp.dataset.field=field; inp.dataset.cardIdx=i;
          inp.style.cssText =
            'width:3.2em;background:var(--bg4);border-top:1px solid var(--border);' +
            'border-bottom:1px solid var(--border);border-left:none;border-right:none;' +
            'padding:2px 3px;color:var(--text);font-family:var(--mono);font-size:12px;' +
            'text-align:center;outline:none';
          inp.addEventListener('input', function(){ atualizarTotalSessao(this); });
          return inp;
        }

        const idEx  = 'iex-'  + i + '-' + ti + '-' + g;
        const idSer = 'iser-' + i + '-' + ti + '-' + g;
        const idTot = 'itot-' + i + '-' + ti + '-' + g;

        // Aplicar overrides salvos pelo usuário (prioridade sobre cálculo)
        const _ovKey = String(ti) + '-' + g;
        const _ov   = (_s3._sessionOverrides||{})[_ovKey];
        const exVal  = _ov ? _ov.numEx : exAlvo;
        const serVal = _ov ? _ov.serEx : sEx;

        ctrl.appendChild(mkBtn('−', {g, ti, field:'ex', pair: idEx}));
        ctrl.appendChild(mkInp(exVal, idEx, 'ex'));
        ctrl.appendChild(mkBtn('+', {g, ti, field:'ex', pair: idEx}));

        const x = document.createElement('span');
        x.style.cssText = 'font-size:11px;color:var(--text3);margin:0 2px';
        x.textContent = '×';
        ctrl.appendChild(x);

        ctrl.appendChild(mkBtn('−', {g, ti, field:'ser', pair: idSer}));
        ctrl.appendChild(mkInp(serVal, idSer, 'ser'));
        ctrl.appendChild(mkBtn('+', {g, ti, field:'ser', pair: idSer}));

        const eq = document.createElement('span');
        eq.id = idTot;
        eq.style.cssText = 'font-family:var(--mono);font-size:12px;font-weight:700;color:var(--text);min-width:48px;text-align:right';
        eq.textContent = '= ' + (_ov ? _ov.serSessao : serSessao) + 's';
        ctrl.appendChild(eq);

        row.appendChild(dot); row.appendChild(nome); row.appendChild(barWrap); row.appendChild(ctrl);

        // ── Controles do editor leve (dc*): reordenar dentro da sessão + mover entre sessões ──
        if(dcAtivo){
          const dcCtrl = document.createElement('div');
          dcCtrl.style.cssText = 'display:flex;align-items:center;gap:3px;flex-shrink:0;margin-left:6px;padding-left:6px;border-left:1px solid var(--border)';

          const posIdx = sessaoGrupos.findIndex(x => x.g === g);
          const btnUp = document.createElement('button');
          btnUp.textContent = '↑';
          btnUp.title = 'Subir prioridade nesta sessão (protege contra corte de limite)';
          btnUp.disabled = posIdx <= 0;
          btnUp.style.cssText = 'width:20px;height:20px;font-size:11px;line-height:1;padding:0;cursor:pointer;background:var(--bg2);border:1px solid var(--border);border-radius:3px;color:var(--text2);opacity:' + (posIdx<=0?'.35':'1');
          btnUp.addEventListener('click', function(e){ e.stopPropagation(); dcReordenarGrupo(i, ti, g, -1); });

          const btnDown = document.createElement('button');
          btnDown.textContent = '↓';
          btnDown.title = 'Baixar prioridade nesta sessão';
          btnDown.disabled = posIdx >= sessaoGrupos.length - 1;
          btnDown.style.cssText = 'width:20px;height:20px;font-size:11px;line-height:1;padding:0;cursor:pointer;background:var(--bg2);border:1px solid var(--border);border-radius:3px;color:var(--text2);opacity:' + (posIdx>=sessaoGrupos.length-1?'.35':'1');
          btnDown.addEventListener('click', function(e){ e.stopPropagation(); dcReordenarGrupo(i, ti, g, 1); });

          const posLabel = document.createElement('span');
          posLabel.style.cssText = 'font-family:var(--mono);font-size:9px;color:var(--text3);min-width:16px;text-align:center';
          posLabel.textContent = '#' + (posIdx+1);

          const selMover = document.createElement('select');
          selMover.style.cssText = 'font-size:10px;padding:2px 3px;border:1px solid var(--border);border-radius:3px;background:var(--bg2);color:var(--text2);max-width:90px';
          const optPlaceholder = document.createElement('option');
          optPlaceholder.value = ''; optPlaceholder.textContent = '→ mover p/...';
          selMover.appendChild(optPlaceholder);
          divisao.default.forEach((_, tiOutro) => {
            if(tiOutro === ti) return;
            const opt = document.createElement('option');
            opt.value = tiOutro;
            opt.textContent = (divisao.label[tiOutro]||'Treino '+String.fromCharCode(65+tiOutro)).replace(/^Treino /,'');
            selMover.appendChild(opt);
          });
          selMover.addEventListener('click', function(e){ e.stopPropagation(); });
          selMover.addEventListener('change', function(e){
            e.stopPropagation();
            if(this.value !== '') dcMoverGrupo(i, ti, g, this.value);
          });

          const btnRemover = document.createElement('button');
          btnRemover.textContent = '✕';
          btnRemover.title = 'Remover este grupo desta sessão';
          btnRemover.style.cssText = 'width:20px;height:20px;font-size:11px;line-height:1;padding:0;cursor:pointer;background:var(--bg2);border:1px solid var(--border);border-radius:3px;color:var(--red)';
          btnRemover.addEventListener('click', function(e){ e.stopPropagation(); dcRemoverGrupo(i, ti, g); });

          dcCtrl.appendChild(btnUp); dcCtrl.appendChild(posLabel); dcCtrl.appendChild(btnDown); dcCtrl.appendChild(selMover); dcCtrl.appendChild(btnRemover);
          row.appendChild(dcCtrl);
        }

        tbody.appendChild(row);
      });

      // Adicionar grupo a esta sessão (editor leve) — permite repetir um grupo já
      // presente em outra sessão (ex: Peitoral em A e também em C = 2x/semana).
      if(dcAtivo){
        const addRow = document.createElement('div');
        addRow.style.cssText = 'display:flex;align-items:center;gap:6px;padding:6px 12px;background:var(--bg4)';
        const selAdd = document.createElement('select');
        selAdd.style.cssText = 'flex:1;max-width:200px;font-size:11px;padding:3px 6px;border:1px solid var(--border);border-radius:3px;background:var(--bg2);color:var(--text2)';
        const optPh = document.createElement('option');
        optPh.value=''; optPh.textContent='+ adicionar grupo a esta sessão...';
        selAdd.appendChild(optPh);
        GRUPOS_MAPA.forEach(({id,label:lbl}) => {
          const jaNaSessao = sessaoGrupos.some(x=>x.g===id);
          const opt = document.createElement('option');
          opt.value = id;
          opt.textContent = lbl + (jaNaSessao ? ' (já nesta sessão)' : '');
          opt.disabled = jaNaSessao;
          selAdd.appendChild(opt);
        });
        selAdd.addEventListener('click', function(e){ e.stopPropagation(); });
        selAdd.addEventListener('change', function(e){
          e.stopPropagation();
          if(this.value !== '') dcAdicionarGrupo(i, ti, this.value);
        });
        addRow.appendChild(selAdd);
        tbody.appendChild(addRow);
      }

      treinoDiv.appendChild(tbody);
      accBody.appendChild(treinoDiv);
    });

    card.appendChild(header); card.appendChild(minibars);
    card.appendChild(accToggle); card.appendChild(accBody);
    cont.appendChild(card);
  });
  // Recalcular chip de volume semanal no card selecionado após render
  setTimeout(() => atualizarResumоSemanal(_s3.divisaoIdx), 0);
}

// ── Abrir modal-distrib a partir do step 2, PRÉ-PREENCHIDO com o perfil atual ──
// Importa nível/frequência/objetivo já selecionados na prescrição em curso, pra
// não obrigar o personal a redigitar o que já escolheu. Critérios clínicos,
// vantagens/desvantagens e referência ficam em branco — pra o personal refinar.
function abrirNovaDivisaoCompleta(){
  const s = getActive();
  const nivelCodigo = val('pr-nivel') || s?.anamnese?.nivel || '';
  const NIVEL_LONGO = {Inic:'Iniciante', Inte:'Intermediário', Avan:'Avançado'};
  const nivelLongo  = NIVEL_LONGO[nivelCodigo] || '';
  const freq        = val('pr-frequencia') || s?.anamnese?.frequencia || '3x';

  const draft = {
    id: '', nome: '',
    tipo_divisao: 'Full Body', freq, freq_musculo: '2x',
    ref: '',
    // Nível mínimo = nível atual do aluno (o modelo nasce pensado pra esse perfil,
    // mas o personal pode abrir o range depois); máximo fica livre.
    nivel_min: nivelLongo, nivel_max: '',
    objetivos_compativeis: selectedObj ? [selectedObj] : [],
    freq_compativeis: [freq],
    bloq_nivel: [], bloq_cond: [], bloq_obj: [],
    dias: [], uso_itens: [], contra_itens: [], vant: '', desv: '',
  };
  preencherModalDistrib(draft);
  $('modal-distrib').classList.remove('hidden');
  _pendingDivisaoCallback = true;
}

// ── Divisão rápida (ephemeral): N sessões vazias, sem critérios, sem salvar nada.
// O personal distribui os grupos manualmente usando os controles do editor leve
// (dc*) — reorder/mover/adicionar/remover — que já entram ativados. Se quiser
// guardar o resultado, o botão "💾 Salvar como modelo" (já presente no editor
// leve) abre abrirNovaDivisaoCompleta-equivalente via dcSalvarComoModelo,
// pré-preenchido com o que foi montado aqui.
function abrirNovaDivisaoRapida(){
  const s       = getActive(); if(!s) return;
  const freq    = val('pr-frequencia') || s.anamnese?.frequencia || '3x';
  const numDias = parseInt(freq) || 3;

  const chave = 'rapida-' + Date.now();
  DIVISOES_TEMPLATES[chave] = {
    default: Array.from({length: numDias}, () => []),
    label:   Array.from({length: numDias}, (_, ti) => 'Treino ' + String.fromCharCode(65+ti)),
    // Divisão criada do zero — fica com exercício/série zerados (mesmo depois
    // de adicionar grupos) até o personal clicar "Recalcular volume". Diferente
    // de ajustar um modelo existente, que mantém os números calculados como
    // estavam durante qualquer mover/reordenar/add/remover.
    _naoCalculada: true,
  };

  if(!_s3.divisaoOpcoes) _s3.divisaoOpcoes = [];
  const novoOp = {
    nome: '⚡ Divisão rápida (não salva)',
    treinos: DIVISOES_TEMPLATES[chave].label.slice(),
    chave,
    cargasSessao: new Array(numDias).fill(0),
    media: 0, desvio: 0,
  };
  _s3.divisaoOpcoes.push(novoOp);
  const novoIdx = _s3.divisaoOpcoes.length - 1;
  _s3.divisaoIdx = novoIdx;
  _s3._dcEditando = novoIdx; // entra direto no editor leve, sessões vazias prontas pra distribuir

  renderTelaDivisao();
}

function abrirEditarDivisaoStep2(chave){
  // chave é o id da divisão em LIBS.distribuicao ou em DIVISOES_TEMPLATES
  // Tenta encontrar em LIBS
  const d = LIBS.distribuicao.find(x=> String(x.id)===String(chave) || x.nome===chave);
  if(d){
    preencherModalDistrib(d);
    $('modal-distrib').classList.remove('hidden');
    _pendingDivisaoCallback = true;
  } else {
    alert('Esta é uma divisão do sistema — use a aba Distribuição para editá-la.');
  }
}

let _pendingDivisaoCallback = false;

function stepGrupoSessao(btn){
  const id  = btn.dataset.pair;
  const inp = $(id); if(!inp) return;
  const delta = btn.textContent === '−' ? -1 : 1;
  const novo  = Math.max(1, (parseInt(inp.value)||1) + delta);
  inp.value = novo;
  atualizarTotalSessao(inp);
}

function atualizarTotalSessao(inp){
  const g       = inp.dataset.g;
  const ti      = String(inp.dataset.ti);
  // Usa o índice do CARD a que este input pertence (gravado no próprio input),
  // não _s3.divisaoIdx (que reflete qual card está "selecionado" no momento,
  // podendo ser outro card diferente do que o personal está de fato editando
  // dentro do acordeão aberto — bug real: editar a divisão rápida enquanto
  // outro card estava selecionado fazia a busca por id falhar silenciosamente,
  // deixando o "=Xs" e o override nunca atualizados, mesmo o input mudando).
  const cardIdx = inp.dataset.cardIdx !== undefined ? parseInt(inp.dataset.cardIdx) : _s3.divisaoIdx;
  const inpEx   = $('iex-'  + cardIdx + '-' + ti + '-' + g);
  const inpSer  = $('iser-' + cardIdx + '-' + ti + '-' + g);
  const totEl   = $('itot-' + cardIdx + '-' + ti + '-' + g);
  if(!inpEx || !inpSer || !totEl) return;

  const exV  = Math.max(1, parseInt(inpEx.value)  || 1);
  const serV = Math.max(1, parseInt(inpSer.value) || 1);
  const novoTot = exV * serV;
  totEl.textContent = '= ' + novoTot + 's';

  // ── Sync editado de volta para _s3 para que construirFichaModelo use os valores corretos
  // (mesmo que o accordion seja fechado e reaberto, os valores persistem)
  if(_s3.volPorGrupo[g]){
    // Salva o número de exercícios e séries por exercício editados pelo usuário
    _s3.volPorGrupo[g].serEx = serV;
    // Salva sessão por treino separadamente
    if(!_s3._sessionOverrides) _s3._sessionOverrides = {};
    const key = ti + '-' + g;
    _s3._sessionOverrides[key] = { numEx: exV, serEx: serV, serSessao: novoTot };
  }

  // Recalcula total da sessão somando todas as linhas do treino ti
  const lim = _s3.limSessao || calcLimSessaoRecomendado();
  let totalSessao = 0;
  // Percorre todos os grupos que têm inputs nesta sessão
  GRUPOS_MAPA.forEach(({id}) => {
    const iEx  = $('iex-'  + cardIdx + '-' + ti + '-' + id);
    const iSer = $('iser-' + cardIdx + '-' + ti + '-' + id);
    if(iEx && iSer){
      totalSessao += (parseInt(iEx.value)||1) * (parseInt(iSer.value)||1);
    }
  });

  // Atualiza barra e label do header da sessão
  const pct    = lim > 0 ? Math.min(120, Math.round((totalSessao/lim)*100)) : 0;
  const estouro = totalSessao > lim;
  const corLim = estouro ? 'var(--red)' : pct >= 90 ? 'var(--amber)' : 'var(--accent)';
  const diffMsg = estouro
    ? '⚠ ' + totalSessao + '/' + lim + 's (+' + (totalSessao-lim) + ')'
    : totalSessao + '/' + lim + 's (' + Math.min(100,pct) + '%)';

  // Barra: id="lim-bar-fill-{cardIdx}-{ti}"
  const barFill = $('lim-bar-fill-' + cardIdx + '-' + ti);
  const barLabel = $('lim-bar-label-' + cardIdx + '-' + ti);
  if(barFill){
    barFill.style.width      = Math.min(100,pct) + '%';
    barFill.style.background = corLim;
  }
  if(barLabel){
    barLabel.textContent = diffMsg;
    barLabel.style.color = corLim;
  }

  // Atualiza resumo semanal — recalcula chips
  atualizarResumоSemanal(cardIdx);
}

function atualizarResumоSemanal(cardIdx){
  // Soma todos os inputs visíveis para calcular volume semanal atual
  const op = _s3.divisaoOpcoes[cardIdx]; if(!op) return;
  const numDias = parseInt(val('pr-frequencia')||'3') || 3;
  const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
  const LABEL = {}; GRUPOS_MAPA.forEach(({id,label}) => { LABEL[id]=label; });

  // Acumula volumes lendo os inputs do DOM
  const semAtual = {};
  divisao.default.forEach((sessaoGrupos, ti) => {
    sessaoGrupos.forEach(({g}) => {
      const iEx  = $('iex-'  + cardIdx + '-' + ti + '-' + g);
      const iSer = $('iser-' + cardIdx + '-' + ti + '-' + g);
      if(iEx && iSer){
        const ser = (parseInt(iEx.value)||1) * (parseInt(iSer.value)||1);
        semAtual[g] = (semAtual[g]||0) + ser;
      }
    });
  });

  // Atualiza chips
  Object.keys(semAtual).forEach(g => {
    const chip = $('chip-sem-' + cardIdx + '-' + g);
    if(!chip) return;
    const vg = _s3.volPorGrupo[g]; if(!vg) return;
    const freq_g = Math.max(1, vg.freq||1);
    const semMinAdj = freq_g>1 && (vg.semMin||0)%2!==0 ? (vg.semMin||0)+1 : (vg.semMin||0);
    const semMaxAdj = freq_g>1 && (vg.semMax||0)%2!==0 ? (vg.semMax||0)+1 : (vg.semMax||0);
    const ser = semAtual[g];
    const cor = ser < semMinAdj-1 ? 'var(--red)' : ser > semMaxAdj+1 ? 'var(--amber)' : 'var(--accent)';
    const valEl = chip.querySelector('[data-val]');
    if(valEl){ valEl.textContent = ser + 's'; valEl.style.color = cor; }
    chip.style.borderTopColor = cor;
  });
}



function sincronizarFreqGrupos(){
  const op = _s3.divisaoOpcoes[_s3.divisaoIdx]; if(!op) return;
  const freq    = val('pr-frequencia') || '3x';
  const numDias = parseInt(freq) || 3;
  const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias];
  // Remove fisicamente grupos INATIVOS (desligados na tela de Volume) das
  // sessões da divisão atual — sem isso, o grupo desativado continuava como
  // um item "fantasma" no array físico, nunca desenhado na tela mas ainda
  // ocupando uma posição real. Isso quebrava o zebrado (índice de exibição
  // desalinhado do índice real) e o reorder (subir/descer um grupo podia
  // trocar de posição com o fantasma sem nenhum efeito visual, exigindo um
  // clique extra pra de fato mover além dele, e arrastando o override errado
  // pra chave de sessão errada).
  divisao.default.forEach(sessao => {
    for(let i = sessao.length - 1; i >= 0; i--){
      const vg = _s3.volPorGrupo[sessao[i].g];
      if(!vg || vg.ativo === false) sessao.splice(i, 1);
    }
  });
  GRUPOS_MAPA.forEach(({id}) => { if(_s3.volPorGrupo[id]) _s3.volPorGrupo[id].freq = 0; });
  divisao.default.forEach(sessao => {
    sessao.forEach(({g}) => { if(_s3.volPorGrupo[g]) _s3.volPorGrupo[g].freq++; });
  });
}

// "← Distribuição" a partir do step 3 (Exercícios) — cruza de volta pro
// step 2, com Volume e Divisão (caixas empilhadas) visíveis de novo.
function voltarDivisao(){
  goStep(2, true);
  renderTabelaVolumeGlobal();
  renderTelaDivisao();
  show('s3-volume');
  show('s3-divisao');
  show('s3-vd-btnrow');
}

// Colapsa/expande a caixa de Volume por Grupo Muscular (a tabela + legenda) —
// os controles do cabeçalho (sér/exercício, reset) continuam sempre visíveis.
function toggleVolumeCaixa(){
  const body  = $('vol-collapse-body');
  const icone = $('vol-collapse-icone');
  if(!body) return;
  const aberto = body.style.display !== 'none';
  body.style.display = aberto ? 'none' : 'block';
  if(icone) icone.style.transform = aberto ? 'rotate(-90deg)' : 'rotate(0deg)';
}

// Colapsa/expande a caixa de Modelo de Divisão inteira (info + modelos
// disponíveis + cards) — mesmo padrão da caixa de Volume acima. O controle de
// Limite séries/sessão fica no cabeçalho, sempre visível mesmo recolhida.
function toggleDivisaoCaixa(){
  const body  = $('div-collapse-body');
  const icone = $('div-collapse-icone');
  if(!body) return;
  const aberto = body.style.display !== 'none';
  body.style.display = aberto ? 'none' : 'block';
  if(icone) icone.style.transform = aberto ? 'rotate(-90deg)' : 'rotate(0deg)';
}

// ══════════════════════════════════════════════════════════════════════════
// GUARDA DE EDIÇÃO NÃO SALVA — "⚙ Ajustar sessões" no Modelo de Divisão
// ══════════════════════════════════════════════════════════════════════════
// Um card ajustado em "⚙ Ajustar sessões" aponta seu op.chave pra um clone de
// trabalho (DIVISOES_TEMPLATES['edit-'+i], ver dcToggleEdicao) — isso só vira
// permanente se o personal usar "Salvar como modelo". Até lá, op._chaveOriginal
// fica marcado (é o rótulo de "existe ajuste não salvo aqui"); sair da tela,
// trocar de aba ou fechar o navegador sem isso descartava o ajuste em silêncio.

// Converte o id interno de grupo (GRUPOS_MAPA) pro nome usado no formulário de
// Nova Divisão / editor de biblioteca (GRUPOS_MUSCULARES, com acentos) — as
// duas listas de grupos do sistema não usam a mesma grafia.
const GRUPOMAPA_PARA_MUSCULAR_DISPLAY = {
  Peitoral:'Peitoral', Latissimo:'Latíssimo', Deltoide:'Deltóide', Triceps:'Tríceps',
  Biceps:'Bíceps', Quadriceps:'Quadríceps', Isquiossurais:'Isquiossurais', Gluteos:'Glúteos',
  Panturrilhas:'Panturrilhas', RetoAbdominal:'Reto Abdominal', Obliquo:'Oblíquo', Trapezio:'Trapézio',
};

function temEdicaoDivisaoNaoSalva(){
  return !!(typeof _s3!=='undefined' && _s3 && _s3.divisaoOpcoes && _s3.divisaoOpcoes.some(op => op._chaveOriginal));
}

// ── Excluir modelo de divisão (biblioteca ou "rápida" não salva) ────────────
// Nunca permite excluir modelo padrão do sistema (PPL, Upper/Lower etc.) —
// só existem duas formas legítimas de exclusão: (1) modelo que o personal
// salvou de verdade na biblioteca (op._libId setado por getDivisoesDisponiveis
// ao mesclar LIBS.distribuicao), ou (2) uma "Divisão rápida" (chave
// 'rapida-...') que nunca chegou a ser salva — só existe nesta sessão.
function podeExcluirDivisaoOpcao(op){
  return !!(op && (op._libId != null || String(op.chave||'').startsWith('rapida-')));
}

function excluirDivisaoOpcaoStep2(i){
  const op = _s3.divisaoOpcoes[i]; if(!op) return;
  if(!podeExcluirDivisaoOpcao(op)){
    alert('Modelos padrão do sistema não podem ser excluídos.');
    return;
  }
  if(op._libId != null){
    // Modelo de verdade na biblioteca — reaproveita o fluxo de confirmação
    // padrão (deletarItem/confirmarDeletar em biblioteca-exercicios.js), que já
    // trata a exclusão definitiva do LIBS.distribuicao. O card some desta tela
    // também, via hook em confirmarDeletar (não duplicar lógica de exclusão aqui).
    deletarItem('distribuicao', op._libId);
    return;
  }
  // Divisão rápida — nunca foi salva, então uma confirmação simples já basta.
  if(!confirm('Excluir esta divisão rápida da lista? Ela não foi salva como modelo, então não pode ser recuperada.')) return;
  removerDivisaoOpcaoDaLista(i);
}

// Remove um card da lista em memória (_s3.divisaoOpcoes) e reindexa os estados
// que dependem de índice (accordion aberto/fechado, edição leve em andamento).
function removerDivisaoOpcaoDaLista(i){
  const op = _s3.divisaoOpcoes[i]; if(!op) return;
  delete DIVISOES_TEMPLATES[op.chave];
  _s3.divisaoOpcoes.splice(i, 1);
  if(_s3._dcEditando === i) _s3._dcEditando = undefined;
  else if(_s3._dcEditando > i) _s3._dcEditando--;
  if(_s3.divisaoIdx >= _s3.divisaoOpcoes.length) _s3.divisaoIdx = Math.max(0, _s3.divisaoOpcoes.length - 1);
  else if(_s3.divisaoIdx > i) _s3.divisaoIdx--;
  const novoExpandido = {};
  Object.keys(_s3._divExpandido || {}).forEach(k => {
    const idx = parseInt(k);
    if(idx < i) novoExpandido[idx] = _s3._divExpandido[k];
    else if(idx > i) novoExpandido[idx-1] = _s3._divExpandido[k];
  });
  _s3._divExpandido = novoExpandido;
  renderTelaDivisao();
}

// Reverte o(s) card(s) ajustado(s) pro chave original (template de sistema ou
// modelo salvo) e descarta o clone de trabalho 'edit-i'.
function descartarEdicaoDivisao(){
  if(!_s3 || !_s3.divisaoOpcoes) return;
  _s3.divisaoOpcoes.forEach((op, i) => {
    if(op._chaveOriginal){
      delete DIVISOES_TEMPLATES['edit-' + i];
      op.chave = op._chaveOriginal;
      delete op._chaveOriginal;
    }
  });
  _s3._dcEditando = undefined;
  recalcularCargasDivisoes();
}

// Ponto de saída genérico: qualquer navegação que abandone a tela de
// Distribuição (voltar, trocar de aba, ir pra lista) passa por aqui. Sem
// ajuste pendente, executa direto; com ajuste pendente, pergunta antes.
let _pendingNavAposDescarte = null;

function confirmarSairEdicaoDivisao(fn){
  if(!temEdicaoDivisaoNaoSalva()){ fn(); return; }
  _pendingNavAposDescarte = fn;
  $('modal-edicao-divisao')?.classList.remove('hidden');
}

function modalDivisaoCancelar(){
  $('modal-edicao-divisao')?.classList.add('hidden');
  _pendingNavAposDescarte = null;
}

function modalDivisaoDescartar(){
  descartarEdicaoDivisao();
  $('modal-edicao-divisao')?.classList.add('hidden');
  const fn = _pendingNavAposDescarte; _pendingNavAposDescarte = null;
  if(fn) fn();
}

// "Salvar como modelo" — abre o formulário completo de Nova Divisão já
// pré-preenchido com as sessões exatamente como foram ajustadas em "⚙ Ajustar
// sessões", pra virar um modelo reutilizável de verdade em vez de se perder.
// A navegação pendente (_pendingNavAposDescarte) só é retomada depois que o
// personal efetivamente salvar no modal (ver hook em biblioteca-exercicios.js)
// — cancelar o modal deixa o personal de volta na tela de Distribuição.
function modalDivisaoSalvar(){
  $('modal-edicao-divisao')?.classList.add('hidden');
  const idx = (_s3.divisaoOpcoes||[]).findIndex(op => op._chaveOriginal);
  if(idx < 0) return;
  const op = _s3.divisaoOpcoes[idx];
  const divisaoEditada = DIVISOES_TEMPLATES[op.chave];
  abrirNovaDivisaoCompleta();
  if(divisaoEditada){
    const dias = divisaoEditada.default.map((sessaoGrupos, i) => ({
      label: (divisaoEditada.label && divisaoEditada.label[i]) || ('Treino ' + String.fromCharCode(65+i)),
      grupos: sessaoGrupos.map(x => GRUPOMAPA_PARA_MUSCULAR_DISPLAY[x.g]).filter(Boolean),
      enfase: '',
    }));
    const diasWrap = $('distrib-dias-wrap');
    if(diasWrap) diasWrap.innerHTML = '';
    dias.forEach(dia => addDiaDistrib(dia));
    const nomeEl = $('distrib-nome');
    if(nomeEl && !nomeEl.value) nomeEl.value = (op.nome||'').replace(/^★\s*/, '') + ' (ajustado)';
  }
}

// Fechar a guia/navegador com um ajuste pendente também avisa — esse é o
// único ponto que o app não controla via modal próprio (é o navegador quem
// mostra o aviso nativo de "sair da página?").
window.addEventListener('beforeunload', function(e){
  if(temEdicaoDivisaoNaoSalva()){
    e.preventDefault();
    e.returnValue = '';
    return '';
  }
});

// ── TELA C: FICHA ─────────────────────────────────────────────────────────────

// Monta o objeto de ficha (_s3.fichaObj) a partir do volume+divisão
// escolhidos. Retorna true se construiu com sucesso, false se o personal
// cancelou algum aviso de confirmação (grupos ausentes / incompatibilidade)
// — nesse caso quem chamou não deve prosseguir (nem mostrar resumo, nem
// re-renderizar a ficha).
function construirFichaModelo(){
  const s      = getActive(); if(!s) return false;
  const nivel  = val('pr-nivel') || s.anamnese?.nivel || 'Inic';
  const freq   = val('pr-frequencia') || s.anamnese?.frequencia || '3x';
  const op     = _s3.divisaoOpcoes[_s3.divisaoIdx] || _s3.divisaoOpcoes[0];
  if(!op){ alert('Selecione uma divisão primeiro.'); return false; }

  // ── Ler dados REAIS dos inputs do DOM por sessão ──────────────────────
  const numDias = parseInt(freq)||3;
  const divisao = DIVISOES_TEMPLATES[op.chave] || DIVISOES[numDias] || DIVISOES[3];
  const cardIdx = _s3.divisaoIdx;

  // Verificar grupos selecionados ausentes do modelo
  const gruposNoModelo = new Set();
  divisao.default.forEach(sess => sess.forEach(({g}) => gruposNoModelo.add(g)));
  const gruposAtivos = Object.keys(_s3.volPorGrupo).filter(g => _s3.volPorGrupo[g]?.ativo !== false);
  const gruposAusentes = gruposAtivos.filter(g => !gruposNoModelo.has(g));
  if(gruposAusentes.length){
    const LABEL = {}; GRUPOS_MAPA.forEach(({id,label}) => { LABEL[id]=label; });
    const nomes = gruposAusentes.map(g => LABEL[g]||g).join(', ');
    if(!confirm(`⚠️ Atenção: os seguintes grupos estão selecionados mas NÃO aparecem nesta divisão:

${nomes}

Eles não serão incluídos na ficha. Continuar assim mesmo?`)) return false;
  }

  // ── Verificar compatibilidade divisão × periodização ──────────────────
  // Só roda com PERIODIZACAO_ATIVA=true — não faz sentido avisar sobre
  // incompatibilidade de um modelo que ninguém escolheu ativamente.
  if(PERIODIZACAO_ATIVA){
    const modeloPrescricao = _modeloSelecionado || '';
    if(modeloPrescricao){
      const aviso = verificarCompatibilidadePeriodDiv(modeloPrescricao, op, numDias);
      if(aviso && !confirm(aviso + '\n\nDeseja continuar mesmo assim?')) return false;
    }
  }

  // Ler inputs do accordion (se aberto), overrides salvos, ou calcular
  const sessionDataByTreino = divisao.default.map((sessaoGrupos, ti) => {
    // 1ª prioridade: DOM (accordion aberto)
    const fromDOM = lerSessionDataDOM(cardIdx, ti, sessaoGrupos);
    if(fromDOM.length > 0) return fromDOM;
    // 2ª prioridade: overrides salvos pelo usuário ao editar inputs
    const overrides = _s3._sessionOverrides || {};
    const fromOverrides = sessaoGrupos
      .filter(({g}) => _s3.volPorGrupo[g]?.ativo !== false)
      .map(({g}) => {
        const key = String(ti) + '-' + g;
        return overrides[key] ? { g, ...overrides[key] } : null;
      }).filter(Boolean);
    if(fromOverrides.length > 0) return fromOverrides;
    // 3ª prioridade: calcular a partir de volPorGrupo
    return sessaoGrupos
      .filter(({g}) => _s3.volPorGrupo[g]?.ativo !== false)
      .map(({g}) => {
        const vg = _s3.volPorGrupo[g];
        if(!vg || vg.ativo === false) return null;
        const sEx = vg.serEx || _s3.seriesPorEx;
        const freq_g = Math.max(1, vg.freq || 1);
        const serSem = Math.round(((vg.semMin||0)+(vg.semMax||0))/2);
        const serSess = Math.max(sEx, Math.round(serSem/freq_g));
        const numEx   = Math.max(1, Math.round(serSess/sEx));
        return { g, numEx, serEx: sEx, serSessao: numEx*sEx };
      }).filter(Boolean);
  });

  const params = {
    objetivo: selectedObj || 'Saude', nivel, frequencia: freq,
    local:        val('pr-local') || s.anamnese?.local || 'academia',
    lesoes:       s.perfil?.lesoes || '',
    preferencias: val('pr-evitar') || s.anamnese?.preferencias || '',
    seriesPorEx: _s3.seriesPorEx,
    divisaoChave: op.chave,
    volPorGrupo: _s3.volPorGrupo,
    sessionDataByTreino,
    // Fase F — tempo estimado de treino: tempo disponível por sessão, usado
    // pra estimar o quão "apertada" a sessão vai ficar (ver `aperto` em
    // gerarFichaMotorV2) e favorecer exercícios mais eficientes quando necessário.
    duracaoDisponivel: parseInt(val('pr-duracao')) || parseInt(s.anamnese?.duracao) || 60,
  };

  _s3.fichaObj    = gerarFichaMotorV2(params);
  _s3.treinoAtivo = 0;

  $('ficha-divisao-label').textContent = op.nome;
  $('ficha-vol-label').textContent     = _s3.seriesPorEx + ' sér/ex · desvio ±' + (op.desvio !== undefined ? op.desvio : 0) + 's';

  const sel = $('ficha-divisao-select');
  if(sel){
    sel.innerHTML = '';
    _s3.divisaoOpcoes.forEach((o,i) => {
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = o.nome;
      if(i === _s3.divisaoIdx) opt.selected = true;
      sel.appendChild(opt);
    });
  }
  return true;
}

// Botão "Avançar para Exercícios →" da tela de Distribuição (step 2) — monta
// a ficha a partir do volume+divisão escolhidos e já cruza direto pro step de
// Exercícios (a tela de resumo intermediária foi removida: escolhido o
// modelo, não há necessidade de mais uma tela de confirmação no meio).
function montarFichaModelo(){
  if(!construirFichaModelo()) return;
  avancarParaExercicios();
}

// Cruza de fato pro step 3, renderizando a ficha de exercícios já montada.
function avancarParaExercicios(){
  renderFichaTabs();
  renderPainelAssimetrias();
  renderPreviewVolSemanal();
  // 's3-ficha' fica com display:none sempre que a tela de Volume é (re)inicializada
  // (ver iniciarTelaVolume) — sem reexibir aqui, a Tela C escondia isso por trás de
  // si mesma; removida a Tela C (ver montarFichaModelo), ninguém mais tornava esta
  // div visível de novo e o Step 3 aparecia em branco.
  show('s3-ficha');
  goStep(3);
}

function regerarFicha(){
  if(!_s3.fichaObj) return;
  if(!construirFichaModelo()) return;
  renderFichaTabs();
  renderPainelAssimetrias();
  renderPreviewVolSemanal();
}

function mudarDivisaoFicha(idx){
  _s3.divisaoIdx = parseInt(idx) || 0;
  sincronizarFreqGrupos();
  if(!construirFichaModelo()) return;
  renderFichaTabs();
  renderPainelAssimetrias();
  renderPreviewVolSemanal();
}
function renderPreviewVolSemanal(targetId){
  const el = $(targetId || 'preview-vol-semanal'); if(!el) return;
  const f  = _s3.fichaObj; if(!f){ el.innerHTML=''; return; }
  const s  = getActive();
  const obj = selectedObj || getUltimoTreino(s).objetivo || 'Saude';

  // MEV/MAV/MRV por objetivo (Israetel 2019 — Vault REF-Vol)
  const LIMIARES = {
    Hip:    {mev:10,mav:20,mrv:25}, Forca:  {mev:8,mav:16,mrv:20},
    Emagr:  {mev:8,mav:18,mrv:22}, Comp:   {mev:10,mav:18,mrv:22},
    Resist: {mev:8,mav:16,mrv:20}, CardioR:{mev:6,mav:12,mrv:16},
    Func:   {mev:6,mav:14,mrv:18}, Saude:  {mev:8,mav:14,mrv:18},
    Esport: {mev:10,mav:20,mrv:25},Reab:   {mev:6,mav:12,mrv:16},
    Envelhec:{mev:6,mav:12,mrv:16},Gestacao:{mev:6,mav:10,mrv:14},
  };
  const lim = LIMIARES[obj] || {mev:8,mav:16,mrv:20};

  // Somar volume semanal por grupo (todas as sessões)
  const volSem = {};
  f.treinos.forEach(t => t.exercicios.forEach(ex => {
    volSem[ex.musculo] = (volSem[ex.musculo]||0) + parseInt(ex.series||0);
  }));

  const grupos = Object.keys(volSem).sort();
  const rows = grupos.map(g => {
    const v = volSem[g]||0;
    let status, cor, icon;
    if(v < lim.mev){
      status='Abaixo MEV'; cor='var(--red)'; icon='🔴';
    } else if(v <= lim.mav){
      status='MEV→MAV ✓'; cor='var(--accent)'; icon='🟢';
    } else if(v <= lim.mrv){
      status='Próx. MRV'; cor='var(--amber)'; icon='🟡';
    } else {
      status='Acima MRV ⚠️'; cor='var(--red)'; icon='🔴';
    }
    // Barra de progresso visual
    const pct = Math.min(100, Math.round(v/lim.mrv*100));
    const barColor = v>lim.mrv?'var(--red)':v>lim.mav?'var(--amber)':'var(--accent)';
    return `<tr>
      <td style="font-size:12px;color:var(--text2);padding:5px 8px">${g}</td>
      <td style="padding:5px 8px;font-family:var(--mono);font-size:13px;font-weight:700;color:${cor};text-align:center">${v}</td>
      <td style="padding:5px 8px;font-size:10px;color:var(--text3);text-align:center">${lim.mev}→${lim.mav}→${lim.mrv}</td>
      <td style="padding:5px 12px">
        <div style="background:var(--bg4);border-radius:3px;height:6px;min-width:80px;position:relative">
          <div style="background:${barColor};height:6px;border-radius:3px;width:${pct}%;max-width:100%"></div>
          <div style="position:absolute;left:${Math.min(99,Math.round(lim.mev/lim.mrv*100))}%;top:-3px;width:1px;height:12px;background:rgba(255,255,255,.3)"></div>
          <div style="position:absolute;left:${Math.min(99,Math.round(lim.mav/lim.mrv*100))}%;top:-3px;width:1px;height:12px;background:rgba(255,255,255,.3)"></div>
        </div>
      </td>
      <td style="font-size:10px;color:${cor};padding:5px 8px;white-space:nowrap">${icon} ${status}</td>
    </tr>`;
  }).join('');

  const totalSem = Object.values(volSem).reduce((a,b)=>a+b,0);
  el.innerHTML = `
    <div class="section-label">📊 Volume Semanal por Grupo — ${obj}</div>
    <div style="font-size:11px;color:var(--text3);margin-bottom:8px">
      Referência Israetel 2019: <strong>MEV</strong> (mínimo efetivo) → <strong>MAV</strong> (máximo adaptativo) → <strong>MRV</strong> (máximo recuperável)
    </div>
    <table style="width:100%;border-collapse:collapse">
      <thead><tr style="border-bottom:1px solid var(--border)">
        <th style="text-align:left;padding:4px 8px;font-size:10px;color:var(--text3)">Grupo</th>
        <th style="text-align:center;padding:4px 8px;font-size:10px;color:var(--text3)">Séries/sem</th>
        <th style="text-align:center;padding:4px 8px;font-size:10px;color:var(--text3)">MEV/MAV/MRV</th>
        <th style="padding:4px 12px;font-size:10px;color:var(--text3)">Volume</th>
        <th style="text-align:left;padding:4px 8px;font-size:10px;color:var(--text3)">Status</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="margin-top:8px;font-size:11px;color:var(--text3);text-align:right">
      Total na semana: <strong style="color:var(--accent);font-family:var(--mono)">${totalSem} séries</strong>
    </div>`;
}


function renderFichaTabs(){
  const f = _s3.fichaObj; if(!f) return;
  const tabs = $('ficha-tabs'); tabs.innerHTML = '';
  f.treinos.forEach((t,i) => {
    const tab = document.createElement('div');
    tab.className = 'tab' + (i===_s3.treinoAtivo?' active':'');
    tab.style.fontSize = '11px';
    const totalSeries = t.exercicios.reduce((acc,ex)=>acc+parseInt(ex.series||0),0);
    tab.innerHTML = `${t.label.split(' — ')[0]} <span style="color:var(--text3);font-size:9px">${totalSeries}s</span>`;
    tab.onclick = () => { _s3.treinoAtivo = i; renderFichaTabs(); };
    tabs.appendChild(tab);
  });
  renderTreinoAtivo();
}

// ── Barra de Solicitação Articular ──────────────────────────────────────────
// Exibe, em tempo real, quais articulações estão sendo exigidas na sessão e
// com que intensidade relativa (quantos exercícios as recrutam). Atualiza
// automaticamente quando o personal troca um exercício (renderTreinoAtivo faz
// o re-render completo). Usa a mesma ordem de ORDEM_ARTIC_AQUECIMENTO pra
// consistência visual com o bloco de aquecimento.
function _htmlBarraArticular(exercicios){
  if(!exercicios || !exercicios.length) return '';
  const cont = {};
  exercicios.forEach(ex => {
    (ex._artic||[]).forEach(a => {
      if(a) cont[a] = (cont[a]||0) + 1;
    });
  });
  const total = exercicios.length;
  const ordenadas = Object.keys(cont).sort((a,b) => {
    const ia = ORDEM_ARTIC_AQUECIMENTO.indexOf(a), ib = ORDEM_ARTIC_AQUECIMENTO.indexOf(b);
    const ra = ia < 0 ? 999 : ia, rb = ib < 0 ? 999 : ib;
    if(ra !== rb) return ra - rb;
    return cont[b] - cont[a]; // empate na ordem → maior demanda primeiro
  });
  if(!ordenadas.length) return '';
  const maxCont = Math.max(...Object.values(cont));
  const chips = ordenadas.map(a => {
    const n = cont[a];
    const pct = Math.round((n / total) * 100);
    const barPct = Math.round((n / maxCont) * 100);
    // Cor por demanda relativa ao total de exercícios
    const cor = pct >= 60 ? 'var(--accent)' : pct >= 35 ? '#e8a020' : pct >= 20 ? 'var(--text2)' : 'var(--text3)';
    const barCor = pct >= 60 ? 'var(--accent)' : pct >= 35 ? '#e8a020' : pct >= 20 ? 'var(--text3)' : 'var(--bg2)';
    const badge = n > 1 ? `<span style="font-size:9px;margin-left:3px;opacity:.7">×${n}</span>` : '';
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
      <span style="font-size:10px;font-weight:${pct>=35?'700':'400'};color:${cor};white-space:nowrap">${a}${badge}</span>
      <div style="width:100%;height:2px;background:var(--bg2);border-radius:1px">
        <div style="width:${barPct}%;height:100%;background:${barCor};border-radius:1px;transition:width .3s"></div>
      </div>
    </div>`;
  }).join('');
  return `<div style="padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px">
    <div style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:5px">🦴 Solicitação articular</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px 14px">${chips}</div>
  </div>`;
}

function renderTreinoAtivo(){
  const f = _s3.fichaObj; if(!f) return;
  const treino = f.treinos[_s3.treinoAtivo];
  const cont   = $('ficha-treinos-content');
  const volSessao = {};
  treino.exercicios.forEach(ex => { volSessao[ex.musculo] = (volSessao[ex.musculo]||0) + parseInt(ex.series||0); });
  const resumo = Object.entries(volSessao).map(([m,s]) =>
    `<span style="font-family:var(--mono);font-size:10px;color:var(--text3)">${m.replace('Isquiossurais','Isquio').replace('RetoAbdominal','Abd').replace('Panturrilhas','Pant')}: <strong style="color:var(--accent)">${s}</strong></span>`
  ).join(' &nbsp;·&nbsp; ');
  const totalSessao = Object.values(volSessao).reduce((a,b)=>a+b,0);

  // Fase F — tempo estimado de treino: informativo, ao lado do total de séries.
  const tempoEstimado = calcularTempoEstimadoTreino(treino);
  const duracaoAlvoMin = f.duracaoAlvoMin || 60;
  const difMin = tempoEstimado.minutos - duracaoAlvoMin;
  const corTempo = Math.abs(difMin) <= 5 ? 'var(--text3)' : (difMin > 0 ? '#ffb400' : 'var(--text3)');
  const tempoHtml = `<span style="font-family:var(--mono);font-size:10px;color:${corTempo}" title="Estimativa — soma tempo de execução e descanso dos exercícios desta sessão">⏱ ~${tempoEstimado.minutos} min (alvo: ${duracaoAlvoMin} min)${difMin>5?` — ${difMin} min acima do combinado`:''}</span>`;

  // ── Bloco de Aquecimento — RASCUNHO ──────────────────────────────────────
  // Gerado automaticamente a partir das articulações dos exercícios principais
  // desta sessão (ver gerarAquecimentoArticular). Fica separado, ANTES da parte
  // principal — não conta série/volume, é preparação. Fichas antigas (salvas
  // antes desse recurso existir) não têm `.aquecimento` — trata como vazio.
  const aquecimento = treino.aquecimento || [];
  const aquecimentoHtml = aquecimento.length ? `
    <div style="margin-bottom:14px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg3);border-bottom:1px solid var(--border);gap:8px;flex-wrap:wrap">
        <div style="font-size:11px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.04em">🔥 Aquecimento</div>
        <div style="display:flex;align-items:center;gap:6px;flex:1;justify-content:center;flex-wrap:wrap">
          ${Object.keys(TIPOS_AQUECIMENTO).map(label => {
            const sel = (_s3.aquecTipos||['Mobilidade']).includes(TIPOS_AQUECIMENTO[label]);
            const short = label==='Liberação Miofascial'?'Liberação':label;
            return `<button onclick="toggleAquecTipo('${TIPOS_AQUECIMENTO[label]}')" style="font-size:10px;padding:2px 10px;border-radius:20px;border:1px solid ${sel?'var(--accent)':'var(--border)'};background:${sel?'var(--accent)':'transparent'};color:${sel?'#fff':'var(--text3)'};cursor:pointer;transition:all .15s">${short}</button>`;
          }).join('')}
        </div>
        <button class="btn btn-ghost btn-sm" style="font-size:10px;padding:3px 8px" onclick="regerarAquecimentoTreinoAtivo()">🔄 Sortear</button>
      </div>
      <table class="treino-table" style="margin:0">
        <thead><tr><th>Articulação</th><th>Mobilização</th><th>Duração</th></tr></thead>
        <tbody>
          ${aquecimento.map(a => `<tr>
            <td style="font-size:11px;color:var(--text3)">${a.artic}</td>
            <td style="font-size:12px">${a.nome}${a.url?` <a data-url="${a.url}" data-nome="${(a.nome||'').replace(/"/g,'&quot;')}" onclick="abrirVideoModal(this.dataset.url,this.dataset.nome)" style="font-size:9px;color:var(--accent);text-decoration:none;cursor:pointer" title="Ver vídeo">▶</a>`:''}</td>
            <td style="font-size:11px;color:var(--text2)">${a.duracao}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : `
    <div style="margin-bottom:14px;font-size:11px;color:var(--text3);font-style:italic">Sem aquecimento sugerido para esta sessão (nenhuma articulação identificada ou sem mobilização compatível nos filtros atuais).</div>`;

  const barraArticular = _htmlBarraArticular(treino.exercicios);

  cont.innerHTML = `
    ${aquecimentoHtml}
    <div style="padding:8px 0 6px;border-bottom:1px solid var(--border);margin-bottom:8px">
      <div style="font-size:11px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">💪 Parte Principal</div>
      <div style="font-size:11px;color:var(--text2);margin-bottom:4px">${treino.label} — <strong style="color:var(--accent)">${totalSessao} séries totais</strong> &nbsp;·&nbsp; ${tempoHtml}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:${barraArticular?'8px':'0'}">${resumo}</div>
    </div>
    ${barraArticular}
    <table class="treino-table">
      <thead><tr><th>#</th><th>Músculo</th><th>Porção</th><th>Exercício <span style="color:var(--text3);font-weight:400;font-size:10px">(↕ trocar)</span></th><th>Séries</th><th>Reps</th><th>Intensidade</th><th>Intervalo</th><th>Bi/Tri-set</th></tr></thead>
      <tbody id="tbody-treino"></tbody>
    </table>`;

  const tbody = $('tbody-treino');
  const gruposInfo = _computarGruposExercicios(treino.exercicios);
  treino.exercicios.forEach((ex, rowIdx) => {
    const tr = document.createElement('tr');
    const info = gruposInfo[rowIdx];
    // Grupo (bi-set/tri-set): borda colorida na lateral esquerda da linha marca
    // visualmente que ela pertence a um bloco vinculado, igual ao badge 1/2, 2/2
    // que o FitCpx real mostra — sem isso não dá pra registrar treino com
    // exercícios combinados (o personal digita tudo separado e perde a intenção).
    if(info) tr.style.borderLeft = '3px solid ' + _corGrupo(info.grupoIdx);
    const badgeGrupo = info
      ? `<span style="font-size:9px;font-weight:700;color:#fff;background:${_corGrupo(info.grupoIdx)};padding:1px 6px;border-radius:10px;margin-right:5px">${info.pos}/${info.total}</span>`
      : '';
    // Nota clínica inline se existir
    const notaHtml = ex.nota_clinica
      ? `<div style="font-size:10px;color:#ffb400;margin-top:3px;line-height:1.4">${ex.nota_clinica}</div>`
      : '';
    const podeSubir = rowIdx > 0;
    const podeDescer = rowIdx < treino.exercicios.length - 1;
    const vinculadoProximo = !!ex._vinculadoProximo;
    tr.innerHTML = `
      <td style="font-family:var(--mono);color:var(--text3)">
        <div style="display:flex;align-items:center;gap:2px">
          ${badgeGrupo}<span>${rowIdx+1}</span>
        </div>
        <div style="display:flex;gap:2px;margin-top:3px">
          <button class="tbtn" title="Subir" style="font-size:9px;padding:1px 5px;${podeSubir?'':'opacity:.3;cursor:default'}"
            ${podeSubir?`onclick="moverExercicio(${_s3.treinoAtivo},${rowIdx},-1)"`:'disabled'}>▲</button>
          <button class="tbtn" title="Descer" style="font-size:9px;padding:1px 5px;${podeDescer?'':'opacity:.3;cursor:default'}"
            ${podeDescer?`onclick="moverExercicio(${_s3.treinoAtivo},${rowIdx},1)"`:'disabled'}>▼</button>
        </div>
      </td>
      <td style="font-size:11px">${ex.musculo.replace('Isquiossurais','Isquio').replace('RetoAbdominal','Abd').replace('Panturrilhas','Pant')}</td>
      <td style="font-size:10px;color:var(--text3)">${ex.porcao||'—'}</td>
      <td>
        <div style="display:flex;align-items:center;gap:6px">
          <span style="font-size:12px" id="ex-nome-${_s3.treinoAtivo}-${rowIdx}">${ex.nome}</span>
          <button class="tbtn" style="font-size:9px;padding:2px 7px;flex-shrink:0"
            onclick="abrirListaExercicios(${_s3.treinoAtivo},${rowIdx},'${ex.musculo}','${(ex.porcao==='Geral'||!ex.porcao)?'null':ex.porcao.replace(/'/g,'')}')">↕</button>
        </div>
        ${notaHtml}
        <div id="lista-ex-${_s3.treinoAtivo}-${rowIdx}" class="hidden"
          style="margin-top:6px;max-height:160px;overflow-y:auto;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);padding:4px"></div>
      </td>
      <td><input type="number" value="${ex.series}" min="1" max="10"
        style="width:3.2em;background:transparent;border:1px solid transparent;padding:4px 5px;color:var(--text);font-family:var(--mono);font-size:12px;border-radius:3px;outline:none"
        onfocus="this.style.borderColor='var(--accent2)';this.style.background='var(--bg4)'"
        onblur="this.style.borderColor='transparent';this.style.background='transparent';atualizarCampo(${_s3.treinoAtivo},${rowIdx},'series',this.value)"></td>
      <td><input type="text" value="${ex.reps}"
        style="width:54px;background:transparent;border:1px solid transparent;padding:4px 5px;color:var(--text);font-family:var(--mono);font-size:12px;border-radius:3px;outline:none"
        onfocus="this.style.borderColor='var(--accent2)';this.style.background='var(--bg4)'"
        onblur="this.style.borderColor='transparent';this.style.background='transparent';atualizarCampo(${_s3.treinoAtivo},${rowIdx},'reps',this.value)"></td>
      <td style="font-size:11px;color:var(--text2)">${ex.intensidade}</td>
      <td style="font-size:11px;color:var(--text2)">${ex.intervalo}</td>
      <td>
        ${podeDescer ? `<button class="tbtn" style="font-size:9px;padding:2px 7px;white-space:nowrap;${vinculadoProximo?'background:var(--accent-dim);color:var(--accent);border-color:var(--accent)':''}"
            title="${vinculadoProximo?'Desagrupar do exercício de baixo':'Agrupar com o exercício de baixo (bi-set/tri-set)'}"
            onclick="toggleVinculoProximo(${_s3.treinoAtivo},${rowIdx})">${vinculadoProximo?'✂ Desagrupar':'🔗 Agrupar ↓'}</button>` : ''}
      </td>`;
    tbody.appendChild(tr);
  });
}

// ── Agrupamento de exercícios (bi-set / tri-set) — RASCUNHO ────────────────
// Modelo: cada exercício pode ter `_vinculadoProximo=true`, o que significa
// "este exercício forma um bloco combinado com o PRÓXIMO da lista". Um grupo
// é, portanto, uma sequência contígua de exercícios encadeados assim — não
// existe um "id de grupo" salvo à parte, é só a posição + o flag, igual à
// forma como o personal pensa: "esses dois eu fiz um atrás do outro, sem
// descanso entre eles". Mover um exercício de posição (▲▼) pode alterar a
// que grupo ele pertence, já que o vínculo é sempre com quem está imediatamente
// ao lado — comportamento aceito por ora, é o suficiente pra um rascunho.
function _computarGruposExercicios(exercicios){
  const membroInfo = {};
  let grupoAtual = null, grupoIdx = -1;
  exercicios.forEach((ex, i) => {
    if(grupoAtual === null) grupoAtual = [i];
    else grupoAtual.push(i);
    const ultimoDoTreino = i === exercicios.length - 1;
    if(!ex._vinculadoProximo || ultimoDoTreino){
      if(grupoAtual.length > 1){
        grupoIdx++;
        grupoAtual.forEach((idx, pos) => { membroInfo[idx] = { pos: pos+1, total: grupoAtual.length, grupoIdx }; });
      }
      grupoAtual = null;
    }
  });
  return membroInfo;
}

const _CORES_GRUPO = ['#f5a623','#4a90d9','#9b59b6','#2ecc71','#e74c3c','#1abc9c'];
function _corGrupo(idx){ return _CORES_GRUPO[idx % _CORES_GRUPO.length]; }

// ── Tempo estimado de treino (Fase F) ───────────────────────────────────────
// Calcula com os exercícios JÁ escolhidos (usa `_tempoRep`/`_uni` guardados na
// geração — ver gerarFichaMotorV2). Não precisa ser exato, precisa ser útil:
// dá uma referência de quanto a sessão deve durar frente ao tempo disponível
// que o aluno informou.

// Extrai a média de uma faixa tipo "10–15", "60–90s", "15+" (abre mão do "+").
function parseFaixaMedia(str){
  if(!str) return 0;
  const nums = String(str).replace(',', '.').match(/[\d.]+/g);
  if(!nums || !nums.length) return 0;
  const valores = nums.map(Number);
  return valores.reduce((a,b)=>a+b, 0) / valores.length;
}

const TEMPO_ISOMETRICO_PADRAO_SEG = 60; // "usa 60 segundos por enquanto, depois refino" — banco ainda não tem seg/rep pra isométricos

// Blocos de execução de UMA série do exercício (reps × seg/rep, ou o padrão
// isométrico). Um exercício normal (Bilateral / Bilateral com Carga
// Unilateral) é 1 bloco só; um exercício Unilateral vira 2 blocos (um por
// lado, mesmo tempo cada) — é assim que a "dobra" de tempo entra na conta,
// e cada bloco extra gera uma TROCA (ver calcularTempoEstimadoTreino).
function _blocosExecucao(ex){
  const reps = parseFaixaMedia(ex.reps);
  // Isométrico detectado pelo campo `contracao` (Pico de Contração ===
  // "Isométrica"), direto da planilha oficial.
  const tempoBloco = ex._contracaoIsometrica
    ? TEMPO_ISOMETRICO_PADRAO_SEG
    : reps * (parseFloat(ex._tempoRep) || 4); // fallback se o exercício não tiver `tempo` cadastrado
  return ex._uni ? [tempoBloco, tempoBloco] : [tempoBloco];
}

// Tempo total estimado do treino, em segundos e minutos — Momento 2 (tela de
// seleção de exercício, exercícios já escolhidos). Regra fechada e validada
// com o Milton em 2026-08-29 (planilha linha a linha, 6 cenários reais,
// bateu 100%): dentro de um grupamento (bi-set/tri-set via
// `_vinculadoProximo`/_computarGruposExercicios, ou um exercício solo),
// TROCA (30s) acontece entre cada bloco de execução — troca de exercício no
// biset/triset OU troca de lado num Unilateral, mesmo valor pros dois casos.
// DESCANSO (o intervalo prescrito pro grupamento) entra só UMA vez, depois
// do ÚLTIMO bloco, repetido a cada série (não só entre séries).
function calcularTempoEstimadoTreino(treino){
  if(!treino?.exercicios?.length) return { segundos: 0, minutos: 0 };
  const gruposInfo = _computarGruposExercicios(treino.exercicios);
  let totalSegundos = 0;
  let i = 0;
  while(i < treino.exercicios.length){
    const info = gruposInfo[i];
    const ehGrupamento = info && info.pos === 1;
    const membros = ehGrupamento ? treino.exercicios.slice(i, i + info.total) : [treino.exercicios[i]];

    const series = Math.max(...membros.map(m => parseInt(m.series) || 1));
    const descanso = membros.reduce((acc, m) => acc + parseFaixaMedia(m.intervalo), 0) / membros.length;

    const blocos = membros.flatMap(_blocosExecucao);
    const execucaoPorSerie = blocos.reduce((a, b) => a + b, 0);
    const trocasPorSerie = Math.max(0, blocos.length - 1) * TEMPO_TROCA_SEG;

    totalSegundos += series * (execucaoPorSerie + trocasPorSerie + descanso);
    i += ehGrupamento ? info.total : 1;
  }
  return { segundos: Math.round(totalSegundos), minutos: Math.round(totalSegundos / 60) };
}

function toggleVinculoProximo(ti, rowIdx){
  const treino = _s3.fichaObj?.treinos[ti]; if(!treino) return;
  const ex = treino.exercicios[rowIdx]; if(!ex || rowIdx >= treino.exercicios.length-1) return;
  ex._vinculadoProximo = !ex._vinculadoProximo;
  renderTreinoAtivo();
}

function moverExercicio(ti, rowIdx, direcao){
  const treino = _s3.fichaObj?.treinos[ti]; if(!treino) return;
  const alvo = rowIdx + direcao;
  if(alvo < 0 || alvo >= treino.exercicios.length) return;
  const arr = treino.exercicios;
  [arr[rowIdx], arr[alvo]] = [arr[alvo], arr[rowIdx]];
  renderTreinoAtivo();
}

function abrirListaExercicios(ti, rowIdx, musculo, porcaoStr){
  const listId = `lista-ex-${ti}-${rowIdx}`;
  const listEl = $(listId); if(!listEl) return;
  const isOpen = !listEl.classList.contains('hidden');
  document.querySelectorAll('[id^="lista-ex-"]').forEach(el => el.classList.add('hidden'));
  if(isOpen) return;

  const s     = getActive();
  const nivel = val('pr-nivel') || s?.anamnese?.nivel || 'Inic';
  const local = s?.anamnese?.local || 'academia';
  const lesoes = (s?.perfil?.lesoes||'') + ' ' + (s?.anamnese?.preferencias||'');
  const resist = getResistPermitida(local);
  const porcao = (porcaoStr==='null'||!porcaoStr) ? null : porcaoStr;

  // Pool base (nível/recurso/ci)
  let poolBase = filtrarExerciciosFicha(musculo, porcao, resist, nivel, lesoes);
  if(!poolBase.length) poolBase = filtrarExerciciosFicha(musculo, null, resist, nivel, lesoes);
  if(!poolBase.length) poolBase = DB_EXERCICIOS.filter(e=>e.g.some(x=>buscaFuzzy(musculo, x.nome)));

  // Aplicar status Camada 3 para exibição
  const { bloqueios, prioridades } = extrairFlagsClinicas();
  const poolComStatus = poolBase.map(e => {
    for(const flag of bloqueios){
      const regra = FLAGS_FILTRO[flag];
      if(regra?.bloqueio(e)) return { ...e, _status:'bloqueado', _motivo: regra.motivo };
    }
    for(const prio of prioridades){
      const fn = FLAGS_PRIORIDADE[prio];
      if(fn && fn(e)) return { ...e, _status:'prioritario', _motivo: prio };
    }
    // "Não recomendado" (2026-08-28) — não bloqueia, só avisa e tira 1 ponto
    // na classificação (ver sortearExercicioC4). Hoje só Baixo Impacto.
    if(bloqueios.includes('Baixo Impacto') && _exercicioAltoImpacto(e)){
      return { ...e, _status:'nao_recomendado', _motivo: 'Alto impacto — não recomendado com IMC ≥ 30' };
    }
    return { ...e, _status:'ok', _motivo:'' };
  });

  // Ordenar: prioritários > ok > não recomendados > bloqueados
  const ordenado = [
    ...poolComStatus.filter(e=>e._status==='prioritario'),
    ...poolComStatus.filter(e=>e._status==='ok'),
    ...poolComStatus.filter(e=>e._status==='nao_recomendado'),
    ...poolComStatus.filter(e=>e._status==='bloqueado'),
  ];

  listEl.innerHTML = '';

  if(!ordenado.length){
    const empty = document.createElement('div');
    empty.style.cssText = 'font-size:11px;color:var(--text3);padding:6px';
    empty.textContent = 'Nenhum exercício encontrado';
    listEl.appendChild(empty);
  } else {
    // Cabeçalho com legenda compacta
    if(bloqueios.length || prioridades.length){
      const leg = document.createElement('div');
      leg.style.cssText = 'font-size:10px;color:var(--text3);padding:4px 8px;border-bottom:1px solid var(--border);margin-bottom:2px;font-family:var(--mono)';
      leg.textContent = '🟢 Prior.  ⚪ Ok  🟡 Não recom.  🔴 Bloq. (Filtros clínicos ativos)';
      listEl.appendChild(leg);
    }

    ordenado.forEach(e => {
      const div = document.createElement('div');
      const isBloq = e._status === 'bloqueado';
      const isPrio = e._status === 'prioritario';
      const isNaoRec = e._status === 'nao_recomendado';
      div.style.cssText = `padding:5px 8px;border-radius:3px;cursor:${isBloq?'not-allowed':'pointer'};` +
        `font-size:11px;color:${isBloq?'var(--text3)':isPrio?'var(--text)':isNaoRec?'var(--text2)':'var(--text2)'};` +
        `opacity:${isBloq?'0.5':'1'};transition:background .1s;` +
        `border-left:2px solid ${isPrio?'var(--accent)':isBloq?'rgba(255,80,80,.4)':isNaoRec?'rgba(255,180,50,.5)':'transparent'};` +
        `padding-left:${isPrio||isBloq||isNaoRec?'10px':'8px'}`;
      div.dataset.nome = e.n;
      div.dataset.bloq = isBloq ? '1' : '0';

      const icone = isPrio ? '🟢 ' : isBloq ? '🔴 ' : isNaoRec ? '🟡 ' : '';
      const tag_nv = `<span style="color:var(--text3);font-size:9px">${e.nv?.nome||''}</span>`;
      const tag_uni = _exercicioUnilateral(e) ? `<span style="color:var(--text3);font-size:9px;margin-left:4px">uni</span>`
                    : _exercicioBilateralCU(e) ? `<span style="color:var(--text3);font-size:9px;margin-left:4px">CU</span>` : '';
      const tag_url = e.url ? `<a data-url="${e.url}" data-nome="${(e.n||'').replace(/"/g,'&quot;')}" onclick="event.stopPropagation();abrirVideoModal(this.dataset.url,this.dataset.nome)" style="font-size:9px;color:var(--accent);margin-left:4px;text-decoration:none;cursor:pointer" title="Ver vídeo">▶</a>` : '';
      const tag_fav = `<span data-exid="${e.id}" onclick="event.stopPropagation();toggleFavorito(${e.id},this)" style="font-size:10px;margin-left:4px;cursor:pointer;opacity:.8" title="${ehFavorito(e.id)?'Remover favorito':'Favoritar exercício'}">${ehFavorito(e.id)?'⭐':'☆'}</span>`;
      const tag_motivo = (isBloq || isPrio || isNaoRec) && e._motivo
        ? `<div style="font-size:9px;color:${isBloq?'#ff5050':isNaoRec?'#e0a030':'var(--accent)'};margin-top:1px;opacity:.85">${e._motivo.split('—')[0].trim()}</div>` : '';

      div.innerHTML = `${icone}${e.n} ${tag_nv}${tag_uni}${tag_url}${tag_fav}${tag_motivo}`;

      if(!isBloq){
        div.addEventListener('mouseover', function(){ this.style.background = 'var(--bg3)'; });
        div.addEventListener('mouseout',  function(){ this.style.background = ''; });
        div.addEventListener('click', function(){
          if(this.dataset.bloq === '1') return;
          selecionarExercicio(ti, rowIdx, this.dataset.nome, listId);
        });
      }
      listEl.appendChild(div);
    });
  }
  listEl.classList.remove('hidden');
}

function selecionarExercicio(ti, rowIdx, nome, listId){
  const treino = _s3.fichaObj?.treinos[ti];
  if(treino){
    treino.exercicios[rowIdx].nome = nome;
    // Trocar o exercício principal pode trocar a articulação envolvida (ex:
    // trocar "Supino Reto" por "Crucifixo" muda de Cotovelo+Ombro pra só Ombro)
    // — sem atualizar _artic e regerar o aquecimento, ele ficaria desatualizado
    // em relação ao que a sessão de fato vai treinar.
    const dbEx = DB_EXERCICIOS.find(e => e.n === nome);
    treino.exercicios[rowIdx]._artic = (dbEx?.artic||[]).map(a=>a.nome);
    regerarAquecimentoTreino(ti);
    renderTreinoAtivo(); // re-render completo: precisa refletir o aquecimento recalculado, não só o nome trocado
    return;
  }
  const el = $(`ex-nome-${ti}-${rowIdx}`); if(el) el.textContent = nome;
  const listEl = $(listId); if(listEl) listEl.classList.add('hidden');
}

function atualizarCampo(ti, rowIdx, campo, valor){
  if(_s3.fichaObj?.treinos[ti]) _s3.fichaObj.treinos[ti].exercicios[rowIdx][campo] = valor;
}

// Recalcula o aquecimento de UMA sessão a partir das articulações dos
// exercícios principais que estão nela agora (usado após trocar um exercício
// pelo ↕, ou pelo botão "Sortear de novo" no bloco de aquecimento).
function regerarAquecimentoTreino(ti){
  const f = _s3.fichaObj; if(!f || !f.treinos[ti]) return;
  const treino = f.treinos[ti];
  const s = getActive();
  const nivel = val('pr-nivel') || s?.anamnese?.nivel || 'Inic';
  const local = val('pr-local') || s?.anamnese?.local || 'academia';
  const resistPermitida = getResistPermitida(local);
  const contraindicacoes = [
    s?.perfil?.lesoes || '', s?.perfil?.condicoes || '', val('pr-evitar') || s?.anamnese?.preferencias || '',
  ].filter(Boolean).join(' ');
  const articsTreino = new Set();
  treino.exercicios.forEach(ex => { (ex._artic||[]).forEach(a => { if(a) articsTreino.add(a); }); });
  treino.aquecimento = gerarAquecimentoArticular(articsTreino, resistPermitida, nivel, contraindicacoes, _s3.aquecTipos);
}

function toggleAquecTipo(tipo){
  _s3.aquecTipos = _s3.aquecTipos || ['Mobilidade'];
  const idx = _s3.aquecTipos.indexOf(tipo);
  if(idx >= 0){
    // Não deixa desmarcar o último tipo (mínimo 1 selecionado)
    if(_s3.aquecTipos.length === 1) return;
    _s3.aquecTipos = _s3.aquecTipos.filter(t => t !== tipo);
  } else {
    _s3.aquecTipos = [..._s3.aquecTipos, tipo];
  }
  regerarAquecimentoTreinoAtivo();
}

function regerarAquecimentoTreinoAtivo(){
  regerarAquecimentoTreino(_s3.treinoAtivo);
  renderTreinoAtivo();
}

function iniciarConfiguracaoFicha(){ iniciarTelaVolume(); }

function editarFicha(){
  goStep(3, true);
  const s = getActive();
  const treinoAtual = _treinoEditId!=null ? getTreinoPorId(s, _treinoEditId) : null;
  if(!_s3.fichaObj && treinoAtual?._fichaObj){
    // _s3 (estado em memória) é perdido após reload da página ou troca de aluno —
    // sem isto, "Editar" cairia no else abaixo e reconstruiria do zero (sugestões
    // novas), descartando a ficha estruturada já aprovada e salva no aluno.
    _s3.fichaObj    = treinoAtual._fichaObj;
    _s3.treinoAtivo = 0;
  }
  if(_s3.fichaObj){ hide('s3-volume'); hide('s3-divisao'); renderFichaTabs(); show('s3-ficha'); }
  else { iniciarTelaVolume(); }
}

// _treinoEditId: id do item de s.treinos[] que o wizard está preenchendo
// agora (rascunho novo, rascunho retomado, ou aprovado sendo reeditado).
// Substitui o antigo "s.prescricao sempre o último" — agora cada treino é
// um item independente na lista (js/treinos-store.js).
let _treinoEditId = null;

function novaPrescricao(){
  const s=getActive(); if(!s) return;
  _treinoEditId = criarRascunho(s);
  selectedObj=''; _modeloSelecionado = PERIODIZACAO_ATIVA ? '' : 'LP';
  setVal('pr-nivel',''); setVal('pr-frequencia',''); setVal('pr-obs',''); setVal('pr-validade','12sem');
  setVal('pr-objetivo-sec',''); setVal('pr-duracao',''); setVal('pr-horario','');
  setVal('pr-local',''); setVal('pr-gosta',''); setVal('pr-evitar','');
  _s3={seriesPorEx:3,volPorGrupo:{},divisaoIdx:0,divisaoOpcoes:[],fichaObj:null,treinoAtivo:0,aquecTipos:(_s3.aquecTipos||['Mobilidade'])};
  renderObjGrid(); goStep(1);
  treinosMostrarForm();
  saveStudent();
  updateHeader(s); renderStudentList();
}

// Continua um rascunho já existente (clicado na lista) — reaproveita o id,
// não cria um segundo rascunho.
function treinosContinuarRascunho(id){
  const s=getActive(); if(!s) return;
  const t=getTreinoPorId(s,id); if(!t) return;
  _treinoEditId = id;
  selectedObj = t.objetivo||''; _modeloSelecionado = t.modelo || (PERIODIZACAO_ATIVA ? '' : 'LP');
  setVal('pr-nivel', t.nivel||''); setVal('pr-frequencia', t.frequencia||''); setVal('pr-obs', t.obs||'');
  setVal('pr-validade', t.prazoSemanas||'12sem');
  setVal('pr-objetivo-sec', t.objetivoSec||''); setVal('pr-duracao', t.duracao||'');
  setVal('pr-horario', t.horario||''); setVal('pr-local', t.local||'');
  setVal('pr-gosta', t.gosta||''); setVal('pr-evitar', t.evitar||'');
  _s3 = {seriesPorEx:3,volPorGrupo:{},divisaoIdx:0,divisaoOpcoes:[],fichaObj:t._fichaObj||null,treinoAtivo:0,aquecTipos:(_s3.aquecTipos||['Mobilidade'])};
  renderObjGrid(); goStep(1);
  treinosMostrarForm();
  updateHeader(s);
}

// Reabre um treino já aprovado (ver / editar a partir da lista)
function treinosAbrirAprovado(id){
  const s=getActive(); if(!s) return;
  const t=getTreinoPorId(s,id); if(!t) return;
  _treinoEditId = id;
  selectedObj = t.objetivo||''; _modeloSelecionado = t.modelo || (PERIODIZACAO_ATIVA ? '' : 'LP');
  setVal('pr-nivel', t.nivel||''); setVal('pr-frequencia', t.frequencia||''); setVal('pr-obs', t.obs||'');
  setVal('pr-validade', t.prazoSemanas||'12sem');
  setVal('pr-objetivo-sec', t.objetivoSec||''); setVal('pr-duracao', t.duracao||'');
  setVal('pr-horario', t.horario||''); setVal('pr-local', t.local||'');
  setVal('pr-gosta', t.gosta||''); setVal('pr-evitar', t.evitar||'');
  _s3 = {seriesPorEx:3,volPorGrupo:{},divisaoIdx:0,divisaoOpcoes:[],fichaObj:t._fichaObj||null,treinoAtivo:0,aquecTipos:(_s3.aquecTipos||['Mobilidade'])};
  $('ficha-aprovada').textContent = t.treino||'';
  $('aprovado-data').textContent = t.dataAprovacao||'—';
  const anterior = getTreinoAnteriorA(s, id);
  renderComparacaoCiclos(anterior?._fichaObj||null, t._fichaObj, anterior?.dataAprovacao||null);
  goStep(4, true);
  treinosMostrarForm();
  updateHeader(s);
}

// ══════════════════════════════════════════════════════════════════════════
// LISTA DE TREINOS — UI (painel Prescrição). Mesmo padrão de
// antro-lista-view/antro-form-view (js/avaliacao.js). Dados vêm de
// js/treinos-store.js.
// ══════════════════════════════════════════════════════════════════════════

function treinosMostrarLista(){
  const lv=$('treinos-lista-view'), fv=$('treinos-form-view');
  if(lv) lv.style.display='block';
  if(fv) fv.style.display='none';
  _treinoEditId = null;
  renderTreinosLista();
}

function treinosMostrarForm(){
  const lv=$('treinos-lista-view'), fv=$('treinos-form-view');
  if(lv) lv.style.display='none';
  if(fv) fv.style.display='block';
}

// Botão "+ Adicionar Treino" — se já existe rascunho em andamento, pergunta
// antes de abrir um segundo (evita lixo de rascunhos abandonados).
function treinosAdicionar(){
  const s=getActive(); if(!s) return;
  const rascunho = getRascunhoAtivo(s);
  if(rascunho){
    if(confirm('Já existe um treino em rascunho (iniciado em '+(rascunho.dataCriacao||'—')+'). Continuar de onde parou?')){
      treinosContinuarRascunho(rascunho.id);
    }
    return;
  }
  novaPrescricao();
}

function treinosVoltarLista(){
  const s=getActive(); if(!s) return;
  saveStudent();
  treinosMostrarLista();
  updateHeader(s);
}

function treinosExcluir(id){
  const s=getActive(); if(!s) return;
  if(!confirm('Excluir este treino? Esta ação não pode ser desfeita.')) return;
  removerTreino(s, id);
  saveStudent();
  renderTreinosLista();
  updateHeader(s); renderStudentList();
}

const TREINOS_OBJ_LABEL = {Hip:'Hipertrofia',Forca:'Força',Emagr:'Emagrecimento',Comp:'Composição',
  Resist:'Resistência',CardioR:'Cardio',Func:'Funcional',Saude:'Saúde',
  Esport:'Esportivo',Reab:'Reabilitação',Envelhec:'Envelhecimento',Gestacao:'Gestação'};

function renderTreinosLista(){
  const s=getActive();
  const cont=$('treinos-lista-tabela'); if(!cont) return;
  if(!s){ cont.innerHTML=''; return; }
  const lista = obterTreinosOrdenados(s);
  if(!lista.length){
    cont.innerHTML = `<div style="padding:24px;text-align:center;color:var(--text3);font-size:13px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius)">Nenhum treino criado ainda. Clique em "+ Adicionar Treino" para montar o primeiro.</div>`;
    return;
  }
  let html = `<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:12px">
    <thead><tr style="border-bottom:1px solid var(--border);text-align:left">
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Data</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Objetivo</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Modelo</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Frequência</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Status</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500">Vencimento</th>
      <th style="padding:8px 10px;color:var(--text3);font-weight:500;text-align:right">Ações</th>
    </tr></thead><tbody>`;
  lista.forEach(t=>{
    const objLbl = TREINOS_OBJ_LABEL[t.objetivo]||t.objetivo||'—';
    const isAprovado = t.status===TREINOS_STATUS.APROVADO;
    const statusBadge = isAprovado
      ? `<span class="badge badge-green" style="font-size:10px">🟢 Aprovado</span>`
      : `<span class="badge badge-amber" style="font-size:10px">🟡 Rascunho</span>`;
    const dataLbl = isAprovado ? (t.dataAprovacao||'—') : (t.dataCriacao||'—');
    const acao = isAprovado
      ? `<button type="button" onclick="treinosAbrirAprovado(${t.id})" style="font-size:11px;padding:3px 8px;background:var(--bg4);border:1px solid var(--border);color:var(--text2);border-radius:4px;cursor:pointer;margin-right:4px">Ver / Editar</button>`
      : `<button type="button" onclick="treinosContinuarRascunho(${t.id})" style="font-size:11px;padding:3px 8px;background:var(--accent-dim);border:1px solid rgba(0,229,160,.3);color:var(--accent);border-radius:4px;cursor:pointer;margin-right:4px">Continuar</button>`;

    // Vencimento — só informativo (não bloqueia nada), ver getStatusVencimento em treinos-store.js
    let vencLbl = '—';
    const st = getStatusVencimento(t);
    if(st){
      const semTxt = st.diasRestantes<0
        ? `${Math.abs(st.semanasRestantes)} sem. atrás`
        : `${st.semanasRestantes} sem. restante${st.semanasRestantes===1?'':'s'}`;
      const indicador = {
        vencido: '🔴 Vencido', proximo: '⚠️ Vencimento próximo', agendar: '🗓️ Agendar avaliação', ok: '',
      }[st.tier];
      const cor = {vencido:'var(--red)', proximo:'#ffb400', agendar:'var(--accent)', ok:'var(--text3)'}[st.tier];
      vencLbl = `<div style="font-size:11px;color:${cor}">${st.dataVencimento} · ${semTxt}</div>${indicador?`<div style="font-size:10px;color:${cor}">${indicador}</div>`:''}`;
    }

    html += `<tr style="border-bottom:1px solid var(--border)">
      <td style="padding:8px 10px">${dataLbl}</td>
      <td style="padding:8px 10px">${objLbl}</td>
      <td style="padding:8px 10px;color:var(--text3)">${t.modelo||'—'}</td>
      <td style="padding:8px 10px">${t.frequencia||'—'}</td>
      <td style="padding:8px 10px">${statusBadge}</td>
      <td style="padding:8px 10px">${vencLbl}</td>
      <td style="padding:8px 10px;text-align:right;white-space:nowrap">
        ${acao}
        <button type="button" onclick="treinosExcluir(${t.id})" style="font-size:11px;padding:3px 8px;background:var(--red-dim);border:1px solid #fecaca;color:var(--red);border-radius:4px;cursor:pointer">Excluir</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  cont.innerHTML = html;
}

function fichaObjParaTexto(ficha){
  const s     = getActive();
  const nome  = s?.perfil?.nome || 'Aluno';
  const modelo = _modeloSelecionado || 'LP';
  const fence = String.fromCharCode(96,96,96);
  const nl    = '\n';
  let txt = '## CICLO-01 — ' + nome + nl;
  txt += fence + 'yaml' + nl;
  txt += 'objetivo: ' + ficha.objetivo + nl;
  txt += 'nivel: ' + nivelLabel(ficha.nivel) + nl;
  txt += 'frequencia: ' + ficha.frequencia + '/sem' + nl;
  txt += 'modelo: ' + modelo + nl;
  txt += 'local: ' + ficha.local + nl;
  txt += 'data: ' + ficha.dataGeracao + nl;
  txt += fence + nl + nl;
  ficha.treinos.forEach(treino => {
    const total = treino.exercicios.reduce((a,e)=>a+parseInt(e.series||0),0);
    txt += '### ' + treino.label + ' (' + total + ' séries)' + nl;
    txt += '| # | Músculo | Exercício | Séries | Reps | Intensidade | Intervalo |' + nl;
    txt += '|---|---------|-----------|--------|------|-------------|----------|' + nl;
    treino.exercicios.forEach((ex,i) => {
      txt += '| ' + (i+1) + ' | ' + ex.musculo + ' | ' + ex.nome + ' | ' + ex.series + ' | ' + ex.reps + ' | ' + ex.intensidade + ' | ' + ex.intervalo + ' |' + nl;
    });
    txt += nl;
  });
  txt += '### PROGRESSÃO SEMANAL' + nl;
  txt += '| Sem | Foco | Ajuste |' + nl;
  txt += '|---|---|---|' + nl;
  txt += '| 1 | Adaptação | Carga conservadora |' + nl;
  txt += '| 2 | Desenvolvimento | +carga ou +reps |' + nl;
  txt += '| 3 | Sobrecarga | RPE 7–8 |' + nl;
  txt += '| 4 | Deload | −40% volume |' + nl;
  return txt;
}

function aprovarTreinoMotor(){
  if(!_s3.fichaObj){ alert('Monte a ficha antes de aprovar.'); return; }
  const s = getActive(); if(!s) return;
  const treino  = fichaObjParaTexto(_s3.fichaObj);
  const data    = new Date().toLocaleDateString('pt-BR');
  // ciclo anterior = último treino APROVADO antes deste (não é mais um campo
  // único _fichaObjAnterior — vem da lista s.treinos, ver treinos-store.js)
  const ultimoAprovado = getUltimoTreinoAprovado(s);
  const anterior = ultimoAprovado?._fichaObj || null;
  const dataAprovacaoAnterior = ultimoAprovado?.dataAprovacao || null;

  // Registrar exercícios usados no histórico para diversificação futura
  if(!s.historicoExercicios) s.historicoExercicios = [];
  const usadosNesteCiclo = _s3.fichaObj.treinos.flatMap(t => t.exercicios.map(e => e.nome));
  s.historicoExercicios = [...new Set([...s.historicoExercicios, ...usadosNesteCiclo])].slice(-200);

  // Persistência da progressão de Séries por Exercício (vault §10.2) — histórico
  // dedicado por objetivo, sobrevive a qualquer número de trocas no meio (não só ao
  // ciclo imediatamente anterior). Lê os exercícios já com qualquer ajuste manual do
  // personal (atualizarCampo), captando o que foi de fato aprovado, não o sugerido.
  const objetivoAnteriorReal = s.ultimaFaseVolSessao?.objetivo || null;
  const exerciciosDoCiclo = _s3.fichaObj.treinos.flatMap(t => t.exercicios);
  registrarHistoricoSeries(s, selectedObj, exerciciosDoCiclo, objetivoAnteriorReal);

  if(_treinoEditId==null) _treinoEditId = criarRascunho(s);
  aprovarRascunho(s, _treinoEditId, {
    objetivo:selectedObj, nivel:val('pr-nivel'), frequencia:val('pr-frequencia'),
    modelo:_modeloSelecionado, obs:val('pr-obs')||'',
    prazoSemanas: val('pr-validade')||'12sem',
    // Dados Atuais de Treino (Bloco 3) — o que foi de fato usado nesta
    // prescrição, que pode ter sido ajustado aqui sem alterar a Anamnese.
    objetivoSec: val('pr-objetivo-sec')||'', duracao: val('pr-duracao')||'',
    horario: val('pr-horario')||'', local: val('pr-local')||'',
    gosta: val('pr-gosta')||'', evitar: val('pr-evitar')||'',
    treino, _fichaObj:_s3.fichaObj,
  });

  // Persistência da progressão por 3 fases de Volume da Sessão (vault §10.2-bis) —
  // guarda apenas o registro mais recente (objetivo + fase), não um histórico completo.
  s.ultimaFaseVolSessao = {
    objetivo: selectedObj,
    fase: _s3._faseVolSessaoAtual || 'baixa',
  };

  saveStudent();
  $('ficha-aprovada').textContent = treino;
  $('aprovado-data').textContent  = data;

  // Renderizar comparação com ciclo anterior
  renderComparacaoCiclos(anterior, _s3.fichaObj, dataAprovacaoAnterior);

  goStep(4);
  updateHeader(s); renderStudentList();
}

function renderComparacaoCiclos(anterior, atual, dataAprovacaoAnterior){
  const el = $('ciclo-comparacao'); if(!el) return;
  if(!anterior){ el.innerHTML=''; el.style.display='none'; return; }

  // Calcular volume semanal por grupo — ciclo anterior vs atual
  const volPor = (ficha) => {
    const mapa = {};
    ficha.treinos.forEach(t => t.exercicios.forEach(ex => {
      mapa[ex.musculo] = (mapa[ex.musculo]||0) + parseInt(ex.series||0);
    }));
    return mapa;
  };
  const volAnt = volPor(anterior);
  const volAtual = volPor(atual);
  const grupos = [...new Set([...Object.keys(volAnt), ...Object.keys(volAtual)])].sort();

  // Exercícios repetidos do ciclo anterior
  const exsAnt  = new Set(anterior.treinos.flatMap(t => t.exercicios.map(e => e.nome)));
  const exsAtual = atual.treinos.flatMap(t => t.exercicios.map(e => e.nome));
  const repetidos = exsAtual.filter(n => exsAnt.has(n));

  let rows = grupos.map(g => {
    const a = volAnt[g]||0, b = volAtual[g]||0;
    const delta = b - a;
    const seta = delta>0?'↑':delta<0?'↓':'=';
    const cor = delta>0?'var(--accent)':delta<0?'var(--red)':'var(--text3)';
    return `<tr>
      <td style="font-size:12px;color:var(--text2)">${g}</td>
      <td style="font-family:var(--mono);font-size:12px;color:var(--text3);text-align:center">${a||'—'}</td>
      <td style="font-family:var(--mono);font-size:12px;color:var(--accent);text-align:center">${b||'—'}</td>
      <td style="font-family:var(--mono);font-size:12px;font-weight:700;color:${cor};text-align:center">${delta>=0?'+':''}${delta} ${seta}</td>
    </tr>`;
  }).join('');

  el.style.display = 'block';
  el.innerHTML = `
    <div class="section-label" style="margin-top:16px">📊 Comparação com ciclo anterior</div>
    <div class="alert alert-blue" style="margin-bottom:10px;font-size:12px">
      Ciclo anterior: <strong>${anterior.frequencia}</strong> · ${anterior.objetivo} · aprovado em ${dataAprovacaoAnterior||'—'}
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:10px">
      <thead><tr style="border-bottom:1px solid var(--border)">
        <th style="text-align:left;padding:5px 8px;font-size:11px;color:var(--text3)">Grupo Muscular</th>
        <th style="text-align:center;padding:5px 8px;font-size:11px;color:var(--text3)">Anterior (s/sem)</th>
        <th style="text-align:center;padding:5px 8px;font-size:11px;color:var(--text3)">Atual (s/sem)</th>
        <th style="text-align:center;padding:5px 8px;font-size:11px;color:var(--text3)">Δ</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    ${repetidos.length ? `<div style="font-size:11px;color:var(--amber);background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.2);border-radius:var(--radius);padding:7px 10px">
      ⚠️ <strong>${repetidos.length} exercício(s) repetido(s)</strong> do ciclo anterior: ${repetidos.join(', ')}
    </div>` : `<div style="font-size:11px;color:var(--accent)">✓ Nenhum exercício repetido do ciclo anterior — boa variação de estímulo.</div>`}
  `;
}

// ─── MOTOR V2 ─────────────────────────────────────────────────────────────────
// ── Detector de incompatibilidade divisão × periodização ────────────────────
function verificarCompatibilidadePeriodDiv(sigla, op, numDias){
  // Regras de incompatibilidade conhecidas (vault FASE-3)
  const avisos = [];
  const dias = numDias;
  const nomeDivisao = (op?.nome||'').toLowerCase();

  // LP + PPL 6x = contradição (LP precisa de frequência por grupo 2–3x)
  if((sigla==='LP'||sigla==='LPR') && dias>=6 && nomeDivisao.includes('ppl')){
    avisos.push('⚠️ LP/Linear com PPL 6x não é recomendado: a divisão PPL treina cada grupo apenas 1×/sem, contrariando o princípio de progressão linear que exige frequência ≥2×.');
  }
  // DUP exige ≥3x (variação diária de estímulo)
  if(sigla==='DUP' && dias<3){
    avisos.push('⚠️ DUP (Ondulatória Diária) exige no mínimo 3 sessões/semana para variar o estímulo por dia. Com '+dias+'x/sem o efeito ondulatório não se realiza.');
  }
  // Conjugado restrito a avançados (verificado no perfil)
  if(sigla==='CONJ'){
    const s = getActive();
    const nivel = val('pr-nivel') || s?.anamnese?.nivel || '';
    if(nivel==='Inic'||nivel==='Iniciante'){
      avisos.push('⚠️ Modelo Conjugado é contraindicado para iniciantes (Vault FASE-3 §4.5). Exige base sólida em força máxima e técnica avançada.');
    }
    if(s?.perfil?.sexo==='F'){
      avisos.push('ℹ️ Modelo Conjugado foi desenvolvido para atletas de força masculinos. Para objetivos femininos há modelos mais adequados (DUP, Blocos).');
    }
  }
  // Full Body + Força Máxima = ok mas avisa se 6x
  if(dias>=6 && (nomeDivisao.includes('full body')||nomeDivisao.includes('full-body'))){
    avisos.push('⚠️ Full Body 6×/sem gera recuperação insuficiente para a maioria dos objetivos. Considere Upper/Lower ou PPL para esta frequência.');
  }
  // Blocos (CB) com menos de 3x perde eficácia
  if(sigla==='CB' && dias<3){
    avisos.push('⚠️ Periodização em Blocos (CB) com apenas '+dias+'x/sem pode não gerar sobrecarga suficiente por fase. Recomendado ≥3×/sem.');
  }
  return avisos.length ? avisos.join('\n\n') : null;
}


// Prioridade de grupos para corte quando sessão excede limite
// Primários: grupos grandes/mais funcionais → proteger volume
// Secundários: podem ter volume reduzido primeiro
const GRUPOS_PRIMARIOS   = new Set(['Quadríceps','Glúteos','Isquiossurais','Peitoral','Latíssimo','Deltóide','Trapézio']);
const GRUPOS_SECUNDARIOS = new Set(['Reto Abdominal','Oblíquo','Transverso do Abdômen','Panturrilhas','Bíceps','Tríceps','Antebraços','Flexores do Pé','Adutores']);

// Lê os valores REAIS dos inputs do DOM para uma sessão específica
// Retorna array [{g, numEx, serEx}] respeitando o que o usuário editou
// Lê os valores de exercício/série direto do DOM (accordion da tela de
// Distribuição), respeitando a ORDEM REAL da sessão (sessaoGrupos) — a mesma
// ordem de prioridade definida pelo personal no editor (dc*). Antes iterava
// GRUPOS_MAPA (ordem fixa do catálogo: Peitoral, Latíssimo, Deltóide...),
// o que embaralhava a hierarquia na ficha final mesmo quando a tela de
// Distribuição mostrava a ordem certa (bug real, confirmado: Quadríceps #1
// na distribuição virava 2º exercício na ficha, atrás de Peitoral).
function lerSessionDataDOM(cardIdx, ti, sessaoGrupos){
  const sessionData = [];
  sessaoGrupos.forEach(({g: id}) => {
    const inpEx  = $('iex-'  + cardIdx + '-' + ti + '-' + id);
    const inpSer = $('iser-' + cardIdx + '-' + ti + '-' + id);
    if(inpEx && inpSer){
      const numEx = Math.max(1, parseInt(inpEx.value)||1);
      const serEx = Math.max(1, parseInt(inpSer.value)||1);
      const vg = _s3.volPorGrupo[id];
      if(vg && vg.ativo !== false){
        sessionData.push({ g: id, numEx, serEx, serSessao: numEx * serEx });
      }
    }
  });
  return sessionData;
}

// ── Aquecimento automático (rascunho — a refinar) ───────────────────────────
// Ideia central: o aquecimento não é genérico, é ESPECÍFICO da sessão — olha
// pra articulação (campo `artic` do banco: Ombro, Quadril, Joelho, Cotovelo,
// Lombar, etc.) de cada exercício PRINCIPAL já escolhido pra essa sessão, e
// busca 1 mobilização por articulação envolvida, dentro do mesmo pool de
// recursos/nível/contraindicação do treino principal — usa exatamente os 36
// exercícios tp:"Mobilidade" do banco, que hoje já existem mas são excluídos
// da parte principal (ver _NOM_EXCLUI_PRESCRICAO) e não eram usados em lugar
// nenhum. Não força mobilização se não existir nenhuma pra aquela articulação
// dentro dos filtros — melhor um aquecimento mais curto do que forçar um
// exercício fora de nível/recurso/contraindicação.
const ORDEM_ARTIC_AQUECIMENTO = ['Lombar','Quadril','Joelho','Tornozelo','Arco Plantar','Tórax','Escápula','Ombro','Cotovelo','Punho'];
const _TETO_ITENS_AQUECIMENTO = 5; // teto propositalmente baixo — aquecimento não pode virar treino paralelo

// Tipos de aquecimento disponíveis no banco (campo `tp` dos exercícios).
// Mapeados pra label curto exibido no UI → nome exato no banco.
const TIPOS_AQUECIMENTO = {
  'Mobilidade':          'Mobilidade',
  'Liberação Miofascial':'Liberação Miofascial',
  'Flexibilidade':       'Flexibilidade',
};

// tiposPermitidos: array de nomes exatos do banco — ex: ['Mobilidade','Flexibilidade']
// Se omitido/vazio, usa o default ['Mobilidade'].
function gerarAquecimentoArticular(articsTreino, resistPermitida, nivel, contraindicacoes, tiposPermitidos){
  if(!articsTreino || !articsTreino.size) return [];
  const tipos = (tiposPermitidos && tiposPermitidos.length) ? tiposPermitidos : ['Mobilidade'];
  const usados = new Set();
  const itens  = [];
  const ordenadas = [...articsTreino].sort((a,b) => ORDEM_ARTIC_AQUECIMENTO.indexOf(a) - ORDEM_ARTIC_AQUECIMENTO.indexOf(b));

  ordenadas.forEach(artic => {
    let pool = DB_EXERCICIOS.filter(e =>
      (e.tp||[]).some(t => tipos.includes(t.nome)) &&
      (e.artic||[]).some(x=>x.nome === artic) &&
      e.r && resistPermitida.includes(e.r.id) &&
      e.nv && nivelOk(e.nv.nome, nivelLabel(nivel)) &&
      !usados.has(e.n)
    );
    if(contraindicacoes){
      const semCi = pool.filter(e => {
        if(!e.ci?.length) return true;
        const ciAluno = contraindicacoes.toLowerCase();
        return !e.ci.some(c => ciAluno.includes(c.nome.toLowerCase()));
      });
      if(semCi.length) pool = semCi;
    }
    if(!pool.length) return; // sem mobilização disponível pra essa articulação nesses filtros — pula
    const ex = pool[motorRand(0, pool.length-1)];
    usados.add(ex.n);
    itens.push({
      artic, nome: ex.n,
      duracao: ex.tempo || '30–45s',
      url: ex.url || '',
    });
  });

  return itens.slice(0, _TETO_ITENS_AQUECIMENTO);
}

function gerarFichaMotorV2(params){
  const {objetivo, nivel, frequencia, local, lesoes, preferencias,
         seriesPorEx, volPorGrupo, divisaoChave,
         sessionDataByTreino, duracaoDisponivel} = params;  // ← sessionDataByTreino: [{g,numEx,serEx}][] por sessão

  const numDias = parseInt(frequencia)||3;
  const divisao = (divisaoChave !== undefined && DIVISOES_TEMPLATES[divisaoChave])
    ? DIVISOES_TEMPLATES[divisaoChave]
    : (DIVISOES[numDias] || DIVISOES[3]);

  const resistPermitida = getResistPermitida(local);

  // Filtros clínicos do aluno — consolidados aqui para uso no motor
  const s = getActive();
  const a = s?.anamnese || {};
  const p = s?.perfil   || {};

  // Contraindicações: lesões + preferências + condições clínicas
  const contraindicacoes = [
    lesoes || '',
    preferencias || '',
    p.condicoes || '',
    p.lesoes || '',
  ].filter(Boolean).join(' ');

  // Filtro de sexo para prioridade de grupos
  // Mulheres: glúteos são primários; peitoral cai para secundário
  // Homens: quadríceps/posterior são primários; glúteos ficam em nível neutro
  const sexo = p.sexo || '';
  const gruposPrioritariosFinal = new Set([...GRUPOS_PRIMARIOS]);
  if(sexo === 'F'){
    gruposPrioritariosFinal.add('Glúteos');
    gruposPrioritariosFinal.add('Glúteos (Máximo)');
    gruposPrioritariosFinal.add('Glúteos (Médio)');
    // Peitoral é menos prioritário para mulheres
    gruposPrioritariosFinal.delete('Peitoral');
  } else if(sexo === 'M'){
    // Para homens, glúteos ficam em nível neutro (nem primário nem secundário)
    gruposPrioritariosFinal.delete('Glúteos');
  }

  const repsRef   = REPS_REF[objetivo]     || '10–15';
  const intensRef = INT_REF[objetivo]      || '60–75% 1RM';
  const descRef   = INT_DESCANSO[objetivo] || '60–90s';
  const jaUsados  = new Set();
  const treinos   = [];

  divisao.default.forEach((treinoGruposTemplate, ti) => {
    const exerciciosTreino = [];

    // ── Obter dados da sessão: prioridade é sessionDataByTreino (DOM) ──────
    // Fallback: calcular a partir de volPorGrupo para grupos presentes no template
    let sessaoGrupos;
    if(sessionDataByTreino && sessionDataByTreino[ti] && sessionDataByTreino[ti].length > 0){
      // Usar exatamente o que o usuário configurou — filtrar só grupos ativos
      sessaoGrupos = sessionDataByTreino[ti].filter(sd => {
        const vg = volPorGrupo?.[sd.g];
        return vg && vg.ativo !== false;
      });
    } else {
      // Fallback: calcular a partir do template, usando o teto de Volume da Sessão
      // (LIM_SESSAO_REF — vault REF-Volume-Derivado-MAV §9) como referência, já que
      // VOL_REF (tabela órfã antiga) foi removida. LIM_SESSAO_REF agora é faixa
      // [min,max]; usa o ponto médio como proxy de referência neste fallback.
      const faixaRef = (LIM_SESSAO_REF[objetivo] || LIM_SESSAO_REF['Saude'])[nivel] || [16,24];
      const limRef = Math.round((faixaRef[0] + faixaRef[1]) / 2);
      sessaoGrupos = treinoGruposTemplate
        .filter(({g}) => {
          const vg = volPorGrupo?.[g];
          return vg && vg.ativo !== false;
        })
        .map(({g}) => {
          const vg = volPorGrupo?.[g];
          const sEx = (vg?.serEx) || seriesPorEx;
          const serSessao = vg?.sessao > 0 ? vg.sessao : Math.max(sEx, Math.round(limRef / Math.max(1, divisao.default.filter(t=>t.some(m=>m.g===g)).length)));
          const numEx = Math.max(1, Math.ceil(serSessao / sEx));
          return { g, numEx, serEx: sEx, serSessao: numEx * sEx };
        });
    }

    // ── Aplicar limite de sessão com corte por prioridade ─────────────────
    const lim = _s3.limSessao || calcLimSessaoRecomendado();
    let totalSessao = sessaoGrupos.reduce((acc, sd) => acc + sd.serSessao, 0);

    if(totalSessao > lim && lim > 0){
      // Cortar de secundários primeiro, depois primários
      const sorted = [...sessaoGrupos].sort((a, b) => {
        // .has() comparava string exata — gruposPrioritariosFinal/GRUPOS_SECUNDARIOS
        // usam nomes com acento ('Latíssimo'), mas a.g/b.g vêm de GRUPOS_MAPA sem
        // acento ('Latissimo'). Sem normalização, esta priorização nunca encontrava
        // correspondência para a maioria dos grupos — mesma causa raiz do bug
        // de filtrarExerciciosFicha corrigido acima.
        const temPrioridade = (set, g) => [...set].some(item => textoIgual(item, g));
        const aPri = temPrioridade(gruposPrioritariosFinal, a.g) ? 2 : temPrioridade(GRUPOS_SECUNDARIOS, a.g) ? 0 : 1;
        const bPri = temPrioridade(gruposPrioritariosFinal, b.g) ? 2 : temPrioridade(GRUPOS_SECUNDARIOS, b.g) ? 0 : 1;
        return aPri - bPri; // secundários primeiro (menores ficam no começo → cortados primeiro)
      });

      // Reduzir séries dos grupos de menor prioridade até caber no limite
      for(const sd of sorted){
        if(totalSessao <= lim) break;
        const excesso = totalSessao - lim;
        const reducao = Math.min(excesso, sd.serSessao - sd.numEx); // mínimo 1 série por exercício
        if(reducao > 0){
          const novasSeries = sd.serSessao - reducao;
          // Redistribuir: reduz serEx mantendo numEx, ou reduz numEx
          const novoSerEx = Math.max(1, Math.floor(novasSeries / sd.numEx));
          const novoNumEx = novoSerEx >= 2 ? sd.numEx : Math.max(1, Math.floor(novasSeries));
          sd.serEx     = novoSerEx;
          sd.numEx     = novoNumEx;
          sd.serSessao = sd.numEx * sd.serEx;
          totalSessao  = sessaoGrupos.reduce((acc, s) => acc + s.serSessao, 0);
        }
      }
    }

    // ── Fase F — tempo estimado de treino: estima o quanto essa sessão vai
    // apertar em relação ao tempo disponível, ANTES de escolher os exercícios
    // (só sabemos grupo/nº exercícios/nº séries nesse ponto, ainda não qual
    // exercício específico — por isso usa o tempo MÉDIO real por grupo, não o
    // de um exercício, ver estimarTempoModeloSessao). O cálculo fino, com os
    // exercícios já escolhidos (grupamento/biset/unilateral), é feito depois
    // em calcularTempoEstimadoTreino (Momento 2).
    // `objetivo` aqui é um dos 12 códigos do motor (Hip/Forca/Emagr/...), não
    // uma das 4 valências de treino (Força/Hipertrofia/Resistência/Potência)
    // usadas no cálculo de tempo — mapeamento abaixo é PROVISÓRIO (meu
    // julgamento pela faixa de reps de cada objetivo em REPS_REF), confirmar
    // com o Milton antes de considerar fechado.
    const gruposPlanejadosModelo = sessaoGrupos.map(sd => ({ grupo: sd.g, nExercicios: sd.numEx, nSeries: sd.serEx }));
    const tempoEstimadoModelo = estimarTempoModeloSessao(gruposPlanejadosModelo, objetivo);
    const segundosPlanejados = tempoEstimadoModelo.medio;
    const segundosDisponiveis = (duracaoDisponivel||60)*60;
    // "Aperto": 0 = sessão cabe tranquila no tempo disponível; cresce conforme o
    // planejado passa do disponível. Usado como bônus contínuo (não por limiar)
    // pra exercícios eficientes (multiarticular + atinge grupo secundário) no
    // sorteio — quanto mais apertada a sessão, mais o motor favorece eficiência.
    const aperto = segundosDisponiveis>0 ? Math.max(0, (segundosPlanejados-segundosDisponiveis)/segundosDisponiveis) : 0;

    // ── Gerar exercícios respeitando sessaoGrupos ──────────────────────────
    sessaoGrupos.forEach(({ g: musculo, numEx, serEx: seriesFinal }) => {
      if(numEx < 1) return;

      const porcoes = (PORCOES[musculo] || [null]).slice(0, numEx);
      while(porcoes.length < numEx) porcoes.push(null);

      for(let slot = 0; slot < numEx; slot++){
        const porcao = porcoes[slot] !== undefined ? porcoes[slot] : null;
        let pool = filtrarExerciciosFicha(musculo, porcao, resistPermitida, nivel, contraindicacoes);
        if(pool.length === 0) pool = filtrarExerciciosFicha(musculo, null, resistPermitida, nivel, contraindicacoes);
        if(pool.length === 0) continue; // sem exercício disponível — pular

        const ex = sortearExercicioC4(pool, jaUsados, musculo, exerciciosTreino, aperto);
        if(ex){
          jaUsados.add(ex.n);
          const nota = gerarNotaAssimetria(musculo);
          exerciciosTreino.push({
            musculo, porcao: porcao||'Geral', nome: ex.n,
            series: seriesFinal, reps: repsRef,
            intensidade: intensRef, intervalo: descRef,
            nota_clinica: nota || '',
            _artic: (ex.artic||[]).map(a=>a.nome), // guarda a(s) articulação(ões) do exercício escolhido —
            // não aparece na ficha, é só o insumo pra montar o aquecimento da sessão logo abaixo.
            _pad: ex.pad?.id || '', // insumo pro bônus de variedade por tipo de movimentação (Fase C) — não aparece na ficha.
            _tempoRep: ex.tempo || '',
            _contracaoIsometrica: ex.contracao?.nome === 'Isométrica',
            _uni: _exercicioUnilateral(ex) ? 1 : 0,
          });
        }
      }
    });

    // ── Aquecimento automático da sessão ────────────────────────────────────
    // Gerado A PARTIR dos exercícios principais já escolhidos acima — não é um
    // bloco fixo por grupo muscular, é literalmente "quais articulações essa
    // sessão específica vai exigir", então muda sessão a sessão e aluno a aluno.
    // Fica de fora de `exercicios` (não soma séries, não entra no cálculo de
    // volume/MEV-MAV-MRV) — é preparação, não é a parte que ele registra carga.
    const articsTreino = new Set();
    exerciciosTreino.forEach(ex => {
      (ex._artic||'').split('|').forEach(a => { a = a.trim(); if(a) articsTreino.add(a); });
    });
    const aquecimento = gerarAquecimentoArticular(articsTreino, resistPermitida, nivel, contraindicacoes, _s3.aquecTipos);

    treinos.push({
      label: divisao.label[ti] || `Treino ${String.fromCharCode(65+ti)}`,
      aquecimento,
      exercicios: exerciciosTreino,
      // Estimativa da tela de modelos (Momento 1) — mín (tudo Bilateral) / máx
      // (tudo Unilateral) / médio (o que se mostra pro personal). Ainda sem
      // tela própria pra exibir isso — guardado aqui pra quando a tela existir.
      tempoEstimadoModelo: {
        minSeg: Math.round(tempoEstimadoModelo.min),
        maxSeg: Math.round(tempoEstimadoModelo.max),
        medioSeg: Math.round(tempoEstimadoModelo.medio),
        minMin: Math.round(tempoEstimadoModelo.min/60),
        maxMin: Math.round(tempoEstimadoModelo.max/60),
        medioMin: Math.round(tempoEstimadoModelo.medio/60),
      },
    });
  });

  return { objetivo, nivel, frequencia, local, seriesPorEx,
           treinos, dataGeracao: new Date().toLocaleDateString('pt-BR'),
           duracaoAlvoMin: duracaoDisponivel||60 };
}


// ══════════════════════════════════════════════════════════════════════════════
// PERIODIZAÇÃO — renderPeriod + CRUD + Acompanhamento de Carga
// ══════════════════════════════════════════════════════════════════════════════

// ── Render tela de periodização ───────────────────────────────────────────────
function renderPeriod(){
  const grid = $('period-grid'); if(!grid) return;
  const lista = LIBS.periodizacao || [];
  const btnAcomp = $('btn-period-acomp');
  if(btnAcomp) btnAcomp.style.display = lista.length ? 'inline-flex' : 'none';
  grid.innerHTML = '';
  if(!lista.length){
    grid.innerHTML = '<div style="color:var(--text3);font-size:13px">Nenhum modelo cadastrado. Clique em "+ Novo Modelo" para criar.</div>';
    return;
  }
  const OBJ_LBL = {Hip:'Hipertrofia',Forca:'Força',Emagr:'Emagrecimento',Comp:'Composição',
    Resist:'Resistência',CardioR:'Cardio',Func:'Funcional',Saude:'Saúde',
    Esport:'Esportivo',Reab:'Reabilitação',Envelhec:'Envelhecimento',Gestacao:'Gestação'};
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.margin = '0';
    const objBadges = (p.objetivos_compativeis||[]).map(o =>
      `<span class="badge badge-green" style="font-size:10px">${OBJ_LBL[o]||o}</span>`).join('');
    const freqBadges = (p.freq_compativeis||[]).map(f =>
      `<span class="badge badge-blue" style="font-size:10px">${f}</span>`).join('');
    const bloqBadge = (p.bloq_nivel||[]).length
      ? `<span class="badge badge-red" style="font-size:10px">Bloqueia: ${p.bloq_nivel.join(', ')}</span>` : '';
    const mesos = p.mesos||[];
    const totalSem = mesos.reduce((a,m)=>(a+(m.semanas||[]).length),0);
    card.innerHTML = `
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px;gap:8px">
        <div style="flex:1">
          <div style="font-size:15px;font-weight:700;color:var(--text)">${escHTML(p.nome)}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${p.sigla||''} · ${p.duracao||''} · ${totalSem} semanas mapeadas</div>
        </div>
        <div style="display:flex;gap:5px;flex-shrink:0">
          <button class="btn btn-ghost btn-sm" onclick="editarPeriod(${p.id})">✏</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarItem('periodizacao',${p.id})">✕</button>
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px">
        <span class="badge badge-gray" style="font-size:10px">${p.nivel||'Qualquer nível'}</span>
        ${p.nivel_max?`<span class="badge badge-gray" style="font-size:10px">até ${p.nivel_max}</span>`:''}
        ${p.sexo?`<span class="badge badge-amber" style="font-size:10px">${p.sexo==='M'?'♂ Masc':'♀ Fem'}</span>`:''}
        ${bloqBadge}
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px">${objBadges}</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px">${freqBadges}</div>
      ${p.desc?`<div style="font-size:12px;color:var(--text2);margin-bottom:10px">${p.desc}</div>`:''}
      <div style="background:var(--bg4);border-radius:var(--radius);padding:8px 10px;font-size:11px;color:var(--text3)">
        <div style="font-weight:600;color:var(--text2);margin-bottom:5px">Parâmetros base</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px">
          <div>Intensidade: <strong style="color:var(--text)">${p.intensidade||'—'}</strong></div>
          <div>RPE: <strong style="color:var(--text)">${p.rpe||'—'}</strong></div>
          <div>Vol/músculo: <strong style="color:var(--text)">${p.vol_sem||'—'}</strong></div>
          <div>Reps: <strong style="color:var(--text)">${p.reps||'—'}</strong></div>
          <div>Intervalo: <strong style="color:var(--text)">${p.intervalo||'—'}</strong></div>
          <div>TUT: <strong style="color:var(--text)">${p.tut||'—'}</strong></div>
        </div>
      </div>
      ${mesos.length?`
      <div style="margin-top:10px">
        <div style="font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">${mesos.length} Mesociclo(s)</div>
        ${mesos.map(m=>`
          <div style="margin-bottom:6px;background:var(--bg4);border-radius:4px;padding:7px 10px">
            <div style="font-size:12px;font-weight:600;color:var(--text);margin-bottom:4px">${m.nome}</div>
            ${(m.semanas||[]).map(s=>`
              <div style="font-size:11px;color:var(--text2);display:flex;gap:8px;padding:2px 0">
                <span style="color:var(--text3);font-family:var(--mono);min-width:40px">Sem ${s.num}</span>
                <span class="badge ${s.tipo==='Deload'?'badge-amber':s.tipo==='Teste'?'badge-blue':'badge-green'}" style="font-size:9px">${s.tipo}</span>
                <span>${s.series||''}</span>
                <span style="color:var(--text3)">${s.intensidade||''}</span>
                <span style="color:var(--accent);font-size:10px">${s.foco||''}</span>
              </div>`).join('')}
          </div>`).join('')}
      </div>`:''
      }
      ${(p.regras||[]).length?`
      <div style="margin-top:10px">
        <div style="font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:5px">Regras de progressão</div>
        ${p.regras.map(r=>`<div style="font-size:11px;color:var(--text2);padding:3px 0">▸ <em>${r.criterio}</em> → <strong style="color:var(--accent)">${r.acao}</strong></div>`).join('')}
      </div>`:''
      }
      ${p.ref?`<div style="font-size:10px;color:var(--text3);margin-top:8px;border-top:1px solid var(--border);padding-top:6px">📚 ${p.ref}</div>`:''}
    `;
    grid.appendChild(card);
  });
}

// ── Modal abrir/fechar ────────────────────────────────────────────────────────
function abrirModalPeriod(){ preencherModalPeriod(null); $('modal-period').classList.remove('hidden'); }
function fecharModalPeriod(){ $('modal-period').classList.add('hidden'); }

// ── Preencher modal com dados existentes ou em branco ─────────────────────────
function preencherModalPeriod(p){
  $('period-edit-id').value = p ? p.id : '';
  $('modal-period-title').textContent = p ? 'Editar Modelo de Periodização' : 'Novo Modelo de Periodização';

  const sv = (id, v) => { const el=$(id); if(el) el.value = v||''; };
  sv('period-nome',        p?.nome||'');
  sv('period-sigla',       p?.sigla||'LP');
  sv('period-duracao',     p?.duracao||'8 semanas');
  sv('period-estrutura-meso', p?.estrutura_meso||'2x4');
  sv('period-divisao',     p?.divisao||'Full Body');
  sv('period-desc',        p?.desc||'');
  sv('period-ref',         p?.ref||'');
  sv('period-intensidade', p?.intensidade||'60–75%');
  sv('period-rpe',         p?.rpe||'6–8');
  sv('period-vol-sem',     p?.vol_sem||'10–20');
  sv('period-reps',        p?.reps||'10–15');
  sv('period-intervalo',   p?.intervalo||'60–90s');
  sv('period-tut',         p?.tut||'2-1-2');
  sv('period-nivel',       p?.nivel||'');
  sv('period-nivel-max',   p?.nivel_max||'');
  sv('period-sexo',        p?.sexo||'');
  sv('period-bloq-obs',    p?.bloq_obs||'');
  sv('period-criterios',   p?.criterios||'');
  sv('period-acionamentos',p?.acionamentos||'');

  // Objetivos compatíveis
  document.querySelectorAll('#period-obj-wrap input[type=checkbox]').forEach(cb => {
    cb.checked = (p?.objetivos_compativeis||[]).includes(cb.value);
  });
  // Frequências
  ['2x','3x','4x','5x','6x'].forEach(f => {
    const el = document.querySelector(`#period-obj-wrap ~ div input[value="${f}"]`) ||
               document.getElementById('pf-'+f.replace('x','x'));
    const cb2 = document.querySelector(`input[id="pf-${f.replace('+','').replace('x','x')}"]`);
    if(cb2) cb2.checked = (p?.freq_compativeis||[]).includes(f);
  });
  // Bloqueios nível
  ['inic','inte','avan'].forEach(k => {
    const cb = document.getElementById('bl-'+k); if(!cb) return;
    const map = {inic:'Iniciante',inte:'Intermediário',avan:'Avançado'};
    cb.checked = (p?.bloq_nivel||[]).includes(map[k]);
  });
  // Bloqueios condição
  ['gestacao','lesao','card'].forEach(k => {
    const cb = document.getElementById('bc-'+k); if(!cb) return;
    const map = {gestacao:'Gestação',lesao:'Lesão ativa',card:'Cardiopatia'};
    cb.checked = (p?.bloq_cond||[]).includes(map[k]);
  });

  // Mesociclos
  const mWrap = $('period-mesos-wrap'); mWrap.innerHTML = '';
  (p?.mesos||[]).forEach(m => adicionarMesoDOM(m));
  if(!(p?.mesos||[]).length) adicionarMesoDOM(null);

  // Regras
  const rWrap = $('period-regras-wrap'); rWrap.innerHTML = '';
  (p?.regras||[]).forEach(r => adicionarRegraDOM(r.criterio, r.acao));
  if(!(p?.regras||[]).length) adicionarRegraDOM('','');
}

// ── Adicionar mesociclo ao DOM ────────────────────────────────────────────────
function adicionarMesoDOM(meso){
  const wrap = $('period-mesos-wrap'); if(!wrap) return;
  const idx = wrap.querySelectorAll('.meso-block').length;
  const div = document.createElement('div');
  div.className = 'meso-block';
  div.style.cssText = 'border:1px solid var(--border);border-radius:6px;padding:10px 12px;margin-bottom:10px;background:var(--bg4)';

  const semHtml = (meso?.semanas||[{num:1,tipo:'Carga',series:'3×10',intensidade_code:'base',foco:'Adaptação',prog_carga:0,prog_vol:0}]).map((s,si) =>
    `<div class="sem-row" style="display:grid;grid-template-columns:40px 90px 80px 100px 1fr 60px 60px;gap:6px;align-items:center;margin-bottom:4px">
      <input type="number" class="sem-num" value="${s.num||si+1}" min="1" max="52"
        style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
      <select class="sem-tipo" style="font-size:11px;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text)">
        ${['Carga','Deload','Teste'].map(t=>`<option${s.tipo===t?' selected':''}>${t}</option>`).join('')}
      </select>
      <input type="text" class="sem-series" value="${s.series||'3×10'}" placeholder="3×10"
        style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px">
      <select class="sem-intens" style="font-size:11px;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text)">
        ${[['conservador','−10% (conservador)'],['base','Base'],
           ['+2.5','+2,5%'],['+5','+5%'],['+7.5','+7,5%'],['+10','+10%'],
           ['-10','−10%'],['-15','−15%'],['-20','−20%']
        ].map(([v,lbl])=>`<option value="${v}"${s.intensidade_code===v?' selected':''}>${lbl}</option>`).join('')}
      </select>
      <input type="text" class="sem-foco" value="${s.foco||''}" placeholder="Foco da semana"
        style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-size:11px">
      <input type="number" class="sem-dcarga" value="${s.prog_carga||0}" placeholder="Δcarga%"
        style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
      <input type="number" class="sem-dvol" value="${s.prog_vol||0}" placeholder="Δvol%"
        style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
    </div>`
  ).join('');

  div.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <input type="text" class="meso-nome" value="${meso?.nome||'Mesociclo '+(idx+1)}" placeholder="Nome do mesociclo"
        style="flex:1;padding:5px 8px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-size:13px;font-weight:600;margin-right:8px">
      <button class="btn btn-ghost btn-sm" style="color:var(--red);font-size:11px" onclick="this.closest('.meso-block').remove()">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:40px 90px 80px 100px 1fr 60px 60px;gap:6px;margin-bottom:4px">
      <div style="font-size:9px;color:var(--text3);text-align:center;line-height:1.2">Sem</div>
      <div style="font-size:9px;color:var(--text3)">Tipo</div>
      <div style="font-size:9px;color:var(--text3)">Séries</div>
      <div style="font-size:9px;color:var(--text3)">Intensidade</div>
      <div style="font-size:9px;color:var(--text3)">Foco</div>
      <div style="font-size:9px;color:var(--text3);text-align:center">Δcarga%</div>
      <div style="font-size:9px;color:var(--text3);text-align:center">Δvol%</div>
    </div>
    <div class="sem-rows">${semHtml}</div>
    <button class="btn btn-ghost btn-sm" onclick="addSemMeso(this)" style="font-size:11px;margin-top:4px">+ Semana</button>
  `;
  wrap.appendChild(div);
}

function addSemMeso(btn){
  const rows = btn.previousElementSibling;
  const idx = rows.querySelectorAll('.sem-row').length + 1;
  const div = document.createElement('div');
  div.className = 'sem-row';
  div.style.cssText='display:grid;grid-template-columns:40px 90px 80px 100px 1fr 60px 60px;gap:6px;align-items:center;margin-bottom:4px';
  div.innerHTML=`
    <input type="number" class="sem-num" value="${idx}" min="1" max="52"
      style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
    <select class="sem-tipo" style="font-size:11px;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text)">
      <option>Carga</option><option>Deload</option><option>Teste</option>
    </select>
    <input type="text" class="sem-series" value="3×10" placeholder="3×10"
      style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px">
    <select class="sem-intens" style="font-size:11px;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text)">
      <option value="conservador">−10% (conservador)</option><option value="base" selected>Base</option>
      <option value="+2.5">+2,5%</option><option value="+5">+5%</option>
      <option value="-10">−10%</option><option value="-15">−15%</option>
    </select>
    <input type="text" class="sem-foco" placeholder="Foco"
      style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-size:11px">
    <input type="number" class="sem-dcarga" value="0"
      style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
    <input type="number" class="sem-dvol" value="0"
      style="width:100%;padding:4px 5px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--mono);font-size:11px;text-align:center">
  `;
  rows.appendChild(div);
}

function addMesoPeriod(){ adicionarMesoDOM(null); }

// ── Adicionar regra ───────────────────────────────────────────────────────────
function adicionarRegraDOM(criterio, acao){
  const wrap = $('period-regras-wrap'); if(!wrap) return;
  const div = document.createElement('div');
  div.style.cssText='display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:center;margin-bottom:6px';
  div.innerHTML=`
    <input type="text" class="regra-crit" value="${criterio||''}" placeholder="Critério (se...)"
      style="padding:5px 8px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-size:12px">
    <input type="text" class="regra-acao" value="${acao||''}" placeholder="Ação (então...)"
      style="padding:5px 8px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-size:12px">
    <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="this.parentElement.remove()">✕</button>`;
  wrap.appendChild(div);
}
function addRegraPeriod(){ adicionarRegraDOM('',''); }

// ── Editar modelo existente ───────────────────────────────────────────────────
function editarPeriod(id){
  const p = (LIBS.periodizacao||[]).find(x=>x.id===id); if(!p) return;
  preencherModalPeriod(p);
  $('modal-period').classList.remove('hidden');
}

// ── Salvar modelo ─────────────────────────────────────────────────────────────
function coletarPeriodDoForm(){
  const idVal = $('period-edit-id').value;
  const getChecked = (sel) => [...document.querySelectorAll(sel+' input[type=checkbox]:checked')].map(c=>c.value);
  const cbFreq = ['2x','3x','4x','5x','6x'].filter(f => {
    const el = document.getElementById('pf-'+f.replace('x','x')); return el && el.checked;
  });
  const cbBloqNv  = ['Iniciante','Intermediário','Avançado'].filter(v => {
    const k = {Iniciante:'inic',Intermediário:'inte',Avançado:'avan'}[v];
    const el = document.getElementById('bl-'+k); return el && el.checked;
  });
  const cbBloqCond = ['Gestação','Lesão ativa','Cardiopatia'].filter(v => {
    const k = {Gestação:'gestacao','Lesão ativa':'lesao',Cardiopatia:'card'}[v];
    const el = document.getElementById('bc-'+k); return el && el.checked;
  });

  // Collect mesos
  const mesos = [...$('period-mesos-wrap').querySelectorAll('.meso-block')].map(blk => ({
    nome: blk.querySelector('.meso-nome').value.trim(),
    semanas: [...blk.querySelectorAll('.sem-row')].map(r => ({
      num:    parseInt(r.querySelector('.sem-num').value)||1,
      tipo:   r.querySelector('.sem-tipo').value,
      series: r.querySelector('.sem-series').value.trim(),
      intensidade_code: r.querySelector('.sem-intens').value,
      intensidade: r.querySelector('.sem-intens').selectedOptions[0]?.textContent||'',
      foco:   r.querySelector('.sem-foco').value.trim(),
      prog_carga: parseFloat(r.querySelector('.sem-dcarga').value)||0,
      prog_vol:   parseFloat(r.querySelector('.sem-dvol').value)||0,
    }))
  }));

  // Collect regras
  const regras = [...$('period-regras-wrap').querySelectorAll('div')].map(r => ({
    criterio: r.querySelector('.regra-crit')?.value.trim()||'',
    acao:     r.querySelector('.regra-acao')?.value.trim()||'',
  })).filter(r => r.criterio);

  return {
    id: idVal ? parseInt(idVal) : Date.now(),
    nome:          $('period-nome').value.trim()||'Modelo sem nome',
    sigla:         $('period-sigla').value,
    duracao:       $('period-duracao').value,
    estrutura_meso: $('period-estrutura-meso').value,
    divisao:       $('period-divisao').value,
    desc:          $('period-desc').value.trim(),
    ref:           $('period-ref').value.trim(),
    intensidade:   $('period-intensidade').value,
    rpe:           $('period-rpe').value,
    vol_sem:       $('period-vol-sem').value,
    reps:          $('period-reps').value,
    intervalo:     $('period-intervalo').value,
    tut:           $('period-tut').value,
    nivel:         $('period-nivel').value,
    nivel_max:     $('period-nivel-max').value,
    sexo:          $('period-sexo').value,
    objetivos_compativeis: getChecked('#period-obj-wrap'),
    freq_compativeis: cbFreq,
    bloq_nivel:    cbBloqNv,
    bloq_cond:     cbBloqCond,
    bloq_obs:      $('period-bloq-obs').value.trim(),
    mesos, regras,
    criterios:     $('period-criterios').value.trim(),
    acionamentos:  $('period-acionamentos').value.trim(),
  };
}
function gravarPeriod(novo){
  if(!LIBS.periodizacao) LIBS.periodizacao = [];
  const idx = LIBS.periodizacao.findIndex(x=>x.id===novo.id);
  if(idx>=0) LIBS.periodizacao[idx]=novo; else LIBS.periodizacao.push(novo);
  saveLibs(LIBS);
}
function salvarPeriod(){
  gravarPeriod(coletarPeriodDoForm());
  fecharModalPeriod();
  renderPeriod();
}
// Autosave — mesmo padrão dos modais de Biblioteca. Cobre também as linhas de
// mesociclo/semana e regras adicionadas dinamicamente (delegação de evento).
attachAutosave('modal-period', coletarPeriodDoForm, (novo) => { $('period-edit-id').value = novo.id; gravarPeriod(novo); });

// ══ Acompanhamento de Carga ═══════════════════════════════════════════════════

function abrirAcompPeriod(){
  // Popula select de alunos
  const selAl = $('acomp-aluno-sel');
  selAl.innerHTML = '<option value="">Selecionar aluno...</option>';
  students.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id; opt.textContent = s.perfil?.nome||'—'; selAl.appendChild(opt);
  });
  // Popula select de modelos
  const selPer = $('acomp-period-sel');
  selPer.innerHTML = '<option value="">Selecionar modelo...</option>';
  (LIBS.periodizacao||[]).forEach(p => {
    const opt = document.createElement('option'); opt.value=p.id; opt.textContent=p.nome; selPer.appendChild(opt);
  });
  $('acomp-fase-atual').style.display='none';
  $('acomp-progressao-wrap').style.display='none';
  $('btn-calc-prog').style.display='none';
  $('acomp-cargas-body').innerHTML='';
  $('acomp-nome-aluno').textContent='';
  // If there's an active student, preselect
  if(activeId){ selAl.value=activeId; acompCarregarAluno(); }
  $('modal-acomp-period').classList.remove('hidden');
}

function acompCarregarAluno(){
  const sId = parseInt($('acomp-aluno-sel').value)||0;
  const s = students.find(x=>x.id===sId);
  $('acomp-nome-aluno').textContent = s?.perfil?.nome||'';
  // Load existing carga data if any
  const periodId = parseInt($('acomp-period-sel').value)||0;
  if(s && periodId) _acompPopularCargas(s, periodId);
}

function acompCarregarModelo(){
  const sId = parseInt($('acomp-aluno-sel').value)||0;
  const s   = students.find(x=>x.id===sId);
  const periodId = parseInt($('acomp-period-sel').value)||0;
  const p   = (LIBS.periodizacao||[]).find(x=>x.id===periodId);
  if(!p) return;
  // Show first week info
  const primMeso = p.mesos?.[0];
  const primSem  = primMeso?.semanas?.[0];
  if(primSem){
    $('acomp-meso-label').textContent = primMeso.nome;
    $('acomp-sem-label').textContent  = 'Semana '+primSem.num;
    $('acomp-tipo-label').textContent  = primSem.tipo;
    $('acomp-fase-atual').style.display = 'block';
  }
  $('btn-calc-prog').style.display = 'inline-flex';
  if(s) _acompPopularCargas(s, periodId);
}

function _acompPopularCargas(s, periodId){
  const body = $('acomp-cargas-body'); body.innerHTML='';
  const existentes = s.acomp_period?.[periodId]?.cargas || [];
  if(existentes.length){
    existentes.forEach(c => addCargaAcompRow(c.ex, c.carga, c.reps));
  } else {
    // Default: exercícios da prescrição do aluno se houver
    const exs = getUltimoTreino(s)._fichaObj?.treinos?.flatMap(t=>t.exercicios)||[];
    const uniq = [...new Set(exs.map(e=>e.nome))].slice(0,8);
    if(uniq.length){ uniq.forEach(n=>addCargaAcompRow(n,'','')); }
    else { addCargaAcompRow('','',''); }
  }
}

function addCargaAcompRow(ex, carga, reps){
  const body = $('acomp-cargas-body'); if(!body) return;
  const row = document.createElement('div');
  row.style.cssText='display:grid;grid-template-columns:1fr 80px 70px auto;gap:6px;align-items:center;margin-bottom:5px';
  row.innerHTML=`
    <input type="text" class="acomp-ex" value="${ex||''}" placeholder="Exercício"
      style="padding:5px 8px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-size:12px">
    <input type="number" class="acomp-carga" value="${carga||''}" placeholder="kg"
      style="padding:5px 8px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-family:var(--mono);font-size:12px">
    <input type="number" class="acomp-reps" value="${reps||''}" placeholder="reps"
      style="padding:5px 8px;background:var(--bg4);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-family:var(--mono);font-size:12px">
    <button class="btn btn-ghost btn-sm" style="color:var(--red);font-size:11px" onclick="this.parentElement.remove()">✕</button>`;
  body.appendChild(row);
}

function addCargaAcomp(){ addCargaAcompRow('','',''); }

function calcularProgressao(){
  const periodId = parseInt($('acomp-period-sel').value)||0;
  const p = (LIBS.periodizacao||[]).find(x=>x.id===periodId); if(!p) return;
  const cargas = [...$('acomp-cargas-body').querySelectorAll('div')].map(r=>({
    ex:    r.querySelector('.acomp-ex')?.value.trim()||'',
    carga: parseFloat(r.querySelector('.acomp-carga')?.value)||0,
    reps:  parseInt(r.querySelector('.acomp-reps')?.value)||0,
  })).filter(c=>c.ex);
  if(!cargas.length){ alert('Adicione pelo menos um exercício com carga para calcular.'); return; }

  const body = $('acomp-progressao-body'); body.innerHTML='';
  // Build week-by-week progression table
  const allSemanas = p.mesos.flatMap(m => m.semanas.map(s=>({...s, meso:m.nome})));
  cargas.forEach(c => {
    const div = document.createElement('div');
    div.style.marginBottom='16px';
    let rows='';
    let cargaAtual = c.carga;
    allSemanas.forEach(s => {
      const delta = s.prog_carga||0;
      if(s.tipo==='Deload'){
        cargaAtual = Math.round(c.carga * (1 + delta/100) * 10)/10;
      } else {
        cargaAtual = Math.round((cargaAtual * (1 + delta/100)) * 10)/10;
      }
      const cor = s.tipo==='Deload'?'var(--amber)':s.tipo==='Teste'?'var(--blue)':'var(--accent)';
      rows+=`<tr>
        <td style="font-family:var(--mono);color:var(--text3);padding:4px 8px">${s.num}</td>
        <td style="padding:4px 8px;font-size:11px;color:var(--text2)">${s.meso}</td>
        <td style="padding:4px 8px"><span class="badge" style="font-size:9px;background:${s.tipo==='Deload'?'rgba(251,191,36,.15)':s.tipo==='Teste'?'rgba(59,130,246,.15)':'rgba(34,197,94,.15)'};color:${cor};border:1px solid ${cor}">${s.tipo}</span></td>
        <td style="padding:4px 8px;font-size:11px;color:var(--text2)">${s.series}</td>
        <td style="font-family:var(--mono);font-size:13px;font-weight:700;color:${cor};padding:4px 8px">${cargaAtual}kg</td>
        <td style="font-size:11px;color:var(--text3);padding:4px 8px">${delta>=0?'+':''}${delta}%</td>
        <td style="font-size:10px;color:var(--text3);padding:4px 8px">${s.foco||''}</td>
      </tr>`;
    });
    div.innerHTML=`
      <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px">${c.ex} — base: ${c.carga}kg × ${c.reps} reps</div>
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead><tr style="border-bottom:1px solid var(--border)">
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Sem</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Mesociclo</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Tipo</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Séries</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Carga</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Δ</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-size:10px">Foco</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
    body.appendChild(div);
  });
  $('acomp-progressao-wrap').style.display='block';
}

function coletarAcompDoForm(){
  const sId     = parseInt($('acomp-aluno-sel').value)||0;
  const periodId= parseInt($('acomp-period-sel').value)||0;
  if(!sId || !periodId) return null; // ainda não dá pra identificar o registro
  const cargas = [...$('acomp-cargas-body').querySelectorAll('div')].map(r=>({
    ex:    r.querySelector('.acomp-ex')?.value.trim()||'',
    carga: parseFloat(r.querySelector('.acomp-carga')?.value)||0,
    reps:  parseInt(r.querySelector('.acomp-reps')?.value)||0,
  })).filter(c=>c.ex);
  return {sId, periodId, cargas};
}
function gravarAcomp(dado){
  const s = students.find(x=>x.id===dado.sId); if(!s) return;
  if(!s.acomp_period) s.acomp_period={};
  s.acomp_period[dado.periodId] = { cargas: dado.cargas, data: new Date().toLocaleDateString('pt-BR') };
  // Não usa saveStudent(): s vem do dropdown (acomp-aluno-sel), pode ser diferente
  // do aluno ativo (activeId) na tela principal, ou não haver nenhum ativo agora.
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  supaAutoSave();
}
function salvarAcompPeriod(){
  const dado = coletarAcompDoForm();
  if(!dado){ alert('Selecione aluno e modelo antes de salvar.'); return; }
  gravarAcomp(dado);
  $('modal-acomp-period').classList.add('hidden');
  alert('Acompanhamento salvo! ✓');
}
// Autosave — mesmo padrão dos demais modais; não faz nada até aluno+modelo
// estarem selecionados (coletarAcompDoForm retorna null nesse caso).
attachAutosave('modal-acomp-period', coletarAcompDoForm, gravarAcomp);
