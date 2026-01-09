/**
 * Mizoram State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Mizoram, Ministry of Tourism
 */

const mizoram = {
  name: 'Mizoram',
  capital: 'Aizawl',
  largestCity: 'Aizawl',
  stateCode: 'MZ',
  region: 'Northeast India',
  area: '21,081 km²',
  population: '1.3 million (2025 est.)',
  density: '62/km²',
  districts: 11,
  gdp: '$4 billion (2024-25 est.)',
  officialLanguages: ['Mizo', 'English'],
  literacyRate: '91.6%',
  sexRatio: '976 females per 1000 males',
  stateAnimal: 'Serow (Himalayan Goat)',
  stateBird: 'Mrs. Hume\'s Pheasant',
  stateFlower: 'Red Vanda (Senhri)',
  stateTree: 'Mesua ferrea (Herhse)',

  // Language data
  languages: {
    official: ['Mizo', 'English'],
    regional: ['Hindi', 'Hmar', 'Paite', 'Lai', 'Mara'],
  },

  famousFor: [
    'Blue Mountains',
    'Highest Literacy Rate',
    'Bamboo Dance (Cheraw)',
    'Christianity (90%+)',
    'Traditional Handloom',
  ],

  // Major festivals
  majorFestivals: [
    'Chapchar Kut',
    'Mim Kut',
    'Pawl Kut',
    'Christmas',
    'Thalfavang Kut',
  ],

  festivals: [
    'Chapchar Kut',
    'Mim Kut',
    'Pawl Kut',
    'Christmas',
    'Thalfavang Kut',
    'Anthurium Festival',
  ],

  cuisine: [
    'Bai (Vegetable Stew)',
    'Vawksa Rep',
    'Misa Mach Poora',
    'Zu (Rice Beer)',
    'Sawhchiar',
    'Koat Pitha',
    'Chhangban',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Phawngpui (Blue Mountain)', type: 'Natural', city: 'Lawngtlai' },
    { name: 'Dampa Tiger Reserve', type: 'Natural', city: 'Mamit' },
    { name: 'Vantawng Falls', type: 'Natural', city: 'Serchhip' },
    { name: 'Reiek Heritage Village', type: 'Cultural', city: 'Mamit' },
    { name: 'Solomon\'s Temple', type: 'Religious', city: 'Aizawl' },
  ],

  touristAttractions: [
    { name: 'Phawngpui (Blue Mountain)', type: 'Highest Peak', district: 'Lawngtlai' },
    { name: 'Dampa Tiger Reserve', type: 'Tiger Reserve', district: 'Mamit' },
    { name: 'Tam Dil Lake', type: 'Lake', district: 'Saitual' },
    { name: 'Reiek Heritage Village', type: 'Traditional Village', district: 'Mamit' },
    { name: 'Vantawng Falls', type: 'Highest Waterfall in Mizoram', district: 'Serchhip' },
    { name: 'Champhai', type: 'Rice Bowl of Mizoram', district: 'Champhai' },
    { name: 'Solomon\'s Temple', type: 'Church', city: 'Aizawl' },
    { name: 'Murlen National Park', type: 'National Park', district: 'Champhai' },
  ],

  history: `Mizoram, meaning "Land of the Highlanders," became a Union Territory in 1972 and achieved statehood on February 20, 1987. The Mizo people migrated from China and Myanmar around the 16th century. The region was known as Lushai Hills during British rule. The Mizo Accord of 1986 ended insurgency and led to peaceful statehood.`,

  interestingFacts: [
    'Mizoram has the second-highest literacy rate in India (91.6%).',
    'The state is one of the most peaceful in the Northeast after the 1986 Accord.',
    'Christianity is practiced by over 87% of the population.',
    'Cheraw (bamboo dance) is the most famous folk dance of Mizoram.',
    'The state has a 722 km border with Myanmar and Bangladesh.',
    'Mizoram means "Land of the Mizo" (Mizo = People, Ram = Land).',
  ],
};

module.exports = mizoram;
