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

// ─── ALUNO DE TESTE ───────────────────────────────────────────────────────────
(function(){
  if(!location.search.includes('demo')) return; // seed só roda com ?demo na URL
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
      gestacao: 'Não',
      trimestre: '',
    },
    anamnese: {
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
    prescricao: {},
    reavaliacao: null,
  };
  students.push(amanda);
  renderStudentList();
  navGo('alunos');
})();

// ─── ALUNA DE TESTE 2 — DADOS REAIS (Thaís) ────────────────────────────────────
(function(){
  const thais = {
    id: 9999999998,
    perfil: {
      nome: 'Thaís Helena Leão Feitosa',
      nascimento: '1997-04-10',
      sexo: 'F',
      atividade: 'moderadamente_ativo',
      profissao: '',
      tempo_sentado: '',
      whatsapp: '',
      modalidade: 'presencial',
      liberacao: 'sim',
      condicoes: 'Nenhuma',
      medicamentos: 'Nenhum',
      medicamentos_detalhe: '',
      lesoes: 'Nenhuma',
      obs_clinicas: '',
      menstrual: 'Regular',
      contraceptivo: '',
      gestacao: 'Não',
      trimestre: '',
    },
    anamnese: {
      nivel: 'Inte',
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
      frequencia: '4x',
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
      cintura: '',
      quadril: '',
      abdomen: '',
      braco_d: '', braco_e: '', braco_d_cont: '', braco_e_cont: '',
      coxa_d: '', coxa_e: '', pant_d: '', pant_e: '',
      fc: '',
      obs_antro: 'Dado real — avaliação de bioimpedância (relatório externo, 06/06/2026). IMC 24,1.',

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
    prescricao: {},
    // Reavaliação — ponto anterior real (28/02/2026), pra comparação de ciclo
    reavaliacao: {
      peso: '61.60',
      gordura: '24.5',
      magra: '46.5',
      cintura: '',
      analise: 'Avaliação anterior real (28/02/2026): peso 61,60kg, gordura 24,5% (15,1kg), músculo 35,4% (21,8kg), óssea 14,3% (8,8kg), residual 25,8% (15,9kg). Terceiro ponto real disponível: 29/11/2025 — peso 60,40kg, gordura 23,7% (14,3kg), músculo 35,4% (21,4kg), óssea 14,6% (8,8kg), residual 26,2% (15,8kg).',
      decisao: '',
      data: '28/02/2026',
    },
  };
  students.push(thais);
  renderStudentList();
})();
