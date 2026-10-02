import React from 'react';
import { Code2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { otherProjects } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section id="other-projects" className="section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Web & Frontend Repositories</span>
          <h2 className="section-title">Other Projects</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {otherProjects.map((proj, idx) => (
            <div key={idx} className="gradient-border-card">
              <div
                className="card-inner"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(236, 72, 153, 0.12)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FolderGit2 size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>{proj.title}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{proj.category}</span>
                  </div>
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${proj.title} on GitHub`}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="btn-outline"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
