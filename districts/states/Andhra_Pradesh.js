/**
 * Andhra Pradesh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Andhra Pradesh, Ministry of Tourism
 */

const andhraPradesh = {
  name: 'Andhra Pradesh',
  capital: 'Amaravati',
  largestCity: 'Visakhapatnam',
  stateCode: 'AP',
  region: 'South India',
  area: '162,975 km²',
  population: '54.2 million (2025 est.)',
  density: '333/km²',
  districts: 26,
  gdp: '$150 billion (2024-25 est.)',
  officialLanguages: ['Telugu'],
  literacyRate: '67.4%',
  sexRatio: '996 females per 1000 males',
  stateAnimal: 'Blackbuck',
  stateBird: 'Indian Roller (Palapitta)',
  stateFlower: 'Water Lily (Nymphaea)',
  stateTree: 'Neem Tree',

  // Language data
  languages: {
    official: ['Telugu'],
    regional: ['Urdu', 'Hindi', 'Tamil', 'Kannada', 'Odia'],
  },

  famousFor: [
    'Tirupati Balaji Temple',
    'Kuchipudi Dance',
    'Mangoes (Banganapalli)',
    'Araku Valley Coffee',
    'Kondapalli Toys',
  ],

  // Major festivals
  majorFestivals: [
    'Ugadi',
    'Sankranti',
    'Dussehra',
    'Brahmotsavam',
    'Deccan Festival',
  ],

  festivals: [
    'Ugadi (Telugu New Year)',
    'Sankranti (Pongal)',
    'Dussehra',
    'Deccan Festival',
    'Brahmotsavam',
  ],

  cuisine: [
    'Pulihora (Tamarind Rice)',
    'Gongura Pickle',
    'Pesarattu',
    'Andhra Biryani',
    'Gutti Vankaya',
    'Natu Kodi Pulusu',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Tirumala Tirupati Devasthanams', type: 'Religious', city: 'Tirupati' },
    { name: 'Araku Valley', type: 'Natural', city: 'Visakhapatnam' },
    { name: 'Amaravati Buddhist Stupa', type: 'UNESCO', city: 'Guntur' },
    { name: 'Belum Caves', type: 'Natural', city: 'Kurnool' },
    { name: 'Gandikota Grand Canyon', type: 'Natural', city: 'Kadapa' },
  ],

  touristAttractions: [
    { name: 'Tirumala Tirupati Devasthanams', type: 'Temple', district: 'Tirupati' },
    { name: 'Araku Valley', type: 'Hill Station', district: 'Alluri Sitharama Raju' },
    { name: 'Visakhapatnam Beach', type: 'Beach', district: 'Visakhapatnam' },
    { name: 'Amaravati Buddhist Stupa', type: 'Buddhist Monument', district: 'Guntur' },
    { name: 'Belum Caves', type: 'Natural Cave', district: 'Kurnool' },
    { name: 'Horsley Hills', type: 'Hill Station', district: 'Annamayya' },
    { name: 'Gandikota Grand Canyon', type: 'Canyon', district: 'Kadapa' },
  ],

  history: `Andhra Pradesh has a rich cultural heritage with roots in the Satavahana, Ikshvaku, and Vijayanagara dynasties. The region was a major center for Buddhism and later became known for its prominent contribution to classical dance (Kuchipudi) and art. Post-independence, it was reorganized multiple times, with Telangana separating in 2014. The state is now developing Amaravati as its new capital.`,

  interestingFacts: [
    'Tirupati Temple receives over 50,000 pilgrims daily, making it the most visited religious site in the world.',
    'Andhra Pradesh is the largest producer of rice and eggs in India.',
    'The state has the second longest coastline in India (974 km).',
    'Kuchipudi dance originated in the village of Kuchipudi in Krishna district.',
    'Visakhapatnam has the only natural harbor on the east coast of India.',
  ],
};

module.exports = andhraPradesh;
