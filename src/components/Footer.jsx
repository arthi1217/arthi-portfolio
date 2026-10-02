import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                AR
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>Arthi R.</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Aspiring AI & Machine Learning Engineer specializing in Computer Vision, NLP, Deep Learning, and Healthcare Decision Support Systems.
            </p>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                title="LinkedIn"
                style={{ padding: '0.45rem' }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                title="GitHub"
                style={{ padding: '0.45rem' }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-outline btn-sm"
                title="Email"
                style={{ padding: '0.45rem' }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</a></li>
              <li><a href="#about" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>About Me</a></li>
              <li><a href="#skills" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Skills & Tools</a></li>
              <li><a href="#projects" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>AI Projects</a></li>
            </ul>
          </div>

          {/* Credentials Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Credentials
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <li><a href="#experience" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>4 Internships</a></li>
              <li><a href="#certificates" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>24 Certificates</a></li>
              <li><a href="#education" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Education (85%)</a></li>
              <li><a href="#achievements" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Honors & Awards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact
            </h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <div>{personalInfo.email}</div>
              <div>{personalInfo.phone}</div>
              <div>Coimbatore, Tamil Nadu</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back-To-Top Button */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Arthi R. All rights reserved. Designed for AI/ML Engineering & MNC Placements.
          </div>

          <button
            onClick={handleScrollTop}
            className="btn btn-outline btn-sm"
            style={{ padding: '0.45rem 0.85rem' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
