import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DAYS } from '../config/matches';
import { DAYS_KO } from '../config/matchesKO';

export default function Sidebar({ open, onClose }) {
  const [daysOpen, setDaysOpen] = useState(true);
  const [koOpen, setKoOpen] = useState(true);
  return (
    <aside className={`sidebar${open ? ' open' : ''}`} onClick={e => { if (e.target.closest('a')) onClose?.(); }}>
      <div className="sidebar-logo"><h2>Mundial ML</h2><span>Predicciones con Machine Learning</span></div>
      <nav>
        <div className="sidebar-section-label">Principal</div>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/como-probar">Cómo probar el código</NavLink>
        <NavLink to="/curso">Mini-curso de ML</NavLink>

        <div className="sidebar-section-label">Resultados por día</div>
        <button onClick={() => setDaysOpen(!daysOpen)}>Fase de grupos {daysOpen ? '▾' : '▸'}</button>
        {daysOpen && DAYS.map(d => (<NavLink key={d.id} to={`/resultados/${d.id}`} className="day-link">{d.label}</NavLink>))}

        <div className="sidebar-section-label">Eliminación directa</div>
        <button onClick={() => setKoOpen(!koOpen)}>Eliminación directa {koOpen ? '▾' : '▸'}</button>
        {koOpen && DAYS_KO.map(d => (<NavLink key={d.id} to={`/resultados2/${d.id}`} className="day-link">{d.label}</NavLink>))}

        <div className="sidebar-section-label">Contacto</div>
        <NavLink to="/soporte">Soporte y ayuda</NavLink>
      </nav>
    </aside>
  );
}