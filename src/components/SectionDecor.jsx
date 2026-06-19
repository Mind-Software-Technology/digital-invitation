// Corner-trimmed copies (transparent padding removed) so the artwork sits
// flush in each section corner. The padded originals stay reserved for CoverPage.
import bungaImg from '../assets/bunga-corner.png';
import ornamenImg from '../assets/ornamen-corner.png';
import './SectionDecor.css';

/**
 * Decorative corners rendered inside every section.
 * Each of the four corners carries BOTH a gold ornament and a floral cluster
 * so the framing stays balanced (symmetrical), matching the reference design.
 *
 * Layout layers:
 *  - `.sd-slot`  → positions a corner and mirrors it (flip) so all four match.
 *  - `.sd-corner` (img) → handles the one-time fade/scale entrance, fired when
 *    the parent `.section` gains the `revealed` class. Keeping flip on the slot
 *    and scale on the img means the two transforms never conflict.
 */
export default function SectionDecor() {
  return (
    <div className="section-decor" aria-hidden="true">
      <div className="sd-slot sd-tl">
        <img src={ornamenImg} className="sd-corner sd-ornamen" alt="" />
        <img src={bungaImg} className="sd-corner sd-flower" alt="" />
      </div>
      <div className="sd-slot sd-tr">
        <img src={ornamenImg} className="sd-corner sd-ornamen" alt="" />
        <img src={bungaImg} className="sd-corner sd-flower" alt="" />
      </div>
      <div className="sd-slot sd-bl">
        <img src={ornamenImg} className="sd-corner sd-ornamen" alt="" />
        <img src={bungaImg} className="sd-corner sd-flower" alt="" />
      </div>
      <div className="sd-slot sd-br">
        <img src={ornamenImg} className="sd-corner sd-ornamen" alt="" />
        <img src={bungaImg} className="sd-corner sd-flower" alt="" />
      </div>
    </div>
  );
}
