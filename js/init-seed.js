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
    treinos: [],
    reavaliacao: null,
  };
  students.push(amanda);
  try{ localStorage.setItem('acm-students', JSON.stringify(students)); }catch(e){}
  renderStudentList();
  navGo('alunos');
})();

// ─── ALUNA DE TESTE 2 — DADOS REAIS (Thaís) ────────────────────────────────────
(function(){
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
