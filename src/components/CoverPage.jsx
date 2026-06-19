import { useMemo } from 'react';
import frameBg from '../assets/framebackground.png';
import bungaImg from '../assets/bunga.png';
import ornamenImg from '../assets/ornamen.png';
import './CoverPage.css';

export default function CoverPage({ onOpen, isClosing }) {
  // Personalized guest name comes straight from the URL (?to=...), e.g.
  // ?to=Alumni+smp+22+Akt+20 → "Alumni smp 22 Akt 20". URLSearchParams decodes
  // both "+" and "%20" to spaces. The URL itself is the storage — no backend,
  // no device cache — so each guest gets their own shareable link.
  const guestName = useMemo(() => {
    const raw = new URLSearchParams(window.location.search).get('to');
    if (!raw) return 'Tamu Undangan';
    const clean = raw.trim().replace(/\s+/g, ' ').slice(0, 60); // tidy + length guard
    return clean || 'Tamu Undangan';
  }, []);

  return (
    <div className={`cover ${isClosing ? 'closing' : ''}`}>
      {/* Floral frame background — oval card */}
      <div className="cover-frame" aria-hidden="true">
        <img src={frameBg} alt="" />
      </div>

      {/* Corner decorations — gold ornaments (TL & BR), flowers (TR & BL) */}
      <img src={ornamenImg} className="cover-corner corner-ornamen-tl" alt="" aria-hidden="true" />
      <img src={bungaImg} className="cover-corner corner-flower-tr" alt="" aria-hidden="true" />
      <img src={bungaImg} className="cover-corner corner-flower-bl" alt="" aria-hidden="true" />
      <img src={ornamenImg} className="cover-corner corner-ornamen-br" alt="" aria-hidden="true" />

      <div className="cover-content">
        <p className="cover-label">The Wedding of</p>

        <div className="cover-names">
          <h1 className="cover-name font-script">Rani</h1>
          <span className="cover-ampersand">&</span>
          <h1 className="cover-name font-script">Niko</h1>
        </div>

        <div className="ornament-divider"></div>

        <p className="cover-date">26 Juni 2026</p>

        <div className="cover-guest">
          <p className="cover-guest-label">Kepada Yth. Bapak/Ibu/Saudara/i :</p>
          <p className="cover-guest-name">{guestName}</p>
          <p className="cover-guest-note">
            Mohon maaf apabila ada kesalahan dalam penulisan nama/gelar.
          </p>
        </div>

        <button className="btn-gold cover-btn" onClick={onOpen}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3,5 12,13 21,5" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
