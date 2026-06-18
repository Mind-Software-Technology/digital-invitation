import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses IntersectionObserver to detect when an element enters the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.15
 * @param {boolean} options.once - If true, animates only once (default true)
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
