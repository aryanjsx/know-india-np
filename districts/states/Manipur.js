/**
 * Manipur State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Manipur, Ministry of Tourism
 */

const manipur = {
  name: 'Manipur',
  capital: 'Imphal',
  largestCity: 'Imphal',
  stateCode: 'MN',
  region: 'Northeast India',
  area: '22,327 km²',
  population: '3.3 million (2025 est.)',
  density: '148/km²',
  districts: 16,
  gdp: '$5 billion (2024-25 est.)',
  officialLanguages: ['Meiteilon (Manipuri)'],
  literacyRate: '79.9%',
  sexRatio: '985 females per 1000 males',
  stateAnimal: 'Sangai (Brow-antlered Deer)',
  stateBird: 'Mrs. Hume\'s Pheasant',
  stateFlower: 'Shirui Lily (Lilium mackliniae)',
  stateTree: 'Uningthou (Phoebe hainesiana)',

  // Language data
  languages: {
    official: ['Meiteilon (Manipuri)'],
    regional: ['English', 'Tangkhul', 'Thadou', 'Paite', 'Hindi'],
  },

  famousFor: [
    'Loktak Lake (Floating Lake)',
    'Manipuri Dance',
    'Sangai Deer',
    'Polo (originated here)',
    'Martial Arts (Thang-Ta)',
  ],

  // Major festivals
  majorFestivals: [
    'Yaoshang',
    'Ningol Chakouba',
    'Cheiraoba',
    'Lai Haraoba',
    'Kut',
  ],

  festivals: [
    'Yaoshang (Holi)',
    'Ningol Chakouba',
    'Cheiraoba',
    'Lai Haraoba',
    'Kut',
    'Gang-Ngai',
  ],

  cuisine: [
    'Eromba',
    'Singju',
    'Kangshoi',
    'Ngari (Fermented Fish)',
    'Chamthong',
    'Paknam',
    'Chak-hao Kheer',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Loktak Lake', type: 'Natural', city: 'Bishnupur' },
    { name: 'Keibul Lamjao National Park', type: 'Natural', city: 'Bishnupur' },
    { name: 'Kangla Fort', type: 'Historical', city: 'Imphal' },
    { name: 'Imphal War Cemetery', type: 'Historical', city: 'Imphal' },
    { name: 'Shirui Peak', type: 'Natural', city: 'Ukhrul' },
  ],

  touristAttractions: [
    { name: 'Loktak Lake', type: 'Largest Freshwater Lake in NE', district: 'Bishnupur' },
    { name: 'Keibul Lamjao National Park', type: 'Only Floating Park', district: 'Bishnupur' },
    { name: 'Kangla Fort', type: 'Historical Fort', city: 'Imphal' },
    { name: 'Imphal War Cemetery', type: 'WWII Memorial', city: 'Imphal' },
    { name: 'Shree Govindajee Temple', type: 'Vaishnavite Temple', city: 'Imphal' },
    { name: 'Dzukou Valley', type: 'Valley of Flowers', district: 'Senapati' },
    { name: 'Ukhrul', type: 'Hill Town', district: 'Ukhrul' },
    { name: 'Shirui Peak', type: 'Shirui Lily Habitat', district: 'Ukhrul' },
  ],

  history: `Manipur, known as the "Jewel of India," has a rich history dating back over 2,000 years. The Meitei kingdom ruled for centuries with a sophisticated culture. The state played a crucial role in World War II during the Battle of Imphal (1944). It merged with India in 1949 and became a full state in 1972. Manipur is the birthplace of modern polo.`,

  interestingFacts: [
    'Loktak Lake has the world\'s only floating national park.',
    'The endangered Sangai deer is found only in Manipur.',
    'Modern polo originated in Manipur (called Sagol Kangjei).',
    'The Shirui Lily is endemic to Manipur and found nowhere else in the world.',
    'Manipuri Ras Leela dance is included in UNESCO\'s Representative List.',
    'Thang-Ta is an ancient martial art form unique to Manipur.',
  ],
};

module.exports = manipur;
