/**
 * Wedding Configuration — Central data source for the entire invitation.
 * Replace placeholder values with real data before deployment.
 */
export const weddingConfig = {
  // ─── Couple ────────────────────────────────────────────
  groom: {
    name: 'Handi',
    fullName: 'Handi Saputra',
    father: 'Bpk. Ahmad Saputra',
    mother: 'Ibu Sari Dewi',
    childOrder: 'Putra Pertama dari',
    photo: '/images/groom.jpg',
    instagram: 'https://instagram.com/handi',
  },
  bride: {
    name: 'Ismy',
    fullName: 'Ismy Jumiati',
    father: 'Bpk. Jumadi',
    mother: 'Ibu Ratna Sari',
    childOrder: 'Putri Kedua dari',
    photo: '/images/bride.jpg',
    instagram: 'https://instagram.com/ismy',
  },

  // ─── Events ────────────────────────────────────────────
  events: {
    akad: {
      title: 'Akad Nikah',
      date: '2026-08-15',
      time: '08:00',
      timeEnd: '10:00',
      timezone: 'WIB',
      venue: 'Kediaman Mempelai Wanita',
      address:
        'Koto Keduduk, Kenagarian Taluk Tigo Sakato, Kec. Batang Kapas, Kab. Pesisir Selatan',
    },
    resepsi: {
      title: 'Resepsi',
      date: '2026-08-15',
      time: '11:00',
      timeEnd: 'Selesai',
      timezone: 'WIB',
      venue: 'Kediaman Mempelai Wanita',
      address:
        'Koto Keduduk, Kenagarian Taluk Tigo Sakato, Kec. Batang Kapas, Kab. Pesisir Selatan',
    },
  },

  // Target date for countdown
  weddingDate: '2026-08-15T08:00:00+07:00',

  // ─── Location ──────────────────────────────────────────
  location: {
    lat: -1.3081,
    lng: 100.4883,
    label: 'Kediaman Mempelai Wanita',
    address:
      'Koto Keduduk, Kenagarian Taluk Tigo Sakato, Kec. Batang Kapas, Kab. Pesisir Selatan',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=-1.3081,100.4883',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d100.4883!3d-1.3081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTgnMjkuMiJTIDEwMMKwMjknMTcuOSJF!5e0!3m2!1sid!2sid!4v1',
  },

  // ─── Wedding Gift ──────────────────────────────────────
  bankAccounts: [
    {
      bank: 'BANK BRI',
      accountNumber: '548101029879534',
      accountName: 'Ismy Jumiati',
    },
  ],

  // ─── Audio ─────────────────────────────────────────────
  music: {
    src: '/audio/background-music.mp3',
    title: 'Urang Minang Baralek Gadang',
    artist: 'Rendy Chow feat Yeyen Zynora',
  },

  // ─── Social Media ──────────────────────────────────────
  social: {
    whatsapp: 'https://wa.me/6281234567890',
    instagram: 'https://instagram.com/beranda.invitation',
    tiktok: 'https://tiktok.com/@beranda.invitation',
  },

  // ─── Prayer / Doa ─────────────────────────────────────
  prayer: {
    title: "Do'a Untuk Pengantin",
    arabic:
      'بَارَكَ اللّٰهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ',
    translation:
      '"Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan mengumpulkan kalian berdua dalam kebaikan"',
    source: '[HR. Abu Daud]',
  },

  // ─── Closing ───────────────────────────────────────────
  closing: {
    message:
      "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.",
    regards: 'Hormat Kami Yang Mengundang',
    branding: 'Made With Care and Love By Beranda Invitation',
  },
};
