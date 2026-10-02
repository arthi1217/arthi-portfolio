import React from 'react';
import { User, GraduationCap, Target, Lightbulb, BrainCircuit, Code, ShieldCheck, Award } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const bscEdu = education.find(e => e.id === 'bsc-aiml') || education[0];

  const highlightsList = [
    {
      icon: GraduationCap,
      title: "B.Sc. AI & Machine Learning",
      subtitle: bscEdu.institution,
      desc: "Aggregate academic performance of 85% through Semester IV."
    },
    {
      icon: Target,
      title: "AI & ML Engineer Goal",
      subtitle: "Career Objective",
      desc: "Dedicated to designing scalable machine learning, computer vision, and NLP models for real-world enterprise applications."
    },
    {
      icon: BrainCircuit,
      title: "AI/ML Core Focus",
      subtitle: "Technical Expertise",
      desc: "Specialized in SpaCy NLP pipelines, ARIMA time-series forecasting, and OpenCV spatial segmentation algorithms."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving Mindset",
      subtitle: "Analytical Approach",
      desc: "Strong foundation in data structures, mathematical modeling, algorithm optimization, and Python data science suites."
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <User size={15} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            Passionate AI & Machine Learning student dedicated to solving complex problems through data-driven intelligent systems.
          </p>
        </div>

        {/* Genuine Statistics Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '0.4rem'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="about-content-grid"
        >
          {/* Left Summary Box */}
          <div
            className="glow-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--bg-card)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <BrainCircuit size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Arthi R</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    AI & Machine Learning Developer
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {personalInfo.bio}
              </p>

              <div
                style={{
                  background: 'rgba(6, 182, 212, 0.05)',
                  borderLeft: '4px solid var(--accent-cyan)',
                  padding: '1rem 1.25rem',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                  🎓 College Education
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Dr. N.G.P. Arts and Science College, Coimbatore — <strong>B.Sc. AI & ML (85% Aggregate)</strong>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Coimbatore, TN, India</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#10b981' }}>Pursuing Final Year</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="highlights-grid">
            {highlightsList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(139, 92, 246, 0.12)',
                        border: '1px solid rgba(139, 92, 246, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c084fc',
                        marginBottom: '1rem'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                      {item.subtitle}
                    </span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-content-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
