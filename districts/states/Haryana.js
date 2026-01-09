/**
 * Haryana State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Haryana, Ministry of Tourism
 */

const haryana = {
  name: 'Haryana',
  capital: 'Chandigarh (shared with Punjab)',
  largestCity: 'Faridabad',
  stateCode: 'HR',
  region: 'North India',
  area: '44,212 km²',
  population: '29 million (2025 est.)',
  density: '656/km²',
  districts: 22,
  gdp: '$130 billion (2024-25 est.)',
  officialLanguages: ['Hindi'],
  literacyRate: '76.6%',
  sexRatio: '879 females per 1000 males',
  stateAnimal: 'Blackbuck',
  stateBird: 'Black Francolin',
  stateFlower: 'Lotus',
  stateTree: 'Peepal Tree',

  // Language data
  languages: {
    official: ['Hindi'],
    regional: ['Haryanvi', 'Punjabi', 'Urdu', 'English', 'Bagri'],
  },

  famousFor: [
    'Kurukshetra (Mahabharata)',
    'Gurgaon IT Hub',
    'Sports Champions',
    'Agriculture',
    'Surajkund Mela',
  ],

  // Major festivals
  majorFestivals: [
    'Baisakhi',
    'Teej',
    'Lohri',
    'Diwali',
    'Gugga Naumi',
  ],

  festivals: [
    'Baisakhi',
    'Teej',
    'Lohri',
    'Guga Naumi',
    'Sanjhi',
    'Gugga Pir Mela',
  ],

  cuisine: [
    'Bajra Khichdi',
    'Kachri Ki Sabzi',
    'Churma',
    'Bathua Raita',
    'Singri Ki Sabzi',
    'Mithe Chawal',
    'Malpua',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Kurukshetra', type: 'Religious', city: 'Kurukshetra' },
    { name: 'Brahma Sarovar', type: 'Religious', city: 'Kurukshetra' },
    { name: 'Sultanpur Bird Sanctuary', type: 'Natural', city: 'Gurugram' },
    { name: 'Surajkund', type: 'Historical', city: 'Faridabad' },
    { name: 'Pinjore Gardens', type: 'Historical', city: 'Panchkula' },
  ],

  touristAttractions: [
    { name: 'Kurukshetra', type: 'Historical & Religious Site', district: 'Kurukshetra' },
    { name: 'Sultanpur Bird Sanctuary', type: 'Bird Sanctuary', district: 'Gurugram' },
    { name: 'Brahma Sarovar', type: 'Sacred Tank', city: 'Kurukshetra' },
    { name: 'Surajkund', type: 'Historical Tank', district: 'Faridabad' },
    { name: 'Pinjore Gardens', type: 'Mughal Garden', district: 'Panchkula' },
    { name: 'Morni Hills', type: 'Hill Station', district: 'Panchkula' },
    { name: 'Panipat Museum', type: 'Museum', city: 'Panipat' },
  ],

  history: `Haryana is the land of the Mahabharata, where the great battle between Pandavas and Kauravas took place at Kurukshetra. The region has witnessed three major battles of Panipat that shaped Indian history. Haryana was carved out of Punjab in 1966. The state has a strong martial tradition and has produced many freedom fighters and sports champions.`,

  interestingFacts: [
    'Kurukshetra is where Lord Krishna delivered the Bhagavad Gita.',
    'Haryana has produced the maximum number of Olympic and CWG medalists in India.',
    'The state is one of the leading producers of automobiles in India.',
    'Gurugram (Gurgaon) is known as the "Millennium City" and a major IT hub.',
    'Haryana contributes significantly to the Indian Armed Forces.',
    'Surajkund Mela is the largest crafts fair in the world.',
  ],
};

module.exports = haryana;
