/**
 * Chhattisgarh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Chhattisgarh, Ministry of Tourism
 */

const chhattisgarh = {
  name: 'Chhattisgarh',
  capital: 'Raipur',
  largestCity: 'Raipur',
  stateCode: 'CG',
  region: 'Central India',
  area: '135,192 km²',
  population: '33 million (2025 est.)',
  density: '244/km²',
  districts: 33,
  gdp: '$55 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'Chhattisgarhi'],
  literacyRate: '71.0%',
  sexRatio: '991 females per 1000 males',
  stateAnimal: 'Wild Buffalo',
  stateBird: 'Hill Myna (Pahari Myna)',
  stateFlower: 'Rhynchostylis Retusa',
  stateTree: 'Sal Tree',

  // Language data
  languages: {
    official: ['Hindi', 'Chhattisgarhi'],
    regional: ['Gondi', 'Halbi', 'Kurukh', 'Odia', 'Marathi'],
  },

  famousFor: [
    'Chitrakote Falls (Niagara of India)',
    'Tribal Culture',
    'Bastar Dussehra',
    'Steel & Power Industries',
    'Rich Mineral Resources',
  ],

  // Major festivals
  majorFestivals: [
    'Bastar Dussehra',
    'Hareli',
    'Teeja',
    'Pola',
    'Madai Festival',
  ],

  festivals: [
    'Bastar Dussehra (75 days)',
    'Hareli',
    'Teeja',
    'Pola',
    'Karma',
    'Madai Festival',
  ],

  cuisine: [
    'Chila',
    'Fara',
    'Muthia',
    'Bafauri',
    'Angakar Roti',
    'Aamat',
    'Chousela',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Chitrakote Falls', type: 'Natural', city: 'Bastar' },
    { name: 'Kanger Valley National Park', type: 'Natural', city: 'Bastar' },
    { name: 'Bhoramdeo Temple', type: 'Historical', city: 'Kabirdham' },
    { name: 'Danteshwari Temple', type: 'Religious', city: 'Dantewada' },
    { name: 'Kutumsar Cave', type: 'Natural', city: 'Bastar' },
  ],

  touristAttractions: [
    { name: 'Chitrakote Falls', type: 'India\'s Widest Waterfall', district: 'Bastar' },
    { name: 'Kanger Valley National Park', type: 'National Park', district: 'Bastar' },
    { name: 'Tirathgarh Falls', type: 'Waterfall', district: 'Bastar' },
    { name: 'Barnawapara Wildlife Sanctuary', type: 'Wildlife Sanctuary', district: 'Mahasamund' },
    { name: 'Danteshwari Temple', type: 'Shakti Peetha', city: 'Dantewada' },
    { name: 'Rajim', type: 'Pilgrimage Site (Prayag of Chhattisgarh)', district: 'Gariaband' },
    { name: 'Bhoramdeo Temple', type: 'Khajuraho of Chhattisgarh', district: 'Kabirdham' },
    { name: 'Kutumsar Cave', type: 'Limestone Cave', district: 'Bastar' },
  ],

  history: `Chhattisgarh was carved out of Madhya Pradesh on November 1, 2000. The region has a rich tribal heritage with over 42 tribal communities. It was part of the ancient Dakshina Kosala kingdom mentioned in the Ramayana. The area was ruled by the Kalachuri, Nagvanshi, and Maratha dynasties. Chhattisgarh is known for its diverse tribal culture and natural beauty.`,

  interestingFacts: [
    'Chhattisgarh is known as the "Rice Bowl of Central India."',
    'Bastar Dussehra is celebrated for 75 days, the longest festival in India.',
    'Chitrakote Falls is the widest waterfall in India during monsoon.',
    'The state has the largest tribal population in percentage terms.',
    'Chhattisgarh is a major producer of coal, iron ore, and steel.',
    'The Kutumsar Cave is one of the deepest caves in India.',
  ],
};

module.exports = chhattisgarh;
