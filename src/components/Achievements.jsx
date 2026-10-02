import React from 'react';
import { Award, Trophy, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Trophy size={15} />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-desc">
            Recognitions for technical leadership, intern squad performance, competitive paper presentations, and continuous academic excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="glow-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)'
              }}
            >
              <div>
                {/* Image Preview if available */}
                {ach.image && (
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--border-subtle)',
                      background: 'rgba(0,0,0,0.3)'
                    }}
                  >
                    <img
                      src={ach.image}
                      alt={ach.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/avatar.jpg';
                      }}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Trophy size={20} style={{ color: 'var(--accent-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.3 }}>
                    {ach.title}
                  </h3>
                </div>

                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.65rem' }}>
                  {ach.organization} {ach.date ? `• ${ach.date}` : ''}
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {ach.description}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700 }}>
                <Star size={14} /> Verified Achievement
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
