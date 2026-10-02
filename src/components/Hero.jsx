import React from 'react';
import { ArrowRight, Download, Eye, Mail, Sparkles, Brain, Code2, Database, ShieldCheck, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '9rem',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Text & Bio Details */}
          <div>
            {/* Status Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--accent-cyan)',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.15)'
              }}
            >
              <Sparkles size={16} />
              <span>Aspiring AI/ML Engineer & Data Science Specialist</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem'
              }}
            >
              Hi, I'm <span className="gradient-text">Arthi R.</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.35
              }}
            >
              Building practical <span style={{ color: 'var(--accent-cyan)' }}>AI Solutions</span>, Computer Vision & NLP Models
            </h2>

            {/* Intro Paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '620px',
                marginBottom: '2rem'
              }}
            >
              Artificial Intelligence and Machine Learning student with an 85% academic aggregate score. Experienced across 4 internships in building production-grade Machine Learning models, SpaCy NLP pipelines, ARIMA forecasting, and OpenCV computer vision systems. Proven leadership as AIML Team Leader at IndiWebPros.
            </p>

            {/* Quick Skill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.25rem' }}>
              {['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'SQL'].map((skill, idx) => (
                <span
                  key={idx}
                  className="badge badge-cyan"
                  style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}
                >
                  <CheckCircle size={13} /> {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons - All 4 requested buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="btn btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#certificates"
                onClick={(e) => handleScrollTo(e, 'certificates')}
                className="btn btn-outline"
              >
                <Eye size={18} />
                <span>View Certificates</span>
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Arthi_R_Resume_AIML.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn btn-outline"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Image Frame & Live AI Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Glowing Accent Ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-15px',
                borderRadius: '32px',
                background: 'var(--gradient-brand)',
                opacity: 0.25,
                filter: 'blur(30px)',
                zIndex: 0
              }}
            />

            {/* Main Profile Image Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '360px',
                borderRadius: '28px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
              }}
            >
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--bg-surface)',
                  position: 'relative',
                  aspectRatio: '4 / 5'
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt="Arthi R - AI & ML Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = personalInfo.avatarImage;
                  }}
                />

                {/* Ambient Bottom Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 65%, rgba(7, 9, 19, 0.95) 100%)'
                  }}
                />

                {/* Floating Status Pill Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(12, 16, 29, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-active)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 12px #10b981'
                      }}
                    />
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>
                      Ready for AI Roles
                    </span>
                  </div>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Media Queries */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
