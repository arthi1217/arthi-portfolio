import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Stats() {
  return (
    <section id="stats" style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}
        >
          {personalInfo.stats.map((st, idx) => (
            <div key={idx} className="gradient-border-card" style={{ padding: '2px' }}>
              <div className="card-inner" style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.2rem' }} className="gradient-text">
                  {st.value}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {st.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
