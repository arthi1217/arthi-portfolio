import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

export default function CertificateModal({ certificates, currentIndex, setCurrentIndex, onClose }) {
  const [zoomScale, setZoomScale] = useState(1);
  const touchStartX = useRef(0);

  const total = certificates.length;
  const currentCert = certificates[currentIndex];

  // Handle keyboard navigation (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, total]);

  // Reset zoom on certificate change
  useEffect(() => {
    setZoomScale(1);
  }, [currentIndex]);

  if (!currentCert) return null;

  const imagePath = `/assets/certificates/${encodeURIComponent(currentCert.filename)}`;
  const downloadPath = currentCert.pdf ? `/assets/certificates/${currentCert.pdf}` : imagePath;
  const downloadFilename = currentCert.pdf || currentCert.filename;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext(); // Swiped left -> next certificate
      } else {
        handlePrev(); // Swiped right -> previous certificate
      }
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        padding: '1rem',
        background: 'rgba(3, 7, 18, 0.95)',
        zIndex: 10000
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          maxWidth: '1100px',
          width: '100%',
          height: '92vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#070a13',
          border: '1px solid var(--border-glow)',
          overflow: 'hidden'
        }}
      >
        {/* Top Controls Toolbar */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            background: 'rgba(12, 16, 29, 0.9)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            zIndex: 10
          }}
        >
          {/* Certificate Metadata Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                background: 'rgba(6, 182, 212, 0.12)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(6, 182, 212, 0.25)'
              }}
            >
              Certificate {currentIndex + 1} of {total}
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#fff' }}>
                {currentCert.title}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {currentCert.provider} {currentCert.date ? `• ${currentCert.date}` : ''}
              </div>
            </div>
          </div>

          {/* Zoom & Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {/* Zoom Controls */}
            <button
              onClick={handleZoomOut}
              className="btn btn-outline btn-sm"
              title="Zoom Out (-)"
              style={{ padding: '0.4rem 0.6rem' }}
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              className="btn btn-outline btn-sm"
              title="Fit to Screen (1:1)"
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.75rem' }}
            >
              <RotateCcw size={14} />
              <span>{Math.round(zoomScale * 100)}%</span>
            </button>
            <button
              onClick={handleZoomIn}
              className="btn btn-outline btn-sm"
              title="Zoom In (+)"
              style={{ padding: '0.4rem 0.6rem' }}
            >
              <ZoomIn size={16} />
            </button>

            <span style={{ width: '1px', height: '20px', background: 'var(--border-subtle)', margin: '0 0.25rem' }} />

            {/* Open in New Tab */}
            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              title="Open Image in New Tab"
              style={{ padding: '0.4rem 0.65rem' }}
            >
              <ExternalLink size={16} />
            </a>

            {/* Direct Download Button */}
            <a
              href={downloadPath}
              download={downloadFilename}
              className="btn btn-primary btn-sm"
              title="Download Certificate File"
              style={{ padding: '0.4rem 0.85rem' }}
            >
              <Download size={16} />
              <span className="hide-on-mobile">{currentCert.pdf ? 'PDF' : 'Download'}</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="modal-close-btn"
              title="Close (Esc)"
              style={{ marginLeft: '0.25rem' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Lightbox Display Area with Navigation Overlay */}
        <div
          style={{
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            background: 'radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, rgba(3, 7, 18, 1) 100%)',
            padding: '1.5rem'
          }}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(12, 16, 29, 0.85)',
              border: '1px solid var(--border-active)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-cyan)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(12, 16, 29, 0.85)')}
            aria-label="Previous Certificate"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Certificate Image Preview with Pan/Zoom Scale */}
          <div
            style={{
              transform: `scale(${zoomScale})`,
              transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={imagePath}
              alt={currentCert.title}
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onError={(e) => {
                e.currentTarget.src = '/avatar.jpg';
              }}
            />
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(12, 16, 29, 0.85)',
              border: '1px solid var(--border-active)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-cyan)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(12, 16, 29, 0.85)')}
            aria-label="Next Certificate"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Bottom Description & PDF Attachment Notice */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            background: 'rgba(12, 16, 29, 0.95)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {currentCert.description || 'Verified credential asset file from portfolio archive.'}
          </p>

          {currentCert.pdf && (
            <a
              href={`/assets/certificates/${currentCert.pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-cyan"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
            >
              <FileText size={13} /> Official PDF Verified
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
