import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import groomImg from '../assets/mempelai_laki_laki.png';
import brideImg from '../assets/mempelai_perempuan.png';
import SectionDecor from './SectionDecor';
import './CoupleProfile.css';

export default function CoupleProfile() {
  const { ref, isVisible } = useScrollReveal();
  const { groom, bride } = weddingConfig;

  return (
    <section className={`section couple-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="couple-inner">
        <div className="section-inner">
          {/* Groom */}
          <div className="couple-card couple-groom">
            <div className="couple-photo-frame">
              <img src={groomImg} alt={`Foto ${groom.fullName}`} />
            </div>
            <h3 className="couple-name font-script">{groom.fullName}</h3>
            <p className="couple-order">{groom.childOrder}</p>
            <p className="couple-parents">{groom.father} & {groom.mother}</p>
            <a href={groom.instagram} target="_blank" rel="noopener noreferrer" className="couple-ig">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
              <img src={brideImg} alt={`Foto ${bride.fullName}`} />
            </div>
            <h3 className="couple-name font-script">{bride.fullName}</h3>
            <p className="couple-order">{bride.childOrder}</p>
            <p className="couple-parents">{bride.father} & {bride.mother}</p>
            <a href={bride.instagram} target="_blank" rel="noopener noreferrer" className="couple-ig">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
