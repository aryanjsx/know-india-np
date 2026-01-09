/**
 * Arunachal Pradesh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Arunachal Pradesh, Ministry of Tourism
 */

const arunachalPradesh = {
  name: 'Arunachal Pradesh',
  capital: 'Itanagar',
  largestCity: 'Itanagar',
  stateCode: 'AR',
  region: 'Northeast India',
  area: '83,743 km²',
  population: '1.8 million (2025 est.)',
  density: '21/km²',
  districts: 26,
  gdp: '$5 billion (2024-25 est.)',
  officialLanguages: ['English'],
  literacyRate: '66.9%',
  sexRatio: '938 females per 1000 males',
  stateAnimal: 'Mithun (Gayal)',
  stateBird: 'Great Hornbill',
  stateFlower: 'Foxtail Orchid (Rhynchostylis retusa)',
  stateTree: 'Hollong',

  // Language data
  languages: {
    official: ['English'],
    regional: ['Nyishi', 'Adi', 'Apatani', 'Monpa', 'Hindi'],
  },

  famousFor: [
    'Tawang Monastery',
    'Tribal Diversity (26+ tribes)',
    'Ziro Music Festival',
    'Pristine Natural Beauty',
    'Adventure Tourism',
  ],

  // Major festivals
  majorFestivals: [
    'Losar',
    'Dree Festival',
    'Solung',
    'Mopin',
    'Nyokum',
  ],

  festivals: [
    'Losar',
    'Dree Festival',
    'Solung',
    'Mopin',
    'Nyokum',
    'Torgya Festival',
  ],

  cuisine: [
    'Thukpa',
    'Momos',
    'Apong (Rice Beer)',
    'Pika Pila',
    'Bamboo Shoot Dishes',
    'Zan',
    'Marua',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Tawang Monastery', type: 'Religious', city: 'Tawang' },
    { name: 'Ziro Valley', type: 'Natural', city: 'Lower Subansiri' },
    { name: 'Namdapha National Park', type: 'Natural', city: 'Changlang' },
    { name: 'Sela Pass', type: 'Natural', city: 'Tawang' },
    { name: 'Bomdila', type: 'Cultural', city: 'West Kameng' },
  ],

  touristAttractions: [
    { name: 'Tawang Monastery', type: 'Largest Monastery in India', district: 'Tawang' },
    { name: 'Ziro Valley', type: 'UNESCO Tentative Heritage Site', district: 'Lower Subansiri' },
    { name: 'Sela Pass', type: 'High Altitude Pass', district: 'Tawang' },
    { name: 'Bomdila', type: 'Hill Station', district: 'West Kameng' },
    { name: 'Namdapha National Park', type: 'Biodiversity Hotspot', district: 'Changlang' },
    { name: 'Pasighat', type: 'Oldest Town', district: 'East Siang' },
    { name: 'Nuranang Falls', type: 'Waterfall', district: 'Tawang' },
    { name: 'Mechuka Valley', type: 'Valley', district: 'Shi Yomi' },
  ],

  history: `Arunachal Pradesh, meaning "Land of the Dawn-lit Mountains," was known as NEFA (North-East Frontier Agency) until 1972. It became a Union Territory in 1972 and achieved statehood on February 20, 1987. The region has a rich tribal culture with over 26 major tribes and 100 sub-tribes. Tawang was the birthplace of the 6th Dalai Lama.`,

  interestingFacts: [
    'Arunachal Pradesh receives the first sunrise in India.',
    'Tawang Monastery is the largest in India and second-largest in the world.',
    'The state has over 26 major tribes and 100+ sub-tribes.',
    'Ziro Valley is a UNESCO World Heritage tentative site.',
    'Namdapha is the only park in India with four big cat species.',
    'The state shares international borders with China, Myanmar, and Bhutan.',
  ],
};

module.exports = arunachalPradesh;
