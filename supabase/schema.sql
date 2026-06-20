-- ============================================================
-- Kirim Ucapan / RSVP — Supabase schema
-- Jalankan di: Supabase Dashboard > SQL Editor > New query > Run
-- ============================================================

-- 1. Tabel ucapan
create table if not exists public.wishes (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  attendance  text not null check (attendance in ('hadir', 'tidak_hadir', 'ragu')),
  message     text,
  created_at  timestamptz not null default now()
);

-- Index untuk urut terbaru
create index if not exists wishes_created_at_idx on public.wishes (created_at desc);

-- 2. Aktifkan Row Level Security
alter table public.wishes enable row level security;

-- 3. Policy: siapa pun (anon) boleh BACA semua ucapan
drop policy if exists "Public read wishes" on public.wishes;
create policy "Public read wishes"
  on public.wishes
  for select
  to anon, authenticated
  using (true);

-- 4. Policy: siapa pun (anon) boleh KIRIM ucapan (insert)
drop policy if exists "Public insert wishes" on public.wishes;
create policy "Public insert wishes"
  on public.wishes
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 100
    and attendance in ('hadir', 'tidak_hadir', 'ragu')
    and (message is null or char_length(message) <= 1000)
  );

-- 5. Aktifkan Realtime: tabel ikut dipublikasikan supaya ucapan baru
--    langsung diterima semua tamu tanpa refresh.
alter publication supabase_realtime add table public.wishes;

-- Catatan:
-- - TIDAK ada policy UPDATE/DELETE untuk anon, jadi tamu tidak bisa
--   mengubah/menghapus ucapan orang lain. Pengantin bisa kelola lewat
--   Dashboard (Table Editor) yang memakai service role.
-- - Jika langkah 5 error "table is already member", abaikan — artinya
--   realtime sudah aktif untuk tabel ini.
