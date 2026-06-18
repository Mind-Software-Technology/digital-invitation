import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import floralImg from '../assets/21_april_11.png';
import './OpeningDoa.css';

export default function OpeningDoa() {
  const { ref, isVisible: revealed } = useScrollReveal();

  const { prayer } = weddingConfig;

  return (
    <section className={`section opening-doa ${revealed ? 'revealed' : ''}`} ref={ref}>
      <div className="maroon-strip"></div>

      <div className="opening-doa-inner oval-frame">
        {/* Corner decorations */}
        <div className="corner-decor corner-tl"></div>
        <div className="corner-decor corner-tr"></div>
        <div className="corner-decor corner-bl"></div>
        <div className="corner-decor corner-br"></div>
        <div className="floral-decor floral-top-left">
          <img src={floralImg} alt="" aria-hidden="true" />
        </div>
        <div className="floral-decor floral-top-right">
          <img src={floralImg} alt="" aria-hidden="true" />
        </div>
        <div className="floral-decor floral-bottom-left">
          <img src={floralImg} alt="" aria-hidden="true" />
        </div>
        <div className="floral-decor floral-bottom-right">
          <img src={floralImg} alt="" aria-hidden="true" />
        </div>

        {/* Crown icon */}
        <div className="opening-icon">
          <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
            <path d="M4 28L10 8L18 20L24 4L30 20L38 8L44 28H4Z" fill="var(--blue-primary)" stroke="var(--blue-dark)" strokeWidth="1.5" />
            <rect x="4" y="28" width="40" height="6" rx="2" fill="var(--blue-primary)" stroke="var(--blue-dark)" strokeWidth="1" />
            <circle cx="12" cy="28" r="2" fill="var(--blue-dark)" />
            <circle cx="24" cy="28" r="2" fill="var(--gold-accent)" />
            <circle cx="36" cy="28" r="2" fill="var(--blue-dark)" />
          </svg>
        </div>

        <h2 className="section-title opening-title">{prayer.title}</h2>

        <p className="opening-arabic font-arabic">{prayer.arabic}</p>

        <p className="opening-translation">{prayer.translation}</p>

        <p className="opening-source">{prayer.source}</p>
      </div>

      <div className="maroon-strip"></div>
    </section>
  );
}
