import React from 'react';
export default function GraphImage({ src, alt }) {
  if (!src) return (
    <div className="graph-placeholder">
      Gráfica pendiente — coloca el PNG en <code>public/graphs/</code> y actualiza <code>matchesKO.js</code>
    </div>
  );
  return <img src={src} alt={alt} style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />;
}