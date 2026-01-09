/**
 * Sikkim State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Sikkim, Ministry of Tourism
 */

const sikkim = {
  name: 'Sikkim',
  capital: 'Gangtok',
  largestCity: 'Gangtok',
  stateCode: 'SK',
  region: 'Northeast India (Eastern Himalayas)',
  area: '7,096 km²',
  population: '0.7 million (2025 est.)',
  density: '99/km²',
  districts: 6,
  gdp: '$4 billion (2024-25 est.)',
  officialLanguages: ['Nepali', 'Sikkimese (Bhutia)', 'Lepcha', 'English'],
  literacyRate: '82.2%',
  sexRatio: '890 females per 1000 males',
  stateAnimal: 'Red Panda',
  stateBird: 'Blood Pheasant',
  stateFlower: 'Noble Dendrobium Orchid',
  stateTree: 'Rhododendron',

  // Language data
  languages: {
    official: ['Nepali', 'Sikkimese', 'Lepcha', 'English'],
    regional: ['Hindi', 'Limbu', 'Tamang', 'Sherpa', 'Rai'],
  },

  famousFor: [
    'Kanchenjunga (3rd highest peak)',
    'Buddhist Monasteries',
    'Organic Farming State',
    'Cardamom Production',
    'Nathula Pass',
  ],

  // Major festivals
  majorFestivals: [
    'Losar',
    'Saga Dawa',
    'Pang Lhabsol',
    'Losoong',
    'Buddha Purnima',
  ],

  festivals: [
    'Losar',
    'Saga Dawa',
    'Pang Lhabsol',
    'Losoong',
    'Buddha Purnima',
    'Dasain',
  ],

  cuisine: [
    'Momos',
    'Thukpa',
    'Phagshapa',
    'Sha Phaley',
    'Gundruk Soup',
    'Sel Roti',
    'Chhang (Millet Beer)',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Tsomgo Lake', type: 'Natural', city: 'East Sikkim' },
    { name: 'Nathula Pass', type: 'Historical', city: 'East Sikkim' },
    { name: 'Rumtek Monastery', type: 'Religious', city: 'East Sikkim' },
    { name: 'Gurudongmar Lake', type: 'Natural', city: 'North Sikkim' },
    { name: 'Pelling', type: 'Natural', city: 'West Sikkim' },
  ],

  touristAttractions: [
    { name: 'Tsomgo Lake', type: 'Glacial Lake', district: 'East Sikkim' },
    { name: 'Nathula Pass', type: 'Indo-China Border Pass', district: 'East Sikkim' },
    { name: 'Rumtek Monastery', type: 'Buddhist Monastery', district: 'East Sikkim' },
    { name: 'Pelling', type: 'Hill Station', district: 'West Sikkim' },
    { name: 'Gurudongmar Lake', type: 'High Altitude Lake', district: 'North Sikkim' },
    { name: 'Lachung & Yumthang Valley', type: 'Valley of Flowers', district: 'North Sikkim' },
    { name: 'MG Marg', type: 'Pedestrian Street', city: 'Gangtok' },
    { name: 'Ravangla Buddha Park', type: 'Buddha Statue', district: 'South Sikkim' },
  ],

  history: `Sikkim was an independent Buddhist kingdom until 1975 when it merged with India as the 22nd state through a referendum. The Chogyal dynasty ruled for over 300 years. The region was strategically important due to its location between Nepal, Tibet (China), and Bhutan. Sikkim became India's first fully organic state in 2016.`,

  interestingFacts: [
    'Sikkim is the least populous state in India.',
    'It is India\'s first and only 100% organic farming state.',
    'Kanchenjunga, the world\'s third-highest peak, is on its border.',
    'Sikkim has no railway (only a heritage toy train).',
    'The state has banned plastic bags and styrofoam.',
    'Sikkim has over 600 species of orchids.',
  ],
};

module.exports = sikkim;
