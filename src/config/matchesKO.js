/* ARCHIVO: partidos de ELIMINACIÓN DIRECTA (5 de julio en adelante).
   Copia el bloque de un partido para agregar el siguiente. */
export const DAYS_KO = [
  { id: 'jul05', label: 'Dom 5', full: 'Domingo 5 de julio' },
  { id: 'jul06', label: 'Lun 6', full: 'Lunes 6 de julio' },
  { id: 'jul07', label: 'Mar 7', full: 'Martes 7 de julio' },
  { id: 'jul09', label: 'Jue 9', full: 'Jueves 9 de julio' },
  { id: 'jul14', label: 'Mar 14', full: 'Martes 14 de julio' },
];

export const MATCHES_KO = [
  // ═══ DOM 5 JUL — OCTAVOS ═══
  {
    id: 'mex-eng', day: 'jul05',
    homeCode: 'mx', awayCode: 'gb-eng',
    home: 'México', away: 'Inglaterra',
    group: 'Octavos de final',
    time: '7:00 PM ET',
    venue: 'Estadio Azteca, Ciudad de México',
    graphs: {
      mcmc:        '/graphs/jul05/mex_eng_mcmc.png',
      xgboost:     '/graphs/jul05/mex_eng_xgb.png',
      dualhead:    '/graphs/jul05/mex_eng_dualhead.png',
      montecarlo:  '/graphs/jul05/mex_eng_montecarlo.png',
      comparacion: '/graphs/jul05/mex_eng_comparacion.png',
      resumen:     '/graphs/jul05/mex_eng_resumen.png',
    },
    colabLink: 'https://colab.research.google.com/drive/1eogSBHwaWkcjSMDRWdFOq-9oijCsUkV7?authuser=1',
  },
  {
    id: 'bra-nor', day: 'jul05',
    homeCode: 'br', awayCode: 'no',
    home: 'Brasil', away: 'Noruega',
    group: 'Octavos de final',
    time: '4:00 PM ET',
    venue: 'MetLife Stadium, East Rutherford',
    graphs: {
      mcmc:        '/graphs/jul05/bra_nor_mcmc.png',
      xgboost:     '/graphs/jul05/bra_nor_xgb.png',
      dualhead:    '/graphs/jul05/bra_nor_dualhead.png',
      montecarlo:  '/graphs/jul05/bra_nor_montecarlo.png',
      comparacion: '/graphs/jul05/bra_nor_comparacion.png',
      resumen:     '/graphs/jul05/bra_nor_resumen.png',
    },
    colabLink: 'https://colab.research.google.com/drive/1yMFgBqquwhVasDbsULitqdcm5JUz5BoX?authuser=1',
  },

  // ═══ LUN 6 JUL — OCTAVOS ═══
  {
    id: 'por-esp', day: 'jul06',
    homeCode: 'pt', awayCode: 'es',
    home: 'Portugal', away: 'España',
    group: 'Octavos de final',
    time: '3:00 PM ET',
    venue: 'AT&T Stadium, Arlington',
    graphs: {
      mcmc:        '/graphs/jul06/por_esp_mcmc.png',
      xgboost:     '/graphs/jul06/por_esp_xgb.png',
      dualhead:    '/graphs/jul06/por_esp_dualhead.png',
      montecarlo:  '/graphs/jul06/por_esp_montecarlo.png',
      comparacion: '/graphs/jul06/por_esp_comparacion.png',
      resumen:     '/graphs/jul06/por_esp_resumen.png',
    },
    colabLink: 'https://drive.google.com/file/d/1CY-USMfqhVwSiCre-WriUbLiKJchcZ0Y/view?usp=sharing',
  },
  {
    id: 'usa-bel', day: 'jul06',
    homeCode: 'us', awayCode: 'be',
    home: 'Estados Unidos', away: 'Bélgica',
    group: 'Octavos de final',
    time: '8:00 PM ET',
    venue: 'Lumen Field, Seattle',
    graphs: {
      mcmc:        '/graphs/jul06/usa_bel_mcmc.png',
      xgboost:     '/graphs/jul06/usa_bel_xgb.png',
      dualhead:    '/graphs/jul06/usa_bel_dualhead.png',
      montecarlo:  '/graphs/jul06/usa_bel_montecarlo.png',
      comparacion: '/graphs/jul06/usa_bel_comparacion.png',
      resumen:     '/graphs/jul06/usa_bel_resumen.png',
    },
    colabLink: 'https://drive.google.com/file/d/1MYOLaoIUYoW2uOhAzCmQ82IXPZEzBXmQ/view?usp=sharing',
  },

  // ═══ MAR 7 JUL — OCTAVOS ═══
  {
    id: 'arg-egy', day: 'jul07',
    homeCode: 'ar', awayCode: 'eg',
    home: 'Argentina', away: 'Egipto',
    group: 'Octavos de final',
    time: '12:00 PM ET',
    venue: 'Mercedes-Benz Stadium, Atlanta',
    graphs: {
      mcmc:        '/graphs/jul07/arg_egy_mcmc.png',
      xgboost:     '/graphs/jul07/arg_egy_xgb.png',
      dualhead:    '/graphs/jul07/arg_egy_dualhead.png',
      montecarlo:  '/graphs/jul07/arg_egy_montecarlo.png',
      comparacion: '/graphs/jul07/arg_egy_comparacion.png',
      resumen:     '/graphs/jul07/arg_egy_resumen.png',
    },
    colabLink: 'https://drive.google.com/file/d/1cYV1ceVQ5E2NSZmKW2rYzYhO8HLvlwab/view?usp=sharing',
  },
  {
    id: 'sui-col', day: 'jul07',
    homeCode: 'ch', awayCode: 'co',
    home: 'Suiza', away: 'Colombia',
    group: 'Octavos de final',
    time: '4:00 PM ET',
    venue: 'BC Place, Vancouver',
    graphs: {
      mcmc:        '/graphs/jul07/sui_col_mcmc.png',
      xgboost:     '/graphs/jul07/sui_col_xgb.png',
      dualhead:    '/graphs/jul07/sui_col_dualhead.png',
      montecarlo:  '/graphs/jul07/sui_col_montecarlo.png',
      comparacion: '/graphs/jul07/sui_col_comparacion.png',
      resumen:     '/graphs/jul07/sui_col_resumen.png',
    },
    colabLink: 'https://drive.google.com/file/d/1DRSYpU9RCIw52ILFxweBTiZ7mqrDNRtc/view?usp=sharing',
  },

  // ═══ JUE 9 JUL — CUARTOS DE FINAL ═══
  {
    id: 'fra-mar', day: 'jul09',
    homeCode: 'fr', awayCode: 'ma',
    home: 'Francia', away: 'Marruecos',
    group: 'Cuartos de final',
    time: '4:00 PM ET',
    venue: 'Gillette Stadium, Foxborough (Boston)',
    graphs: {
      mcmc:        '/graphs/jul09/fra_mar_mcmc.png',
      xgboost:     '/graphs/jul09/fra_mar_xgb.png',
      dualhead:    '/graphs/jul09/fra_mar_dualhead.png',
      montecarlo:  '/graphs/jul09/fra_mar_montecarlo.png',
      comparacion: '/graphs/jul09/fra_mar_comparacion.png',
      resumen:     '/graphs/jul09/fra_mar_resumen.png',
    },
    colabLink: 'https://drive.google.com/file/d/110lne6aqhRgvkClExe-cKEckYBgyEyVM/view?usp=sharing',
  },

  {
    id: 'fra-esp', day: 'jul14',
    homeCode: 'fr', awayCode: 'es',
    home: 'Francia', away: 'España',
    group: 'Semifinal',
    time: '3:00 PM ET',
    venue: 'AT&T Stadium, Arlington (Dallas)',
    graphs: {
      mcmc:      '/graphs/jul14/mcmc.png',
      xgboost:   '/graphs/jul14/xgboost.png',
      modelo3:   '/graphs/jul14/mejorado.png',
      accuracy:  '/graphs/jul14/accuracy.png',
      consenso:  '/graphs/jul14/consenso.png',
    },
    graphInfo: [
      { key: 'mcmc', title: '1. Bayesiano MCMC', description: 'Usa cadenas de Montecarlo sobre una distribución de Poisson para estimar la probabilidad de cada marcador. Te dice qué tan probable es cada resultado combinando el historial de ambas selecciones.' },
      { key: 'xgboost', title: '2. XGBoost Poisson', description: 'Modelo de machine learning (gradient boosting) que predice goles esperados con objetivo Poisson, alimentado por ratings Elo y forma reciente.' },
      { key: 'modelo3', title: '3. Dixon-Coles mejorado', description: 'Versión reforzada del modelo estadístico clásico con ajustes de calibración adicionales. Combina la robustez del enfoque paramétrico con mejor comportamiento en marcadores bajos.' },
      { key: 'accuracy', title: '4. Accuracy y RPS de los 3 modelos', description: 'Compara qué tan bien acertó cada modelo el resultado (1X2) y qué tan calibradas están sus probabilidades (RPS) en los partidos de 2026.' },
      { key: 'consenso', title: '5. Consenso de los 3 modelos', description: 'Combina las probabilidades de los 3 modelos en una sola distribución. Es la mejor estimación cuando los modelos individuales no coinciden del todo.' },
    ],
    colabLink: 'https://colab.research.google.com/drive/TU_LINK_AQUI?usp=sharing',
  },

];

export function getKOMatchesByDay(dayId) { return MATCHES_KO.filter(m => m.day === dayId); }
export function getKOMatchById(matchId) { return MATCHES_KO.find(m => m.id === matchId); }