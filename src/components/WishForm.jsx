import { useState } from 'react';
import './WishForm.css';

export default function WishForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !attendance) return;

    onSubmit({
      name: name.trim(),
      attendance,
      message: message.trim(),
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    // Reset form
    setName('');
    setAttendance('');
    setMessage('');
  };

  return (
    <form className="wish-form" onSubmit={handleSubmit}>
      <div className="wish-field">
        <label htmlFor="wish-name" className="wish-label">Nama</label>
        <input
          id="wish-name"
          type="text"
          className="wish-input"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="wish-field">
        <label htmlFor="wish-attendance" className="wish-label">Kehadiran</label>
        <select
          id="wish-attendance"
          className="wish-select"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        >
          <option value="" disabled>Kehadiran</option>
          <option value="hadir">Hadir</option>
          <option value="tidak_hadir">Tidak Hadir</option>
          <option value="ragu">Masih Ragu</option>
        </select>
      </div>

      <div className="wish-field">
        <label htmlFor="wish-message" className="wish-label">Komentar atau Ucapan</label>
        <textarea
          id="wish-message"
          className="wish-textarea"
          placeholder="Komentar atau Ucapan"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn-gold wish-submit-btn">
        Kirim
      </button>

      {submitted && (
        <p className="wish-success">✓ Ucapan berhasil dikirim!</p>
      )}
    </form>
  );
}
