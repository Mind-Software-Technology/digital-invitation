import { useEffect, useState } from 'react';

/**
 * Custom hook for a live countdown timer.
 *
 * @param {string} targetDate - ISO date string for the target date/time
 * @returns {{ days: number, hours: number, minutes: number, seconds: number, isExpired: boolean }}
 */
export function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
