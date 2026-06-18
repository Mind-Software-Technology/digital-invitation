import './WishList.css';

const ATTENDANCE_LABELS = {
  hadir: { text: 'Hadir', className: 'badge-hadir' },
  tidak_hadir: { text: 'Tidak Hadir', className: 'badge-tidak' },
  ragu: { text: 'Masih Ragu', className: 'badge-ragu' },
};

export default function WishList({ wishes }) {
  if (!wishes || wishes.length === 0) {
    return (
      <div className="wishlist-empty">
        <p>Belum ada ucapan. Jadilah yang pertama! 💐</p>
      </div>
    );
  }

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="wishlist">
      <p className="wishlist-count">{wishes.length} Ucapan</p>
      <div className="wishlist-scroll">
        {wishes.map((wish) => {
          const badge = ATTENDANCE_LABELS[wish.attendance] || ATTENDANCE_LABELS.ragu;
          return (
            <div className="wish-card" key={wish.id}>
              <div className="wish-card-header">
                <div className="wish-avatar">
                  {wish.name.charAt(0).toUpperCase()}
                </div>
                <div className="wish-card-info">
                  <p className="wish-card-name">{wish.name}</p>
                  <span className={`wish-badge ${badge.className}`}>{badge.text}</span>
                </div>
              </div>
              {wish.message && (
                <p className="wish-card-message">{wish.message}</p>
              )}
              <p className="wish-card-time">{formatTime(wish.createdAt)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
