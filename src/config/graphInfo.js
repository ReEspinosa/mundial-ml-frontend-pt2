/* ARCHIVO: descripciones de cada gráfica de eliminación directa.
   Edita SOLO el texto de "title" y "description" aquí — se usa en todos los partidos. */
export const GRAPH_INFO = [
  {
    key: 'mcmc',
    title: '1. Bayesiano MCMC',
    description: 'Usa cadenas de Montecarlo sobre una distribución de Poisson para estimar la probabilidad de cada marcador. Te dice qué tan probable es cada resultado combinando el historial de ambas selecciones.',
  },
  {
    key: 'xgboost',
    title: '2. XGBoost vainilla',
    description: 'Modelo de machine learning (gradient boosting) que predice goles esperados con objetivo Poisson, alimentado por ratings Elo y forma reciente. Suele ganarle en accuracy a los modelos estadísticos clásicos.',
  },
  {
    key: 'dualhead',
    title: '3. XGBoost dual-head calibrado',
    description: 'Versión con dos cabezas: una clasifica el resultado (1X2) y otra estima goles, calibradas para ser consistentes entre sí. Es el modelo más preciso del proyecto.',
  },
  {
    key: 'montecarlo',
    title: '4. Simulación Monte Carlo',
    description: 'Simula el partido miles de veces (50,000 corridas) usando las probabilidades del modelo dual-head. Muestra si la estimación converge y qué tan variable puede ser el marcador final.',
  },
  {
    key: 'comparacion',
    title: '5. Comparación de modelos',
    description: 'Pone lado a lado los 3 modelos para el mismo partido: en qué coinciden, en qué difieren, y qué marcador modal predice cada uno.',
  },
  {
    key: 'resumen',
    title: '6. Tabla resumen',
    description: 'Concentra las métricas clave de los 3 modelos: xG esperado, probabilidades 1X2, marcador modal y accuracy histórico. El resumen rápido para armar el guión del video.',
  },
];