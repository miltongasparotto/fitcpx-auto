// ─── INIT ─────────────────────────────────────────────────────────────────────
renderObjGrid();
// Load persisted students
try{
  const saved = localStorage.getItem('acm-students');
  if(saved){
    const parsed = JSON.parse(saved);
    if(Array.isArray(parsed) && parsed.length){
      students = parsed;
      activeId = null;
    }
  }
}catch(e){}

// Contas de teste (Amanda/Thaís) são sempre a versão mais atual do código —
// sem isso, o registro salvo no localStorage de uma sessão anterior nunca era
// SUBSTITUÍDO, só ACUMULADO: toda vez que a página recarregava, este arquivo
// empurrava outra cópia com o MESMO id (9999999999/9999999998) pra dentro de
// `students`; assim que qualquer ação disparava um save (que persiste o array
// inteiro em localStorage['acm-students']), as cópias idênticas iam junto —
// foi isso que deixou a Thaís triplicada. Antes de semear de novo, remove
// qualquer entrada existente com o mesmo id, garantindo só 1 cópia sempre.
function _removerAlunoTeste(id){
  students = students.filter(s => s.id !== id);
}

// LIMPEZA 2026-08-27: js/seed-demo.js (Carlos Mendes/Juliana Costa/Roberto
// Alves) foi removido do projeto a pedido do Milton — mas quem já tinha
// aberto a página com ?demo antes disso ficou com esses 3 salvos no
// localStorage pra sempre (o seed antigo nunca rodava de novo pra sumir
// sozinho). Roda uma vez, sem precisar de ?demo, e não faz nada se já não
// existirem.
[1782498533431, 1782498535600, 1782498536358].forEach(_removerAlunoTeste);
try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}

// ─── ALUNO DE TESTE ───────────────────────────────────────────────────────────
(function(){
  if(!location.search.includes('demo')) return; // seed só roda com ?demo na URL
  _removerAlunoTeste(9999999999);
  const amanda = {
    id: 9999999999,
    perfil: {
      nome: 'Amanda Silva',
      nascimento: '1993-09-22',
      sexo: 'F',
      atividade: 'moderadamente_ativo',
      profissao: 'Coordenadora de marketing',
      tempo_sentado: '6a8h',
      whatsapp: '(44) 99876-5432',
      modalidade: 'presencial',
      liberacao: 'sim',
      condicoes: 'Nenhuma',
      medicamentos: 'Nenhum',
      medicamentos_detalhe: '',
      lesoes: 'Nenhuma',
      obs_clinicas: 'Histórico de dor lombar leve em 2022 — resolvida sem cirurgia. Médico liberou treino sem restrições desde jan/2023. Nega alergias e doenças crônicas.',
      menstrual: 'Regular',
      contraceptivo: 'Pílula',
    },
    anamnese: {
      gestacao: 'Não',
      trimestre: '',
      // Anamnese — histórico
      nivel: 'Inte',
      tempo: '2–4 anos',
      consistencia: 'alta',
      modalidades: 'Musculação | Corrida',
      extras: '[{"atividade":"Corrida leve (< 8 km/h)","met":6.0,"minutos":35,"dias":2},{"atividade":"Caminhada moderada (4–6 km/h)","met":3.5,"minutos":30,"dias":3}]',
      sono: 'regular',
      estresse: 'moderado',
      alcool: 'ocasional',
      suplementos: 'Whey protein | Creatina | Cafeína',
      pretreino: 'Lanche leve',
      objetivo_ef: 'Emagrecimento',
      objetivo_sec: 'Composição corporal',

      // Logística (prescrição)
      frequencia: '4x',
      duracao: '60',
      horario: 'manhã',
      local: 'academia',
      gosta: 'Pernas e glúteos',
      preferencias: 'Dores Lombares',

      // Antropométrica
      peso: '72.0',
      altura: '165',
      data_avaliacao: '2025-06-10',
      gordura: '30.97',
      mgorda: '22.3',
      magra: '49.7',
      mmuscular: '23.0',
      osso: '8.6',
      residual: '25.1',
      cintura: '82',
      quadril: '102',
      abdomen: '88',
      braco_d: '30.5',
      braco_e: '30.0',
      braco_d_cont: '33.0',
      braco_e_cont: '32.5',
      coxa_d: '58.0',
      coxa_e: '57.0',
      pant_d: '37.0',
      pant_e: '37.0',
      fc: '68',
      obs_antro: 'Avaliação realizada em jejum de 4h. BIA utilizada como referência principal.',

      // Funcional — FMS
      fms_ohsa: '2', fms_ohsa_flag: 'Inclinação excessiva de tronco',
      fms_slsq: '2', fms_slsq_flag: 'Valgo de joelho',
      fms_hurdle: '3', fms_hurdle_flag: '',
      fms_lunge: '3', fms_lunge_flag: '',
      fms_shoulder: '2', fms_shoulder_flag: 'Limitação lado Direito',
      fms_aslr: '2', fms_aslr_flag: 'Encurtamento isquiotibiais bilateral',
      fms_rotary: '3', fms_rotary_flag: '',
      fms_push: '2',
      fms_pull: '3',
      prancha: '48',
      prancha_lat_d: '38',
      prancha_lat_e: '35',
      equilibrio_d: '26',
      equilibrio_e: '22',
      tug: '',
      sentar_levantar: '',
      obs_func: 'Valgo de joelho bilateral ao unipodal, mais evidente à esq. Encurtamento de isquio limita terra convencional. Ombro D com leve restrição em rot. externa — sem dor. Core apresenta boa resistência frontal mas assimetria lateral.',

      // Força
      formula_1rm: 'brzycki',
      data_forca: '2025-06-10',
      obs_forca: 'Terra limitado por encurtamento de isquio — preferência pelo terra romeno. Agachamento com leve valgo no lado esq a partir de 70% da carga.',
      forca: [
        {ex:'Agachamento livre',           carga:'55',  reps:'8'},
        {ex:'Terra romeno com halteres',   carga:'30',  reps:'8'},
        {ex:'Supino com halteres',         carga:'14',  reps:'10'},
        {ex:'Remada na máquina',           carga:'48',  reps:'8'},
        {ex:'Puxada pronada',              carga:'40',  reps:'8'},
        {ex:'Desenvolvimento com halteres',carga:'10',  reps:'10'},
        {ex:'Avanço com halteres',         carga:'16',  reps:'10'},
        {ex:'Rosca direta com halteres',   carga:'8',   reps:'10'},
        {ex:'Extensão de tríceps na polia alta', carga:'20', reps:'10'},
      ],

      // Resistência
      cooper: '2180',
      step_fc: '',
      flexao: '14',
      flexao_modificada: false,
      abdominal_reps: '22',
      squat_reps: '28',
      grip_d: '31.5',
      grip_e: '30.0',
      obs_resist: 'Cooper realizado em esteira a 8 km/h. VO₂máx estimado abaixo da média para faixa etária — condicionamento aeróbico é gargalo. Push-up abaixo da média ACSM.',

      // Flexibilidade
      sentar_alcancar: '8',
      sitreach_proto: 'YMCA/ACSM',
      sitreach_warmup: false,
      isquio_d: 'Moderado',
      isquio_e: 'Moderado',
      iliopsoas_d: 'Leve',
      iliopsoas_e: 'Leve',
      dorsiflexao_d: 'Normal',
      dorsiflexao_e: 'Leve',
      mob_toracica_d: 'Normal',
      mob_toracica_e: 'Normal',
      ombro_flex_d: 'Moderado',
      ombro_flex_e: 'Normal',
      quadril_rot_d: 'Normal',
      quadril_rot_e: 'Normal',
      obs_flex: 'Isquiotibiais com encurtamento moderado bilateral — consistente com queixa de lombar e limitação no terra. Ombro D com leve restrição em overhead — evitar press acima da cabeça no início.',
    },
    // Histórico de avaliações antropométricas — 2 pontos reais: avaliação
    // inicial (10/06/2025) e reavaliação 3 meses depois (10/09/2025).
    // Campos calculados com mesma fórmula do app (Peso−Gordura−Músculo−Óssea).
    avaliacoesAntro: [
      {
        id: 1749513600000,
        data_avaliacao: '2025-06-10',
        responsavel: 'Milton Gasparotto Junior',
        peso: '72.0', altura: '165',
        mgorda: '22.3', gordura: '30.97',
        mmuscular: '23.0', mmuscular_pct: '31.9',
        osso: '8.6', osso_pct: '11.9',
        ombro: '100.0', cintura: '82', abdomen: '88', quadril: '102',
        braco_d: '30.5', braco_e: '30.0', braco_d_cont: '33.0', braco_e_cont: '32.5',
        coxa_d: '58.0', coxa_e: '57.0', pant_d: '37.0', pant_e: '37.0',
        obs_antro: 'Avaliação inicial — BIA em jejum de 4h (10/06/2025).',
        imc: '26.4', imc_class: 'Sobrepeso',
        magra: '49.7', magra_pct: '69.0',
        residual: '18.1', residual_pct: '25.1',
        rcq: '0.80', rcq_class: 'Risco moderado',
      },
      {
        id: 1757462400000,
        data_avaliacao: '2025-09-10',
        responsavel: 'Milton Gasparotto Junior',
        peso: '70.5', altura: '165',
        mgorda: '20.4', gordura: '28.9',
        mmuscular: '23.5', mmuscular_pct: '33.3',
        osso: '8.6', osso_pct: '12.2',
        ombro: '98.5', cintura: '80', abdomen: '85', quadril: '101',
        braco_d: '29.5', braco_e: '29.0', braco_d_cont: '32.5', braco_e_cont: '32.0',
        coxa_d: '57.0', coxa_e: '56.0', pant_d: '36.5', pant_e: '36.5',
        obs_antro: 'Reavaliação 3 meses — evolução positiva em composição corporal (BIA, 10/09/2025).',
        imc: '25.9', imc_class: 'Sobrepeso',
        magra: '50.1', magra_pct: '71.1',
        residual: '18.0', residual_pct: '25.5',
        rcq: '0.79', rcq_class: 'Baixo risco',
      },
    ],
    treinos: [
      {
        id: 1752537600000,
        status: 'aprovado',
        objetivo: 'Emag',
        nivel: 'Inte',
        frequencia: '4x',
        modelo: '★ 15 - Julho (fictício)',
        obs: 'Treino fictício para seed de teste — 1ª prescrição da Amanda. Objetivo: emagrecimento + composição corporal. Divisão ABCD, 4x/sem, academia. Prof. Milton Gasparotto Junior.',
        treino: '',
        dataCriacao: '15/07/2025',
        dataAprovacao: '15/07/2025',
        _fichaObj: {
          objetivo: 'Emag', nivel: 'Inte', frequencia: '4x', local: 'academia', seriesPorEx: 4,
          dataGeracao: '15/07/2025',
          treinos: [
            { label: 'Treino A — Pernas + Glúteos', exercicios: [
              { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento - Smith', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
              { musculo:'Quadríceps', porcao:'Geral', nome:'Leg Press 45°', series:4, reps:'15', intensidade:'100kg', intervalo:'80s' },
              { musculo:'Glúteos', porcao:'Geral', nome:'Afundo Búlgaro - Halter Duplo', series:4, reps:'12', intensidade:'12kg', intervalo:'80s' },
              { musculo:'Isquiossurais', porcao:'Geral', nome:'Stiff - Halter Duplo', series:4, reps:'12', intensidade:'16kg', intervalo:'80s' },
              { musculo:'Glúteos', porcao:'Geral', nome:'Elevação de Quadril no Banco - Barra', series:4, reps:'12', intensidade:'50kg', intervalo:'80s' },
            ]},
            { label: 'Treino B — Costas + Bíceps', exercicios: [
              { musculo:'Latíssimo', porcao:'Geral', nome:'Puxada Alta com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
              { musculo:'Latíssimo', porcao:'Geral', nome:'Remada Baixa na Polia com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'25kg', intervalo:'80s' },
              { musculo:'Latíssimo', porcao:'Geral', nome:'Remada Inclinada com Pegada Aberta Pronada - Barra', series:3, reps:'12', intensidade:'20kg', intervalo:'80s' },
              { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Giro em Pé - Halter', series:3, reps:'12', intensidade:'8kg', intervalo:'80s' },
              { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta no Banco Scott - Barra', series:3, reps:'12', intensidade:'10kg', intervalo:'80s' },
            ]},
            { label: 'Treino C — Peitoral + Ombros + Tríceps', exercicios: [
              { musculo:'Peitoral', porcao:'Geral', nome:'Supino Reto - Smith', series:4, reps:'12', intensidade:'20kg', intervalo:'80s' },
              { musculo:'Peitoral', porcao:'Geral', nome:'Supino Inclinado - Halter', series:3, reps:'12', intensidade:'12kg', intervalo:'80s' },
              { musculo:'Deltóide', porcao:'Geral', nome:'Desenvolvimento Pronado em Pé - Barra', series:3, reps:'12', intensidade:'14kg', intervalo:'80s' },
              { musculo:'Deltóide', porcao:'Medial', nome:'Elevação Lateral em Pé - Halter', series:3, reps:'12', intensidade:'8kg', intervalo:'80s' },
              { musculo:'Tríceps', porcao:'Geral', nome:'Tríceps Polia Alta com Pegada Pronada - Cross e Barra V', series:3, reps:'12', intensidade:'20kg', intervalo:'80s' },
            ]},
            { label: 'Treino D — Glúteos + Core', exercicios: [
              { musculo:'Glúteos', porcao:'Médio', nome:'Abdução de Quadril Sentado com Tronco Alto - Cadeira Abdutora', series:4, reps:'15', intensidade:'30kg', intervalo:'80s' },
              { musculo:'Isquiossurais', porcao:'Geral', nome:'Flexão de Joelho Deitado - Mesa Flexora', series:4, reps:'15', intensidade:'18kg', intervalo:'80s' },
              { musculo:'Glúteos', porcao:'Geral', nome:'Agachamento Sumo - Halter', series:4, reps:'15', intensidade:'20kg', intervalo:'80s' },
              { musculo:'Reto Abdominal', porcao:'Superior', nome:'Abdominal Supra Curto - Anilha', series:3, reps:'20', intensidade:'4kg', intervalo:'60s' },
              { musculo:'Reto Abdominal', porcao:'Geral', nome:'Prancha Baixa', series:3, reps:'45', intensidade:'0kg', intervalo:'60s' },
            ]},
          ],
        },
      },
      {
        id: 1759449600000,
        status: 'aprovado',
        objetivo: 'Emag',
        nivel: 'Inte',
        frequencia: '4x',
        modelo: '★ 03 - Outubro (fictício)',
        obs: 'Treino fictício para seed de teste — 2ª prescrição da Amanda (após reavaliação de set/2025). Progressão em carga + bi-sets. Prof. Milton Gasparotto Junior.',
        treino: '',
        dataCriacao: '03/10/2025',
        dataAprovacao: '03/10/2025',
        _fichaObj: {
          objetivo: 'Emag', nivel: 'Inte', frequencia: '4x', local: 'academia', seriesPorEx: 4,
          dataGeracao: '03/10/2025',
          treinos: [
            { label: 'Treino A — Quadríceps + Glúteos', exercicios: [
              { musculo:'Glúteos', porcao:'Geral', nome:'Elevação de Quadril no Banco - Barra', series:4, reps:'12', intensidade:'60kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Glúteos', porcao:'Médio', nome:'Abdução de Quadril Sentado com Tronco Alto - Cadeira Abdutora', series:4, reps:'20', intensidade:'35kg', intervalo:'80s' },
              { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento - Smith', series:4, reps:'12', intensidade:'35kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Glúteos', porcao:'Geral', nome:'Afundo Búlgaro - Halter Duplo', series:4, reps:'12', intensidade:'14kg', intervalo:'80s' },
              { musculo:'Quadríceps', porcao:'Geral', nome:'Extensão de Joelho Sentado - Cadeira Extensora', series:4, reps:'15', intensidade:'65kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Isquiossurais', porcao:'Geral', nome:'Flexão de Joelho Deitado - Mesa Flexora', series:4, reps:'15', intensidade:'20kg', intervalo:'80s' },
            ]},
            { label: 'Treino B — Costas + Ombros', exercicios: [
              { musculo:'Latíssimo', porcao:'Geral', nome:'Pull Down com Pegada Pronada em Pé - Cross', series:4, reps:'12', intensidade:'18kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Deltóide', porcao:'Posterior', nome:'Crucifixo Invertido - Voador', series:4, reps:'15', intensidade:'15kg', intervalo:'80s' },
              { musculo:'Latíssimo', porcao:'Geral', nome:'Puxada Alta com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'35kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Deltóide', porcao:'Medial', nome:'Elevação Lateral em Pé - Halter', series:4, reps:'15', intensidade:'10kg', intervalo:'80s' },
              { musculo:'Latíssimo', porcao:'Geral', nome:'Remada Inclinada com Pegada Aberta Pronada - Barra', series:4, reps:'12', intensidade:'22kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Deltóide', porcao:'Anterior', nome:'Elevação Frontal em Pé com Pegada Neutra - Halter', series:4, reps:'12', intensidade:'10kg', intervalo:'80s' },
            ]},
            { label: 'Treino C — Peitoral + Bíceps + Tríceps', exercicios: [
              { musculo:'Peitoral', porcao:'Geral', nome:'Supino Inclinado - Smith', series:4, reps:'12', intensidade:'22kg', intervalo:'80s' },
              { musculo:'Peitoral', porcao:'Geral', nome:'Crucifixo Reto - Voador', series:4, reps:'15', intensidade:'25kg', intervalo:'80s' },
              { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Giro em Pé - Halter', series:3, reps:'12', intensidade:'10kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Tríceps', porcao:'Geral', nome:'Tríceps Polia Alta com Pegada Pronada - Cross e Barra V', series:3, reps:'12', intensidade:'22kg', intervalo:'80s' },
              { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Pegada Supinada em Pé - Cross e Barra', series:3, reps:'12', intensidade:'14kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Tríceps', porcao:'Geral', nome:'Tríceps Francês em Pé - Halter', series:3, reps:'12', intensidade:'8kg', intervalo:'80s' },
            ]},
            { label: 'Treino D — Posterior Coxa + Core', exercicios: [
              { musculo:'Glúteos', porcao:'Geral', nome:'Agachamento Sumo - Halter', series:4, reps:'15', intensidade:'24kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Isquiossurais', porcao:'Geral', nome:'Stiff - Halter Duplo', series:4, reps:'15', intensidade:'18kg', intervalo:'80s' },
              { musculo:'Glúteos', porcao:'Geral', nome:'Coice em Quatro Apoios com Caneleira', series:4, reps:'20', intensidade:'8kg', intervalo:'80s', _vinculadoProximo:true },
              { musculo:'Reto Abdominal', porcao:'Inferior', nome:'Abdominal Infra Pernas Estendidas com Apoio', series:4, reps:'20', intensidade:'0kg', intervalo:'60s' },
              { musculo:'Reto Abdominal', porcao:'Geral', nome:'Abdominal Militar', series:4, reps:'30', intensidade:'0kg', intervalo:'60s' },
              { musculo:'Oblíquo', porcao:'Geral', nome:'Prancha Lateral', series:3, reps:'45', intensidade:'0kg', intervalo:'60s' },
            ]},
          ],
        },
      },
    ],
    // Reavaliação (10/09/2025): −1,5kg gordura +0,5kg músculo em 3 meses
    reavaliacao: {
      peso: '70.5',
      gordura: '28.9',
      magra: '50.1',
      cintura: '80',
      analise: 'Avaliação anterior (10/06/2025): peso 72,0kg, gordura 30,97% (22,3kg), músculo 31,9% (23,0kg), óssea 11,9% (8,6kg), residual 25,1% (18,1kg), MCM 69,0% (49,7kg). Perimetria: abdômen 88 | quadril 102cm; braço 30,5/30,0 (D/E) | braço cont. 33,0/32,5 | coxa 58,0/57,0 | panturrilha 37,0/37,0. Evolução em 3 meses: −1,9kg gordura, +0,5kg músculo — dentro do esperado para protocolo de emagrecimento com preservação de massa.',
      decisao: '',
      data: '10/09/2025',
    },
  };
  students.push(amanda);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
  navGo('alunos');
})();

// ─── ALUNA DE TESTE 2 — DADOS REAIS (Thaís) ────────────────────────────────────
(function(){
  if(!location.search.includes('demo')) return; // seed só roda com ?demo na URL
  // BUGFIX 2026-08-27: faltava essa trava aqui (os outros 4 alunos de teste já
  // tinham). Sem ela, esse bloco rodava em TODA carga de página — com ou sem
  // ?demo — e sobrescrevia a Thaís do zero, apagando qualquer edição salva
  // (Anamnese, Avaliação, etc.) assim que a página recarregava.
  _removerAlunoTeste(9999999998);
  const thais = {
    id: 9999999998,
    perfil: {
      nome: 'Thaís Helena Leão Feitosa',
      nascimento: '1997-04-03', // dado real (print cadastro FitCpx) — corrigido, estava 04-10
      sexo: 'F',
      atividade: 'moderadamente_ativo',
      profissao: '',
      tempo_sentado: '',
      whatsapp: '(44) 99880-0175', // dado real (print cadastro FitCpx)
      modalidade: 'presencial',
      liberacao: 'sim',
      condicoes: 'Nenhuma',
      medicamentos: 'Nenhum',
      medicamentos_detalhe: '',
      lesoes: 'Nenhuma',
      obs_clinicas: '',
      menstrual: 'Regular',
      contraceptivo: '',
    },
    anamnese: {
      gestacao: 'Não',
      trimestre: '',
      // nivel/frequencia atualizados pro dado real do último treino registrado
      // (14/06/2026, ficha "06 - Julho") — mais recente que a avaliação de
      // 06/06/2026 usada antes, que ainda estava com nível Intermediário/4x.
      nivel: 'Avan',
      tempo: '',
      consistencia: '',
      modalidades: 'Musculação',
      extras: '[]',
      sono: '',
      estresse: '',
      alcool: '',
      suplementos: '',
      pretreino: '',
      objetivo_ef: 'Composição corporal',
      objetivo_sec: '',
      frequencia: '5x',
      duracao: '60',
      horario: '',
      local: 'academia',
      gosta: '',
      preferencias: '',

      // Antropométrica — dado real (avaliação 06/06/2026, mais recente das 3)
      peso: '61.80',
      altura: '160',
      data_avaliacao: '2026-06-06',
      gordura: '22.6',
      mgorda: '14.0',
      magra: '47.8',
      mmuscular: '21.6',
      osso: '8.8',
      residual: '28.0',
      // Perimetria (cm) — dado real (print avaliação FitCpx, 06/06/2026)
      cintura: '66.00',
      quadril: '97.50',
      abdomen: '75.60',
      braco_d: '24.60', braco_e: '25.70', braco_d_cont: '28.40', braco_e_cont: '28.00',
      coxa_d: '58.40', coxa_e: '57.30', pant_d: '36.10', pant_e: '35.80',
      fc: '',
      obs_antro: 'Dado real — avaliação de bioimpedância (relatório externo/FitCpx, 06/06/2026). IMC 24,1.',

      fms_ohsa: '', fms_ohsa_flag: '',
      fms_slsq: '', fms_slsq_flag: '',
      fms_hurdle: '', fms_hurdle_flag: '',
      fms_lunge: '', fms_lunge_flag: '',
      fms_shoulder: '', fms_shoulder_flag: '',
      fms_aslr: '', fms_aslr_flag: '',
      fms_rotary: '', fms_rotary_flag: '',
      fms_push: '', fms_pull: '',
      prancha: '', prancha_lat_d: '', prancha_lat_e: '',
      equilibrio_d: '', equilibrio_e: '',
      tug: '', sentar_levantar: '', obs_func: '',

      formula_1rm: 'brzycki', obs_forca: '', data_forca: '',
      forca: [],

      cooper: '', step_fc: '', flexao: '', flexao_modificada: false,
      abdominal_reps: '', squat_reps: '', grip_d: '', grip_e: '', obs_resist: '',

      sentar_alcancar: '', sitreach_proto: 'YMCA/ACSM', sitreach_warmup: false,
      isquio_d: '', isquio_e: '', iliopsoas_d: '', iliopsoas_e: '',
      dorsiflexao_d: '', dorsiflexao_e: '', mob_toracica_d: '', mob_toracica_e: '',
      ombro_flex_d: '', ombro_flex_e: '', quadril_rot_d: '', quadril_rot_e: '',
      obs_flex: '',
    },
    // Histórico de avaliações antropométricas — é ISSO que a tela "Avaliação →
    // Antropométrica" lista (s.avaliacoesAntro), não os campos soltos em
    // anamnese/reavaliacao acima (que só espelham o ponto mais recente pros
    // motores de cálculo). Sem isso a lista aparecia vazia mesmo com os dados
    // preenchidos. Dois pontos reais (prints FitCpx): 28/02/2026 e 06/06/2026.
    // Campos calculados (imc/magra/residual/rcq) computados com a mesma fórmula
    // do app (Peso−Gordura−Músculo−Óssea pra residual, já que Músculo foi
    // medido nos dois pontos — bate com o print real). Pescoço/Tórax/Antebraço
    // ficaram de fora por não terem campo próprio na ficha.
    avaliacoesAntro: [
      {
        id: 1740718800000,
        data_avaliacao: '2026-02-28',
        responsavel: 'Milton Gasparotto Junior',
        peso: '61.60', altura: '160',
        mgorda: '15.1', gordura: '24.5',
        mmuscular: '21.8', mmuscular_pct: '35.4',
        osso: '8.8', osso_pct: '14.3',
        ombro: '100.60', cintura: '65.80', abdomen: '80.00', quadril: '100.40',
        braco_d: '24.70', braco_e: '25.20', braco_d_cont: '28.00', braco_e_cont: '28.20',
        coxa_d: '58.90', coxa_e: '59.00', pant_d: '36.50', pant_e: '36.50',
        obs_antro: 'Dado real — avaliação de bioimpedância (relatório externo/FitCpx, 28/02/2026).',
        imc: '24.1', imc_class: 'Peso normal',
        magra: '46.5', magra_pct: '75.5',
        residual: '15.9', residual_pct: '25.8',
        rcq: '0.66', rcq_class: 'Baixo risco',
      },
      {
        id: 1749168000000,
        data_avaliacao: '2026-06-06',
        responsavel: 'Milton Gasparotto Junior',
        peso: '61.80', altura: '160',
        mgorda: '14.0', gordura: '22.6',
        mmuscular: '21.6', mmuscular_pct: '35.0',
        osso: '8.8', osso_pct: '14.2',
        ombro: '99.90', cintura: '66.00', abdomen: '75.60', quadril: '97.50',
        braco_d: '24.60', braco_e: '25.70', braco_d_cont: '28.40', braco_e_cont: '28.00',
        coxa_d: '58.40', coxa_e: '57.30', pant_d: '36.10', pant_e: '35.80',
        obs_antro: 'Dado real — avaliação de bioimpedância (relatório externo/FitCpx, 06/06/2026).',
        imc: '24.1', imc_class: 'Peso normal',
        magra: '47.8', magra_pct: '77.3',
        residual: '17.4', residual_pct: '28.2',
        rcq: '0.68', rcq_class: 'Baixo risco',
      },
    ],
    // Último treino registrado — dado real (print FitCpx, ficha "06 - Julho",
    // aprovada 14/06/2026 por Milton Gasparotto Junior). Carga/reps/intervalo
    // abaixo são os valores REGISTRADOS de fato, não uma sugestão do motor —
    // por isso 'intensidade'/'intervalo' aqui guardam carga em kg e descanso
    // em segundos (dado real), em vez da faixa %1RM que o motor de sugestão usa.
    treinos: [{
      id: 1749907687000,
      status: 'aprovado',
      objetivo: 'Hip',
      nivel: 'Avan',
      frequencia: '5x',
      modelo: '★ 06 - Julho (dado real — FitCpx)',
      obs: 'Importado de prints do FitCpx real pra testar o sistema com dado fiel. Professor: Milton Gasparotto Junior.',
      treino: '',
      dataCriacao: '14/06/2026',
      dataAprovacao: '14/06/2026',
      _fichaObj: {
        objetivo: 'Hip', nivel: 'Avan', frequencia: '5x', local: 'academia', seriesPorEx: 4,
        dataGeracao: '14/06/2026',
        treinos: [
          { label: 'Treino A — Costas + Ombros', exercicios: [
            { musculo:'Latíssimo', porcao:'Geral', nome:'Pull Down com Pegada Pronada em Pé - Cross', series:4, reps:'12', intensidade:'20kg', intervalo:'80s' },
            { musculo:'Latíssimo', porcao:'Geral', nome:'Remada Inclinada com Pegada Aberta Pronada - Barra', series:4, reps:'12', intensidade:'20kg', intervalo:'80s' },
            { musculo:'Latíssimo', porcao:'Geral', nome:'Puxada Alta com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
            { musculo:'Deltóide', porcao:'Posterior', nome:'Crucifixo Invertido - Voador', series:4, reps:'12', intensidade:'15kg', intervalo:'80s' },
            { musculo:'Deltóide', porcao:'Anterior', nome:'Elevação Frontal em Pé com Pegada Neutra - Halter', series:4, reps:'12', intensidade:'12kg', intervalo:'80s' },
            { musculo:'Deltóide', porcao:'Medial', nome:'Elevação Lateral em Pé - Halter', series:4, reps:'12', intensidade:'14kg', intervalo:'80s' },
          ]},
          { label: 'Treino B — Posterior de Coxa + Abdômen', exercicios: [
            { musculo:'Isquiossurais', porcao:'Geral', nome:'Flexão de Joelho Deitado - Mesa Flexora', series:6, reps:'12', intensidade:'20kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Geral', nome:'Ponte com Pés no Banco', series:2, reps:'12', intensidade:'0kg', intervalo:'80s' },
            { musculo:'Isquiossurais', porcao:'Geral', nome:'Stiff Unilateral - Halter Duplo', series:4, reps:'12', intensidade:'14kg', intervalo:'80s' },
            { musculo:'Reto Abdominal', porcao:'Superior', nome:'Abdominal Supra Curto - Anilha', series:4, reps:'20', intensidade:'5kg', intervalo:'80s' },
            { musculo:'Reto Abdominal', porcao:'Geral', nome:'Abdominal Militar', series:4, reps:'30', intensidade:'0kg', intervalo:'80s' },
          ]},
          { label: 'Treino C — Quadríceps + Oblíquos', exercicios: [
            { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento - Smith', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento - Hack', series:4, reps:'12', intensidade:'40kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Leg Press 45°', series:4, reps:'12', intensidade:'120kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Extensão de Joelho Sentado - Cadeira Extensora', series:4, reps:'12', intensidade:'70kg', intervalo:'80s' },
            { musculo:'Oblíquo', porcao:'Geral', nome:'Abdominal Militar V com Toque nos Pés Alternado', series:4, reps:'12', intensidade:'0kg', intervalo:'80s' },
            { musculo:'Oblíquo', porcao:'Geral', nome:'Prancha Lateral', series:4, reps:'60', intensidade:'0kg', intervalo:'80s' },
          ]},
          { label: 'Treino D — Ombro + Peitoral + Bíceps + Tríceps', exercicios: [
            { musculo:'Deltóide', porcao:'Geral', nome:'Desenvolvimento Pronado em Pé - Barra', series:4, reps:'12', intensidade:'16kg', intervalo:'80s' },
            { musculo:'Peitoral', porcao:'Geral', nome:'Crucifixo Reto - Voador', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
            { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Giro em Pé - Halter', series:3, reps:'12', intensidade:'16kg', intervalo:'80s' },
            { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Pegada Supinada em Pé - Cross e Barra', series:3, reps:'12', intensidade:'20kg', intervalo:'80s' },
            { musculo:'Tríceps', porcao:'Geral', nome:'Tríceps Francês em Pé - Halter', series:3, reps:'12', intensidade:'10kg', intervalo:'80s' },
            { musculo:'Tríceps', porcao:'Geral', nome:'Tríceps Polia Alta com Pegada Pronada - Cross e Barra V', series:3, reps:'12', intensidade:'30kg', intervalo:'80s' },
          ]},
          { label: 'Treino E — Glúteos', exercicios: [
            { musculo:'Glúteos', porcao:'Geral', nome:'Agachamento Sumo - Halter', series:4, reps:'12', intensidade:'30kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Geral', nome:'Afundo Búlgaro - Halter Duplo', series:4, reps:'12', intensidade:'16kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Geral', nome:'Elevação de Quadril - Gaiola para Elevação Pélvica', series:4, reps:'12', intensidade:'80kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Médio', nome:'Abdução de Quadril em Pé - Cross', series:4, reps:'12', intensidade:'10kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Médio', nome:'Abdução de Quadril Sentado com Tronco Alto - Cadeira Abdutora', series:4, reps:'12', intensidade:'35kg', intervalo:'80s' },
          ]},
        ],
      },
    }, {
      // Segundo treino real registrado — dado real (print FitCpx, ficha
      // "03 - MAR - FEM.INT.5X.HIP", criada 17/02/2026, anterior ao "06 -
      // Julho" acima). Trazido pra testar comparação entre dois treinos reais
      // da mesma aluna. Aqui os exercícios vêm com bi-set/tri-set REAIS
      // (badges 1/2·2/2 e 1/3·2/3·3/3 no print) — reproduzidos via
      // `_vinculadoProximo` no exercício que abre cada bloco.
      id: 1771286373000,
      status: 'aprovado',
      objetivo: 'Hip',
      nivel: 'Inte',
      frequencia: '5x',
      modelo: '★ 03 - MAR - FEM.INT.5X.HIP (dado real — FitCpx)',
      obs: 'Importado de prints do FitCpx real pra testar o sistema com dado fiel, incluindo agrupamentos bi-set/tri-set. Professor: Milton Gasparotto Junior.',
      treino: '',
      dataCriacao: '17/02/2026',
      dataAprovacao: '17/02/2026',
      _fichaObj: {
        objetivo: 'Hip', nivel: 'Inte', frequencia: '5x', local: 'academia', seriesPorEx: 4,
        dataGeracao: '17/02/2026',
        treinos: [
          { label: 'Treino A — Glúteos + P. Coxa', exercicios: [
            { musculo:'Glúteos', porcao:'Geral', nome:'Elevação de Quadril no Banco - Barra e Mini Band', series:4, reps:'12', intensidade:'80kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Glúteos', porcao:'Médio', nome:'Abdução de Quadril Sentado - Mini Band', series:4, reps:'20', intensidade:'30kg', intervalo:'80s' },
            { musculo:'Glúteos', porcao:'Geral', nome:'Afundo Búlgaro - Halter Duplo', series:4, reps:'12', intensidade:'20kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Isquiossurais', porcao:'Geral', nome:'Stiff Unilateral - Halter Duplo', series:4, reps:'15', intensidade:'14kg', intervalo:'80s' },
            { musculo:'Isquiossurais', porcao:'Geral', nome:'Flexão de Joelho Deitado - Mesa Flexora', series:4, reps:'12', intensidade:'25kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Glúteos', porcao:'Geral', nome:'Ponte Isométrica com Pés no Banco', series:4, reps:'45', intensidade:'0kg', intervalo:'80s' },
          ]},
          { label: 'Treino B — Ombros + Abdômen', exercicios: [
            { musculo:'Deltóide', porcao:'Geral', nome:'Desenvolvimento Pronado Sentado - Barra', series:4, reps:'12', intensidade:'14kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Reto Abdominal', porcao:'Inferior', nome:'Abdominal Infra Pernas Estendidas com Apoio', series:4, reps:'20', intensidade:'0kg', intervalo:'80s' },
            { musculo:'Deltóide', porcao:'Medial', nome:'Elevação Lateral em Pé - Halter', series:4, reps:'12', intensidade:'14kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Reto Abdominal', porcao:'Superior', nome:'Abdominal Supra Curto com Braços Alongados', series:4, reps:'20', intensidade:'0kg', intervalo:'80s' },
            { musculo:'Deltóide', porcao:'Anterior', nome:'Elevação Frontal em Pé com Pegada Neutra - Halter', series:4, reps:'12', intensidade:'10kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Reto Abdominal', porcao:'Geral', nome:'Canoinha Isométrica Estendida', series:4, reps:'90', intensidade:'0kg', intervalo:'80s' },
          ]},
          { label: 'Treino C — Quadríceps + Panturrilha', exercicios: [
            { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento - Barra', series:4, reps:'12', intensidade:'34kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Recuo Alternado - Halter', series:4, reps:'24', intensidade:'14kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Extensão de Joelho Sentado - Cadeira Extensora', series:4, reps:'12', intensidade:'70kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Passada - Halter', series:4, reps:'24', intensidade:'14kg', intervalo:'80s' },
            { musculo:'Panturrilhas', porcao:'Geral', nome:'Elevação de Panturrilha - Hack', series:4, reps:'20', intensidade:'100kg', intervalo:'80s' },
          ]},
          { label: 'Treino D — Costas + Bíceps', exercicios: [
            { musculo:'Latíssimo', porcao:'Geral', nome:'Puxada Alta com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'25kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Pegada Supinada em Pé - Barra', series:4, reps:'12', intensidade:'6kg', intervalo:'80s' },
            { musculo:'Latíssimo', porcao:'Geral', nome:'Remada Baixa na Polia com Pegada Fechada Neutra', series:4, reps:'12', intensidade:'25kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Bíceps', porcao:'Geral', nome:'Rosca Direta com Giro Sentado - Halter', series:4, reps:'12', intensidade:'12kg', intervalo:'80s' },
            { musculo:'Latíssimo', porcao:'Geral', nome:'Pull Down com Pegada Neutra em Pé - Super Band', series:4, reps:'15', intensidade:'10kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Deltóide', porcao:'Posterior', nome:'Crucifixo Invertido - Voador', series:4, reps:'15', intensidade:'15kg', intervalo:'80s' },
          ]},
          { label: 'Treino E — Inferior', exercicios: [
            { musculo:'Glúteos', porcao:'Geral', nome:'Coice em Quatro Apoios com Caneleira', series:4, reps:'20', intensidade:'10kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Extensão de Joelho Sentado - Cadeira Extensora', series:4, reps:'20', intensidade:'70kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Isquiossurais', porcao:'Geral', nome:'Flexão de Joelho Deitado - Mesa Flexora', series:4, reps:'20', intensidade:'25kg', intervalo:'80s' },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Passada - Halter', series:4, reps:'20', intensidade:'14kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Glúteos', porcao:'Geral', nome:'Agachamento Sumo - Halter', series:4, reps:'20', intensidade:'30kg', intervalo:'80s', _vinculadoProximo:true },
            { musculo:'Quadríceps', porcao:'Geral', nome:'Agachamento Frontal - Halter Simples', series:4, reps:'20', intensidade:'16kg', intervalo:'80s' },
          ]},
        ],
      },
    }],
    // Reavaliação — ponto anterior real (28/02/2026), pra comparação de ciclo
    reavaliacao: {
      peso: '61.60',
      gordura: '24.5',
      magra: '46.5',
      cintura: '65.80', // dado real (print avaliação FitCpx, 28/02/2026)
      analise: 'Avaliação anterior real (28/02/2026): peso 61,60kg, gordura 24,5% (15,1kg), músculo 35,4% (21,8kg), óssea 14,3% (8,8kg), residual 25,8% (15,9kg), MCM 75,5% (46,5kg). Perimetria: abdômen 80,00 | quadril 100,40cm; braço 24,70/25,20 (D/E) | braço cont. 28,00/28,20 | coxa 58,90/59,00 | panturrilha 36,50/36,50. Terceiro ponto real disponível: 29/11/2025 — peso 60,40kg, gordura 23,7% (14,3kg), músculo 35,4% (21,4kg), óssea 14,6% (8,8kg), residual 26,2% (15,8kg).',
      decisao: '',
      data: '28/02/2026',
    },
  };
  students.push(thais);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
})();

// ─── ALUNO DE TESTE 3 — DADOS REAIS (Eduardo) ──────────────────────────────────
// Cenário de teste pedido pelo Milton: 2 homens + 2 mulheres, faixas etárias e
// objetivos diferentes, pra testar o motor de prescrição em cenários variados.
// Apenas o NOME é fictício — nascimento, contato, peso/dobras/perimetria/treino
// vêm de ficha real exportada do FitCpx (PDFs + prints enviados 27/08/2026),
// sem cargas registradas na ficha de treino de origem (por isso intensidade
// fica em branco nos exercícios — dado real não incluía essa coluna).
(function(){
  if(!location.search.includes('demo')) return; // seed só roda com ?demo na URL
  _removerAlunoTeste(9999999994);
  const eduardo = {
    "id": 9999999994,
    "perfil": {
        "nome": "Eduardo Ricardo Monteiro",
        "nascimento": "2007-12-03",
        "sexo": "M",
        "atividade": "moderadamente_ativo",
        "profissao": "Estudante universitário",
        "tempo_sentado": "4a6h",
        "whatsapp": "(44) 99838-6557",
        "modalidade": "presencial",
        "liberacao": "sim",
        "condicoes": "Nenhuma",
        "medicamentos": "Nenhum",
        "medicamentos_detalhe": "",
        "lesoes": "Nenhuma",
        "obs_clinicas": "Sem histórico relevante. Aluno de teste — apenas o nome é fictício; nascimento/contato/medidas/treino são dados reais anonimizados só no nome."
    },
    "anamnese": {
        "gestacao": "Não",
        "trimestre": "",
        "nivel": "Avan",
        "tempo": "3–4 anos",
        "consistencia": "alta",
        "modalidades": "Musculação",
        "extras": "[]",
        "sono": "regular",
        "estresse": "moderado",
        "alcool": "raro",
        "suplementos": "Whey protein | Creatina",
        "pretreino": "Café + banana",
        "objetivo_ef": "Composição corporal",
        "objetivo_sec": "Emagrecimento",
        "frequencia": "5x",
        "duracao": "60",
        "horario": "noite",
        "local": "academia",
        "gosta": "Costas e peitoral",
        "preferencias": "",
        "peso": "99.70",
        "altura": "181",
        "data_avaliacao": "2026-06-18",
        "gordura": "18.7",
        "mgorda": "18.6",
        "magra": "81.1",
        "mmuscular": "35.8",
        "osso": "13.3",
        "residual": "31.9",
        "cintura": "92.00",
        "quadril": "108.40",
        "abdomen": "95.90",
        "braco_d": "31.80",
        "braco_e": "32.70",
        "braco_d_cont": "36.10",
        "braco_e_cont": "36.90",
        "coxa_d": "64.50",
        "coxa_e": "64.20",
        "pant_d": "44.40",
        "pant_e": "43.00",
        "fc": "",
        "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
        "fms_ohsa": "",
        "fms_ohsa_flag": "",
        "fms_slsq": "",
        "fms_slsq_flag": "",
        "fms_hurdle": "",
        "fms_hurdle_flag": "",
        "fms_lunge": "",
        "fms_lunge_flag": "",
        "fms_shoulder": "",
        "fms_shoulder_flag": "",
        "fms_aslr": "",
        "fms_aslr_flag": "",
        "fms_rotary": "",
        "fms_rotary_flag": "",
        "fms_push": "",
        "fms_pull": "",
        "prancha": "",
        "prancha_lat_d": "",
        "prancha_lat_e": "",
        "equilibrio_d": "",
        "equilibrio_e": "",
        "tug": "",
        "sentar_levantar": "",
        "obs_func": "",
        "formula_1rm": "brzycki",
        "obs_forca": "",
        "data_forca": "",
        "forca": [],
        "cooper": "",
        "step_fc": "",
        "flexao": "",
        "flexao_modificada": false,
        "abdominal_reps": "",
        "squat_reps": "",
        "grip_d": "",
        "grip_e": "",
        "obs_resist": "",
        "sentar_alcancar": "",
        "sitreach_proto": "YMCA/ACSM",
        "sitreach_warmup": false,
        "isquio_d": "",
        "isquio_e": "",
        "iliopsoas_d": "",
        "iliopsoas_e": "",
        "dorsiflexao_d": "",
        "dorsiflexao_e": "",
        "mob_toracica_d": "",
        "mob_toracica_e": "",
        "ombro_flex_d": "",
        "ombro_flex_e": "",
        "quadril_rot_d": "",
        "quadril_rot_e": "",
        "obs_flex": ""
    },
    "avaliacoesAntro": [
        {
            "id": 1741608000000,
            "data_avaliacao": "2026-03-10",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "102.90",
            "altura": "181",
            "mgorda": "20.5",
            "gordura": "19.9",
            "mmuscular": "36.6",
            "mmuscular_pct": "35.6",
            "osso": "13.3",
            "osso_pct": "12.9",
            "ombro": "125.60",
            "cintura": "92.50",
            "abdomen": "99.50",
            "quadril": "108.00",
            "braco_d": "32.30",
            "braco_e": "33.20",
            "braco_d_cont": "37.00",
            "braco_e_cont": "37.00",
            "coxa_d": "66.70",
            "coxa_e": "64.50",
            "pant_d": "43.80",
            "pant_e": "42.90",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "31.4",
            "imc_class": "Obesidade grau I",
            "magra": "82.4",
            "magra_pct": "80.1",
            "residual": "32.5",
            "residual_pct": "31.6",
            "rcq": "0.86",
            "rcq_class": "Baixo risco"
        },
        {
            "id": 1750262400000,
            "data_avaliacao": "2026-06-18",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "99.70",
            "altura": "181",
            "mgorda": "18.6",
            "gordura": "18.7",
            "mmuscular": "35.8",
            "mmuscular_pct": "35.9",
            "osso": "13.3",
            "osso_pct": "13.3",
            "ombro": "125.70",
            "cintura": "92.00",
            "abdomen": "95.90",
            "quadril": "108.40",
            "braco_d": "31.80",
            "braco_e": "32.70",
            "braco_d_cont": "36.10",
            "braco_e_cont": "36.90",
            "coxa_d": "64.50",
            "coxa_e": "64.20",
            "pant_d": "44.40",
            "pant_e": "43.00",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "30.4",
            "imc_class": "Obesidade grau I",
            "magra": "81.1",
            "magra_pct": "81.3",
            "residual": "32.0",
            "residual_pct": "32.1",
            "rcq": "0.85",
            "rcq_class": "Baixo risco"
        }
    ],
    "treinos": [
        {
            "id": 1741694400000,
            "status": "aprovado",
            "objetivo": "Comp",
            "nivel": "Avan",
            "frequencia": "4x",
            "modelo": "★ 12 - Março (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "12/03/2026",
            "dataAprovacao": "12/03/2026",
            "_fichaObj": {
                "objetivo": "Comp",
                "nivel": "Avan",
                "frequencia": "4x",
                "local": "academia",
                "seriesPorEx": 4,
                "dataGeracao": "12/03/2026",
                "treinos": [
                    {
                        "label": "Treino A — Peitoral + Tríceps",
                        "exercicios": [
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Superior)",
                                "nome": "Supino Inclinado - Smith",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Supino Reto - Smith",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Inferior)",
                                "nome": "Supino Declinado - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Polia Alta com Pegada Pronada - Cross e Barra V",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Francês Sentado - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            }
                        ]
                    },
                    {
                        "label": "Treino B — Costas + Bíceps",
                        "exercicios": [
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Baixa na Máquina com Pegada Aberta Pronada",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Baixa na Máquina com Pegada Fechada Neutra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Puxada Alta com Pegada Aberta Pronada",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Longa)",
                                "nome": "Rosca Alternada com Giro no Banco Inclinado - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Curta)",
                                "nome": "Rosca Direta no Banco Scott - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            }
                        ]
                    },
                    {
                        "label": "Treino C — Perna Completa",
                        "exercicios": [
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento - Smith",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Leg Press 45°",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Levantamento Terra Sumo",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Extensão de Joelho Sentado - Cadeira Extensora",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho Deitado - Mesa Flexora",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            }
                        ]
                    },
                    {
                        "label": "Treino D — Ombros + Panturrilha",
                        "exercicios": [
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Desenvolvimento - Smith",
                                "series": 4,
                                "reps": "13",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé Unilateral - Cross",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé - Halter",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Panturrilhas",
                                "porcao": "Geral",
                                "nome": "Elevação de Panturrilha Sentado - Panturrilha Sentado",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Panturrilhas",
                                "porcao": "Geral",
                                "nome": "Elevação de Panturrilha - Step e Anilha",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "80s"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 1750348800000,
            "status": "aprovado",
            "objetivo": "Comp",
            "nivel": "Avan",
            "frequencia": "5x",
            "modelo": "★ 18 - Junho (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "18/06/2026",
            "dataAprovacao": "18/06/2026",
            "_fichaObj": {
                "objetivo": "Comp",
                "nivel": "Avan",
                "frequencia": "5x",
                "local": "academia",
                "seriesPorEx": 5,
                "dataGeracao": "18/06/2026",
                "treinos": [
                    {
                        "label": "Costas + Bíceps",
                        "exercicios": [
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Barra Fixa com Pegada Fechada Neutra - Gráviton",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Inclinada com Pegada Fechada Supinada - Barra",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Geral",
                                "nome": "Rosca Testa - Fita de Suspensão",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Serrote no Banco - Halter",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Curta)",
                                "nome": "Rosca Direta com Pegada Supinada em Pé - Barra",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Peitoral + Tríceps",
                        "exercicios": [
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Crucifixo Polia Baixa Sentado - Cross",
                                "series": 5,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Superior)",
                                "nome": "Supino Inclinado - Smith",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Francês em Pé - Halter",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Flexão de Braço",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Testa Sentado - Cross e Barra",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Inferior de Base",
                        "exercicios": [
                            {
                                "musculo": "Glúteos",
                                "porcao": "Glúteos (Máximo)",
                                "nome": "Elevação de Quadril - Gaiola para Elevação Pélvica",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento - Barra",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Levantamento Terra Sumo",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Afundo Búlgaro - Halter Duplo",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Ombros + Core",
                        "exercicios": [
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Desenvolvimento Pronado em Pé - Barra",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Geral",
                                "nome": "Abdominal de Costas para o Cross Ajoelhado",
                                "series": 5,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé - Halter",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Geral",
                                "nome": "Prancha Baixa",
                                "series": 5,
                                "reps": "90",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Elevação Frontal Sentado com Pegada Neutra Alternada - Halter",
                                "series": 5,
                                "reps": "8",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Oblíquo",
                                "porcao": "Geral",
                                "nome": "Prancha Lateral",
                                "series": 5,
                                "reps": "90",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Inferior Complementar",
                        "exercicios": [
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento Frontal - Hack",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Leg Press 45°",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Extensão de Joelho Sentado - Cadeira Extensora",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho Deitado - Mesa Flexora",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Panturrilhas",
                                "porcao": "Geral",
                                "nome": "Elevação de Panturrilha Unilateral - Hack",
                                "series": 4,
                                "reps": "25",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "reavaliacao": {
        "peso": "102.90",
        "gordura": "19.9",
        "magra": "82.4",
        "cintura": "92.50",
        "analise": "Avaliação anterior real (10/03/2026): peso 102,90kg, gordura 19,9% (20,5kg), músculo 35,6% (36,6kg), óssea 12,9% (13,3kg), residual 31,6% (32,5kg), MCM 80,1% (82,4kg). Perimetria: abdômen 99,50 | quadril 108,00cm; braço 32,30/33,20 (D/E) | braço cont. 37,00/37,00 | coxa 66,70/64,50 | panturrilha 43,80/42,90.",
        "decisao": "",
        "data": "10/03/2026"
    }
};
  students.push(eduardo);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
  navGo('alunos');
})();

// ─── ALUNA DE TESTE 4 — DADOS REAIS (Lila) ──────────────────────────────────────
(function(){
  if(!location.search.includes('demo')) return;
  _removerAlunoTeste(9999999993);
  const lila = {
    "id": 9999999993,
    "perfil": {
        "nome": "Lila Beatriz Nakamura",
        "nascimento": "1958-11-28",
        "sexo": "F",
        "atividade": "levemente_ativo",
        "profissao": "Aposentada",
        "tempo_sentado": "4a6h",
        "whatsapp": "(44) 99976-1299",
        "modalidade": "presencial",
        "liberacao": "sim",
        "condicoes": "Nenhuma",
        "medicamentos": "Nenhum",
        "medicamentos_detalhe": "",
        "lesoes": "Nenhuma",
        "obs_clinicas": "Sem histórico relevante. Aluna de teste — apenas o nome é fictício; nascimento/contato/medidas/treino são dados reais anonimizados só no nome. Treino de hipertrofia com foco em prevenção de sarcopenia, condizente com a idade.",
        "menstrual": "Pós-menopausa",
        "contraceptivo": "Não"
    },
    "anamnese": {
        "gestacao": "Não",
        "trimestre": "",
        "nivel": "Inte",
        "tempo": "1–2 anos",
        "consistencia": "moderada",
        "modalidades": "Musculação",
        "extras": "[]",
        "sono": "regular",
        "estresse": "baixo",
        "alcool": "raro",
        "suplementos": "Whey protein | Cálcio + Vitamina D",
        "pretreino": "Fruta",
        "objetivo_ef": "Hipertrofia",
        "objetivo_sec": "Ganho de peso",
        "frequencia": "2x",
        "duracao": "50",
        "horario": "tarde",
        "local": "academia",
        "gosta": "Glúteos e pernas",
        "preferencias": "",
        "peso": "44.80",
        "altura": "156",
        "data_avaliacao": "2026-06-22",
        "gordura": "34.7",
        "mgorda": "15.5",
        "magra": "29.3",
        "mmuscular": "15.0",
        "osso": "7.5",
        "residual": "6.8",
        "cintura": "67.00",
        "quadril": "84.00",
        "abdomen": "76.00",
        "braco_d": "21.50",
        "braco_e": "22.00",
        "braco_d_cont": "23.10",
        "braco_e_cont": "24.20",
        "coxa_d": "40.70",
        "coxa_e": "40.10",
        "pant_d": "30.40",
        "pant_e": "29.00",
        "fc": "",
        "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
        "fms_ohsa": "",
        "fms_ohsa_flag": "",
        "fms_slsq": "",
        "fms_slsq_flag": "",
        "fms_hurdle": "",
        "fms_hurdle_flag": "",
        "fms_lunge": "",
        "fms_lunge_flag": "",
        "fms_shoulder": "",
        "fms_shoulder_flag": "",
        "fms_aslr": "",
        "fms_aslr_flag": "",
        "fms_rotary": "",
        "fms_rotary_flag": "",
        "fms_push": "",
        "fms_pull": "",
        "prancha": "",
        "prancha_lat_d": "",
        "prancha_lat_e": "",
        "equilibrio_d": "",
        "equilibrio_e": "",
        "tug": "",
        "sentar_levantar": "",
        "obs_func": "",
        "formula_1rm": "brzycki",
        "obs_forca": "",
        "data_forca": "",
        "forca": [],
        "cooper": "",
        "step_fc": "",
        "flexao": "",
        "flexao_modificada": false,
        "abdominal_reps": "",
        "squat_reps": "",
        "grip_d": "",
        "grip_e": "",
        "obs_resist": "",
        "sentar_alcancar": "",
        "sitreach_proto": "YMCA/ACSM",
        "sitreach_warmup": false,
        "isquio_d": "",
        "isquio_e": "",
        "iliopsoas_d": "",
        "iliopsoas_e": "",
        "dorsiflexao_d": "",
        "dorsiflexao_e": "",
        "mob_toracica_d": "",
        "mob_toracica_e": "",
        "ombro_flex_d": "",
        "ombro_flex_e": "",
        "quadril_rot_d": "",
        "quadril_rot_e": "",
        "obs_flex": ""
    },
    "avaliacoesAntro": [
        {
            "id": 1738713600000,
            "data_avaliacao": "2026-02-05",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "43.50",
            "altura": "156",
            "mgorda": "14.5",
            "gordura": "33.3",
            "mmuscular": "14.8",
            "mmuscular_pct": "34.0",
            "osso": "7.5",
            "osso_pct": "17.2",
            "ombro": "91.50",
            "cintura": "64.50",
            "abdomen": "75.70",
            "quadril": "83.70",
            "braco_d": "20.50",
            "braco_e": "21.50",
            "braco_d_cont": "22.80",
            "braco_e_cont": "23.50",
            "coxa_d": "40.20",
            "coxa_e": "39.70",
            "pant_d": "29.90",
            "pant_e": "28.40",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "17.9",
            "imc_class": "Abaixo do peso",
            "magra": "29.0",
            "magra_pct": "66.7",
            "residual": "6.7",
            "residual_pct": "15.4",
            "rcq": "0.77",
            "rcq_class": "Baixo risco"
        },
        {
            "id": 1750550400000,
            "data_avaliacao": "2026-06-22",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "44.80",
            "altura": "156",
            "mgorda": "15.5",
            "gordura": "34.7",
            "mmuscular": "15.0",
            "mmuscular_pct": "33.5",
            "osso": "7.5",
            "osso_pct": "16.7",
            "ombro": "91.50",
            "cintura": "67.00",
            "abdomen": "76.00",
            "quadril": "84.00",
            "braco_d": "21.50",
            "braco_e": "22.00",
            "braco_d_cont": "23.10",
            "braco_e_cont": "24.20",
            "coxa_d": "40.70",
            "coxa_e": "40.10",
            "pant_d": "30.40",
            "pant_e": "29.00",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "18.4",
            "imc_class": "Abaixo do peso",
            "magra": "29.3",
            "magra_pct": "65.4",
            "residual": "6.8",
            "residual_pct": "15.2",
            "rcq": "0.80",
            "rcq_class": "Risco moderado"
        }
    ],
    "treinos": [
        {
            "id": 1738800000000,
            "status": "aprovado",
            "objetivo": "Hip",
            "nivel": "Inte",
            "frequencia": "2x",
            "modelo": "★ 05 - Fevereiro (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "05/02/2026",
            "dataAprovacao": "05/02/2026",
            "_fichaObj": {
                "objetivo": "Hip",
                "nivel": "Inte",
                "frequencia": "2x",
                "local": "academia",
                "seriesPorEx": 4,
                "dataGeracao": "05/02/2026",
                "treinos": [
                    {
                        "label": "Ter - Inferior + ABD",
                        "exercicios": [
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento Frontal - Halter Simples",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento + Afundo Alternado",
                                "series": 4,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Afundo Búlgaro - Halter Contralateral",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Glúteos (Médio)",
                                "nome": "Abdução de Quadril em Pé - Mini Band",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho em Pé - Mini Band",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Reto Abdominal (Inferior)",
                                "nome": "Abdominal Infra Pernas Flexionadas com Apoio",
                                "series": 3,
                                "reps": "20",
                                "intensidade": "",
                                "intervalo": "80s"
                            }
                        ]
                    },
                    {
                        "label": "Qua - Superior + ABD",
                        "exercicios": [
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé - Halter",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Puxada Alta com Pegada Fechada Neutra",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Curta)",
                                "nome": "Rosca Direta com Pegada Supinada em Pé - Barra",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Testa - Anilha",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Reto Abdominal (Superior)",
                                "nome": "Abdominal Supra Curto",
                                "series": 4,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Geral",
                                "nome": "Prancha Baixa",
                                "series": 4,
                                "reps": "60",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 1750636800000,
            "status": "aprovado",
            "objetivo": "Hip",
            "nivel": "Inte",
            "frequencia": "2x",
            "modelo": "★ 22 - Junho (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "22/06/2026",
            "dataAprovacao": "22/06/2026",
            "_fichaObj": {
                "objetivo": "Hip",
                "nivel": "Inte",
                "frequencia": "2x",
                "local": "academia",
                "seriesPorEx": 4,
                "dataGeracao": "22/06/2026",
                "treinos": [
                    {
                        "label": "Posterior",
                        "exercicios": [
                            {
                                "musculo": "Iliopsoas",
                                "porcao": "Geral",
                                "nome": "Mobilidade de Quadril Frente e Trás Semi Ajoelhado",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Auto-Liberação de Dorsais - Rolo",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Glúteos (Máximo)",
                                "nome": "Elevação de Quadril no Banco - Barra",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Baixa na Polia com Pegada Fechada Neutra - Cross",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Agachamento Sumo - Halter",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Puxada Alta com Pegada Fechada Neutra",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho em Pé - Mini Band",
                                "series": 4,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Anterior",
                        "exercicios": [
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Alongamento de Quadríceps com Pé no Banco Dinâmico",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Anjo em Decúbito Ventral com Passagem de Bolinha",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Agachamento Sumo - Halter",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Desenvolvimento Pronado Sentado - Barra",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Recuo Unilateral - Halter",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Supino Reto - Barra",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Extensão de Joelho Sentado Unilateral - Mini Band",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "reavaliacao": {
        "peso": "43.50",
        "gordura": "33.3",
        "magra": "29.0",
        "cintura": "64.50",
        "analise": "Avaliação anterior real (05/02/2026): peso 43,50kg, gordura 33,3% (14,5kg), músculo 34% (14,8kg), óssea 17,2% (7,5kg), residual 15,4% (6,7kg), MCM 66,7% (29,0kg). Perimetria: abdômen 75,70 | quadril 83,70cm; braço 20,50/21,50 (D/E) | braço cont. 22,80/23,50 | coxa 40,20/39,70 | panturrilha 29,90/28,40.",
        "decisao": "",
        "data": "05/02/2026"
    }
};
  students.push(lila);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
  navGo('alunos');
})();

// ─── ALUNO DE TESTE 5 — DADOS REAIS (Oséias) ────────────────────────────────────
(function(){
  if(!location.search.includes('demo')) return;
  _removerAlunoTeste(9999999992);
  const oseias = {
    "id": 9999999992,
    "perfil": {
        "nome": "Oséias Ricardo Nascimento",
        "nascimento": "1960-07-19",
        "sexo": "M",
        "atividade": "muito_ativo",
        "profissao": "Educador físico (aposentado)",
        "tempo_sentado": "menos_4h",
        "whatsapp": "(44) 99986-9272",
        "modalidade": "presencial",
        "liberacao": "sim",
        "condicoes": "Nenhuma",
        "medicamentos": "Nenhum",
        "medicamentos_detalhe": "",
        "lesoes": "Nenhuma",
        "obs_clinicas": "Sem histórico relevante. Aluno de teste — apenas o nome é fictício; nascimento/contato/medidas/treino são dados reais anonimizados só no nome. Treinador com décadas de experiência, mantém treino avançado de força na idade."
    },
    "anamnese": {
        "gestacao": "Não",
        "trimestre": "",
        "nivel": "Avan",
        "tempo": "5+ anos",
        "consistencia": "alta",
        "modalidades": "Musculação",
        "extras": "[]",
        "sono": "boa",
        "estresse": "baixo",
        "alcool": "raro",
        "suplementos": "Whey protein | Creatina | Cafeína",
        "pretreino": "Café + aveia",
        "objetivo_ef": "Força Máxima",
        "objetivo_sec": "Composição corporal",
        "frequencia": "4x",
        "duracao": "70",
        "horario": "manhã",
        "local": "academia",
        "gosta": "Peitoral e costas",
        "preferencias": "",
        "peso": "81.80",
        "altura": "178",
        "data_avaliacao": "2026-07-10",
        "gordura": "21.4",
        "mgorda": "17.5",
        "magra": "64.3",
        "mmuscular": "31.8",
        "osso": "11.9",
        "residual": "20.6",
        "cintura": "87.70",
        "quadril": "101.40",
        "abdomen": "91.00",
        "braco_d": "30.40",
        "braco_e": "32.00",
        "braco_d_cont": "35.00",
        "braco_e_cont": "35.20",
        "coxa_d": "57.00",
        "coxa_e": "55.90",
        "pant_d": "38.00",
        "pant_e": "38.60",
        "fc": "",
        "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
        "fms_ohsa": "",
        "fms_ohsa_flag": "",
        "fms_slsq": "",
        "fms_slsq_flag": "",
        "fms_hurdle": "",
        "fms_hurdle_flag": "",
        "fms_lunge": "",
        "fms_lunge_flag": "",
        "fms_shoulder": "",
        "fms_shoulder_flag": "",
        "fms_aslr": "",
        "fms_aslr_flag": "",
        "fms_rotary": "",
        "fms_rotary_flag": "",
        "fms_push": "",
        "fms_pull": "",
        "prancha": "",
        "prancha_lat_d": "",
        "prancha_lat_e": "",
        "equilibrio_d": "",
        "equilibrio_e": "",
        "tug": "",
        "sentar_levantar": "",
        "obs_func": "",
        "formula_1rm": "brzycki",
        "obs_forca": "",
        "data_forca": "",
        "forca": [],
        "cooper": "",
        "step_fc": "",
        "flexao": "",
        "flexao_modificada": false,
        "abdominal_reps": "",
        "squat_reps": "",
        "grip_d": "",
        "grip_e": "",
        "obs_resist": "",
        "sentar_alcancar": "",
        "sitreach_proto": "YMCA/ACSM",
        "sitreach_warmup": false,
        "isquio_d": "",
        "isquio_e": "",
        "iliopsoas_d": "",
        "iliopsoas_e": "",
        "dorsiflexao_d": "",
        "dorsiflexao_e": "",
        "mob_toracica_d": "",
        "mob_toracica_e": "",
        "ombro_flex_d": "",
        "ombro_flex_e": "",
        "quadril_rot_d": "",
        "quadril_rot_e": "",
        "obs_flex": ""
    },
    "avaliacoesAntro": [
        {
            "id": 1740096000000,
            "data_avaliacao": "2026-02-20",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "82.40",
            "altura": "178",
            "mgorda": "18.3",
            "gordura": "22.2",
            "mmuscular": "31.8",
            "mmuscular_pct": "38.6",
            "osso": "11.9",
            "osso_pct": "14.4",
            "ombro": "113.20",
            "cintura": "87.00",
            "abdomen": "92.60",
            "quadril": "101.00",
            "braco_d": "30.40",
            "braco_e": "31.20",
            "braco_d_cont": "34.70",
            "braco_e_cont": "35.70",
            "coxa_d": "56.10",
            "coxa_e": "54.80",
            "pant_d": "38.40",
            "pant_e": "39.30",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "26.0",
            "imc_class": "Sobrepeso",
            "magra": "64.1",
            "magra_pct": "77.8",
            "residual": "20.4",
            "residual_pct": "24.8",
            "rcq": "0.86",
            "rcq_class": "Baixo risco"
        },
        {
            "id": 1752105600000,
            "data_avaliacao": "2026-07-10",
            "responsavel": "Milton Gasparotto Junior",
            "peso": "81.80",
            "altura": "178",
            "mgorda": "17.5",
            "gordura": "21.4",
            "mmuscular": "31.8",
            "mmuscular_pct": "38.9",
            "osso": "11.9",
            "osso_pct": "14.5",
            "ombro": "111.60",
            "cintura": "87.70",
            "abdomen": "91.00",
            "quadril": "101.40",
            "braco_d": "30.40",
            "braco_e": "32.00",
            "braco_d_cont": "35.00",
            "braco_e_cont": "35.20",
            "coxa_d": "57.00",
            "coxa_e": "55.90",
            "pant_d": "38.00",
            "pant_e": "38.60",
            "obs_antro": "Dado real — avaliação de bioimpedância (relatório FitCpx). Apenas o nome é fictício; nascimento/contato/medidas/composição corporal são reais.",
            "imc": "25.8",
            "imc_class": "Sobrepeso",
            "magra": "64.3",
            "magra_pct": "78.6",
            "residual": "20.6",
            "residual_pct": "25.2",
            "rcq": "0.86",
            "rcq_class": "Baixo risco"
        }
    ],
    "treinos": [
        {
            "id": 1740182400000,
            "status": "aprovado",
            "objetivo": "Forca",
            "nivel": "Avan",
            "frequencia": "4x",
            "modelo": "★ 20 - Fevereiro (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "20/02/2026",
            "dataAprovacao": "20/02/2026",
            "_fichaObj": {
                "objetivo": "Forca",
                "nivel": "Avan",
                "frequencia": "4x",
                "local": "academia",
                "seriesPorEx": 5,
                "dataGeracao": "20/02/2026",
                "treinos": [
                    {
                        "label": "Seg - Peitoral + Ombros + Tríceps",
                        "exercicios": [
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Superior)",
                                "nome": "Supino Inclinado - Barra",
                                "series": 5,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Desenvolvimento Pronado Sentado - Barra",
                                "series": 5,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Crucifixo Reto em Pé - Cross",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé - Halter",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Testa - Anilha",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Qua - Costas + Bíceps + ABD",
                        "exercicios": [
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Barra Fixa com Pegada Aberta Pronada - Gráviton",
                                "series": 5,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Inclinada com Pegada Aberta Pronada - Barra",
                                "series": 5,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Baixa na Polia com Pegada Fechada Neutra",
                                "series": 5,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Curta)",
                                "nome": "Rosca Direta com Pegada Pronada em Pé - Barra",
                                "series": 5,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Reto Abdominal (Inferior)",
                                "nome": "Abdominal Infra Excêntrico com Apoio",
                                "series": 5,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Reto Abdominal (Superior)",
                                "nome": "Abdominal Supra Curto - Anilha",
                                "series": 5,
                                "reps": "20",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Sex - Inferior Completo",
                        "exercicios": [
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento - Barra",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Extensão de Joelho Nórdico",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Afundo Búlgaro - Haltere Lateral",
                                "series": 4,
                                "reps": "6",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Glúteos (Médio)",
                                "nome": "Abdução de Quadril Sentado - Mini Band",
                                "series": 4,
                                "reps": "15",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho em Pé - Mini Band",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Stiff - Barra",
                                "series": 4,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "120s"
                            }
                        ]
                    },
                    {
                        "label": "Extra - Core/Estabilização",
                        "exercicios": [
                            {
                                "musculo": "Transverso do Abdômen",
                                "porcao": "Geral",
                                "nome": "Dead Bug Parcial com Extensão Alternada de Pernas",
                                "series": 2,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Geral",
                                "nome": "Prancha Baixa",
                                "series": 2,
                                "reps": "120",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Oblíquo",
                                "porcao": "Geral",
                                "nome": "Prancha Lateral",
                                "series": 3,
                                "reps": "60",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Quadrado Lombar",
                                "porcao": "Geral",
                                "nome": "Hiperextensão de Tronco Alternando Braços e Pernas",
                                "series": 3,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 1752192000000,
            "status": "aprovado",
            "objetivo": "Comp",
            "nivel": "Avan",
            "frequencia": "3x",
            "modelo": "★ 10 - Julho (dado real — FitCpx)",
            "obs": "Importado de ficha real do FitCpx pra testar o sistema com dado fiel. Apenas o nome do aluno é fictício — nascimento/contato/exercícios/séries/reps/pausa fiéis ao original. Sem carga registrada na ficha de origem. Professor: Milton Gasparotto Junior.",
            "treino": "",
            "dataCriacao": "10/07/2026",
            "dataAprovacao": "10/07/2026",
            "_fichaObj": {
                "objetivo": "Comp",
                "nivel": "Avan",
                "frequencia": "3x",
                "local": "academia",
                "seriesPorEx": 3,
                "dataGeracao": "10/07/2026",
                "treinos": [
                    {
                        "label": "Seg - Peitoral + Ombros",
                        "exercicios": [
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Posterior)",
                                "nome": "Mobilidade de Ombro Frente e Trás - Bastão",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Geral",
                                "nome": "Alongamento de Peitoral Deitado",
                                "series": 1,
                                "reps": "60",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Superior)",
                                "nome": "Supino Inclinado - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Desenvolvimento Pronado em Pé - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Crucifixo Reto Sentado - Cross",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Medial)",
                                "nome": "Elevação Lateral em Pé - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Peitoral",
                                "porcao": "Peitoral (Médio)",
                                "nome": "Supino Reto - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Deltóide",
                                "porcao": "Deltóide (Anterior)",
                                "nome": "Elevação Frontal em Pé com Pegada Pronada - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    },
                    {
                        "label": "Qua - Costas + Bíceps + Tríceps",
                        "exercicios": [
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Auto-Liberação de Dorsais - Rolo",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Transverso do Abdômen",
                                "porcao": "Geral",
                                "nome": "Mobilidade de Tronco Dinâmico - Rolo e Barra",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Puxada Alta com Pegada Aberta Pronada",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Remada Baixa na Polia com Pegada Fechada Neutra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Latíssimo",
                                "porcao": "Geral",
                                "nome": "Crucifixo Invertido em Pé - Cross",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Longa)",
                                "nome": "Rosca Alternada com Giro no Banco Inclinado - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Bíceps",
                                "porcao": "Bíceps (Cabeça Curta)",
                                "nome": "Rosca Direta com Pegada Pronada em Pé - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Polia Alta com Pegada Pronada - Cross e Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Tríceps",
                                "porcao": "Geral",
                                "nome": "Tríceps Testa - Anilha",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    },
                    {
                        "label": "Sex - Quadríceps + P. Coxa + Glúteos",
                        "exercicios": [
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Mobilidade de Quadril com uma Perna Estendida Dinâmica",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Mobilidade de Quadril com Toque de Cotovelo no Chão Semi Ajoelhado",
                                "series": 1,
                                "reps": "10",
                                "intensidade": "",
                                "intervalo": "80s"
                            },
                            {
                                "musculo": "Quadríceps",
                                "porcao": "Geral",
                                "nome": "Agachamento - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Passada - Halter",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Flexão de Joelho em Pé - Mini Band",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Isquiossurais",
                                "porcao": "Geral",
                                "nome": "Stiff - Barra",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Geral",
                                "nome": "Afundo Búlgaro - Halter Duplo",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Glúteos",
                                "porcao": "Glúteos (Máximo)",
                                "nome": "Ponte - Mini Band",
                                "series": 3,
                                "reps": "12",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    },
                    {
                        "label": "Extra - Core/Estabilização",
                        "exercicios": [
                            {
                                "musculo": "Transverso do Abdômen",
                                "porcao": "Geral",
                                "nome": "Dead Bug Parcial com Extensão Alternada de Pernas",
                                "series": 2,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Reto Abdominal",
                                "porcao": "Geral",
                                "nome": "Prancha Baixa",
                                "series": 2,
                                "reps": "120",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Oblíquo",
                                "porcao": "Geral",
                                "nome": "Prancha Lateral",
                                "series": 3,
                                "reps": "60",
                                "intensidade": "",
                                "intervalo": "90s"
                            },
                            {
                                "musculo": "Quadrado Lombar",
                                "porcao": "Geral",
                                "nome": "Hiperextensão de Tronco Alternando Braços e Pernas",
                                "series": 3,
                                "reps": "30",
                                "intensidade": "",
                                "intervalo": "90s"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "reavaliacao": {
        "peso": "82.40",
        "gordura": "22.2",
        "magra": "64.1",
        "cintura": "87.00",
        "analise": "Avaliação anterior real (20/02/2026): peso 82,40kg, gordura 22,2% (18,3kg), músculo 38,6% (31,8kg), óssea 14,4% (11,9kg), residual 24,8% (20,4kg), MCM 77,8% (64,1kg). Perimetria: abdômen 92,60 | quadril 101,00cm; braço 30,40/31,20 (D/E) | braço cont. 34,70/35,70 | coxa 56,10/54,80 | panturrilha 38,40/39,30.",
        "decisao": "",
        "data": "20/02/2026"
    }
};
  students.push(oseias);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
  navGo('alunos');
})();
