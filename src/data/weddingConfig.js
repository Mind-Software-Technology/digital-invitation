/**
 * Wedding Configuration — Central data source for the entire invitation.
 * Replace placeholder values with real data before deployment.
 */
export const weddingConfig = {
  // ─── Couple ────────────────────────────────────────────
  groom: {
    name: 'Niko',
    fullName: 'Niko Apriyanto',
    father: 'Bpk. Ali Amrul',
    mother: 'Ibu Erniyeti',
    childOrder: 'Putra Kedua dari',
    photo: 'mempelai_laki_laki.png',
    instagram: 'https://instagram.com/candu_stori',
  },
  bride: {
    name: 'Rani',
    fullName: 'Rani Sartika',
    father: 'Bpk. Ardi',
    mother: 'Ibu Desmawati',
    childOrder: 'Putri Pertama dari',
    photo: 'mempelai_perempuan.png',
    instagram: 'https://instagram.com/ranisrtika2',
  },

  // ─── Events ────────────────────────────────────────────
  events: {
    akad: {
      title: 'Akad Nikah',
      date: '2026-06-29',
      time: '08:00',
      timeEnd: '10:00',
      timezone: 'WIB',
      venue: 'KUA Palupuah',
      address: 'Kecamatan Palupuah, Kabupaten Agam, Sumatera Barat',
    },
    resepsi: {
      title: 'Resepsi',
      date: '2026-06-29',
      time: '11:00',
      timeEnd: 'Selesai',
      timezone: 'WIB',
      venue: 'Jorong Haraban',
      address: 'Jorong Haraban, Kecamatan Palupuah, Kabupaten Agam, Sumatera Barat',
    },
  },

  // Target date for countdown
  weddingDate: '2026-06-29T08:00:00+07:00',

  // ─── Location ──────────────────────────────────────────
  location: {
    label: 'Jorong Haraban',
    address: 'Jorong Haraban, Kec. Palupuah, Kab. Agam, Sumatera Barat',
    // Searched by place name (no exact GPS pin yet — share a Google Maps link to pin precisely)
    mapQuery: 'Jorong Haraban, Palupuah, Agam, Sumatera Barat',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Jorong%20Haraban%20Palupuah%20Agam%20Sumatera%20Barat',
  },

  // ─── Wedding Gift ──────────────────────────────────────
  bankAccounts: [
    {
      bank: 'DANA',
      accountNumber: '082386405800',
      accountName: 'Rani Sartika',
    },
    {
      bank: 'BANK BCA',
      accountNumber: '8125291861',
      accountName: 'Rani Sartika',
    },
  ],

  // ─── Audio ─────────────────────────────────────────────
  music: {
    src: '/audio/background-music.mp3',
    title: 'Urang Minang Baralek Gadang',
    artist: 'Randy Chow feat. Yeyen Zymra',
  },

  // ─── Social Media ──────────────────────────────────────
  social: {
    whatsapp: 'https://wa.me/6282386405800',
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
    branding: 'Made With Care and Love By Mind Software Technology',
  },
};
