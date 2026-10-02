import React, { useState } from 'react';
import { Layers, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects } from '../data/portfolioData';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Platform', 'Healthcare AI', 'NLP / Document AI', 'Computer Vision', 'Image Processing'];

  const filtered = filter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === filter);

  return (
    <section id="featured-projects" className="section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Flagship Engineering</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Categories Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: '1px solid',
                borderColor: filter === cat ? 'transparent' : 'var(--border-color)',
                background: filter === cat ? 'var(--gradient-brand)' : 'var(--bg-card)',
                color: filter === cat ? '#fff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filtered.map((proj) => (
            <div key={proj.id} className="gradient-border-card">
              <div className="card-inner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge" style={{ fontSize: '0.75rem' }}>
                      <Layers size={12} />
                      <span>{proj.category}</span>
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Featured AI</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                    {proj.tools.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(236, 72, 153, 0.1)',
                          color: 'var(--accent-primary)',
                          border: '1px solid rgba(236, 72, 153, 0.25)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flexGrow: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                  >
                    <GithubIcon size={18} />
                    <span>View Repository</span>
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
