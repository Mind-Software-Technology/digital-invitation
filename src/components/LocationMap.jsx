import { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionDecor from './SectionDecor';
import './LocationMap.css';

export default function LocationMap() {
  const [showMap, setShowMap] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const { location } = weddingConfig;

  return (
    <section className={`section location-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="location-inner">
        <div className="section-inner">
          <h2 className="section-title">Lokasi Acara</h2>
          <div className="ornament-divider-sm"></div>

          <div className="location-map-container">
            {showMap ? (
              <div className="location-map-wrapper">
                <button className="location-close-btn" onClick={() => setShowMap(false)} aria-label="Tutup peta">
                  ✕
                </button>
                <iframe
                  className="location-iframe"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=14&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Pernikahan"
                ></iframe>
              </div>
            ) : (
              <button className="location-show-map-btn" onClick={() => setShowMap(true)}>
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Tampilkan Peta</span>
              </button>
            )}
          </div>

          <div className="location-info">
            <p className="location-label">✦ {location.label} ✦</p>
            <p className="location-address">{location.address}</p>
          </div>

          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold location-direction-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Petunjuk Ke Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
