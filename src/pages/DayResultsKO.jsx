import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DAYS_KO, getKOMatchesByDay } from '../config/matchesKO';
import MatchCard from '../components/MatchCard';

export default function DayResultsKO() {
  const { dayId } = useParams();
  const day = DAYS_KO.find(d => d.id === dayId) || DAYS_KO[0];
  const matches = getKOMatchesByDay(day.id);
  return (<div>
    <h1 style={{ marginBottom: '0.3rem' }}>Predicciones</h1>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Eliminación directa · {day.full}</p>
    <div className="data-note">
      <strong>Nota:</strong> A partir de esta fase el modelo incorpora resultados reales de rondas anteriores.
      Se recomienda ejecutar el notebook antes de cada partido para obtener las estimaciones más actualizadas.
    </div>
    <div className="day-tabs">
      {DAYS_KO.map(d => (
        <Link key={d.id} to={`/resultados2/${d.id}`} className={`day-tab${d.id === day.id ? ' active' : ''}`}>{d.label}</Link>
      ))}
    </div>
    {matches.length > 0 ? (
      <div className="matches-grid">{matches.map(m => <MatchCard key={m.id} match={m} baseRoute="/partido2" />)}</div>
    ) : (
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>No hay partidos para este día. Edita <code style={{ color: 'var(--accent)' }}>src/config/matchesKO.js</code>.</p>
      </div>
    )}
  </div>);
}