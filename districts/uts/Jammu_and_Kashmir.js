/**
 * Jammu and Kashmir (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of J&K, Ministry of Tourism
 */

const jammuKashmir = {
  name: 'Jammu and Kashmir',
  capital: 'Srinagar (Summer), Jammu (Winter)',
  utCode: 'JK',
  region: 'North India (Himalayan)',
  area: '42,241 km²',
  population: '14 million (2025 est.)',
  density: '331/km²',
  districts: 20,
  gdp: '$28 billion (2024-25 est.)',
  officialLanguages: ['Kashmiri', 'Dogri', 'Hindi', 'Urdu', 'English'],
  literacyRate: '68.7%',
  sexRatio: '889 females per 1000 males',
  utAnimal: 'Hangul (Kashmir Stag)',
  utBird: 'Black-necked Crane',
  utFlower: 'Lotus',
  utTree: 'Chinar',

  // Language data
  languages: {
    official: ['Kashmiri', 'Dogri', 'Urdu', 'Hindi', 'English'],
    regional: ['Gojri', 'Pahari', 'Punjabi', 'Ladakhi', 'Balti'],
  },

  famousFor: [
    'Dal Lake & Houseboats',
    'Kashmir Valley',
    'Gulmarg Skiing',
    'Pashmina Shawls',
    'Vaishno Devi Temple',
  ],

  // Major festivals
  majorFestivals: [
    'Eid-ul-Fitr',
    'Eid-ul-Adha',
    'Lohri',
    'Baisakhi',
    'Tulip Festival',
  ],

  festivals: [
    'Eid-ul-Fitr',
    'Eid-ul-Adha',
    'Shikara Festival',
    'Baisakhi',
    'Lohri',
    'Tulip Festival',
  ],

  cuisine: [
    'Rogan Josh',
    'Dum Aloo',
    'Yakhni',
    'Wazwan (feast)',
    'Kahwa',
    'Kashmiri Pulao',
    'Gushtaba',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Dal Lake', type: 'Natural', city: 'Srinagar' },
    { name: 'Gulmarg', type: 'Natural', city: 'Baramulla' },
    { name: 'Vaishno Devi Temple', type: 'Religious', city: 'Katra' },
    { name: 'Mughal Gardens', type: 'Historical', city: 'Srinagar' },
    { name: 'Pahalgam', type: 'Natural', city: 'Anantnag' },
  ],

  touristAttractions: [
    { name: 'Dal Lake', type: 'Lake with Houseboats', city: 'Srinagar' },
    { name: 'Gulmarg', type: 'Ski Resort', district: 'Baramulla' },
    { name: 'Pahalgam', type: 'Hill Station', district: 'Anantnag' },
    { name: 'Sonamarg', type: 'Meadow of Gold', district: 'Ganderbal' },
    { name: 'Vaishno Devi Temple', type: 'Pilgrimage', city: 'Katra' },
    { name: 'Mughal Gardens', type: 'Historical Gardens', city: 'Srinagar' },
    { name: 'Amarnath Cave', type: 'Pilgrimage', district: 'Anantnag' },
    { name: 'Patnitop', type: 'Hill Station', district: 'Udhampur' },
  ],

  history: `Jammu and Kashmir has a rich history influenced by Hindu, Buddhist, and Islamic cultures. It was a princely state that acceded to India in 1947. The region has been a subject of dispute between India and Pakistan. In 2019, Article 370 was abrogated, and J&K was reorganized as a Union Territory, separating Ladakh as a separate UT.`,

  interestingFacts: [
    'Kashmir is called "Paradise on Earth" for its stunning beauty.',
    'Gulmarg has Asia\'s highest and longest cable car (Gondola).',
    'Vaishno Devi receives over 8 million pilgrims annually.',
    'Pashmina wool comes from the Changthangi goats of the region.',
    'The Mughal Gardens were built by Emperor Jahangir.',
    'Srinagar\'s houseboats are unique floating accommodations on Dal Lake.',
  ],
};

module.exports = jammuKashmir;
