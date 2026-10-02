import React from 'react';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { mlProjects } from '../data/portfolioData';

export default function MLProjects() {
  return (
    <section id="ml-projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Intelligent Models & Pipelines</span>
          <h2 className="section-title">Machine Learning Projects</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {mlProjects.map((proj) => (
            <div key={proj.id} className="gradient-border-card">
              <div className="card-inner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.65rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span className="badge" style={{ fontSize: '0.74rem' }}>{proj.category}</span>
                    <Cpu size={18} style={{ color: 'var(--accent-primary)' }} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {proj.tools.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(236, 72, 153, 0.08)',
                          color: 'var(--accent-primary)',
                          border: '1px solid rgba(236, 72, 153, 0.2)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flexGrow: 1, padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Repo</span>
                  </a>
                  <a
                    href={proj.linkedinDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                  >
                    <LinkedinIcon size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
