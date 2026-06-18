import './AudioPlayer.css';

export default function AudioPlayer({ isPlaying, onToggle }) {
  return (
    <button
      className={`audio-player ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      <div className="audio-icon">
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.999 14.942l2.001 1.542V7.516l-2.001 1.542v5.884zM12 3.009S6.04 7.127 4 8.068v7.864c2.04.941 8 5.059 8 5.059s5.96-4.118 8-5.059V8.068c-2.04-.941-8-5.059-8-5.059zM7 14V10h2l3-3v10l-3-3H7z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 14V10h2l3-3v10l-3-3H7zm9.36-1.36a3 3 0 000-4.28l-1.42 1.42a1 1 0 010 1.42l1.42 1.44z" />
            <path d="M18.07 4.93a7 7 0 010 9.9l-1.42-1.42a5 5 0 000-7.07l1.42-1.41z" opacity="0.5"/>
          </svg>
        )}
      </div>
      {isPlaying && (
        <div className="audio-bars">
          <span></span><span></span><span></span>
        </div>
      )}
    </button>
  );
}
