import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Industrial Exposure</span>
          </div>
          <h2 className="section-title">Internships & Work Experience</h2>
          <p className="section-desc">
            Hands-on technical engineering experience leading AI intern teams, deploying machine learning algorithms, and engineering healthcare decision systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '2rem'
          }}
          className="timeline-container"
        >
          {/* Vertical Animated Line */}
          <div
            style={{
              position: 'absolute',
              left: '7px',
              top: '10px',
              bottom: '10px',
              width: '3px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 60%, transparent 100%)',
              borderRadius: '3px'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                style={{ position: 'relative' }}
              >
                {/* Timeline Dot Node */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.4rem',
                    top: '1.25rem',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: exp.isLeadership ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                    border: '4px solid var(--bg-surface)',
                    boxShadow: exp.isLeadership ? '0 0 15px var(--accent-cyan)' : '0 0 15px var(--accent-purple)',
                    zIndex: 2
                  }}
                />

                {/* Experience Card */}
                <div
                  className="glow-card"
                  style={{
                    padding: '2rem',
                    background: 'var(--bg-card)'
                  }}
                >
                  {/* Card Top Meta Bar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{exp.role}</h3>
                        {exp.isLeadership && (
                          <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                            <Sparkles size={11} /> Team Leader
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--accent-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({exp.companyTag})</span>
                      </div>
                    </div>

                    {/* Date & Location Badges */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }} className="exp-meta-right">
                      <span
                        className="badge badge-purple"
                        style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}
                      >
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      Key Responsibilities & Achievements
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {exp.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55
                          }}
                        >
                          <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skillsGained.map((skill, sIdx) => (
                      <span key={sIdx} className="badge badge-cyan" style={{ fontSize: '0.78rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          .timeline-container { padding-left: 1.5rem !important; }
          .exp-meta-right { align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
