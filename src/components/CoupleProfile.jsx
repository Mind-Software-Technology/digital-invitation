import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CoupleProfile.css';

export default function CoupleProfile() {
  const { ref, isVisible } = useScrollReveal();
  const { groom, bride } = weddingConfig;

  return (
    <section className={`section couple-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <div className="maroon-strip"></div>
      <div className="couple-inner">
        <div className="corner-decor corner-tl"></div>
        <div className="corner-decor corner-tr"></div>
        <div className="corner-decor corner-bl"></div>
        <div className="corner-decor corner-br"></div>
        <div className="floral-decor floral-top-right"></div>
        <div className="floral-decor floral-bottom-left"></div>

        <div className="section-inner">
          {/* Groom */}
          <div className="couple-card couple-groom">
            <div className="couple-photo-frame">
              <div className="couple-photo-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                </svg>
              </div>
            </div>
            <h3 className="couple-name font-script">{groom.fullName}</h3>
            <p className="couple-order">{groom.childOrder}</p>
            <p className="couple-parents">{groom.father} & {groom.mother}</p>
            <a href={groom.instagram} target="_blank" rel="noopener noreferrer" className="couple-ig">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Divider */}
          <div className="couple-divider">
            <span className="couple-heart">&</span>
          </div>

          {/* Bride */}
          <div className="couple-card couple-bride">
            <div className="couple-photo-frame">
              <div className="couple-photo-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                </svg>
              </div>
            </div>
            <h3 className="couple-name font-script">{bride.fullName}</h3>
            <p className="couple-order">{bride.childOrder}</p>
            <p className="couple-parents">{bride.father} & {bride.mother}</p>
            <a href={bride.instagram} target="_blank" rel="noopener noreferrer" className="couple-ig">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="maroon-strip"></div>
    </section>
  );
}
