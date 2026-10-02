import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, Eye, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo, skillsCategories, experiences } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <FileText size={15} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Resume & Qualifications</h2>
          <p className="section-desc">
            Download the verified PDF curriculum vitae detailing academic achievements, 4 industrial internships, technical AI/ML skills, and open-source project repositories.
          </p>
        </div>

        {/* Resume Preview Banner Card */}
        <div
          className="glow-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'var(--bg-card)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(6, 182, 212, 0.4)'
                }}
              >
                <FileText size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Arthi R. - Official Resume PDF</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  Aspiring AI/ML Engineer & Data Science Specialist
                </p>
              </div>
            </div>

            {/* Main Download CTA Button */}
            <a
              href={personalInfo.resumePdf}
              download="Arthi_R_Resume_AIML.pdf"
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <Download size={20} />
              <span>Download Official Resume</span>
            </a>
          </div>

          {/* Key Summary Highlights Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <UserCheck size={16} style={{ color: 'var(--accent-cyan)' }} /> Education & Score
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                B.Sc. Artificial Intelligence and Machine Learning at Dr. N.G.P. Arts and Science College, Coimbatore. <strong>85% Aggregate Score</strong> through Semester IV.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} style={{ color: 'var(--accent-purple)' }} /> Internship Experience
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                4 Industrial Internships including AIML Team Leader at IndiWebPros, KMCH Healthcare IT, CodSoft Document AI, and Prodigy InfoTech.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} /> Accredited Credentials
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                24 Verified certifications from IBM SkillsBuild, Infosys, Kaggle, NPTEL, GUVI, and E-Box covering Machine Learning, Computer Vision, and Data Science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
