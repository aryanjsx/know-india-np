/**
 * Uttarakhand State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Uttarakhand, Ministry of Tourism
 */

const uttarakhand = {
  name: 'Uttarakhand',
  capital: 'Dehradun (Winter), Gairsain (Summer)',
  largestCity: 'Dehradun',
  stateCode: 'UK',
  region: 'North India (Himalayan)',
  area: '53,483 km²',
  population: '12.5 million (2025 est.)',
  density: '234/km²',
  districts: 13,
  gdp: '$45 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'Sanskrit'],
  literacyRate: '87.6%',
  sexRatio: '963 females per 1000 males',
  stateAnimal: 'Alpine Musk Deer',
  stateBird: 'Himalayan Monal',
  stateFlower: 'Brahma Kamal',
  stateTree: 'Buransh (Rhododendron)',

  // Language data
  languages: {
    official: ['Hindi', 'Sanskrit'],
    regional: ['Garhwali', 'Kumaoni', 'Jaunsari', 'Nepali', 'English'],
  },

  famousFor: [
    'Char Dham Yatra',
    'Yoga Capital (Rishikesh)',
    'Jim Corbett National Park',
    'Valley of Flowers',
    'Source of Ganga',
  ],

  // Major festivals
  majorFestivals: [
    'Kumbh Mela',
    'Nanda Devi Raj Jat Yatra',
    'Uttarayani',
    'Harela',
    'Phool Dei',
  ],

  festivals: [
    'Kumbh Mela (Haridwar)',
    'Nanda Devi Raj Jat Yatra',
    'Uttarayani (Makar Sankranti)',
    'Phool Dei',
    'Harela',
    'Ganga Dussehra',
  ],

  cuisine: [
    'Kafuli',
    'Phaanu',
    'Aloo ke Gutke',
    'Chainsoo',
    'Jhangora Kheer',
    'Mandua Roti',
    'Bal Mithai',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Valley of Flowers', type: 'UNESCO', city: 'Chamoli' },
    { name: 'Nanda Devi National Park', type: 'UNESCO', city: 'Chamoli' },
    { name: 'Kedarnath Temple', type: 'Religious', city: 'Rudraprayag' },
    { name: 'Rishikesh', type: 'Cultural', city: 'Dehradun' },
    { name: 'Jim Corbett National Park', type: 'Natural', city: 'Nainital' },
  ],

  touristAttractions: [
    { name: 'Kedarnath Temple', type: 'Jyotirlinga (Char Dham)', district: 'Rudraprayag' },
    { name: 'Badrinath Temple', type: 'Char Dham', district: 'Chamoli' },
    { name: 'Haridwar', type: 'Pilgrimage City', district: 'Haridwar' },
    { name: 'Rishikesh', type: 'Yoga Capital of World', district: 'Dehradun' },
    { name: 'Nainital', type: 'Lake District', district: 'Nainital' },
    { name: 'Mussoorie', type: 'Queen of Hills', district: 'Dehradun' },
    { name: 'Jim Corbett National Park', type: 'India\'s First National Park', district: 'Nainital' },
    { name: 'Valley of Flowers', type: 'UNESCO World Heritage Site', district: 'Chamoli' },
  ],

  history: `Uttarakhand, known as "Dev Bhoomi" (Land of Gods), is steeped in mythology and spirituality. The region is mentioned in Hindu epics as the abode of gods. It was part of the ancient Kumaon and Garhwal kingdoms. The state was carved out of Uttar Pradesh on November 9, 2000. It is the birthplace of the Chipko Movement (1973) for environmental conservation.`,

  interestingFacts: [
    'Uttarakhand is the source of major rivers including Ganga and Yamuna.',
    'Rishikesh is recognized as the Yoga Capital of the World.',
    'Jim Corbett was India\'s first national park (established 1936).',
    'The state hosts the Kumbh Mela, the largest religious gathering on Earth.',
    'Valley of Flowers has over 600 species of flowering plants.',
    'Uttarakhand has the highest literacy rate in North India.',
  ],
};

module.exports = uttarakhand;
