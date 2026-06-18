import { useScrollReveal } from '../hooks/useScrollReveal';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const { ref, isVisible } = useScrollReveal();

  // Generate placeholder gallery items with CSS gradient backgrounds
  const galleryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Pre-wedding photo ${i + 1}`,
  }));

  return (
    <section className={`section gallery-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <div className="section-inner">
        <h2 className="section-title">Galeri Foto</h2>
        <div className="ornament-divider-sm"></div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.id}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="gallery-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" strokeWidth="1.5" opacity="0.6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
                <span className="gallery-placeholder-text">Foto {item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
