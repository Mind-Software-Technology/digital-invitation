import { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WeddingGift.css';

export default function WeddingGift() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal();
  const { bankAccounts } = weddingConfig;

  const handleCopy = async (accountNumber, index) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const handleConfirm = () => {
    const message = encodeURIComponent('Halo, saya ingin mengkonfirmasi bukti transfer untuk wedding gift Ismy & Handi.');
    window.open(`${weddingConfig.social.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className={`section gift-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <div className="maroon-strip"></div>
      <div className="gift-inner">
        <div className="corner-decor corner-tl"></div>
        <div className="corner-decor corner-tr"></div>
        <div className="corner-decor corner-bl"></div>
        <div className="corner-decor corner-br"></div>
        <div className="floral-decor floral-bottom-left"></div>
        <div className="floral-decor floral-bottom-right"></div>

        <div className="section-inner">
          <h2 className="section-title">Wedding Gift</h2>
          <p className="gift-text">
            Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.
          </p>

          {bankAccounts.map((account, i) => (
            <div className="bank-card" key={i}>
              <div className="bank-card-header">
                <span className="bank-name">{account.bank}</span>
                <div className="bank-logo-placeholder">
                  <span className="bank-logo-text">{account.bank.replace('BANK ', '')}</span>
                </div>
              </div>

              <div className="bank-chip">
                <svg width="36" height="28" viewBox="0 0 36 28">
                  <rect x="0" y="0" width="36" height="28" rx="4" fill="#C9A96E"/>
                  <line x1="0" y1="8" x2="36" y2="8" stroke="#B8860B" strokeWidth="0.5"/>
                  <line x1="0" y1="14" x2="36" y2="14" stroke="#B8860B" strokeWidth="0.5"/>
                  <line x1="0" y1="20" x2="36" y2="20" stroke="#B8860B" strokeWidth="0.5"/>
                  <line x1="12" y1="0" x2="12" y2="28" stroke="#B8860B" strokeWidth="0.5"/>
                  <line x1="24" y1="0" x2="24" y2="28" stroke="#B8860B" strokeWidth="0.5"/>
                </svg>
              </div>

              <p className="bank-number">{account.accountNumber}</p>

              <button
                className="bank-copy-btn"
                onClick={() => handleCopy(account.accountNumber, i)}
              >
                {copiedIndex === i ? '✓ Tersalin!' : 'Salin Rekening'}
              </button>

              <p className="bank-holder">a/n {account.accountName}</p>
            </div>
          ))}

          <button className="btn-gold gift-confirm-btn" onClick={handleConfirm}>
            Konfirmasi Bukti Trf
          </button>
        </div>
      </div>
      <div className="maroon-strip"></div>
    </section>
  );
}
