import { useCountdown } from '../hooks/useCountdown';
import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionDecor from './SectionDecor';
import './CountdownTimer.css';

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(weddingConfig.weddingDate);
  const { ref, isVisible } = useScrollReveal();

  const pad = (num) => String(num).padStart(2, '0');

  const timeUnits = [
    { value: days, label: 'Hari' },
    { value: hours, label: 'Jam' },
    { value: minutes, label: 'Menit' },
    { value: seconds, label: 'Detik' },
  ];

  return (
    <section className={`section countdown-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="section-inner">
        <h2 className="section-title">Menghitung Hari</h2>
        <div className="ornament-divider-sm"></div>

        {isExpired ? (
          <p className="countdown-expired font-heading">
            Hari Bahagia Telah Tiba! 🎉
          </p>
        ) : (
          <div className="countdown-grid">
            {timeUnits.map((unit) => (
              <div className="countdown-box" key={unit.label}>
                <span className="countdown-number">{pad(unit.value)}</span>
                <span className="countdown-label">{unit.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
