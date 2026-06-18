import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import rumahGadangImg from '../assets/rumahgadang.png';
import SectionDecor from './SectionDecor';
import './EventDetails.css';

export default function EventDetails() {
  const { ref, isVisible } = useScrollReveal();
  const { akad, resepsi } = weddingConfig.events;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className={`section event-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="section-inner">
        <h2 className="section-title">Waktu & Tempat</h2>
        <div className="ornament-divider-sm"></div>

        {/* Rumah Gadang illustration — fills the gap, gently floating */}
        <div className="event-rumah-gadang">
          <img src={rumahGadangImg} alt="" aria-hidden="true" />
        </div>

        {/* Akad */}
        <div className="event-card">
          <div className="event-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="event-name font-heading">{akad.title}</h3>
          <p className="event-date">{formatDate(akad.date)}</p>
          <p className="event-time">{akad.time} - {akad.timeEnd} {akad.timezone}</p>
          <div className="ornament-divider-sm"></div>
          <p className="event-venue">{akad.venue}</p>
          <p className="event-address">{akad.address}</p>
        </div>

        <div className="event-separator">
          <span>✦</span>
        </div>

        {/* Resepsi */}
        <div className="event-card">
          <div className="event-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          <h3 className="event-name font-heading">{resepsi.title}</h3>
          <p className="event-date">{formatDate(resepsi.date)}</p>
          <p className="event-time">{resepsi.time} - {resepsi.timeEnd} {resepsi.timezone}</p>
          <div className="ornament-divider-sm"></div>
          <p className="event-venue">{resepsi.venue}</p>
          <p className="event-address">{resepsi.address}</p>
        </div>
      </div>
    </section>
  );
}
