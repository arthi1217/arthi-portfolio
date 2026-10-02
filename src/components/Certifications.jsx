import React, { useState } from 'react';
import { Shield, Search, Eye, Download, ShieldCheck, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { certificateFilesList } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIndex, setModalIndex] = useState(null);

  const categories = [
    { key: 'all', label: `All Certificates (${certificateFilesList.length})` },
    { key: 'ai', label: 'AI & Deep Learning' },
    { key: 'datascience', label: 'Data Science & ML' },
    { key: 'vision', label: 'Computer Vision & Robotics' },
    { key: 'internship', label: 'Internships & Experience' },
    { key: 'workshop', label: 'Industry & Workshops' },
    { key: 'programming', label: 'Programming & Web' }
  ];

  // Filtered array of certificates
  const filteredCertificates = certificateFilesList.filter((cert) => {
    const matchesCat =
      selectedCategory === 'all' || cert.categoryKey === selectedCategory;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      cert.title.toLowerCase().includes(q) ||
      cert.provider.toLowerCase().includes(q) ||
      cert.category.toLowerCase().includes(q) ||
      cert.filename.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  const handleOpenModal = (cert) => {
    const idx = certificateFilesList.findIndex((c) => c.id === cert.id);
    if (idx !== -1) setModalIndex(idx);
  };

  return (
    <section id="certificates" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-tag">
            <Shield size={15} />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="section-title">Certifications Gallery</h2>
          <p className="section-desc">
            Complete archive of 24 verified industry certificates, internship completions, research paper presentation awards, and specialized AI accreditations.
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
          {/* Search Input Bar */}
          <div style={{ position: 'relative', maxWidth: '450px', width: '100%' }}>
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
              placeholder="Search 24 certificates by provider or title (e.g. IBM, Infosys, GUVI)..."
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

        {/* Certificate Cards Grid */}
        {filteredCertificates.length === 0 ? (
          <div
            className="glass-card"
            style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'var(--text-muted)'
            }}
          >
            No certificates found matching "{searchQuery}". Try clearing search filter.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredCertificates.map((cert) => {
              const encodedImg = `/assets/certificates/${encodeURIComponent(cert.filename)}`;
              const downloadPath = cert.pdf ? `/assets/certificates/${cert.pdf}` : encodedImg;
              const downloadName = cert.pdf || cert.filename;

              return (
                <div
                  key={cert.id}
                  className="glow-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'var(--bg-card)'
                  }}
                >
                  <div>
                    {/* Thumbnail Preview Area */}
                    <div
                      onClick={() => handleOpenModal(cert)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '190px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        background: 'rgba(0, 0, 0, 0.4)'
                      }}
                      title="Click to open full certificate preview"
                    >
                      <img
                        src={encodedImg}
                        alt={cert.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        onError={(e) => {
                          e.currentTarget.src = '/avatar.jpg';
                        }}
                      />

                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, transparent 50%, rgba(7, 9, 19, 0.85) 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: '0.75rem 1rem',
                          color: '#fff',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          gap: '0.4rem'
                        }}
                      >
                        <Eye size={15} style={{ color: 'var(--accent-cyan)' }} />
                        <span>Click to Enlarge Lightbox</span>
                      </div>

                      {/* Provider Badge Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          left: '0.75rem',
                          right: '0.75rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                          {cert.category}
                        </span>
                        <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} />
                      </div>
                    </div>

                    {/* Card Text Content */}
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <h3
                        onClick={() => handleOpenModal(cert)}
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 800,
                          marginBottom: '0.35rem',
                          lineHeight: 1.35,
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {cert.title}
                      </h3>

                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--accent-cyan)',
                          marginBottom: '0.65rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <span>{cert.provider}</span>
                        {cert.date && <span style={{ color: 'var(--text-muted)' }}>• {cert.date}</span>}
                      </div>

                      <p
                        style={{
                          fontSize: '0.84rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer Buttons */}
                  <div
                    style={{
                      padding: '1rem 1.5rem 1.25rem 1.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      gap: '0.6rem'
                    }}
                  >
                    <button
                      onClick={() => handleOpenModal(cert)}
                      className="btn btn-primary btn-sm"
                      style={{ flexGrow: 1, padding: '0.5rem 0.75rem' }}
                    >
                      <Eye size={15} />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={downloadPath}
                      download={downloadName}
                      className="btn btn-outline btn-sm"
                      title="Download Certificate File"
                      style={{ padding: '0.5rem 0.75rem' }}
                    >
                      <Download size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Full-Screen Certificate Lightbox Modal */}
      {modalIndex !== null && (
        <CertificateModal
          certificates={certificateFilesList}
          currentIndex={modalIndex}
          setCurrentIndex={setModalIndex}
          onClose={() => setModalIndex(null)}
        />
      )}
    </section>
  );
}
