// ============================================================================
// DB_EXERCICIOS — Banco de Exercícios (reimportado da planilha oficial)
// ============================================================================
// Fonte: Database_FitCPX.xlsx, aba "Database Sistema Claude" (fonte de verdade
// do Milton). Reimportação de 2026-08-28, resincronizada no mesmo dia com a
// coluna "lateralidade" curada oficialmente na planilha (colunas AT/AU).
//
// SCHEMA (por exercício):
//   id — identificador único (cod_exercicio). Não confiar só no nome.
//   n  — nome do exercício
//   url — link do vídeo
//   g / gs — grupo muscular PRINCIPAL/SECUNDÁRIO: listas ORDENADAS de
//          {id, nome} (ordem = ativação relativa, 1º = mais ativado)
//   eq — equipamentos: lista de {id, nome}
//   art — nº de articulações: {id, nome} — Uni/Bi/Multiarticular
//   lateralidade — {id, nome} — Bilateral / Bilateral com Carga Unilateral /
//          Unilateral. Curado na planilha oficial (colunas AT/AU).
//   artic — articulações envolvidas: lista de {id, nome}
//   pad — padrão de movimento: {id, nome}, tabela oficial da aba "Corelação"
//   tp — tipo de exercício: lista de {id, nome} (até 2)
//   cad — cadeia cinética: {id, nome} — Aberta/Fechada
//   contracao — pico de contração: {id, nome}
//   posicao_muscular — {id, nome} — quase sempre null (0% preenchido na fonte)
//   r — tipo de resistência: {id, nome, sigla}
//   ind / ci — indicações/contraindicações: listas de {id, nome}
//   nv — nível: {id, nome} — 1=Iniciante, 2=Intermediário, 3=Avançado
//   tempo — segundos de execução de UMA repetição (numérico)
//
// CAMPOS REMOVIDOS: p (porção — desenho futuro, aguardando dado), co_g, ovh
// (vira checar pad.id===8), tr, uni (vira `lateralidade`), imp (cálculo
// futuro tipo+IMC, não confundir com solicitação articular).
//
// base (2026-08-28) — REMOVIDO DE VEZ, não vai mais ser usado nesse formato.
// No lugar, vai entrar futuramente uma dinâmica de "favoritar exercício" por
// personal — cada personal marca os exercícios que mais usa/gosta, e isso dá
// preferência na hora de montar a ficha DAQUELE personal. Essa informação fica
// vinculada à conta do personal (perfil dele no sistema), NUNCA misturada
// aqui no banco de exercícios original — ainda não implementado.
// ============================================================================

const DB_EXERCICIOS = [
  {
    "id": 206,
    "n": "Abdominal Bicicleta Alternada",
    "url": "https://youtu.be/Fq2BtgFDtls",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 315,
    "n": "Abdominal Bicicleta Alternada - Mini Band",
    "url": "https://youtu.be/3ia5JbK6YmQ",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 295,
    "n": "Abdominal de Costas para o Cross Ajoelhado",
    "url": "https://youtu.be/3faR1TOLL-w",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 296,
    "n": "Abdominal de Costas para o Cross em Pé",
    "url": "https://youtu.be/zBX8HE2G4yw",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 331,
    "n": "Abdominal de Joelhos Base Alta - Super Band",
    "url": "https://youtu.be/1fCdT9So2yg",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 344,
    "n": "Abdominal de Joelhos Base Alta - Tube Band",
    "url": "https://youtu.be/xSEdA3auxiI",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 214,
    "n": "Abdominal Infra Excêntrico com Apoio",
    "url": "https://youtu.be/F6aLD6MAZmM",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 76,
    "n": "Abdominal Infra Grupado Sentado",
    "url": "https://youtu.be/Z1kO3KZLLtw",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 2,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 96,
    "n": "Abdominal Infra Grupado Sentado - Cross",
    "url": "https://youtu.be/NnDlCOAamXE",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 117,
    "n": "Abdominal Infra Grupado Sentado - Super Band",
    "url": "https://youtu.be/mzyQcRSVm0E",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 118,
    "n": "Abdominal Infra Grupado Sentado - Tube Band",
    "url": "https://youtu.be/kMfH77BlO6E",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 165,
    "n": "Abdominal Infra na Barra Fixa com Perna Estendida",
    "url": "https://youtu.be/d6aQ-BkDLuU",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 166,
    "n": "Abdominal Infra na Barra Fixa com Perna Flexionada",
    "url": "https://youtu.be/GndF3Vxawoc",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 977,
    "n": "Abdominal Infra na Paralela com Perna Estendida",
    "url": "https://youtu.be/5awBZ4T5-q0",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 12,
        "nome": "Barras Paralelas"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 978,
    "n": "Abdominal Infra na Paralela com Perna Flexionada",
    "url": "https://youtu.be/lLsreZcrUuM",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 12,
        "nome": "Barras Paralelas"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 209,
    "n": "Abdominal Infra Pernas Estendidas com Apoio",
    "url": "https://youtu.be/wBE863aKuUs",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 210,
    "n": "Abdominal Infra Pernas Estendidas sem Apoio",
    "url": "https://youtu.be/dOdPDokkaL4",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 211,
    "n": "Abdominal Infra Pernas Flexionadas com Apoio",
    "url": "https://youtu.be/OUbi6zfOuQg",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 212,
    "n": "Abdominal Infra Pernas Flexionadas sem Apoio",
    "url": "https://youtu.be/juEolEgAYWA",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 213,
    "n": "Abdominal Infra Toque no Pé Alternado",
    "url": "https://youtu.be/MRxpCnL8Xdw",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 215,
    "n": "Abdominal Militar",
    "url": "https://youtu.be/QsN74mxszvI",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 216,
    "n": "Abdominal Militar V com Toque nos Pés",
    "url": "https://youtu.be/X_hjxOIQ_jw",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 217,
    "n": "Abdominal Militar V com Toque nos Pés Alternado",
    "url": "https://youtu.be/sGZv3Webfl0",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 218,
    "n": "Abdominal Militar V com Toque nos Pés Isométrico",
    "url": "https://youtu.be/7GU-DypkSQE",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 223,
    "n": "Abdominal Obliquo em V",
    "url": "https://youtu.be/oKIpaybEDz0",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 861,
    "n": "Abdominal Obliquo Russo com Giro e Pés no Chão",
    "url": "https://youtu.be/TUoK4LFB3fM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 862,
    "n": "Abdominal Obliquo Russo com Giro e Pés no Chão - Anilha",
    "url": "https://youtu.be/slXVi5JnkGM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 311,
    "n": "Abdominal Obliquo Russo com Giro e Pés no Chão - Halter",
    "url": "https://youtu.be/STtgd6rsWGM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 901,
    "n": "Abdominal Obliquo Russo com Giro e Pés no Chão - Kettlebell",
    "url": "https://youtu.be/paiEpvnVwQg",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 219,
    "n": "Abdominal Obliquo Russo com Giro e Pés Suspensos",
    "url": "https://youtu.be/XJj9YCvLsoE",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 863,
    "n": "Abdominal Obliquo Russo com Giro e Pés Suspensos - Anilha",
    "url": "https://youtu.be/2uwcK6MUyFY",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 900,
    "n": "Abdominal Obliquo Russo com Giro e Pés Suspensos - Halter",
    "url": "https://youtu.be/22WlTM7Uq8Q",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 902,
    "n": "Abdominal Obliquo Russo com Giro e Pés Suspensos - Kettlebell",
    "url": "https://youtu.be/-E8nSDL7HhQ",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 220,
    "n": "Abdominal Spider com Joelho no Cotovelo",
    "url": "https://youtu.be/oTWdcFGlG6U",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 224,
    "n": "Abdominal Supra Curto",
    "url": "https://youtu.be/qwZR0AzGPhI",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 287,
    "n": "Abdominal Supra Curto - Anilha",
    "url": "https://youtu.be/IEyHxR1lFKs",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 225,
    "n": "Abdominal Supra Curto com Braços Alongados",
    "url": "https://youtu.be/3wn79h1I-R0",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 226,
    "n": "Abdominal Supra Curto com Perna 90°",
    "url": "https://youtu.be/Zva3YfD9i9k",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 63,
    "n": "Abdominal Supra Curto no Banco Declinado",
    "url": "https://youtu.be/Nkk9HEb6U4Q",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 3,
        "nome": "Banco Declinado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 65,
    "n": "Abdominal Supra Curto no Banco Declinado - Anilha",
    "url": "https://youtu.be/ruexj3Te1qE",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 3,
        "nome": "Banco Declinado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 333,
    "n": "Abdominal Supra Curto Tocando os Pés - Super Band",
    "url": "https://youtu.be/p7DOJNOoF4w",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 346,
    "n": "Abdominal Supra Curto Tocando os Pés - Tube Band",
    "url": "https://youtu.be/GzT4PYcQ9Ro",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 9,
      "nome": "Flexão de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 227,
    "n": "Abdominal Tesoura",
    "url": "https://youtu.be/BEumOOY1-tI",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 2,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 78,
    "n": "Abdominal Tesoura no Banco",
    "url": "https://youtu.be/-nxunHoEDWo",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 1,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 876,
    "n": "Abdução de Quadril com Pés Fixos Alternado- Mini Band",
    "url": "https://youtu.be/bupg0qF1xxs",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 793,
    "n": "Abdução de Quadril com Pés Fixos Unilateral - Mini Band",
    "url": "https://youtu.be/r31_5WmyxDw",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 1,
    "n": "Abdução de Quadril em Deslocamento - Mini Band",
    "url": "https://youtu.be/sRVCkdyyIYs",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 353,
    "n": "Abdução de Quadril em Pé - Cross",
    "url": "https://youtu.be/KdSipSEQUb4",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 595,
    "n": "Abdução de Quadril em Pé - Mini Band",
    "url": "https://youtu.be/j-7i1rSEc0w",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 643,
    "n": "Abdução de Quadril em Pé - Super Band",
    "url": "https://youtu.be/p190CGFfvVw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 709,
    "n": "Abdução de Quadril em Pé - Tube Band",
    "url": "https://youtu.be/VX-ZIir2T6U",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 877,
    "n": "Abdução de Quadril em Pé com Pés Fixos - Mini Band",
    "url": "https://youtu.be/PA8nRGfAI-A",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 596,
    "n": "Abdução de Quadril em Ponte - Mini Band",
    "url": "https://youtu.be/BkxuWZD3y4w",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 597,
    "n": "Abdução de Quadril em Ponte Alternado - Mini Band",
    "url": "https://youtu.be/iBSgrAyKgYQ",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 598,
    "n": "Abdução de Quadril em Ponte Unilateral - Mini Band",
    "url": "https://youtu.be/X6tDU3w_Oms",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 792,
    "n": "Abdução de Quadril em Três Apoios - Mini Band",
    "url": "https://youtu.be/jrt2ysUssCk",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 599,
    "n": "Abdução de Quadril Sentado  - Mini Band",
    "url": "https://youtu.be/_a1n3_qq3zs",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 518,
    "n": "Abdução de Quadril Sentado - Cadeira Abdutora",
    "url": "https://youtu.be/YxJzJwvZ8aU",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 90,
        "nome": "Cadeira Abdutora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 517,
    "n": "Abdução de Quadril Sentado com Tronco Alto - Cadeira Abdutora",
    "url": "https://youtu.be/hqpopnuCovk",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 90,
        "nome": "Cadeira Abdutora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 354,
    "n": "Adução de Quadril em Pé - Cross",
    "url": "https://youtu.be/Gye1MXSVSOU",
    "g": [
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril Unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 644,
    "n": "Adução de Quadril em Pé - Super Band",
    "url": "https://youtu.be/Sg4fGLY4WsA",
    "g": [
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril Unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 926,
    "n": "Adução de Quadril em Pé - Tube Band",
    "url": "https://youtu.be/Pab8GnMShG0",
    "g": [
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril Unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 520,
    "n": "Adução de Quadril Sentado - Cadeira Adutora",
    "url": "https://youtu.be/syd6dyh-7V0",
    "g": [
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 91,
        "nome": "Cadeira Adutora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 635,
    "n": "Adução Escapular T - Super Band",
    "url": "https://youtu.be/6cEV1E6COII",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 636,
    "n": "Adução Escapular X - Super Band",
    "url": "https://youtu.be/Ldrkejka6v8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 12,
    "n": "Afundo",
    "url": "https://youtu.be/Ls6soKs1__M",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 133,
    "n": "Afundo - Barra",
    "url": "https://youtu.be/JXogyLnMQWw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 440,
    "n": "Afundo - Halter",
    "url": "https://youtu.be/s4LCF-BmTaw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 521,
    "n": "Afundo - Smith",
    "url": "https://youtu.be/FQPXZAik72w",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 645,
    "n": "Afundo - Super Band",
    "url": "https://youtu.be/OmgSOLcSYu8",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 711,
    "n": "Afundo - Tube Band",
    "url": "https://youtu.be/rhbHJ41AgOc",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 79,
    "n": "Afundo Búlgaro",
    "url": "https://youtu.be/CLZ6FvS6Sr0",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 88,
    "n": "Afundo Búlgaro - Barra",
    "url": "https://youtu.be/wqN2t7jdh5M",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 100,
    "n": "Afundo Búlgaro - Halter Contralateral",
    "url": "https://youtu.be/9gtEy06NEh0",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 101,
    "n": "Afundo Búlgaro - Halter Duplo",
    "url": "https://youtu.be/Fgmbqga7nRY",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 102,
    "n": "Afundo Búlgaro - Haltere Lateral",
    "url": "https://youtu.be/k1bD6KGqnMs",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 905,
    "n": "Afundo Búlgaro - Kettlebell Contralateral",
    "url": "https://youtu.be/qxc5JwSPifU",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 903,
    "n": "Afundo Búlgaro - Kettlebell Duplo",
    "url": "https://youtu.be/v6FCb7J5LII",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 904,
    "n": "Afundo Búlgaro - Kettlebell Lateral",
    "url": "https://youtu.be/0uCv1ZAHL8g",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 794,
    "n": "Afundo com Super Band no Joelho",
    "url": "https://youtu.be/bxfv5JCIyGA",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 10,
    "n": "Afundo Lateral",
    "url": "https://youtu.be/9GtdZ4kfqR4",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 132,
    "n": "Afundo Lateral - Barra",
    "url": "https://youtu.be/aCx5YymjwrI",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 439,
    "n": "Afundo Lateral - Halter",
    "url": "https://youtu.be/pHkHo4YEtaQ",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 907,
    "n": "Afundo Lateral - Kettlebell",
    "url": "https://youtu.be/ezhzUUhC9P4",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 11,
    "n": "Afundo Lateral Alternado",
    "url": "https://youtu.be/WDzIBj84Qno",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 131,
    "n": "Afundo Lateral Alternado - Barra",
    "url": "https://youtu.be/RJZGhO6fSQs",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 436,
    "n": "Afundo Lateral Alternado - Halter",
    "url": "https://youtu.be/JhZeMUFepPA",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 906,
    "n": "Afundo Lateral Alternado - Kettlebell",
    "url": "https://youtu.be/3x-UcXA3-K8",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 17,
    "n": "Agachamento",
    "url": "https://youtu.be/mxEeS_fvDm8",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 172,
    "n": "Agachamento - Barra",
    "url": "https://youtu.be/-UuqKh4Do_w",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 525,
    "n": "Agachamento - Hack",
    "url": "https://youtu.be/YwtVew5Vb4k",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 61,
        "nome": "Hack de Agachamento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 447,
    "n": "Agachamento - Halter Duplo",
    "url": "https://youtu.be/dPQ3j-p8Qw8",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 526,
    "n": "Agachamento - Smith",
    "url": "https://youtu.be/M1l73T7l0oE",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 14,
    "n": "Agachamento + Afundo Alternado",
    "url": "https://youtu.be/G6P9O6oTudM",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 4,
      "nome": "Combinado"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 9,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 15,
    "n": "Agachamento Acima da Cabeça",
    "url": "https://youtu.be/fGba1vBD1eI",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 600,
    "n": "Agachamento com Mini Band no Joelho",
    "url": "https://youtu.be/QmymtbOtxWc",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 5,
    "n": "Agachamento com Salto",
    "url": "https://youtu.be/CkqwwugPv2I",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 7,
        "nome": "Potência"
      },
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 173,
    "n": "Agachamento Frontal - Barra",
    "url": "https://youtu.be/Ma0-bsGvUUk",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 987,
    "n": "Agachamento Frontal - Hack",
    "url": "https://youtu.be/VCU_Wc5mUNI",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 61,
        "nome": "Hack de Agachamento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 448,
    "n": "Agachamento Frontal - Halter Duplo",
    "url": "https://youtu.be/Xo0_jsieEck",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 449,
    "n": "Agachamento Frontal - Halter Simples",
    "url": "https://youtu.be/ZHBrqyieWEs",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 524,
    "n": "Agachamento Frontal - Smith",
    "url": "https://youtu.be/ZyUqXMpy0_g",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 650,
    "n": "Agachamento Frontal - Super Band",
    "url": "https://youtu.be/BKwf0Zrc4y8",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 716,
    "n": "Agachamento Frontal - Tube Band",
    "url": "https://youtu.be/-h-qfi63NRE",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 442,
    "n": "Agachamento Frontal + Afundo Alternado - Halter",
    "url": "https://youtu.be/b1yUDPCmEeM",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 4,
      "nome": "Combinado"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 9,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 16,
    "n": "Agachamento Isométrico",
    "url": "https://youtu.be/n8jQs-TvK50",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 796,
    "n": "Agachamento Isométrico com Flexão Alternada de Braços",
    "url": "https://youtu.be/JoqTn5yuxHQ",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 9,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 18,
    "n": "Agachamento Sumo",
    "url": "https://youtu.be/thdGVQBJvy4",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 450,
    "n": "Agachamento Sumo - Halter",
    "url": "https://youtu.be/XSJPY5UMLts",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 513,
    "n": "Agachamento Sumo - Kettlebell",
    "url": "https://youtu.be/BT3lxa_xkXE",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      },
      {
        "id": 47,
        "nome": "Step"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 164,
    "n": "Alongamento de Dorsais Unilateral - Barra Fixa",
    "url": "https://youtu.be/M-USZ-Oo54A",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 798,
    "n": "Alongamento de Glúteo Bilateral Deitado",
    "url": "https://youtu.be/SYRmjmxXQ64",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 198,
    "n": "Alongamento de Glúteo Deitado com Perna Cruzada",
    "url": "https://youtu.be/p-GHjOdohPw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 199,
    "n": "Alongamento de Glúteo Passivo",
    "url": "https://youtu.be/GFxM7uUfDYg",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 73,
    "n": "Alongamento de Glúteo Sentado com Perna Cruzada",
    "url": "https://youtu.be/tXAGtbLEQ3Q",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 629,
    "n": "Alongamento de Panturrilha Bilateral - Step",
    "url": "https://youtu.be/E6YoYNjvh0A",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 630,
    "n": "Alongamento de Panturrilha Unilateral - Step",
    "url": "https://youtu.be/rt_zA7A2tKE",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 204,
    "n": "Alongamento de Peitoral Deitado",
    "url": "https://youtu.be/meDdTEDnmiw",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 74,
    "n": "Alongamento de Peitoral Passivo",
    "url": "https://youtu.be/0AVIDnmtKZg",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 8,
    "n": "Alongamento de Posterior de Coxa em Pé Alternado",
    "url": "https://youtu.be/lR-M7YfEjwE",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 860,
    "n": "Alongamento de Posterior de Coxa Passivo",
    "url": "https://youtu.be/zxfLtA0YLb4",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 201,
    "n": "Alongamento de Posterior de Coxa Semi Ajoelhado",
    "url": "https://youtu.be/8DvZVR83KIE",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 203,
    "n": "Alongamento de Posterior de Coxa Sentado",
    "url": "https://youtu.be/Jitlx18j7UU",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 291,
    "n": "Alongamento de Posterior de Coxa Sentado com Bastão nos Pés",
    "url": "https://youtu.be/VhI0_NlrWTs",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      },
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 202,
    "n": "Alongamento de Posterior de Coxa Sentado Unilateral",
    "url": "https://youtu.be/bJPgM67UtJI",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 205,
    "n": "Alongamento de Quadríceps Ajoelhado com Tronco Inclinado Para Trás",
    "url": "https://youtu.be/-XC74fUikgs",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 75,
    "n": "Alongamento de Quadríceps com Pé no Banco",
    "url": "https://youtu.be/3CP8pV7FHsM",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 866,
    "n": "Alongamento de Quadríceps com Pé no Banco Dinâmico",
    "url": "https://youtu.be/0dSoT7lnKV0",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 9,
    "n": "Alongamento de Quadríceps em Pé",
    "url": "https://youtu.be/fxtiI8Q0cVQ",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 856,
    "n": "Anjo em Decúbito Dorsal",
    "url": "https://youtu.be/lhFFOkTLVMA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 857,
    "n": "Anjo em Decúbito Dorsal - Bastão",
    "url": "https://youtu.be/YTHCMeB0ihM",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 266,
    "n": "Anjo em Decúbito Ventral",
    "url": "https://youtu.be/s7mFw4f1THo",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 290,
    "n": "Anjo em Decúbito Ventral - Bastão",
    "url": "https://youtu.be/jduj9I_gJdA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 293,
    "n": "Anjo em Decúbito Ventral com Passagem de Bolinha",
    "url": "https://youtu.be/M3idkY24VQA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 14,
        "nome": "Bola de Liberação"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 26,
    "n": "Anjo em Pé - Bastão",
    "url": "https://youtu.be/aSFkbl6y_t8",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 25,
    "n": "Anjo na Parede",
    "url": "https://youtu.be/KVgfJDqZgPo",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 7,
        "nome": "Dores nos Cotovelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 67,
    "n": "Anjo Sentado - Bastão",
    "url": "https://youtu.be/f6Z0W_WajWU",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 350,
    "n": "Anti-Rotação de Tronco Dinâmico - Cross",
    "url": "https://youtu.be/jUjVAcQDbnA",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 637,
    "n": "Anti-Rotação de Tronco Dinâmico - Super Band",
    "url": "https://youtu.be/4EN3UdXosPo",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 707,
    "n": "Anti-Rotação de Tronco Dinâmico - Tube Band",
    "url": "https://youtu.be/l3FWlLt6Dg8",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 351,
    "n": "Anti-Rotação de Tronco Estático - Cross",
    "url": "https://youtu.be/3JkhWgD448s",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 638,
    "n": "Anti-Rotação de Tronco Estático - Super Band",
    "url": "https://youtu.be/eeSXdgqIOWU",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 708,
    "n": "Anti-Rotação de Tronco Estático - Tube Band",
    "url": "https://youtu.be/BooycMnfVag",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 3,
      "nome": "Anti-Rotação"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 800,
    "n": "Auto-Liberação de Arco Plantar - Bolinha",
    "url": "https://youtu.be/Ve2YjMhekA8",
    "g": [
      {
        "id": 34,
        "nome": "Flexores do Pé"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 14,
        "nome": "Bola de Liberação"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 1,
        "nome": "Arco Plantar"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 628,
    "n": "Auto-Liberação de Arco Plantar - Rolinho",
    "url": "https://youtu.be/IRybPIJ91Ls",
    "g": [
      {
        "id": 34,
        "nome": "Flexores do Pé"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 88,
        "nome": "Mini Foam Roller"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 1,
        "nome": "Arco Plantar"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 307,
    "n": "Auto-Liberação de Dorsais - Rolo",
    "url": "https://youtu.be/-NusmSsPUD8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 181,
    "n": "Auto-Liberação de Dorsais na Parede - Rolo",
    "url": "https://youtu.be/5WZkh9SkJmw",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 14,
        "nome": "Bola de Liberação"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 305,
    "n": "Auto-Liberação de Glúteo - Rolo",
    "url": "https://youtu.be/WPUGM2Kk1HM",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 308,
    "n": "Auto-Liberação de Panturrilha - Rolo",
    "url": "https://youtu.be/z9tDIuFkIz0",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 306,
    "n": "Auto-Liberação de Posterior de Coxa - Rolo",
    "url": "https://youtu.be/QbDm5F8meZY",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 309,
    "n": "Auto-Liberação de Quadríceps - Rolo",
    "url": "https://youtu.be/SecMBcHxRnY",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 627,
    "n": "Auto-Liberação de Trapézio - Pistola",
    "url": "https://youtu.be/eNn2vmA9NYo",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 57,
        "nome": "Pistola de Liberação"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 292,
    "n": "Auto-Liberação de Trapézio Deitado - Bolinha",
    "url": "https://youtu.be/r5IVDRjVi5k",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 14,
        "nome": "Bola de Liberação"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 8,
        "nome": "Liberação Miofascial"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 23,
    "n": "Avanço Alternado",
    "url": "https://youtu.be/BxrEQaYVXe4",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 136,
    "n": "Avanço Alternado - Barra",
    "url": "https://youtu.be/k3aqL9wTUR4",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 453,
    "n": "Avanço Alternado - Halter",
    "url": "https://youtu.be/B4eoWUQy520",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 9,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 24,
    "n": "Avanço Unilateral",
    "url": "https://youtu.be/GlE8D5GgXxY",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 137,
    "n": "Avanço Unilateral - Barra",
    "url": "https://youtu.be/m9f4wMvw614",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 454,
    "n": "Avanço Unilateral - Halter",
    "url": "https://youtu.be/59S5c9dG4Og",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 168,
    "n": "Barra Fixa com Pegada Aberta Pronada",
    "url": "https://youtu.be/6ILiOIAOcK4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 529,
    "n": "Barra Fixa com Pegada Aberta Pronada - Gráviton",
    "url": "https://youtu.be/4wysiBDfkb4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 62,
        "nome": "Gráviton"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 169,
    "n": "Barra Fixa com Pegada Fechada Neutra",
    "url": "https://youtu.be/RBqwy_qeH0Y",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 530,
    "n": "Barra Fixa com Pegada Fechada Neutra - Gráviton",
    "url": "https://youtu.be/h8tfV881Kxo",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 62,
        "nome": "Gráviton"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 170,
    "n": "Barra Fixa com Pegada Fechada Supinada",
    "url": "https://youtu.be/yb370u-iFBw",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 801,
    "n": "Barra Fixa com Pegada Invertida Isométrica",
    "url": "https://youtu.be/wMRYfNMyFWA",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 10,
        "nome": "Barra Fixa"
      },
      {
        "id": 42,
        "nome": "Peso Corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      },
      {
        "id": 4,
        "nome": "Flexibilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 7,
        "nome": "Dores nos Cotovelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 355,
    "n": "Bíceps em Cruz - Cross",
    "url": "https://youtu.be/kNa6NT3vFCk",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 949,
    "n": "Bíceps em Cruz Sentado - Cross",
    "url": "https://youtu.be/87T9nn_9aqs",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 356,
    "n": "Bíceps em Cruz Unilateral - Cross",
    "url": "https://youtu.be/-7YLKRvSyyQ",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 991,
    "n": "Bicicleta Indor",
    "url": "https://youtu.be/ex-8eC9-wmk",
    "g": [],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 97,
        "nome": "Bicicleta Ergométrica"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 992,
    "n": "Bicicleta Indor - Em Pé",
    "url": "https://youtu.be/48W-Ljudyt8",
    "g": [],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 97,
        "nome": "Bicicleta Ergométrica"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 993,
    "n": "Bicicleta Indor - Intervalado",
    "url": "https://youtu.be/mnK_dhxx9KE",
    "g": [],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 97,
        "nome": "Bicicleta Ergométrica"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 138,
    "n": "Bom Dia - Barra",
    "url": "https://youtu.be/Gznw1cTr9mQ",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 872,
    "n": "Burpee",
    "url": "https://youtu.be/BlHJLGeUPVI",
    "g": [],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso Corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 4,
      "nome": "Combinado"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 70,
    "n": "Burpee com Apoio",
    "url": "https://youtu.be/A1t7zcEIHI8",
    "g": [],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 875,
    "n": "Burpee Parcial",
    "url": "https://youtu.be/exAnhMmwOxA",
    "g": [],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso Corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 4,
      "nome": "Combinado"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 196,
    "n": "Burpee sem Salto",
    "url": "https://youtu.be/GV510qN7_ws",
    "g": [],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 71,
    "n": "Burpee sem Salto com Apoio",
    "url": "https://youtu.be/svTcawY3Dc0",
    "g": [],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 2,
    "n": "Canoinha Isométrica Estendida",
    "url": "https://youtu.be/Pm8QozK8ZwM",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 3,
    "n": "Canoinha Isométrica Grupada",
    "url": "https://youtu.be/pCXToJyHhRA",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 601,
    "n": "Coice em Quatro Apoios - Mini Band",
    "url": "https://youtu.be/pYZH87j1Kpg",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 652,
    "n": "Coice em Quatro Apoios - Super Band",
    "url": "https://youtu.be/eujKvE2ws9c",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 718,
    "n": "Coice em Quatro Apoios - Tube Band",
    "url": "https://youtu.be/X9HOszUuaCA",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 191,
    "n": "Coice em Quatro Apoios com Caneleira",
    "url": "https://youtu.be/4eOAADTSAkM",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 19,
        "nome": "Caneleira"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 532,
    "n": "Coice na Máquina",
    "url": "https://youtu.be/eefsrZqstR0",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 89,
        "nome": "Máquina para Coice"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 357,
    "n": "Coice no Cross",
    "url": "https://youtu.be/FdVPj8MKrmc",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 6,
    "n": "Corrida no Lugar com Joelho Alto",
    "url": "https://youtu.be/gKukfe_CUWo",
    "g": [],
    "gs": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 1,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 7,
    "n": "Corrida no Lugar com Joelho Baixo",
    "url": "https://youtu.be/_qOMPIvy-Qk",
    "g": [],
    "gs": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 1,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 455,
    "n": "Crucifixo Declinado - Halter",
    "url": "https://youtu.be/4yvvHaADqIs",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 3,
        "nome": "Banco Declinado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 456,
    "n": "Crucifixo Inclinado - Halter",
    "url": "https://youtu.be/i56RFwebBO0",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 533,
    "n": "Crucifixo Invertido - Voador",
    "url": "https://youtu.be/QoW25wAo_gU",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 63,
        "nome": "Voador"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 362,
    "n": "Crucifixo Invertido em Pé - Cross",
    "url": "https://youtu.be/V8iHf_aeNEM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 363,
    "n": "Crucifixo Invertido em Pé Unilateral - Cross",
    "url": "https://youtu.be/I75DclYl66s",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 364,
    "n": "Crucifixo Invertido Inclinado - Cross",
    "url": "https://youtu.be/9qnQIk6lR1M",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 457,
    "n": "Crucifixo Invertido Inclinado - Halter",
    "url": "https://youtu.be/UDFazx_-tJM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 4,
    "n": "Crucifixo Invertido Inclinado - Super Band",
    "url": "https://youtu.be/U5xAUdhjYcM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 897,
    "n": "Crucifixo Invertido Inclinado - Tube Band",
    "url": "https://youtu.be/A5pwQpfgcGk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 365,
    "n": "Crucifixo Invertido Inclinado Unilateral - Cross",
    "url": "https://youtu.be/sJUixNNToh8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 359,
    "n": "Crucifixo Polia Alta em Pé - Cross",
    "url": "https://youtu.be/mtJWcnnAEMo",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 358,
    "n": "Crucifixo Polia Alta Sentado - Cross",
    "url": "https://youtu.be/3CL34c8L7o8",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 360,
    "n": "Crucifixo Polia Baixa em Pé - Cross",
    "url": "https://youtu.be/JGtI-IxdO4k",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 361,
    "n": "Crucifixo Polia Baixa Sentado - Cross",
    "url": "https://youtu.be/JvepufWTVTg",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 458,
    "n": "Crucifixo Reto - Halter",
    "url": "https://youtu.be/uF9qvdtOYDY",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 534,
    "n": "Crucifixo Reto - Voador",
    "url": "https://youtu.be/xa0oRbCQfwg",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 63,
        "nome": "Voador"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 366,
    "n": "Crucifixo Reto em Pé - Cross",
    "url": "https://youtu.be/HVy4eg1aVh0",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 367,
    "n": "Crucifixo Reto Sentado - Cross",
    "url": "https://youtu.be/gkPQP-z1DAU",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 803,
    "n": "Cruza Perna Slide em 1 Direção",
    "url": "https://youtu.be/Ioy01PgVess",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 21,
        "nome": "Cone"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 804,
    "n": "Cruza Perna Slide em 3 Direções",
    "url": "https://youtu.be/aurwqL80gtM",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 1,
        "nome": "Adutores"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 21,
        "nome": "Cone"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 16,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 207,
    "n": "Dead Bug com Extensão Alternada de Braços e Pernas",
    "url": "https://youtu.be/AFqrmEMGn4c",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 208,
    "n": "Dead Bug Parcial com Extensão Alternada de Pernas",
    "url": "https://youtu.be/uB9t4tV1WZs",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 24,
        "nome": "Reto abdominal"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 979,
    "n": "Desenvolvimento - Smith",
    "url": "https://youtu.be/9exA5x5cOEA",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 806,
    "n": "Desenvolvimento Arnold Sentado - Halter",
    "url": "https://youtu.be/qAKmMIk3aOM",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 459,
    "n": "Desenvolvimento Neutro em Pé - Halter",
    "url": "https://youtu.be/5bg1xzYKBm0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 653,
    "n": "Desenvolvimento Neutro em Pé - Super Band",
    "url": "https://youtu.be/ROCFkUPBoMA",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 719,
    "n": "Desenvolvimento Neutro em Pé - Tube Band",
    "url": "https://youtu.be/l1C2-yieWE8",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 535,
    "n": "Desenvolvimento Neutro Sentado - Banco de Desenvolvimento",
    "url": "https://youtu.be/hnsDjr2XALU",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 67,
        "nome": "Banco de Desenvolvimento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 40,
    "n": "Desenvolvimento Neutro Sentado - Halter",
    "url": "https://youtu.be/mp25U7FLKDE",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 141,
    "n": "Desenvolvimento Pronado em Pé - Barra",
    "url": "https://youtu.be/bCpVAyvhKZw",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 460,
    "n": "Desenvolvimento Pronado em Pé - Halter",
    "url": "https://youtu.be/SMRNF1sdWuo",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 654,
    "n": "Desenvolvimento Pronado em Pé - Super Band",
    "url": "https://youtu.be/L7NiqcKwg1A",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 720,
    "n": "Desenvolvimento Pronado em Pé - Tube Band",
    "url": "https://youtu.be/7Zvop89VGh4",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 536,
    "n": "Desenvolvimento Pronado Sentado - Banco de Desenvolvimento",
    "url": "https://youtu.be/hJTFshdVDKc",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 67,
        "nome": "Banco de Desenvolvimento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 461,
    "n": "Desenvolvimento Pronado Sentado - Barra",
    "url": "https://youtu.be/czdJSzJGYK4",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 41,
    "n": "Desenvolvimento Pronado Sentado - Halter",
    "url": "https://youtu.be/-br9YW3tiNg",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 546,
    "n": "Elevação de Panturrilha - Hack",
    "url": "https://youtu.be/kZw_3T-K_dc",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 61,
        "nome": "Hack de Agachamento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 633,
    "n": "Elevação de Panturrilha - Halter",
    "url": "https://youtu.be/3jtD9u44CdA",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 631,
    "n": "Elevação de Panturrilha - Step",
    "url": "https://youtu.be/GvYc0wES9_4",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 980,
    "n": "Elevação de Panturrilha - Step e Anilha",
    "url": "https://youtu.be/6lcFMf3otRg",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 547,
    "n": "Elevação de Panturrilha Sentado - Panturrilha Sentado",
    "url": "https://youtu.be/1gfxAoqfWSg",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 75,
        "nome": "Panturrilha Sentada"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 548,
    "n": "Elevação de Panturrilha Unilateral - Hack",
    "url": "https://youtu.be/_6Vu3T-ueXI",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 61,
        "nome": "Hack de Agachamento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 634,
    "n": "Elevação de Panturrilha Unilateral - Halter",
    "url": "https://youtu.be/4DH4NCCfiP8",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 632,
    "n": "Elevação de Panturrilha Unilateral - Step",
    "url": "https://youtu.be/J2dLwIq5RQU",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 981,
    "n": "Elevação de Panturrilha Unilateral - Step e Anilha",
    "url": "https://youtu.be/MlLvEDOtIMc",
    "g": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 989,
    "n": "Elevação de Quadril - Gaiola para Elevação Pélvica",
    "url": "https://youtu.be/dOJh13KACYY",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 98,
        "nome": "Gaiola de Elevação Pélvica"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 537,
    "n": "Elevação de Quadril - Máquina para Elevação Pélvica",
    "url": "https://youtu.be/BlD1z1kSphE",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 68,
        "nome": "Máquina para Elevação Pélvica"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 83,
    "n": "Elevação de Quadril no Banco",
    "url": "https://youtu.be/0r2g-Drmja0",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 93,
    "n": "Elevação de Quadril no Banco - Barra",
    "url": "https://youtu.be/HKA0c_RH9zQ",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 865,
    "n": "Elevação de Quadril no Banco - Barra e Mini Band",
    "url": "https://youtu.be/gxQrh7lTMTo",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      },
      {
        "id": 5,
        "nome": "Banco Reto"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 116,
    "n": "Elevação de Quadril no Banco - Mini Band",
    "url": "https://youtu.be/kvplHyTkXRk",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 869,
    "n": "Elevação Frontal em Pé com Pegada Neutra - Anilha",
    "url": "https://youtu.be/ZCJHLAkbdDE",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 401,
    "n": "Elevação Frontal em Pé com Pegada Neutra - Cross",
    "url": "https://youtu.be/nU7C06Ar7EM",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 463,
    "n": "Elevação Frontal em Pé com Pegada Neutra - Halter",
    "url": "https://youtu.be/aHkBUXwu9F4",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 655,
    "n": "Elevação Frontal em Pé com Pegada Neutra - Super Band",
    "url": "https://youtu.be/lVq0cTOynJ0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 721,
    "n": "Elevação Frontal em Pé com Pegada Neutra - Tube Band",
    "url": "https://youtu.be/3_gu5HhxxdY",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 462,
    "n": "Elevação Frontal em Pé com Pegada Neutra Alternada - Halter",
    "url": "https://youtu.be/eDn6rmp3TX4",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 142,
    "n": "Elevação Frontal em Pé com Pegada Pronada - Barra",
    "url": "https://youtu.be/xvWs5lf-WQk",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 379,
    "n": "Elevação Frontal em Pé com Pegada Pronada - Cross",
    "url": "https://youtu.be/XG882V7LKy8",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 465,
    "n": "Elevação Frontal em Pé com Pegada Pronada - Halter",
    "url": "https://youtu.be/9VSpNoICGrA",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 656,
    "n": "Elevação Frontal em Pé com Pegada Pronada - Super Band",
    "url": "https://youtu.be/MiCerdxSf5k",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 722,
    "n": "Elevação Frontal em Pé com Pegada Pronada - Tube Band",
    "url": "https://youtu.be/b8fTDZTAWp0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 464,
    "n": "Elevação Frontal em Pé com Pegada Pronada Alternada - Halter",
    "url": "https://youtu.be/w_P0t9k926Q",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 43,
    "n": "Elevação Frontal Sentado com Pegada Neutra - Halter",
    "url": "https://youtu.be/vozXIGCwZ9s",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 42,
    "n": "Elevação Frontal Sentado com Pegada Neutra Alternada - Halter",
    "url": "https://youtu.be/0cO0UE1Nvug",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 45,
    "n": "Elevação Frontal Sentado com Pegada Pronada - Halter",
    "url": "https://youtu.be/u5DyzXXiZVQ",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 44,
    "n": "Elevação Frontal Sentado com Pegada Pronada Alternada - Halter",
    "url": "https://youtu.be/6UpwwNE8ZxM",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 466,
    "n": "Elevação Lateral em Pé - Halter",
    "url": "https://youtu.be/U2OhP6SosS0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 602,
    "n": "Elevação Lateral em Pé - Mini Band",
    "url": "https://youtu.be/ckxQDUTXUzo",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 657,
    "n": "Elevação Lateral em Pé - Super Band",
    "url": "https://youtu.be/SBzQ2yJUR8Q",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 723,
    "n": "Elevação Lateral em Pé - Tube Band",
    "url": "https://youtu.be/50fIUsnZAmo",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 871,
    "n": "Elevação Lateral em Pé Alternada - Mini Band",
    "url": "https://youtu.be/sYobQUYnIdU",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 369,
    "n": "Elevação Lateral em Pé Unilateral - Cross",
    "url": "https://youtu.be/ss4IlxQEWdI",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 870,
    "n": "Elevação Lateral em Pé Unilateral - Mini Band",
    "url": "https://youtu.be/VeFYdr50TOg",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 658,
    "n": "Elevação Lateral em Pé Unilateral - Super Band",
    "url": "https://youtu.be/Tx9F3Nf6ChQ",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 724,
    "n": "Elevação Lateral em Pé Unilateral - Tube Band",
    "url": "https://youtu.be/RPpn1hpHzDI",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 467,
    "n": "Elevação Lateral em Pé Unilateral- Halter",
    "url": "https://youtu.be/uYYJvqqgucs",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 46,
    "n": "Elevação Lateral Sentado - Halter",
    "url": "https://youtu.be/k2zNOrFmfq4",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 808,
    "n": "Encolhimento de Ombros - Anilha",
    "url": "https://youtu.be/PbTQ8oSl5fE",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 143,
    "n": "Encolhimento de Ombros - Barra",
    "url": "https://youtu.be/KEFE2oaJER0",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 380,
    "n": "Encolhimento de Ombros - Cross",
    "url": "https://youtu.be/RMhg8Dy5CBE",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 468,
    "n": "Encolhimento de Ombros - Halter",
    "url": "https://youtu.be/IY45I2-w6kk",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 888,
    "n": "Encolhimento de Ombros - Kettlebell",
    "url": "https://youtu.be/cphlhJJgtek",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 994,
    "n": "Escada Indor",
    "url": "https://youtu.be/dH6InXx33w4",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 99,
        "nome": "Escada Indor"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 197,
    "n": "Escalador",
    "url": "https://youtu.be/GIhIN25xzcU",
    "g": [],
    "gs": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 2,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 72,
    "n": "Escalador com Apoio no Banco",
    "url": "https://youtu.be/Y57Kl6Gg-fM",
    "g": [],
    "gs": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 1,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 854,
    "n": "Esteira - Caminhada",
    "url": "https://youtu.be/2hiUYiQaaOU",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 93,
        "nome": "Esteira"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 855,
    "n": "Esteira - Corrida",
    "url": "https://youtu.be/o60zVyCaWQ8",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 93,
        "nome": "Esteira"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 990,
    "n": "Esteira - Intervalado",
    "url": "https://youtu.be/3ppzowF7ydI",
    "g": [],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 93,
        "nome": "Esteira"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 611,
    "n": "Extensão de Joelho Deitado - Mini Band",
    "url": "https://youtu.be/vUFIKMqu5A4",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 626,
    "n": "Extensão de Joelho Nórdico",
    "url": "https://youtu.be/9vFQRWUbzCE",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 625,
    "n": "Extensão de Joelho Nórdico Isométrico",
    "url": "https://youtu.be/cCvfZbGeI8s",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 538,
    "n": "Extensão de Joelho Sentado - Cadeira Extensora",
    "url": "https://youtu.be/xXl7QSdA-nc",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 69,
        "nome": "Cadeira Extensora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 539,
    "n": "Extensão de Joelho Sentado Unilateral - Cadeira Extensora",
    "url": "https://youtu.be/JtLYcBXo0Wo",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 69,
        "nome": "Cadeira Extensora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 194,
    "n": "Extensão de Joelho Sentado Unilateral - Caneleira",
    "url": "https://youtu.be/5a__hjj-ChY",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 19,
        "nome": "Caneleira"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 610,
    "n": "Extensão de Joelho Sentado Unilateral - Mini Band",
    "url": "https://youtu.be/L37c0lzG7Ok",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 161,
    "n": "Extensão de Punho Apoiada no Banco - Barra",
    "url": "https://youtu.be/oVN9RL-9Dnw",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 160,
    "n": "Extensão de Punho Apoiado na Coxa - Barra",
    "url": "https://youtu.be/khNCgWVgGdU",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 383,
    "n": "Extensão de Punho Apoiado na Coxa - Cross",
    "url": "https://youtu.be/e0XyjMiCoL0",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 508,
    "n": "Extensão de Punho Apoiado na Coxa Unilateral - Halter",
    "url": "https://youtu.be/pZamSlK33k0",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 509,
    "n": "Extensão de Punho Apoiado no Banco Unilateral - Halter",
    "url": "https://youtu.be/DKbE_CtQe4c",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 613,
    "n": "Extensão de Quadril Alternada Deitado",
    "url": "https://youtu.be/x_1GmtBeJD8",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 192,
    "n": "Extensão de Quadril em Pé - Caneleira",
    "url": "https://youtu.be/SkMT-S7wvfo",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 19,
        "nome": "Caneleira"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 371,
    "n": "Extensão de Quadril em Pé - Cross",
    "url": "https://youtu.be/Ci4w6qJPLUo",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 603,
    "n": "Extensão de Quadril em Pé - Mini Band",
    "url": "https://youtu.be/hxOZa0qfrmQ",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 294,
    "n": "Extensão de Quadril em Quatro Apoios - Caneleira",
    "url": "https://youtu.be/kMVCKcBUpoA",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 19,
        "nome": "Caneleira"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 316,
    "n": "Extensão de Quadril em Quatro Apoios - Mini Band",
    "url": "https://youtu.be/PD9H6I8hQlg",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 810,
    "n": "Extensão e Abdução de Quadril Deitado Sobre um Obstáculo",
    "url": "https://youtu.be/5JT4_aSvzfU",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 372,
    "n": "Face Pull - Cross",
    "url": "https://youtu.be/f1tnoBNZ19A",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 7,
        "nome": "Dores nos Cotovelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 660,
    "n": "Face Pull - Super Band",
    "url": "https://youtu.be/WgceVVkrjJ0",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 7,
        "nome": "Dores nos Cotovelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 726,
    "n": "Face Pull - Tube Band",
    "url": "https://youtu.be/l6qsYfLOFA8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 7,
        "nome": "Dores nos Cotovelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 229,
    "n": "Flexão de Braço",
    "url": "https://youtu.be/KdzdjMNB7l4",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 86,
    "n": "Flexão de Braço - Banco",
    "url": "https://youtu.be/v7a1hof9eq8",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 126,
    "n": "Flexão de Braço - Barra Australiana",
    "url": "https://youtu.be/VeU_N_mw5P0",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 334,
    "n": "Flexão de Braço - Super Band",
    "url": "https://youtu.be/432CAwN4Esk",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 230,
    "n": "Flexão de Braço com Apoio no Joelho",
    "url": "https://youtu.be/RR24RcmA32M",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 95,
    "n": "Flexão de Braço com Apoio no Joelho - Banco",
    "url": "https://youtu.be/qfuF0IEZMOA",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 231,
    "n": "Flexão de Braço em V",
    "url": "https://youtu.be/p9wYezdirtY",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 84,
    "n": "Flexão de Braço em V com Pé no Banco",
    "url": "https://youtu.be/2mU1YUbYyAc",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 8,
      "nome": "Empurrar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 228,
    "n": "Flexão de Braço Fechado",
    "url": "https://youtu.be/tguhXWWmL_w",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 85,
    "n": "Flexão de Braço Fechado - Banco",
    "url": "https://youtu.be/C-Wt8Tpedm8",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 125,
    "n": "Flexão de Braço Fechado - Barra Australiana",
    "url": "https://youtu.be/rAzApUL93rM",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 858,
    "n": "Flexão de Braço Fechado com Apoio no Joelho",
    "url": "https://youtu.be/PxPz399HdOU",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 94,
    "n": "Flexão de Braço Fechado com Apoio no Joelho - Banco",
    "url": "https://youtu.be/kb2KkdHTrgc",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 342,
    "n": "Flexão de Joelho Deitado - Fita de Suspensão",
    "url": "https://youtu.be/-VoKLNrZT8E",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 540,
    "n": "Flexão de Joelho Deitado - Mesa Flexora",
    "url": "https://youtu.be/A9JsyG9zlno",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 70,
        "nome": "Mesa Flexora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 335,
    "n": "Flexão de Joelho Deitado - Super Band",
    "url": "https://youtu.be/VX-g9zfjWQ8",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 348,
    "n": "Flexão de Joelho Deitado - Tube Band",
    "url": "https://youtu.be/OVhAd3qaGUA",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 541,
    "n": "Flexão de Joelho Deitado Unilateral - Mesa Flexora",
    "url": "https://youtu.be/6F8SJLtxs0w",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 70,
        "nome": "Mesa Flexora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 318,
    "n": "Flexão de Joelho Deitado Unilateral - Mini Band",
    "url": "https://youtu.be/Ge1UQpyKKMs",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 336,
    "n": "Flexão de Joelho Deitado Unilateral - Super Band",
    "url": "https://youtu.be/4HQTvpL-tE8",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 349,
    "n": "Flexão de Joelho Deitado Unilateral - Tube Band",
    "url": "https://youtu.be/TmxY4pkS390",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 811,
    "n": "Flexão de Joelho em Pé - Caneleira",
    "url": "https://youtu.be/qciinow8ztI",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 19,
        "nome": "Caneleira"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 542,
    "n": "Flexão de Joelho em Pé - Flexor em Pé",
    "url": "https://youtu.be/N2UH3NU6370",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 72,
        "nome": "Flexor em Pé"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 604,
    "n": "Flexão de Joelho em Pé - Mini Band",
    "url": "https://youtu.be/zmU5U3DD1u8",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 543,
    "n": "Flexão de Joelho Sentado - Cadeira Flexora",
    "url": "https://youtu.be/fsKEFf7-b90",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 73,
        "nome": "Cadeira Flexora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 544,
    "n": "Flexão de Joelho Sentado Unilateral - Cadeira Flexora",
    "url": "https://youtu.be/mmQZZgW6aTY",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 73,
        "nome": "Cadeira Flexora"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 232,
    "n": "Flexão de Ombro em I",
    "url": "https://youtu.be/f_2OcTdQU4o",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 312,
    "n": "Flexão de Ombro em I - Halter",
    "url": "https://youtu.be/oEKno5tFJtU",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 661,
    "n": "Flexão de Ombro em I em Pé - Super Band",
    "url": "https://youtu.be/7oCEU125JxA",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 918,
    "n": "Flexão de Ombro em I em Pé - Tube Band",
    "url": "https://youtu.be/WRhFZIMqslE",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 56,
    "n": "Flexão de Ombro em I Sentado - Super Band",
    "url": "https://youtu.be/db8En5CmxzI",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 921,
    "n": "Flexão de Ombro em I Sentado - Tube Band",
    "url": "https://youtu.be/-uUWhtTjwd4",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 982,
    "n": "Flexão de Ombro em I Unilateral - Banco",
    "url": "https://youtu.be/MPoNooN98II",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 233,
    "n": "Flexão de Ombro em T",
    "url": "https://youtu.be/iB8yMBFTY9g",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 313,
    "n": "Flexão de Ombro em T - Halter",
    "url": "https://youtu.be/q74hR5aFtq8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 662,
    "n": "Flexão de Ombro em T em Pé - Super Band",
    "url": "https://youtu.be/5YLXLkSz2lA",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 919,
    "n": "Flexão de Ombro em T em Pé - Tube Band",
    "url": "https://youtu.be/v1_6wa_LHJc",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 57,
    "n": "Flexão de Ombro em T Sentado - Super Band",
    "url": "https://youtu.be/jgQjUpHM2N8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 922,
    "n": "Flexão de Ombro em T Sentado - Tube Band",
    "url": "https://youtu.be/e58b5J0POFo",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 234,
    "n": "Flexão de Ombro em W",
    "url": "https://youtu.be/U7KIr15j8k4",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 235,
    "n": "Flexão de Ombro em Y",
    "url": "https://youtu.be/ac1O7cgUtr8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 314,
    "n": "Flexão de Ombro em Y - Halter",
    "url": "https://youtu.be/I-JWETWaGs8",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 663,
    "n": "Flexão de Ombro em Y em Pé - Super Band",
    "url": "https://youtu.be/btUzoRGgLZc",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 920,
    "n": "Flexão de Ombro em Y em Pé - Tube Band",
    "url": "https://youtu.be/17zebRncBUw",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 58,
    "n": "Flexão de Ombro em Y Sentado - Super Band",
    "url": "https://youtu.be/Vv3HOutNiwQ",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 923,
    "n": "Flexão de Ombro em Y Sentado - Tube Band",
    "url": "https://youtu.be/Gf0pUTy9ONQ",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 809,
    "n": "Flexão de Ombro em Y Unilateral - Banco",
    "url": "https://youtu.be/d3em6sgbC3k",
    "g": [
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 27,
    "n": "Flexão de Ombro Passivo em I",
    "url": "https://youtu.be/dTr_u18Tl18",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 28,
    "n": "Flexão de Ombro Passivo em Y",
    "url": "https://youtu.be/5xIb6YC5ZKg",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 4,
        "nome": "Flexibilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 162,
    "n": "Flexão de Punho Apoiado na Coxa - Barra",
    "url": "https://youtu.be/0tg7qpZ-rWo",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 398,
    "n": "Flexão de Punho Apoiado na Coxa - Cross",
    "url": "https://youtu.be/hXtpNPhMNF0",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 510,
    "n": "Flexão de Punho Apoiado na Coxa Unilateral - Halter",
    "url": "https://youtu.be/Lf5dgsMUJgE",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 163,
    "n": "Flexão de Punho Apoiado no Banco - Barra",
    "url": "https://youtu.be/UioVgYmcHIw",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 511,
    "n": "Flexão de Punho Apoiado no Banco Unilateral - Halter",
    "url": "https://youtu.be/E4XG98ySzO0",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 145,
    "n": "Flexão de Punho em Pé - Barra",
    "url": "https://youtu.be/Azi1n3bEQLY",
    "g": [
      {
        "id": 2,
        "nome": "Antebraços"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 605,
    "n": "Flexão de Quadril com Apoio na Parede - Mini Band",
    "url": "https://youtu.be/0TjpfNWTPVQ",
    "g": [
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 614,
    "n": "Flexão de Quadril com Apoio na Parede Alternado",
    "url": "https://youtu.be/hIsEGdJwIZQ",
    "g": [
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 615,
    "n": "Flexão de Quadril com Perna Estendida em Pé",
    "url": "https://youtu.be/PndZ4feVONI",
    "g": [
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 616,
    "n": "Flexão de Quadril com Perna Flexionada em Pé",
    "url": "https://youtu.be/kBYV1RkK-lg",
    "g": [
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 925,
    "n": "Flexão de Quadril com Perna Flexionada em Pé - Mini Band",
    "url": "https://youtu.be/p1oNIkd_Ngo",
    "g": [
      {
        "id": 13,
        "nome": "Iliopsoas"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 889,
    "n": "Flexão Lateral de Tronco - Anilha",
    "url": "https://youtu.be/tix9Luiw0Vc",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 469,
    "n": "Flexão Lateral de Tronco - Halter",
    "url": "https://youtu.be/_oFz4kBOu48",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 890,
    "n": "Flexão Lateral de Tronco - Kettlebell",
    "url": "https://youtu.be/UFRRbselW8Q",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 297,
    "n": "Flexão Lateral de Tronco de Joelhos - Cross",
    "url": "https://youtu.be/-Y-8ksSN9JM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 236,
    "n": "Flexão Lateral de Tronco Deitado com Toque no Pé",
    "url": "https://youtu.be/B-xlW3b651A",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 237,
    "n": "Flexão Lateral de Tronco Deitado Lateral",
    "url": "https://youtu.be/_vo_JlkXe_0",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 377,
    "n": "Flexão Lateral de Tronco em Pé - Cross",
    "url": "https://youtu.be/fJ3TOX8Lqiw",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 238,
    "n": "Flexão Lateral de Tronco em Prancha Lateral",
    "url": "https://youtu.be/i1dW--Osy-c",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 239,
    "n": "Flexão Lateral de Tronco em Prancha Lateral com Apoio no Joelho",
    "url": "https://youtu.be/7lWnB20rbNA",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 10,
      "nome": "Flexão Lateral de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 240,
    "n": "Hiperextensão de Tronco",
    "url": "https://youtu.be/N14gRUZhkmk",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 64,
    "n": "Hiperextensão de Tronco - Banco Romano",
    "url": "https://youtu.be/vLuEHfi0dos",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 56,
        "nome": "Banco Romano"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 121,
    "n": "Hiperextensão de Tronco - Banco Romano e Anilha",
    "url": "https://youtu.be/SkjxtZvUvsc",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 56,
        "nome": "Banco Romano"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 122,
    "n": "Hiperextensão de Tronco - Barra Australiana",
    "url": "https://youtu.be/d_Vhpy3oCZU",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 130,
    "n": "Hiperextensão de Tronco - Barra Australiana e Anilha",
    "url": "https://youtu.be/seVyIxF5x6E",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 241,
    "n": "Hiperextensão de Tronco Alternando Braços e Pernas",
    "url": "https://youtu.be/41nz-lfiGQw",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 242,
    "n": "Hiperextensão de Tronco em I",
    "url": "https://youtu.be/OSiT0my1pxE",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 119,
    "n": "Hiperextensão de Tronco em I - Banco Romano",
    "url": "https://youtu.be/A9Zs5xFpOCA",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 56,
        "nome": "Banco Romano"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 123,
    "n": "Hiperextensão de Tronco em I - Barra Australiana",
    "url": "https://youtu.be/Wf9Ync_DmIM",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 243,
    "n": "Hiperextensão de Tronco Isométrico",
    "url": "https://youtu.be/9v-F3aI-DZU",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 120,
    "n": "Hiperextensão de Tronco Isométrico - Banco Romano",
    "url": "https://youtu.be/xaeyCxnAj98",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 56,
        "nome": "Banco Romano"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 124,
    "n": "Hiperextensão de Tronco Isométrico - Barra Australiana",
    "url": "https://youtu.be/JzXAjNj3n50",
    "g": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 816,
    "n": "Joelho à Frente com Mão no Pé",
    "url": "https://youtu.be/Fj25tQyxc4U",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 551,
    "n": "Leg Press 45º",
    "url": "https://youtu.be/j-JodeUR-yQ",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 64,
        "nome": "Leg Press 45º"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 550,
    "n": "Leg Press 45º com Pés Altos",
    "url": "https://youtu.be/EMcI9iFD0qE",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 64,
        "nome": "Leg Press 45º"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 13,
      "nome": "Joelho bilateral simétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 552,
    "n": "Leg Press 45º Unilateral",
    "url": "https://youtu.be/Gb0OOPsVIRo",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 64,
        "nome": "Leg Press 45º"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 177,
    "n": "Levantamento Terra",
    "url": "https://youtu.be/M6fsak17LMs",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 178,
    "n": "Levantamento Terra Sumo",
    "url": "https://youtu.be/8R13HJYj7xo",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 265,
    "n": "Mobilidade de Ombro com Rotação Interna Deitado na Mão",
    "url": "https://youtu.be/qMDo6QuQmkQ",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 180,
    "n": "Mobilidade de Ombro Frente e Trás - Bastão",
    "url": "https://youtu.be/iQCbyVzRXJg",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 682,
    "n": "Mobilidade de Ombro Frente e Trás - Super Band",
    "url": "https://youtu.be/pBA-xTwcW68",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 273,
    "n": "Mobilidade de Quadril 90-90",
    "url": "https://youtu.be/eB48_zqx0-8",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 274,
    "n": "Mobilidade de Quadril 90-90 Alternado",
    "url": "https://youtu.be/jublVDtfYxU",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 10,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 864,
    "n": "Mobilidade de Quadril 90-90 com Cotovelo no Chão",
    "url": "https://youtu.be/3AiRXjFPFtg",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 821,
    "n": "Mobilidade de Quadril 90-90 com Torção de Tronco",
    "url": "https://youtu.be/dw0npWtQB8Y",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 267,
    "n": "Mobilidade de Quadril Borboleta Dinâmica",
    "url": "https://youtu.be/rAK0YpnJcnA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 820,
    "n": "Mobilidade de Quadril com Apoio no Banco e Rotação de Tronco",
    "url": "https://youtu.be/SAPKQ4kprPE",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 271,
    "n": "Mobilidade de Quadril com Rotação Externa e Obstáculo",
    "url": "https://youtu.be/AUOwChQSfPA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 272,
    "n": "Mobilidade de Quadril com Rotação Externa Sentado no Banco",
    "url": "https://youtu.be/PrPgNzNAFC4",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 275,
    "n": "Mobilidade de Quadril com Toque de Cotovelo no Chão Semi Ajoelhado",
    "url": "https://youtu.be/ZzLLjZ0LDOA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 269,
    "n": "Mobilidade de Quadril com uma Perna Estendida Dinâmica",
    "url": "https://youtu.be/9V6wt18Pqj0",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 270,
    "n": "Mobilidade de Quadril com uma Perna Estendida Isométrica",
    "url": "https://youtu.be/tHBKo8Pfh6A",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 276,
    "n": "Mobilidade de Quadril Diagonal Semi Ajoelhado",
    "url": "https://youtu.be/FyE6UBgq1Ek",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 268,
    "n": "Mobilidade de Quadril em Borboleta Isométrica",
    "url": "https://youtu.be/4wdmALJxkxI",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 277,
    "n": "Mobilidade de Quadril Frente e Trás Semi Ajoelhado",
    "url": "https://youtu.be/KfFW8j8y75c",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 278,
    "n": "Mobilidade de Quadril Frente Semi Ajoelhado",
    "url": "https://youtu.be/7SLqAajMEXo",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 279,
    "n": "Mobilidade de Quadril no Chão com Tronco Alto",
    "url": "https://youtu.be/2o40VcXWrbk",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 939,
    "n": "Mobilidade de Quadril no Chão com Tronco Baixo",
    "url": "https://youtu.be/nQVemtWWWQI",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso Corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 280,
    "n": "Mobilidade de Quadril Trás Semi Ajoelhado",
    "url": "https://youtu.be/T3xGnyuYjls",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 822,
    "n": "Mobilidade de Tornozelo com Joelho em Duas Direções - Bastão",
    "url": "https://youtu.be/aJI3MBqHB7s",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 10,
        "nome": "Tornozelo"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 983,
    "n": "Mobilidade de Tronco com Rotação Deitado",
    "url": "https://youtu.be/5mqOmDjfBEs",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 823,
    "n": "Mobilidade de Tronco com Rotação em Três Apoios",
    "url": "https://youtu.be/JCq9XswW5EI",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 310,
    "n": "Mobilidade de Tronco com Rotação em Três Apoios - Rolo",
    "url": "https://youtu.be/W93qNDhFG6I",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 281,
    "n": "Mobilidade de Tronco com Rotação em Três Apoios Estático",
    "url": "https://youtu.be/VNTUjBI8IfM",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 282,
    "n": "Mobilidade de Tronco com Rotação na Parede Semi Ajoelhado",
    "url": "https://youtu.be/DYI1c1OYkfw",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 92,
    "n": "Mobilidade de Tronco Deitado no Banco - Barra",
    "url": "https://youtu.be/VhO8sr_mcO0",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 824,
    "n": "Mobilidade de Tronco Dinâmico - Rolo e Barra",
    "url": "https://youtu.be/UZzs8fz7aNw",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 29,
        "nome": "Foam Roller"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 283,
    "n": "Mobilidade de Tronco Gato Camelo",
    "url": "https://youtu.be/_KOiAcuv2ew",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 815,
    "n": "Mobilidade de Tronco Gato Camelo - Super Band",
    "url": "https://youtu.be/iM30Yf4lo2c",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 617,
    "n": "Passada",
    "url": "https://youtu.be/nKBVfv2RgSg",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 146,
    "n": "Passada - Barra",
    "url": "https://youtu.be/kBdbknqWClc",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 470,
    "n": "Passada - Halter",
    "url": "https://youtu.be/KnLDxH9gLq8",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 826,
    "n": "Passagem Frente e Trás Unilateral ao Lado da Parede",
    "url": "https://youtu.be/rQvPL3kDUyY",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 323,
    "n": "Perdigueiro Duplo",
    "url": "https://youtu.be/-KpjhRb5kmA",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 324,
    "n": "Perdigueiro Duplo com Toque no Joelho",
    "url": "https://youtu.be/F_kb64KUvvA",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 325,
    "n": "Perdigueiro Duplo Isométrico",
    "url": "https://youtu.be/_zT43rRJwQI",
    "g": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 22,
    "n": "Pistol",
    "url": "https://youtu.be/vcua7a4Et_8",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 21,
    "n": "Pistol Adaptado",
    "url": "https://youtu.be/VvOtsceoZsQ",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 19,
    "n": "Pistol Adaptado Alternado",
    "url": "https://youtu.be/tXmR-2vB9r0",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 20,
    "n": "Pistol Alternado",
    "url": "https://youtu.be/VChzsClruus",
    "g": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 612,
    "n": "Polichinelo",
    "url": "https://youtu.be/88GZuV0BTPk",
    "g": [],
    "gs": [
      {
        "id": 17,
        "nome": "Panturrilhas"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 6,
      "nome": "Corpo Inteiro"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 322,
    "n": "Ponte - Mini Band",
    "url": "https://youtu.be/SYA35cdMNfc",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 319,
    "n": "Ponte + Abdução de Quadril - Mini Band",
    "url": "https://youtu.be/9BGE-Fpi--4",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 4,
      "nome": "Combinado"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 288,
    "n": "Ponte com Pés no Banco",
    "url": "https://youtu.be/Hb0UkzfO8Dc",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 320,
    "n": "Ponte com Pés no Banco  - Mini Band",
    "url": "https://youtu.be/wAR7YJoG-Gw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 244,
    "n": "Ponte Isométrica",
    "url": "https://youtu.be/3H6Hj8_odYE",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 246,
    "n": "Ponte Isométrica com Alternância de Pés",
    "url": "https://youtu.be/LdSCIYkwl2k",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      },
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 245,
    "n": "Ponte Isométrica com Alternância de Pés Frente e Trás",
    "url": "https://youtu.be/8QnVuCjBsYI",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 289,
    "n": "Ponte Isométrica com Pés no Banco",
    "url": "https://youtu.be/HjhtXa_NPWA",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 247,
    "n": "Ponte sem Peso",
    "url": "https://youtu.be/1wMlwkqO9DI",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 248,
    "n": "Ponte Unilateral",
    "url": "https://youtu.be/05ocYKimEZw",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 249,
    "n": "Prancha Alta",
    "url": "https://youtu.be/14R4Pa8iZQU",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 250,
    "n": "Prancha Alta com Caminhada das Mãos",
    "url": "https://youtu.be/lWMNHXWvmQk",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 251,
    "n": "Prancha Alta com Elevação Alternada de Pernas",
    "url": "https://youtu.be/C7ZNnrFwomU",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 252,
    "n": "Prancha Alta com Elevação Alternada de Pernas e Braços",
    "url": "https://youtu.be/MxjDMHnGw2Y",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 3,
        "nome": "Escápula"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 828,
    "n": "Prancha Alta com Toque em Três Cones",
    "url": "https://youtu.be/kyISshJJ08U",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 253,
    "n": "Prancha Alta com Toque no Ombro",
    "url": "https://youtu.be/uSH5Q54Xi0Q",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 254,
    "n": "Prancha Baixa",
    "url": "https://youtu.be/-a5xcA4O72U",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 255,
    "n": "Prancha Baixa com Apoio no Banco",
    "url": "https://youtu.be/XbL58PKtyBg",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 256,
    "n": "Prancha Baixa com Apoio no Joelho",
    "url": "https://youtu.be/7LBIcNw0SC8",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 258,
    "n": "Prancha Baixa com Elevação Alternada das Pernas",
    "url": "https://youtu.be/Po1YIYm95Cs",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 829,
    "n": "Prancha Baixa Dinâmica com Torre de Anilhas",
    "url": "https://youtu.be/7VE0UP3-brg",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [
      {
        "id": 16,
        "nome": "Oblíquo"
      }
    ],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 807,
    "n": "Prancha com Deslocamento Lateral - Step",
    "url": "https://youtu.be/JwbYA2odBYI",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 47,
        "nome": "Step"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 9,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 260,
    "n": "Prancha Lateral",
    "url": "https://youtu.be/9yvmpyLcZRM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 1,
      "nome": "Anti-Flexão lateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 321,
    "n": "Prancha Lateral + Abdução de Quadril com Apoio no Joelho",
    "url": "https://youtu.be/Kv52OTP96hM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 1,
      "nome": "Anti-Flexão lateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 259,
    "n": "Prancha Lateral com Apoio no Joelho",
    "url": "https://youtu.be/U0sJFtwaGUc",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 1,
      "nome": "Anti-Flexão lateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 261,
    "n": "Prancha Polichinelo",
    "url": "https://youtu.be/wggScB5Mw5Y",
    "g": [
      {
        "id": 24,
        "nome": "Reto abdominal"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 2,
      "nome": "Anti-Hiperextensão"
    },
    "tp": [
      {
        "id": 1,
        "nome": "Aeróbio"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 3,
      "nome": "Isométrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 410,
    "n": "Pull Down com Pegada Neutra em Pé - Cross",
    "url": "https://youtu.be/RNpA2K1wC7c",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 665,
    "n": "Pull Down com Pegada Neutra em Pé - Super Band",
    "url": "https://youtu.be/v5fp2XX1F2c",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 299,
    "n": "Pull Down com Pegada Neutra no Banco - Cross",
    "url": "https://youtu.be/RSM5LvI2emk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 956,
    "n": "Pull Down com Pegada Neutra no Banco Invertido - Cross",
    "url": "https://youtu.be/1R85BDNl4wc",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 397,
    "n": "Pull Down com Pegada Pronada em Pé - Cross",
    "url": "https://youtu.be/yUFl4M3Y_A4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 915,
    "n": "Pull Down com Pegada Pronada em Pé - Tube Band",
    "url": "https://youtu.be/DQbjh4m3j-o",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 298,
    "n": "Pull Down com Pegada Pronada no Banco - Cross",
    "url": "https://youtu.be/6iPIdwLsIK4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 955,
    "n": "Pull Down com Pegada Pronada no Banco Invertido - Cross",
    "url": "https://youtu.be/tnMlJ__R3fk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 337,
    "n": "Pull Down Deitado - Super Band",
    "url": "https://youtu.be/MGXmBU3irXE",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      },
      {
        "id": 20,
        "nome": "Colchonete"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 867,
    "n": "Pull Over - Anilha",
    "url": "https://youtu.be/qsPXH96uhyM",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 1,
        "nome": "Anilha"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 90,
    "n": "Pull Over - Barra",
    "url": "https://youtu.be/pDB9dt3VnKY",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 112,
    "n": "Pull Over - Halter",
    "url": "https://youtu.be/8SBz3EcIifo",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      },
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 833,
    "n": "Punho no Chão com Rotação de Antebraço e Mãos Fixas",
    "url": "https://youtu.be/KduMZtes2F8",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 4,
        "nome": "Dores nos Punhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 832,
    "n": "Punho no Chão em Extensão Pronada e Supinada Alternado",
    "url": "https://youtu.be/09d2DGKOQd4",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 4,
        "nome": "Dores nos Punhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 834,
    "n": "Punho no Chão em Flexão Pronada",
    "url": "https://youtu.be/CMSxg1W-8iA",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 4,
        "nome": "Dores nos Punhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 859,
    "n": "Punho no Chão em Flexão Supinada",
    "url": "https://youtu.be/o0MVt0Abzjc",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 7,
        "nome": "Punho"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 4,
        "nome": "Dores nos Punhos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 583,
    "n": "Puxada Alta com Pegada Aberta Neutra",
    "url": "https://youtu.be/Xp6wc9NGKho",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 562,
    "n": "Puxada Alta com Pegada Aberta Neutra - Máquina",
    "url": "https://youtu.be/fLKv4QKnZLQ",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 78,
        "nome": "Puxador Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 961,
    "n": "Puxada Alta com Pegada Aberta Neutra Sentado - Cross",
    "url": "https://youtu.be/h4geE8PPNoY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 585,
    "n": "Puxada Alta com Pegada Aberta Pronada",
    "url": "https://youtu.be/QIOVxTbbQBc",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 563,
    "n": "Puxada Alta com Pegada Aberta Pronada - Máquina",
    "url": "https://youtu.be/KmVfuuVBw8s",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 78,
        "nome": "Puxador Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 960,
    "n": "Puxada Alta com Pegada Aberta Pronada Sentado - Cross",
    "url": "https://youtu.be/L2aEBWYoTI8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 592,
    "n": "Puxada Alta com Pegada Fechada Neutra",
    "url": "https://youtu.be/4d-NdVaOI-8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 564,
    "n": "Puxada Alta com Pegada Fechada Neutra - Máquina",
    "url": "https://youtu.be/SoIDeb5i4hM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 78,
        "nome": "Puxador Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 666,
    "n": "Puxada Alta com Pegada Fechada Neutra - Super Band",
    "url": "https://youtu.be/pZ1OsAwyU-0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 912,
    "n": "Puxada Alta com Pegada Fechada Neutra - Tube Band",
    "url": "https://youtu.be/UbWPs_tfIes",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 953,
    "n": "Puxada Alta com Pegada Fechada Neutra no Banco Invertido Unilateral - Cross",
    "url": "https://youtu.be/oKobeSDQhu8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 957,
    "n": "Puxada Alta com Pegada Fechada Neutra Sentado - Cross",
    "url": "https://youtu.be/3xKSGE8JZwo",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 958,
    "n": "Puxada Alta com Pegada Fechada Neutra Sentado Unilateral - Cross",
    "url": "https://youtu.be/9ArV2di4PfY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 589,
    "n": "Puxada Alta com Pegada Fechada Neutra Unilateral",
    "url": "https://youtu.be/OuWxG3xMOg0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 586,
    "n": "Puxada Alta com Pegada Fechada Supinada",
    "url": "https://youtu.be/VXm7tz5Jp98",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 566,
    "n": "Puxada Alta com Pegada Fechada Supinada - Máquina",
    "url": "https://youtu.be/Itfqhs2PRYM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 78,
        "nome": "Puxador Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 954,
    "n": "Puxada Alta com Pegada Fechada Supinada no Banco Invertido Unilateral - Cross",
    "url": "https://youtu.be/Sy6qimv21JQ",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 959,
    "n": "Puxada Alta com Pegada Fechada Supinada Sentado - Cross",
    "url": "https://youtu.be/FoYl-YGCFI8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 951,
    "n": "Puxada Alta com Pegada Fechada Supinada Unilateral",
    "url": "https://youtu.be/dI85MDH0-9U",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 77,
        "nome": "Puxada Alta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 667,
    "n": "Puxada Alta com Pegada Fechada Unilateral - Super Band",
    "url": "https://youtu.be/KFxgLvSGqK4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 913,
    "n": "Puxada Alta com Pegada Fechada Unilateral - Tube band",
    "url": "https://youtu.be/bPGu-eh0CQ0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      }
    ],
    "gs": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 17,
      "nome": "Puxar vertical"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 825,
    "n": "Quadril Alto Bilateral Alternado",
    "url": "https://youtu.be/4Pcn2vyJ9H4",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 11,
      "nome": "Hiperextensão de Tronco"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 9,
        "nome": "Dores Cervicais"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 836,
    "n": "Quadril Alto Estático Unilateral",
    "url": "https://youtu.be/9xtODsBBLwk",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 618,
    "n": "Recuo Alternado",
    "url": "https://youtu.be/yEE9IK3qKDA",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 148,
    "n": "Recuo Alternado - Barra",
    "url": "https://youtu.be/sFbk8UDmYc0",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 472,
    "n": "Recuo Alternado - Halter",
    "url": "https://youtu.be/x7DuglbvReE",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 567,
    "n": "Recuo Alternado - Smith",
    "url": "https://youtu.be/QaXTzvwG56A",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 619,
    "n": "Recuo Unilateral",
    "url": "https://youtu.be/7MKx_2gHcLU",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 149,
    "n": "Recuo Unilateral - Barra",
    "url": "https://youtu.be/bjZ7WOFYVJI",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 473,
    "n": "Recuo Unilateral - Halter",
    "url": "https://youtu.be/Mc0qs7-yDao",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 568,
    "n": "Recuo Unilateral - Smith",
    "url": "https://youtu.be/owSGw5xdqHM",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 668,
    "n": "Recuo Unilateral - Super Band",
    "url": "https://youtu.be/uM7oS_S6a1U",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 878,
    "n": "Recuo Unilateral - Tube Band",
    "url": "https://youtu.be/FWXjB_eIM1w",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 12,
      "nome": "Joelho bilateral assimétrico"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 152,
    "n": "Remada Alta - Barra",
    "url": "https://youtu.be/QH0XmRa0JTU",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 384,
    "n": "Remada Alta - Cross e Barra",
    "url": "https://youtu.be/K69qlSVh2hw",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 403,
    "n": "Remada Alta - Cross e Corda",
    "url": "https://youtu.be/nGOWCHWGl1E",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 476,
    "n": "Remada Alta - Halter",
    "url": "https://youtu.be/oSB23imctLk",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 670,
    "n": "Remada Alta - Super Band",
    "url": "https://youtu.be/jPuyh5FCiaY",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 671,
    "n": "Remada Baixa com Pegada Aberta Neutra - Super Band",
    "url": "https://youtu.be/dK_BgMe77xw",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 933,
    "n": "Remada Baixa com Pegada Aberta Neutra - Tube Band",
    "url": "https://youtu.be/xZ3hay33a_Q",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 937,
    "n": "Remada Baixa com Pegada Aberta Pronada - Super Band",
    "url": "https://youtu.be/ne3rxiZE-hE",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 935,
    "n": "Remada Baixa com Pegada Aberta Pronada - Tube Band",
    "url": "https://youtu.be/hmcb7AmDYkI",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 672,
    "n": "Remada Baixa com Pegada Fechada Neutra - Super Band",
    "url": "https://youtu.be/XHFoCQf6tuw",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 934,
    "n": "Remada Baixa com Pegada Fechada Neutra - Tube Band",
    "url": "https://youtu.be/Or5AGzdQUPk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 938,
    "n": "Remada Baixa com Pegada Fechada Supinada - Super Band",
    "url": "https://youtu.be/UpLqOdBLdJQ",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 936,
    "n": "Remada Baixa com Pegada Fechada Supinada - Tube Band",
    "url": "https://youtu.be/j09RO-cE0HE",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 572,
    "n": "Remada Baixa na Máquina com Pegada Aberta Pronada",
    "url": "https://youtu.be/WSC6UoBzgvU",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 974,
    "n": "Remada Baixa na Máquina com Pegada Aberta Pronada Unilateral",
    "url": "https://youtu.be/iN5pttZMkZc",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 573,
    "n": "Remada Baixa na Máquina com Pegada Fechada Neutra",
    "url": "https://youtu.be/yY4kuxDHIh0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 574,
    "n": "Remada Baixa na Máquina com Pegada Fechada Neutra Unilateral",
    "url": "https://youtu.be/NXi0-2iR7CY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 575,
    "n": "Remada Baixa na Máquina com Pegada Fechada Supinada",
    "url": "https://youtu.be/hEFwfSYyFEU",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 576,
    "n": "Remada Baixa na Máquina com Pegada Fechada Supinada Unilateral",
    "url": "https://youtu.be/IXddpoYQe5A",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 79,
        "nome": "Remada Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 584,
    "n": "Remada Baixa na Polia com Pegada Aberta Neutra",
    "url": "https://youtu.be/xHYVI-NAmOs",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 962,
    "n": "Remada Baixa na Polia com Pegada Aberta Neutra - Cross",
    "url": "https://youtu.be/LrRmsG6AJ4Y",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 587,
    "n": "Remada Baixa na Polia com Pegada Aberta Pronada",
    "url": "https://youtu.be/QfJ0ZlnxgB0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 967,
    "n": "Remada Baixa na Polia com Pegada Aberta Pronada - Cross",
    "url": "https://youtu.be/1SscFFs7SJg",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 593,
    "n": "Remada Baixa na Polia com Pegada Fechada Neutra",
    "url": "https://youtu.be/MBYyxaWhqX4",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 963,
    "n": "Remada Baixa na Polia com Pegada Fechada Neutra - Cross",
    "url": "https://youtu.be/BCS3aEQzXIo",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 590,
    "n": "Remada Baixa na Polia com Pegada Fechada Neutra Unilateral",
    "url": "https://youtu.be/P4xHlddQ0wM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 964,
    "n": "Remada Baixa na Polia com Pegada Fechada Neutra Unilateral - Cross",
    "url": "https://youtu.be/Gvzrikh5bUY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 588,
    "n": "Remada Baixa na Polia com Pegada Fechada Supinada",
    "url": "https://youtu.be/NHdeuwCfYtU",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 966,
    "n": "Remada Baixa na Polia com Pegada Fechada Supinada - Cross",
    "url": "https://youtu.be/M4-HiA3Zf-U",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 591,
    "n": "Remada Baixa na Polia com Pegada Fechada Supinada Unilateral",
    "url": "https://youtu.be/dYWT1_LawFY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 80,
        "nome": "Remada Baixa"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 965,
    "n": "Remada Baixa na Polia com Pegada Fechada Supinada Unilateral - Cross",
    "url": "https://youtu.be/QnRmz2Ro3vE",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 968,
    "n": "Remada Cavalinho com Pegada Aberta Pronada - Máquina",
    "url": "https://youtu.be/PAOFhKUaNdo",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 94,
        "nome": "Remada Cavalo"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 969,
    "n": "Remada Cavalinho com Pegada Fechada Neutra - Máquina",
    "url": "https://youtu.be/P48J832DDz8",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 94,
        "nome": "Remada Cavalo"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 702,
    "n": "Remada com Pegada Aberta Neutra - Fita de Suspensão",
    "url": "https://youtu.be/gjAWfDFe7Ck",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 127,
    "n": "Remada com Pegada Aberta Pronada - Barra Australiana",
    "url": "https://youtu.be/kIoBotkQzVk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 703,
    "n": "Remada com Pegada Aberta Pronada - Fita de Suspensão",
    "url": "https://youtu.be/4Rxhz5QrFzM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 704,
    "n": "Remada com Pegada Fechada Neutra - Fita de Suspensão",
    "url": "https://youtu.be/PuCnJw4QK08",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 128,
    "n": "Remada com Pegada Fechada Supinada - Barra Australiana",
    "url": "https://youtu.be/RWApPBiZGjU",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 705,
    "n": "Remada com Pegada Fechada Supinada - Fita de Suspensão",
    "url": "https://youtu.be/ZTOnP4SODyQ",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 971,
    "n": "Remada Guiada com Pegada Aberta Neutra",
    "url": "https://youtu.be/MJbQ5QHsnT0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 95,
        "nome": "Remada Guiado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 972,
    "n": "Remada Guiada com Pegada Aberta Pronada",
    "url": "https://youtu.be/nz8050BVV94",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 95,
        "nome": "Remada Guiado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 970,
    "n": "Remada Guiada com Pegada Fechada Neutra",
    "url": "https://youtu.be/H1xp9DHES9k",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 95,
        "nome": "Remada Guiado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 973,
    "n": "Remada Guiada com Pegada Fechada Supinada",
    "url": "https://youtu.be/vAMEWIbSnBk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 95,
        "nome": "Remada Guiado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 378,
    "n": "Remada Inclinada com Pegada Aberta Neutra - Cross",
    "url": "https://youtu.be/ISvGo9K8Wsg",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 153,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Barra",
    "url": "https://youtu.be/JHubcPu_wfM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 385,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Cross",
    "url": "https://youtu.be/Fjwjl9PCS6E",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 477,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Halter",
    "url": "https://youtu.be/WQdpj4iCXYk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 895,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Kettlebell",
    "url": "https://youtu.be/DY8_O9Olh18",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 673,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Super Band",
    "url": "https://youtu.be/VH-8_0siiLM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 893,
    "n": "Remada Inclinada com Pegada Aberta Pronada - Tube Band",
    "url": "https://youtu.be/w1-WNTFl4xE",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 418,
    "n": "Remada Inclinada com Pegada Fechada Neutra - Cross",
    "url": "https://youtu.be/Y1rjZ7Weo_I",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 478,
    "n": "Remada Inclinada com Pegada Fechada Neutra - Halter",
    "url": "https://youtu.be/qo9cJ2LxYvM",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 896,
    "n": "Remada Inclinada com Pegada Fechada Neutra - Kettlebell",
    "url": "https://youtu.be/clJ1Z2VebFw",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 32,
        "nome": "Kettlebell"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 674,
    "n": "Remada Inclinada com Pegada Fechada Neutra - Super Band",
    "url": "https://youtu.be/ubh2wVnj8qY",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 894,
    "n": "Remada Inclinada com Pegada Fechada Neutra - Tube Band",
    "url": "https://youtu.be/5bfxVjdq7Cs",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 414,
    "n": "Remada Inclinada com Pegada Fechada Neutra Unilateral - Cross",
    "url": "https://youtu.be/VXfidJCjFRk",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 154,
    "n": "Remada Inclinada com Pegada Fechada Supinada - Barra",
    "url": "https://youtu.be/ePo5SxH-_uI",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 386,
    "n": "Remada Inclinada com Pegada Fechada Supinada - Cross",
    "url": "https://youtu.be/eysParR2ER0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 479,
    "n": "Remada Inclinada com Pegada Fechada Supinada - Halter",
    "url": "https://youtu.be/fNwJ_TQ8Wak",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 480,
    "n": "Remada Serrote em Pé - Halter",
    "url": "https://youtu.be/dHRptEreX0Y",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 481,
    "n": "Remada Serrote no Banco - Halter",
    "url": "https://youtu.be/HzKU9__lTi0",
    "g": [
      {
        "id": 15,
        "nome": "Latíssimo"
      },
      {
        "id": 25,
        "nome": "Rombóides"
      }
    ],
    "gs": [
      {
        "id": 8,
        "nome": "Deltóide"
      },
      {
        "id": 29,
        "nome": "Trapézio"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 16,
      "nome": "Puxar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 482,
    "n": "Rosca Alternada com Giro em Pé - Halter",
    "url": "https://youtu.be/mU1bCGQ5k4E",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 495,
    "n": "Rosca Alternada com Giro no Banco Inclinado - Halter",
    "url": "https://youtu.be/NRnPEL-AIys",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 498,
    "n": "Rosca Alternada com Giro Sentado - Halter",
    "url": "https://youtu.be/g4LtG_WWJPY",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 483,
    "n": "Rosca Alternada com Pegada Neutra em Pé - Halter",
    "url": "https://youtu.be/nvjCKOPyaCQ",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 496,
    "n": "Rosca Alternada com Pegada Neutra no Banco Inclinado - Halter",
    "url": "https://youtu.be/ckZHi7ZicG8",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 499,
    "n": "Rosca Alternada com Pegada Neutra Sentado - Halter",
    "url": "https://youtu.be/_-D-YgCAdZ8",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 484,
    "n": "Rosca Alternada com Pegada Supinada em Pé - Halter",
    "url": "https://youtu.be/FZJjEmdRswU",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 497,
    "n": "Rosca Alternada com Pegada Supinada no Banco Inclinado - Halter",
    "url": "https://youtu.be/Rv4bbF_JHC8",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 500,
    "n": "Rosca Alternada com Pegada Supinada Sentado - Halter",
    "url": "https://youtu.be/J3jWKVXCU7s",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 505,
    "n": "Rosca Direita com Pegada Neutra Sentado - Halter",
    "url": "https://youtu.be/zNPTrQMihY0",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 506,
    "n": "Rosca Direita com Pegada Supinada Sentado - Halter",
    "url": "https://youtu.be/0pQECkZvW1c",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 507,
    "n": "Rosca Direta com Cotovelo Apoiado na Coxa - Halter",
    "url": "https://youtu.be/jZ_urzPXFs4",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 485,
    "n": "Rosca Direta com Giro em Pé - Halter",
    "url": "https://youtu.be/LSQoM_ePT_w",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 501,
    "n": "Rosca Direta com Giro no Banco Inclinado - Halter",
    "url": "https://youtu.be/WlSXleRbwFo",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 504,
    "n": "Rosca Direta com Giro Sentado - Halter",
    "url": "https://youtu.be/3RQUA7kZ0QE",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 404,
    "n": "Rosca Direta com Pegada Neutra em Pé - Cross e Corda",
    "url": "https://youtu.be/-RXslVzvBow",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 486,
    "n": "Rosca Direta com Pegada Neutra em Pé - Halter",
    "url": "https://youtu.be/NO0Ghf6sQRs",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 675,
    "n": "Rosca Direta com Pegada Neutra em Pé - Super Band",
    "url": "https://youtu.be/TTqH1ynn30k",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 502,
    "n": "Rosca Direta com Pegada Neutra no Banco Inclinado - Halter",
    "url": "https://youtu.be/KWUzCI5haFI",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 388,
    "n": "Rosca Direta com Pegada Pronada em Pé  - Cross e Barra",
    "url": "https://youtu.be/j95XWyr4ZdQ",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 155,
    "n": "Rosca Direta com Pegada Pronada em Pé - Barra",
    "url": "https://youtu.be/DB8MxKsHIe8",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 156,
    "n": "Rosca Direta com Pegada Supinada em Pé - Barra",
    "url": "https://youtu.be/XnSe10Bl4Ao",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 389,
    "n": "Rosca Direta com Pegada Supinada em Pé - Cross e Barra",
    "url": "https://youtu.be/tfVLNQ-h1O4",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 487,
    "n": "Rosca Direta com Pegada Supinada em Pé - Halter",
    "url": "https://youtu.be/n57qdqjB8zo",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 676,
    "n": "Rosca Direta com Pegada Supinada em Pé - Super Band",
    "url": "https://youtu.be/wGHrrjGkczo",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 503,
    "n": "Rosca Direta com Pegada Supinada no Banco Inclinado - Halter",
    "url": "https://youtu.be/vOaaMZthWxk",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 582,
    "n": "Rosca Direta no Banco Scott - Barra",
    "url": "https://youtu.be/AyMTUwDVWoI",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 6,
        "nome": "Banco Scott"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 975,
    "n": "Rosca Direta no Banco Scott - Máquina",
    "url": "https://youtu.be/W_s80xcvfVU",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 96,
        "nome": "Scott Máquina"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 976,
    "n": "Rosca Direta no Banco Scott Neutra - Máquina",
    "url": "https://youtu.be/C9xbb6_cMxs",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 96,
        "nome": "Scott Máquina"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 4,
      "nome": "Constante"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 512,
    "n": "Rosca Direta no Banco Scott Unilateral - Halter",
    "url": "https://youtu.be/1jhSTj6z9ns",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 6,
        "nome": "Banco Scott"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 390,
    "n": "Rosca Testa - Cross e Barra",
    "url": "https://youtu.be/DNrxchWPwKQ",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 706,
    "n": "Rosca Testa - Fita de Suspensão",
    "url": "https://youtu.be/4roeRynHI5g",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 71,
        "nome": "Fita de Suspensão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 6,
      "nome": "Suspenso",
      "sigla": "TRS"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 677,
    "n": "Rosca Testa - Super Band",
    "url": "https://youtu.be/46zCFlvg1kc",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 914,
    "n": "Rosca Testa - Tube Band",
    "url": "https://youtu.be/DmpEXu0byJw",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 391,
    "n": "Rosca Testa Sentado - Cross",
    "url": "https://youtu.be/xxbphdyDgdo",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 678,
    "n": "Rosca Testa Sentado - Super Band",
    "url": "https://youtu.be/9idpNqJrJsE",
    "g": [
      {
        "id": 5,
        "nome": "Bíceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 986,
    "n": "Rotação de Tronco - Cross",
    "url": "https://youtu.be/TKGF0qbdgNE",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 221,
    "n": "Rotação de Tronco com Pernas em L Estendida",
    "url": "https://youtu.be/Hst6kMZZPbM",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 222,
    "n": "Rotação de Tronco com Pernas em L Flexionada",
    "url": "https://youtu.be/b9HCao9TXco",
    "g": [
      {
        "id": 16,
        "nome": "Oblíquo"
      },
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 9,
        "nome": "Tórax"
      }
    ],
    "pad": {
      "id": 20,
      "nome": "Rotação de Tronco"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 837,
    "n": "Rotação Externa de Ombro com Bastão",
    "url": "https://youtu.be/7lVei9IpI34",
    "g": [],
    "gs": [],
    "eq": [
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 411,
    "n": "Rotação Externa de Ombro Horizontal - Cross",
    "url": "https://youtu.be/wRvFWiH44-0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 594,
    "n": "Rotação Externa de Ombro Horizontal - Mini Band",
    "url": "https://youtu.be/YfZbtjMv8dk",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 639,
    "n": "Rotação Externa de Ombro Horizontal - Super Band",
    "url": "https://youtu.be/oBgugCMYAbo",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 932,
    "n": "Rotação Externa de Ombro Horizontal - Tube Band",
    "url": "https://youtu.be/qUEL3K70JRo",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 434,
    "n": "Rotação Externa de Ombro Horizontal Deitado Lateral - Halter",
    "url": "https://youtu.be/mzu6KsG9-Og",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 435,
    "n": "Rotação Externa de Ombro Vertical - Halter",
    "url": "https://youtu.be/l73wMAfeeow",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 640,
    "n": "Rotação Externa de Ombro Vertical - Super Band",
    "url": "https://youtu.be/Xk31goBq23o",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 899,
    "n": "Rotação Externa de Ombro Vertical Unilateral - Halter",
    "url": "https://youtu.be/UvnVjFXcQmE",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 841,
    "n": "Rotação Interna de Ombro Deitado Lateral",
    "url": "https://youtu.be/WBnj3oShLa0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 0,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 412,
    "n": "Rotação Interna de Ombro Horizontal - Cross",
    "url": "https://youtu.be/TKPSWaRXtMI",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 641,
    "n": "Rotação Interna de Ombro Horizontal - Super Band",
    "url": "https://youtu.be/9KqZ7tLSQTE",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 931,
    "n": "Rotação Interna de Ombro Horizontal - Tube Band",
    "url": "https://youtu.be/xiknoxwA7S0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 642,
    "n": "Rotação Interna de Ombro Vertical - Super Band",
    "url": "https://youtu.be/ToXWjvEU2Ts",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 930,
    "n": "Rotação Interna de Ombro Vertical - Tube Band",
    "url": "https://youtu.be/8RyzBIPkut0",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 3,
        "nome": "Escápula"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 843,
    "n": "Rotação Interna e Externa de Ombro Deitado Alternado",
    "url": "https://youtu.be/UzKgekjfbCY",
    "g": [
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 6,
        "nome": "Mobilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": null,
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 3,
        "nome": "Dores nos Ombros"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 157,
    "n": "Stiff - Barra",
    "url": "https://youtu.be/7055EUT_zuU",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 488,
    "n": "Stiff - Halter",
    "url": "https://youtu.be/3vSDHKCoIvo",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 607,
    "n": "Stiff - Mini Band",
    "url": "https://youtu.be/GUClj8IWr2o",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 881,
    "n": "Stiff - Super Band",
    "url": "https://youtu.be/igxOmd819uc",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 179,
    "n": "Stiff com Bastão nas Costas",
    "url": "https://youtu.be/5F4BZh2C5Hg",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      }
    ],
    "gs": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 13,
        "nome": "Bastão"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 8,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 622,
    "n": "Stiff na Parede",
    "url": "https://youtu.be/dWkuig_ZOF0",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 880,
    "n": "Stiff Unilateral - Halter Contralateral",
    "url": "https://youtu.be/YWthqLf7CMo",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 489,
    "n": "Stiff Unilateral - Halter Duplo",
    "url": "https://youtu.be/fHLteNp49jc",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 608,
    "n": "Stiff Unilateral - Mini Band",
    "url": "https://youtu.be/ISoEvvJcILQ",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 35,
        "nome": "Mini Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 882,
    "n": "Stiff Unilateral - Super Band",
    "url": "https://youtu.be/vSU7bSl9Nkk",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 18,
      "nome": "Quadril bilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 847,
    "n": "Stiff Unilateral com Alternância de Halter",
    "url": "https://youtu.be/hRip1jKPRZU",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 7,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 623,
    "n": "Stiff Unilateral com Toque no Chão",
    "url": "https://youtu.be/l2rsudAeA2M",
    "g": [
      {
        "id": 14,
        "nome": "Isquiossurais"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 22,
        "nome": "Quadrado lombar"
      }
    ],
    "eq": [
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 988,
    "n": "Subida no Degrau - Hack",
    "url": "https://youtu.be/h1LKW2JXo-Y",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      },
      {
        "id": 23,
        "nome": "Quadríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 61,
        "nome": "Hack de Agachamento"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 4,
        "nome": "Joelho"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 66,
    "n": "Supino Declinado - Barra",
    "url": "https://youtu.be/BqPXs849d3M",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 3,
        "nome": "Banco Declinado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 47,
    "n": "Supino Declinado - Halter",
    "url": "https://youtu.be/BB279RYXpic",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 3,
        "nome": "Banco Declinado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 68,
    "n": "Supino Inclinado - Barra",
    "url": "https://youtu.be/kZ2KOx13a4k",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 4,
        "nome": "Banco Inclinado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 927,
    "n": "Abdução de Quadril em Pé - Tube Band",
    "url": "https://youtu.be/Ok--mMJmiIQ",
    "g": [
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "gs": [
      {
        "id": 28,
        "nome": "Transverso do abdômen"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 5,
        "nome": "Lombar"
      }
    ],
    "pad": {
      "id": 19,
      "nome": "Quadril unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      },
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 1,
        "nome": "Dores Lombares"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 48,
    "n": "Supino Inclinado - Halter",
    "url": "https://youtu.be/40txkiq3c1I",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 52,
    "n": "Supino Inclinado - Smith",
    "url": "https://youtu.be/Nxn40nc0-_g",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 416,
    "n": "Supino Polia Alta em Pé - Cross",
    "url": "https://youtu.be/Bwy3rv7oS40",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 37,
    "n": "Supino Polia Alta Sentado - Cross",
    "url": "https://youtu.be/Awgj6XHYTxo",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 4,
        "nome": "Banco Inclinado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 38,
    "n": "Supino Polia Baixa Sentado - Cross",
    "url": "https://youtu.be/SCd0UGHuiXs",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 69,
    "n": "Supino Reto - Barra",
    "url": "https://youtu.be/d7n4PFXO0KA",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 5,
        "nome": "Banco Reto"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 49,
    "n": "Supino Reto - Halter",
    "url": "https://youtu.be/WX717daFIu0",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 579,
    "n": "Supino Reto - Máquina",
    "url": "https://youtu.be/BnTyS9hiUNw",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 83,
        "nome": "Supino Reto Máquina"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 53,
    "n": "Supino Reto - Smith",
    "url": "https://youtu.be/McOSU4yOrMw",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 60,
        "nome": "Smith"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 3,
      "nome": "Máquina",
      "sigla": "TRM"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 417,
    "n": "Supino Reto em Pé - Cross",
    "url": "https://youtu.be/P0PUyd7zX3k",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 39,
    "n": "Supino Reto Sentado - Cross",
    "url": "https://youtu.be/j2KYVMJXS0w",
    "g": [
      {
        "id": 18,
        "nome": "Peitoral"
      }
    ],
    "gs": [
      {
        "id": 30,
        "nome": "Tríceps"
      },
      {
        "id": 8,
        "nome": "Deltóide"
      }
    ],
    "eq": [
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 2,
      "nome": "Biarticular"
    },
    "artic": [
      {
        "id": 6,
        "nome": "Ombro"
      },
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 7,
      "nome": "Empurrar horizontal"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    },
    "porcao_lembrete": "Peitoral (Superior) — marcado 2026-08-29, só lembrete, ainda não usado no motor"
  },
  {
    "id": 849,
    "n": "Toque Frente e Trás com Super Band no Joelho",
    "url": "https://youtu.be/xSfC2iWdnpg",
    "g": [],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 928,
    "n": "Toque Frente e Trás com Tube Band no Joelho",
    "url": "https://youtu.be/-qVTBnUsbYg",
    "g": [],
    "gs": [
      {
        "id": 23,
        "nome": "Quadríceps"
      },
      {
        "id": 12,
        "nome": "Glúteos"
      }
    ],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 3,
      "nome": "Multiarticular"
    },
    "artic": [
      {
        "id": 4,
        "nome": "Joelho"
      },
      {
        "id": 8,
        "nome": "Quadril"
      },
      {
        "id": 1,
        "nome": "Arco Plantar"
      }
    ],
    "pad": {
      "id": 14,
      "nome": "Joelho unilateral"
    },
    "tp": [
      {
        "id": 3,
        "nome": "Estabilidade"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [
      {
        "id": 2,
        "nome": "Dores nos Joelhos"
      },
      {
        "id": 8,
        "nome": "Dores no Quadril"
      },
      {
        "id": 5,
        "nome": "Dores nos Tornozelos"
      }
    ],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 405,
    "n": "Tríceps Coice - Cross",
    "url": "https://youtu.be/Q7d7S5CmWCk",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 490,
    "n": "Tríceps Coice - Halter Duplo",
    "url": "https://youtu.be/HRWMoxnsqB8",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 679,
    "n": "Tríceps Coice - Super Band",
    "url": "https://youtu.be/VHhAY-Nyi8g",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 929,
    "n": "Tríceps Coice - Tube Band",
    "url": "https://youtu.be/_SUsUA5KxoM",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 898,
    "n": "Tríceps Coice Unilateral - Halter",
    "url": "https://youtu.be/Ah3zVsRjxec",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 1,
      "nome": "Concêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 392,
    "n": "Tríceps Francês em Pé - Cross e Barra",
    "url": "https://youtu.be/gCpWIIru7Bs",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 406,
    "n": "Tríceps Francês em Pé - Cross e Corda",
    "url": "https://youtu.be/oz5X-x-tEGA",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 491,
    "n": "Tríceps Francês em Pé - Halter",
    "url": "https://youtu.be/umGaBp3EVvo",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 908,
    "n": "Tríceps Francês em Pé - Super Band",
    "url": "https://youtu.be/JkMJatiHxtc",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 910,
    "n": "Tríceps Francês em Pé - Tube Band",
    "url": "https://youtu.be/uQ8MxCW4Ejo",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 950,
    "n": "Tríceps Francês em Pé Unilateral - Cross e Pegador D",
    "url": "https://youtu.be/KRSYzi4G4WA",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 492,
    "n": "Tríceps Francês em Pé Unilateral - Halter",
    "url": "https://youtu.be/J9W5MqHsrM8",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 909,
    "n": "Tríceps Francês em Pé Unilateral - Super Band",
    "url": "https://youtu.be/3zp7Ct3aLUg",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 911,
    "n": "Tríceps Francês em Pé Unilateral - Tube Band",
    "url": "https://youtu.be/y_jzvT-hsUY",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 850,
    "n": "Tríceps Francês Sentado - Anilha",
    "url": "https://youtu.be/acykXsNR9ZM",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 30,
    "n": "Tríceps Francês Sentado - Barra",
    "url": "https://youtu.be/u7azBkye5sY",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 35,
    "n": "Tríceps Francês Sentado - Cross e Barra",
    "url": "https://youtu.be/uWV0sWXIDP8",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 36,
    "n": "Tríceps Francês Sentado - Cross e Corda",
    "url": "https://youtu.be/NrnO8xG3LMU",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 50,
    "n": "Tríceps Francês Sentado - Halter",
    "url": "https://youtu.be/ggAkEYPCRrg",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 51,
    "n": "Tríceps Francês Sentado Unilateral - Halter",
    "url": "https://youtu.be/hCl3j2bbKis",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 407,
    "n": "Tríceps Polia Alta com Pegada Neutra - Cross e Corda",
    "url": "https://youtu.be/6zot2ohn3j4",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 393,
    "n": "Tríceps Polia Alta com Pegada Pronada - Cross e Barra",
    "url": "https://youtu.be/zVF0mklcVQw",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 400,
    "n": "Tríceps Polia Alta com Pegada Pronada - Cross e Barra V",
    "url": "https://youtu.be/AMupmJ2f49Y",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 394,
    "n": "Tríceps Polia Alta com Pegada Supinada - Cross e Barra",
    "url": "https://youtu.be/1eJhD5j6lRU",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 395,
    "n": "Tríceps Polia Alta com Pegada Unilateral Pronada - Cross",
    "url": "https://youtu.be/GuGbCOkVRT0",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 415,
    "n": "Tríceps Polia Alta com Pegada Unilateral Supinada - Cross e Pegador D",
    "url": "https://youtu.be/K9qct5uOrtI",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 868,
    "n": "Tríceps Testa - Anilha",
    "url": "https://youtu.be/2xoUzvOVVHw",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 1,
        "nome": "Anilha"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 91,
    "n": "Tríceps Testa - Barra",
    "url": "https://youtu.be/Xkqi0Pa8XIs",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 59,
        "nome": "Barra Reta"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 129,
    "n": "Tríceps Testa - Barra Australiana",
    "url": "https://youtu.be/yfTTaNVWIh4",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 8,
        "nome": "Barra Australiana"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 113,
    "n": "Tríceps Testa - Halter",
    "url": "https://youtu.be/LzEajTKQWV0",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 6,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 114,
    "n": "Tríceps Testa - Halter Duplo",
    "url": "https://youtu.be/P-WZI653Ui4",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 2,
      "nome": "Bilateral com Carga Unilateral"
    }
  },
  {
    "id": 952,
    "n": "Tríceps Testa com Pegada Neutra Sentado - Cross",
    "url": "https://youtu.be/KP3gASS4Dos",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 396,
    "n": "Tríceps Testa em Pé - Cross e Barra",
    "url": "https://youtu.be/_yy_L2iYsew",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 408,
    "n": "Tríceps Testa em Pé - Cross e Corda",
    "url": "https://youtu.be/f0NRmdvQfK0",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 680,
    "n": "Tríceps Testa em Pé - Super Band",
    "url": "https://youtu.be/rbFAcyt080A",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 916,
    "n": "Tríceps Testa em Pé - Tube Band",
    "url": "https://youtu.be/kP0T5AB3aBc",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 409,
    "n": "Tríceps Testa em Pé Unilateral - Cross e Pegador D",
    "url": "https://youtu.be/GGCNaRFp6Uo",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 681,
    "n": "Tríceps Testa em Pé Unilateral - Superband",
    "url": "https://youtu.be/vfYtZhv6uUA",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 48,
        "nome": "Super Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 917,
    "n": "Tríceps Testa em Pé Unilateral - Tube Band",
    "url": "https://youtu.be/VrONwUzES1k",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 53,
        "nome": "Tube Band"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 2,
      "nome": "Elástico",
      "sigla": "TRE"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  },
  {
    "id": 262,
    "n": "Tríceps Testa em Prancha",
    "url": "https://youtu.be/zzLT4BKoN1I",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 3,
      "nome": "Avançado"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 263,
    "n": "Tríceps Testa em Prancha com Apoio no Joelho",
    "url": "https://youtu.be/irXJso-cmRI",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 20,
        "nome": "Colchonete"
      },
      {
        "id": 42,
        "nome": "Peso corporal"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 2,
      "nome": "Fechada"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 4,
      "nome": "Peso Corporal",
      "sigla": "TRPC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 2,
      "nome": "Intermediário"
    },
    "tempo": 3,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 34,
    "n": "Tríceps Testa Sentado - Cross e Barra",
    "url": "https://youtu.be/DIVe6FFL_TQ",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 58,
        "nome": "Mono Cross Over"
      },
      {
        "id": 25,
        "nome": "Cross Over"
      },
      {
        "id": 54,
        "nome": "Banco Articulado"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 1,
      "nome": "Cabo",
      "sigla": "TRC"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 4,
    "lateralidade": {
      "id": 1,
      "nome": "Bilateral"
    }
  },
  {
    "id": 115,
    "n": "Tríceps Testa Unilateral - Halter",
    "url": "https://youtu.be/HIQz6QjOaDg",
    "g": [
      {
        "id": 30,
        "nome": "Tríceps"
      }
    ],
    "gs": [],
    "eq": [
      {
        "id": 54,
        "nome": "Banco Articulado"
      },
      {
        "id": 30,
        "nome": "Halter"
      }
    ],
    "art": {
      "id": 1,
      "nome": "Uniarticular"
    },
    "artic": [
      {
        "id": 2,
        "nome": "Cotovelo"
      }
    ],
    "pad": {
      "id": 5,
      "nome": "Complementar"
    },
    "tp": [
      {
        "id": 5,
        "nome": "Força"
      }
    ],
    "cad": {
      "id": 1,
      "nome": "Aberta"
    },
    "contracao": {
      "id": 2,
      "nome": "Excêntrica"
    },
    "posicao_muscular": null,
    "r": {
      "id": 5,
      "nome": "Peso Livre",
      "sigla": "TRPL"
    },
    "ind": [],
    "ci": [],
    "nv": {
      "id": 1,
      "nome": "Iniciante"
    },
    "tempo": 5,
    "lateralidade": {
      "id": 3,
      "nome": "Unilateral"
    }
  }
];
