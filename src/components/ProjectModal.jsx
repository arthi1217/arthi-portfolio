import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Layers, Sparkles, CheckCircle2, BrainCircuit, FileSearch, Eye, Globe, Activity, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'ai-platform': return BrainCircuit;
      case 'healthcare': return Activity;
      case 'vision': return Eye;
      case 'nlp': return FileSearch;
      case 'ml': return Cpu;
      case 'web': return Globe;
      default: return Code2;
    }
  };

  const DomainIcon = getCategoryIcon(project.categoryKey);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px' }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-cyan">{project.category}</span>
            {project.isFeatured && (
              <span className="badge badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Sparkles size={12} /> Featured Project
              </span>
            )}
          </div>

          <button onClick={onClose} className="modal-close-btn" aria-label="Close Project Modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Sleek Dark AI Tech Banner Header */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              padding: '2rem 1.75rem',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '1.75rem',
              border: '1px solid var(--border-subtle)',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '160px'
            }}
          >
            {/* Background Decorative Icon */}
            <DomainIcon
              size={120}
              style={{
                position: 'absolute',
                right: '-15px',
                bottom: '-25px',
                opacity: 0.12,
                color: 'var(--accent-cyan)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ zIndex: 2 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                {project.category} Architecture
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                {project.title}
              </h2>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 2, marginTop: '1rem' }}>
              {project.tools.map((t, idx) => (
                <span key={idx} className="badge badge-purple" style={{ fontSize: '0.78rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description & Problem Solved */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.75rem' }} className="modal-grid-2">
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Cpu size={16} /> Project Overview
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem', borderLeft: '3px solid var(--accent-purple)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c084fc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} /> Problem Solved
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem' }}>
                ⚡ Key Features & Capabilities
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions Bar */}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flexGrow: 1 }}
              >
                <GithubIcon size={18} />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ flexGrow: 1 }}
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            ) : (
              <button onClick={onClose} className="btn btn-outline" style={{ flexGrow: 0.5 }}>
                Close Preview
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          .modal-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
