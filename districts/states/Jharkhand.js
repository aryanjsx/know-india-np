/**
 * Jharkhand State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Jharkhand, Ministry of Tourism
 */

const jharkhand = {
  name: 'Jharkhand',
  capital: 'Ranchi',
  largestCity: 'Jamshedpur',
  stateCode: 'JH',
  region: 'East India',
  area: '79,714 km²',
  population: '40 million (2025 est.)',
  density: '502/km²',
  districts: 24,
  gdp: '$55 billion (2024-25 est.)',
  officialLanguages: ['Hindi'],
  literacyRate: '67.6%',
  sexRatio: '948 females per 1000 males',
  stateAnimal: 'Indian Elephant',
  stateBird: 'Koel',
  stateFlower: 'Palash (Flame of the Forest)',
  stateTree: 'Sal Tree',

  // Language data
  languages: {
    official: ['Hindi'],
    regional: ['Santali', 'Ho', 'Mundari', 'Kurukh', 'Nagpuri'],
  },

  famousFor: [
    'Mineral Resources',
    'Waterfalls',
    'Tribal Culture',
    'Tata Steel (Jamshedpur)',
    'Sacred Groves',
  ],

  // Major festivals
  majorFestivals: [
    'Sarhul',
    'Karma',
    'Tusu Parab',
    'Chhath Puja',
    'Sohrai',
  ],

  festivals: [
    'Sarhul',
    'Karma',
    'Sohrai',
    'Tusu Parab',
    'Makar Sankranti',
    'Chhath Puja',
  ],

  cuisine: [
    'Dhuska',
    'Thekua',
    'Litti Chokha',
    'Rugra (Mushroom)',
    'Pitha',
    'Chilka Roti',
    'Handia (Rice Beer)',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Baidyanath Dham', type: 'Religious', city: 'Deoghar' },
    { name: 'Hundru Falls', type: 'Natural', city: 'Ranchi' },
    { name: 'Betla National Park', type: 'Natural', city: 'Latehar' },
    { name: 'Parasnath Hill', type: 'Religious', city: 'Giridih' },
    { name: 'Netarhat', type: 'Natural', city: 'Latehar' },
  ],

  touristAttractions: [
    { name: 'Baidyanath Dham', type: 'Jyotirlinga Temple', city: 'Deoghar' },
    { name: 'Netarhat', type: 'Queen of Chhotanagpur', district: 'Latehar' },
    { name: 'Hundru Falls', type: 'Waterfall', district: 'Ranchi' },
    { name: 'Dassam Falls', type: 'Waterfall', district: 'Ranchi' },
    { name: 'Betla National Park', type: 'Tiger Reserve', district: 'Latehar' },
    { name: 'Parasnath Hill', type: 'Jain Pilgrimage', district: 'Giridih' },
    { name: 'Jubilee Park', type: 'Park', city: 'Jamshedpur' },
    { name: 'McCluskieganj', type: 'Anglo-Indian Settlement', district: 'Ranchi' },
  ],

  history: `Jharkhand, meaning "Land of Forests," was carved out of Bihar on November 15, 2000. The region has a rich tribal heritage with the Santhal, Munda, Oraon, and Ho communities. The Santhal Rebellion (1855) against British rule was one of the first tribal uprisings in India. Jharkhand is known for its mineral wealth and was India's first planned industrial city (Jamshedpur).`,

  interestingFacts: [
    'Jharkhand has 40% of India\'s mineral resources.',
    'Jamshedpur was India\'s first planned industrial city, built by Tata.',
    'The state has the largest deposit of coal, mica, and uranium in India.',
    'Ranchi was the summer capital of Bihar during British rule.',
    'Birsa Munda, the tribal freedom fighter, was from Jharkhand.',
    'Parasnath Hill is the highest peak in Jharkhand and sacred to Jains.',
  ],
};

module.exports = jharkhand;
