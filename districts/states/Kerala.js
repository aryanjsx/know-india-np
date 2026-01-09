/**
 * Kerala State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Kerala, Ministry of Tourism
 */

const kerala = {
  name: 'Kerala',
  capital: 'Thiruvananthapuram',
  largestCity: 'Thiruvananthapuram',
  stateCode: 'KL',
  region: 'South India',
  area: '38,863 km²',
  population: '36.5 million (2025 est.)',
  density: '940/km²',
  districts: 14,
  gdp: '$140 billion (2024-25 est.)',
  officialLanguages: ['Malayalam'],
  literacyRate: '96.2%',
  sexRatio: '1,084 females per 1000 males',
  stateAnimal: 'Indian Elephant',
  stateBird: 'Great Hornbill',
  stateFlower: 'Golden Shower Tree (Kanikonna)',
  stateTree: 'Coconut Palm',

  // Language data
  languages: {
    official: ['Malayalam'],
    regional: ['Tamil', 'Kannada', 'Tulu', 'Konkani', 'English'],
  },

  famousFor: [
    'Backwaters',
    'Ayurveda Treatments',
    'Kathakali Dance',
    'Houseboats',
    'Spice Gardens',
  ],

  // Major festivals
  majorFestivals: [
    'Onam',
    'Vishu',
    'Thrissur Pooram',
    'Christmas',
    'Eid',
  ],

  festivals: [
    'Onam',
    'Vishu',
    'Thrissur Pooram',
    'Christmas',
    'Eid',
    'Theyyam',
  ],

  cuisine: [
    'Appam with Stew',
    'Kerala Fish Curry',
    'Puttu & Kadala',
    'Banana Chips',
    'Sadya (Feast)',
    'Malabar Biryani',
    'Karimeen Pollichathu',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Alleppey Backwaters', type: 'Natural', city: 'Alappuzha' },
    { name: 'Munnar Tea Gardens', type: 'Natural', city: 'Idukki' },
    { name: 'Periyar Wildlife Sanctuary', type: 'Natural', city: 'Thekkady' },
    { name: 'Fort Kochi', type: 'Historical', city: 'Kochi' },
    { name: 'Padmanabhaswamy Temple', type: 'Religious', city: 'Thiruvananthapuram' },
  ],

  touristAttractions: [
    { name: 'Alleppey (Alappuzha) Backwaters', type: 'Backwater Destination', district: 'Alappuzha' },
    { name: 'Munnar', type: 'Hill Station', district: 'Idukki' },
    { name: 'Kovalam Beach', type: 'Beach', district: 'Thiruvananthapuram' },
    { name: 'Thekkady (Periyar)', type: 'Wildlife Sanctuary', district: 'Idukki' },
    { name: 'Wayanad', type: 'Hill District', district: 'Wayanad' },
    { name: 'Fort Kochi', type: 'Historical Area', district: 'Ernakulam' },
    { name: 'Varkala Beach', type: 'Cliff Beach', district: 'Thiruvananthapuram' },
    { name: 'Athirappilly Falls', type: 'Waterfall', district: 'Thrissur' },
  ],

  history: `Kerala has a long-standing tradition in trade, connecting with ancient civilizations across the Arabian Sea since the spice trade era. The region was ruled by the Chera dynasty and later by various kingdoms including Travancore and Cochin. It is known for its progressive social structure, educational achievements, and was one of the first places in the world to embrace universal education.`,

  interestingFacts: [
    'Kerala has the highest literacy rate in India at 96.2%.',
    'The state has the highest Human Development Index (HDI) in India.',
    'Kerala is known as "God\'s Own Country" for its natural beauty.',
    'Ayurveda, the ancient medical system, originated in Kerala.',
    'The state has the highest life expectancy in India.',
    'Kochi port is one of the oldest seaports in India, dating back to the spice trade era.',
  ],
};

module.exports = kerala;
