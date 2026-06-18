import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for managing background audio playback.
 *
 * @param {string} src - Audio file URL
 * @returns {{ isPlaying: boolean, toggle: Function, play: Function, pause: Function }}
 */
export function useAudioPlayer(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(async () => {
    try {
      await audioRef.current?.play();
    } catch (err) {
      // Browser may block autoplay — user interaction required
      console.warn('Audio play blocked:', err.message);
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (audioRef.current?.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  return { isPlaying, toggle, play, pause };
}
