import { useState, useEffect, useCallback } from 'react';
import WishForm from './WishForm';
import WishList from './WishList';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionDecor from './SectionDecor';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import './WishesSection.css';

const STORAGE_KEY = 'wedding-wishes';
const TABLE = 'wishes';

// Map satu baris Supabase -> bentuk yang dipakai komponen UI
const fromRow = (row) => ({
  id: row.id,
  name: row.name,
  attendance: row.attendance,
  message: row.message || '',
  createdAt: row.created_at,
});

export default function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const { ref, isVisible } = useScrollReveal();

  // Load ucapan saat mount: dari Supabase (terpusat) atau localStorage (fallback)
  useEffect(() => {
    let active = true;

    const load = async () => {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase
          .from(TABLE)
          .select('*')
          .order('created_at', { ascending: false });

        if (!active) return;
        if (error) {
          console.error('Gagal memuat ucapan dari Supabase:', error.message);
          return;
        }
        setWishes(data.map(fromRow));
        return;
      }

      // Fallback: localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setWishes(JSON.parse(stored));
      } catch {
        // ignore parse errors
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  // Realtime: dengarkan ucapan baru dari tamu lain (tanpa refresh)
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const channel = supabase
      .channel('wishes-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: TABLE },
        (payload) => {
          const incoming = fromRow(payload.new);
          // Cegah duplikat: ucapan milik sendiri sudah di-prepend saat submit
          setWishes((prev) =>
            prev.some((w) => w.id === incoming.id) ? prev : [incoming, ...prev]
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Simpan ke localStorage hanya saat fallback (tanpa Supabase)
  useEffect(() => {
    if (!isSupabaseConfigured && wishes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    }
  }, [wishes]);

  const addWish = useCallback(async (wish) => {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase
        .from(TABLE)
        .insert({
          name: wish.name,
          attendance: wish.attendance,
          message: wish.message,
        })
        .select()
        .single();

      if (error) {
        console.error('Gagal mengirim ucapan ke Supabase:', error.message);
        return;
      }
      setWishes((prev) => [fromRow(data), ...prev]);
      return;
    }

    // Fallback: localStorage
    const newWish = {
      ...wish,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setWishes((prev) => [newWish, ...prev]);
  }, []);

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
