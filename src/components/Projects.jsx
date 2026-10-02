import React, { useState } from 'react';
import { FolderGit2, Search, Eye, Sparkles, Code2, BrainCircuit, MessageSquareCode, FileSearch, Layers, Globe, Activity, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { allProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai-platform', label: 'AI Platforms' },
    { key: 'healthcare', label: 'Healthcare AI' },
    { key: 'vision', label: 'Computer Vision' },
    { key: 'nlp', label: 'NLP & Document AI' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'web', label: 'Web Applications' }
  ];

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

  // Filter logic
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.categoryKey === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tools.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Open Source & AI Portfolio</span>
          </div>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-desc">
            Production-ready AI platforms, computer vision pipelines, NLP models, and web applications engineered with Python, Scikit-Learn, OpenCV, and React.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {/* Instant Search Bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '450px',
              width: '100%'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search projects by title, model, or tech stack (e.g. OpenCV, SpaCy, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            />
          </div>

          {/* Category Tabs */}
          <div className="filter-tabs" style={{ marginBottom: 0 }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`filter-btn ${selectedCategory === cat.key ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div
            className="glass-card"
            style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'var(--text-muted)'
            }}
          >
            No projects matching "{searchQuery}". Try searching for Python, Vision, or NLP.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredProjects.map((project) => {
              const DomainIcon = getCategoryIcon(project.categoryKey);

              return (
                <div
                  key={project.id}
                  className="glow-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'var(--bg-card)'
                  }}
                >
                  <div>
                    {/* Sleek Dark AI Tech Banner Header (NO certificate images) */}
                    <div
                      onClick={() => setActiveProject(project)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '130px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
                        borderBottom: '1px solid var(--border-subtle)',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      {/* Decorative Domain Icon */}
                      <DomainIcon
                        size={80}
                        style={{
                          position: 'absolute',
                          right: '-10px',
                          bottom: '-15px',
                          opacity: 0.12,
                          color: 'var(--accent-cyan)',
                          pointerEvents: 'none'
                        }}
                      />

                      {/* Category & Featured Badges */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                        <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                          <DomainIcon size={12} /> {project.category}
                        </span>
                        {project.isFeatured && (
                          <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                            <Sparkles size={11} /> Featured AI
                          </span>
                        )}
                      </div>

                      {/* Tech Domain Watermark tag */}
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', zIndex: 2 }}>
                        {project.tools[0]} • {project.tools[1] || 'AI Model'}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div style={{ padding: '1.5rem' }}>
                      <h3
                        onClick={() => setActiveProject(project)}
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 800,
                          marginBottom: '0.5rem',
                          cursor: 'pointer',
                          lineHeight: 1.3
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {project.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '1.1rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {project.summary}
                      </p>

                      {/* Tech Stack Badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                        {project.tools.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              padding: '0.2rem 0.55rem',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(255, 255, 255, 0.04)',
                              color: 'var(--text-muted)',
                              border: '1px solid var(--border-subtle)'
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
                            +{project.tools.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div
                    style={{
                      padding: '1rem 1.5rem 1.25rem 1.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}
                  >
                    <button
                      onClick={() => setActiveProject(project)}
                      className="btn btn-primary btn-sm"
                      style={{ flexGrow: 1, padding: '0.5rem 0.75rem' }}
                    >
                      <Eye size={15} />
                      <span>View Details</span>
                    </button>

                    {/* GitHub Button ONLY if project.github exists and is non-null */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        title="View Source on GitHub"
                        style={{ padding: '0.5rem 0.75rem' }}
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detailed Project Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
