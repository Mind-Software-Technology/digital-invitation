import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import rumahGadangImg from '../assets/rumahgadang.png';
import SectionDecor from './SectionDecor';
import './OpeningDoa.css';

export default function OpeningDoa() {
  const { ref, isVisible: revealed } = useScrollReveal();

  const { prayer } = weddingConfig;

  return (
    <section className={`section opening-doa ${revealed ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="opening-doa-inner">
        {/* Rumah Gadang illustration — Minangkabau heritage */}
        <div className="opening-rumah-gadang">
          <img src={rumahGadangImg} alt="" aria-hidden="true" />
        </div>

        <h2 className="section-title opening-title">{prayer.title}</h2>

        <div className="ornament-divider-sm"></div>

        <p className="opening-arabic font-arabic">{prayer.arabic}</p>

        <p className="opening-translation">{prayer.translation}</p>

        <p className="opening-source">{prayer.source}</p>
      </div>
    </section>
  );
}
