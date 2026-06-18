import { useState, useEffect } from 'react';
import WishForm from './WishForm';
import WishList from './WishList';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionDecor from './SectionDecor';
import './WishesSection.css';

const STORAGE_KEY = 'wedding-wishes';

export default function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const { ref, isVisible } = useScrollReveal();

  // Load wishes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    }
  }, [wishes]);

  const addWish = (wish) => {
    const newWish = {
      ...wish,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <section className={`section wishes-section ${isVisible ? 'revealed' : ''}`} ref={ref}>
      <SectionDecor />
      <div className="section-inner">
        <h2 className="section-title">Kirim Ucapan</h2>
        <div className="ornament-divider-sm"></div>

        <WishForm onSubmit={addWish} />
        <WishList wishes={wishes} />
      </div>
    </section>
  );
}
