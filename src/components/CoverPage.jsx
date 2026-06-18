import { useMemo } from 'react';
import wreathImg from '../assets/watercolor_yellow_blue_flower_wreath_with_circles.jpg';
import './CoverPage.css';

export default function CoverPage({ onOpen, isClosing }) {
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('to') || 'Tamu Undangan';
  }, []);

  return (
    <div className={`cover ${isClosing ? 'closing' : ''}`}>
      {/* Wreath decoration */}
      <div className="cover-wreath">
        <img src={wreathImg} alt="" aria-hidden="true" />
      </div>

      {/* Corner decorations */}
      <div className="corner-decor corner-tl"></div>
      <div className="corner-decor corner-tr"></div>
      <div className="corner-decor corner-bl"></div>
      <div className="corner-decor corner-br"></div>

      <div className="cover-content">
        <p className="cover-label">The Wedding of</p>

        <div className="cover-names">
          <h1 className="cover-name font-script">Ismy</h1>
          <span className="cover-ampersand">&</span>
          <h1 className="cover-name font-script">Handi</h1>
        </div>

        <div className="ornament-divider"></div>

        <p className="cover-date">15 Agustus 2026</p>

        <div className="cover-guest">
          <p className="cover-guest-label">Kepada Yth.</p>
          <p className="cover-guest-name">{guestName}</p>
        </div>

        <button className="btn-gold cover-btn" onClick={onOpen}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3,5 12,13 21,5" />
          </svg>
          Buka Undangan
        </button>
      </div>

      {/* Navy decorative strips */}
      <div className="cover-strip cover-strip-top"></div>
      <div className="cover-strip cover-strip-bottom"></div>
    </div>
  );
}
