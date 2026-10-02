import React, { useState } from 'react';
import { Sparkles, Code2, BrainCircuit, LineChart, Globe, Terminal, Cpu, Database, Eye, MessageSquareCode, Boxes, Layers, FileCode, BarChart3, Brain, TrendingUp, FileSearch, Calculator, Table, PieChart, LayoutDashboard, Layout, Component, Server, GitBranch, Lightbulb, Users, Target, MessageCircle, Compass, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap = {
  Code2, BrainCircuit, LineChart, Globe, Sparkles,
  Terminal, Database, Cpu, Layers, FileCode, BarChart3,
  Brain, MessageSquareCode, Eye, Boxes, TrendingUp, FileSearch,
  Calculator, Table, PieChart, LayoutDashboard, Layout, Component,
  Server, GitBranch, Lightbulb, Users, Target, MessageCircle, Compass
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Toolstack</h2>
          <p className="section-desc">
            Organized domain expertise across Machine Learning, Data Science, Artificial Intelligence, and Software Engineering.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="filter-tabs">
          <button
            onClick={() => setActiveTab('all')}
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Skills
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {skillsCategories
            .filter((cat) => activeTab === 'all' || activeTab === cat.id)
            .map((category) => {
              const CategoryIcon = iconMap[category.icon] || Code2;

              return (
                <div key={category.id} className="glow-card" style={{ padding: '2rem' }}>
                  {/* Category Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                        <CategoryIcon size={22} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{category.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{category.description}</p>
                      </div>
                    </div>

                    <span className="badge badge-purple">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Grid - Modern Cards without progress bars */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1.15rem'
                    }}
                  >
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = iconMap[skill.icon] || CheckCircle2;

                      return (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.025)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.1rem 1.25rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.85rem',
                            transition: 'all 0.25s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.05)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '8px',
                              background: 'rgba(139, 92, 246, 0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#c084fc',
                              flexShrink: 0
                            }}
                          >
                            <SkillIcon size={18} />
                          </div>

                          <div style={{ flexGrow: 1 }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '0.25rem'
                              }}
                            >
                              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {skill.name}
                              </h4>
                            </div>

                            <span
                              style={{
                                display: 'inline-block',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                color: 'var(--accent-cyan)',
                                background: 'rgba(6, 182, 212, 0.1)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: 'var(--radius-full)',
                                marginBottom: '0.35rem'
                              }}
                            >
                              {skill.tag}
                            </span>

                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                              {skill.note}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
