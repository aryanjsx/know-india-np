/**
 * Ladakh (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Ladakh, Ministry of Tourism
 */

const ladakh = {
  name: 'Ladakh',
  capital: 'Leh',
  utCode: 'LA',
  region: 'Trans-Himalayan',
  area: '59,146 km²',
  population: '0.3 million (2025 est.)',
  density: '5/km²',
  districts: 2,
  gdp: '$1.5 billion (2024-25 est.)',
  officialLanguages: ['Ladakhi', 'Hindi', 'English'],
  literacyRate: '77.2%',
  sexRatio: '847 females per 1000 males',
  utAnimal: 'Snow Leopard',
  utBird: 'Black-necked Crane',
  utFlower: 'Blue Poppy (Meconopsis)',
  utTree: 'Willow',

  // Language data
  languages: {
    official: ['Ladakhi', 'Hindi', 'English'],
    regional: ['Tibetan', 'Balti', 'Purgi', 'Shina', 'Urdu'],
  },

  famousFor: [
    'Pangong Tso Lake',
    'Khardung La (World\'s Highest Motorable Road)',
    'Buddhist Monasteries',
    'Magnetic Hill',
    'Nubra Valley',
  ],

  // Major festivals
  majorFestivals: [
    'Hemis Festival',
    'Losar',
    'Ladakh Festival',
    'Dosmoche',
    'Sindhu Darshan Festival',
  ],

  festivals: [
    'Hemis Festival',
    'Losar',
    'Ladakh Festival',
    'Dosmoche',
    'Sindhu Darshan Festival',
    'Matho Nagrang',
  ],

  cuisine: [
    'Thukpa',
    'Momos',
    'Skyu (Pasta)',
    'Butter Tea (Po Cha)',
    'Khambir (Bread)',
    'Chhutagi',
    'Tingmo',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Pangong Tso Lake', type: 'Natural', city: 'Leh' },
    { name: 'Hemis Monastery', type: 'Religious', city: 'Leh' },
    { name: 'Khardung La', type: 'Natural', city: 'Leh' },
    { name: 'Nubra Valley', type: 'Natural', city: 'Leh' },
    { name: 'Leh Palace', type: 'Historical', city: 'Leh' },
  ],

  touristAttractions: [
    { name: 'Pangong Tso Lake', type: 'High Altitude Lake', district: 'Leh' },
    { name: 'Khardung La', type: 'Mountain Pass (18,380 ft)', district: 'Leh' },
    { name: 'Nubra Valley', type: 'Cold Desert Valley', district: 'Leh' },
    { name: 'Hemis Monastery', type: 'Largest Monastery in Ladakh', district: 'Leh' },
    { name: 'Leh Palace', type: 'Historical Palace', city: 'Leh' },
    { name: 'Tso Moriri Lake', type: 'High Altitude Lake', district: 'Leh' },
    { name: 'Magnetic Hill', type: 'Natural Phenomenon', district: 'Leh' },
    { name: 'Zanskar Valley', type: 'Remote Valley', district: 'Kargil' },
  ],

  history: `Ladakh was part of the Tibetan Empire until the 10th century when it became an independent kingdom. It was a major hub on the ancient Silk Road trade route. The region was incorporated into Jammu and Kashmir after independence. On October 31, 2019, Ladakh became a separate Union Territory without a legislature.`,

  interestingFacts: [
    'Ladakh is the highest plateau in India with an average elevation of 11,000 ft.',
    'Khardung La is one of the world\'s highest motorable passes.',
    'Ladakh receives less than 100mm of rainfall annually (cold desert).',
    'The region has the highest concentration of Buddhist monasteries.',
    'Ladakh is called the "Land of High Passes."',
    'The Bactrian (double-humped) camel is found in Nubra Valley.',
  ],
};

module.exports = ladakh;
