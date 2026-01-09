/**
 * Nagaland State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Nagaland, Ministry of Tourism
 */

const nagaland = {
  name: 'Nagaland',
  capital: 'Kohima',
  largestCity: 'Dimapur',
  stateCode: 'NL',
  region: 'Northeast India',
  area: '16,579 km²',
  population: '2.5 million (2025 est.)',
  density: '151/km²',
  districts: 16,
  gdp: '$4.5 billion (2024-25 est.)',
  officialLanguages: ['English'],
  literacyRate: '80.1%',
  sexRatio: '931 females per 1000 males',
  stateAnimal: 'Mithun',
  stateBird: 'Blyth\'s Tragopan',
  stateFlower: 'Rhododendron',
  stateTree: 'Alder',

  // Language data
  languages: {
    official: ['English'],
    regional: ['Ao', 'Angami', 'Sema', 'Lotha', 'Konyak'],
  },

  famousFor: [
    'Hornbill Festival',
    '17 Naga Tribes',
    'Traditional Handicrafts',
    'Naga Cuisine',
    'Battle of Kohima (WWII)',
  ],

  // Major festivals
  majorFestivals: [
    'Hornbill Festival',
    'Sekrenyi',
    'Moatsu',
    'Aoling',
    'Tuluni',
  ],

  festivals: [
    'Hornbill Festival',
    'Sekrenyi',
    'Moatsu',
    'Aoling',
    'Tuluni',
    'Tsokum',
  ],

  cuisine: [
    'Smoked Pork with Bamboo Shoot',
    'Axone (Fermented Soybean)',
    'Naga King Chilli Dishes',
    'Anishi (Colocasia Leaves)',
    'Zutho (Rice Beer)',
    'Galho (Naga Khichdi)',
    'Akhuni Chutney',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Hornbill Festival', type: 'Cultural', city: 'Kisama' },
    { name: 'Kohima War Cemetery', type: 'Historical', city: 'Kohima' },
    { name: 'Dzukou Valley', type: 'Natural', city: 'Kohima' },
    { name: 'Khonoma Village', type: 'Cultural', city: 'Kohima' },
    { name: 'Shilloi Lake', type: 'Natural', city: 'Phek' },
  ],

  touristAttractions: [
    { name: 'Hornbill Festival', type: 'Cultural Festival', venue: 'Kisama Heritage Village' },
    { name: 'Kohima War Cemetery', type: 'WWII Memorial', city: 'Kohima' },
    { name: 'Dzukou Valley', type: 'Valley of Flowers', district: 'Kohima' },
    { name: 'Shilloi Lake', type: 'Heart-shaped Lake', district: 'Phek' },
    { name: 'Khonoma Village', type: 'First Green Village', district: 'Kohima' },
    { name: 'Nagaland State Museum', type: 'Museum', city: 'Kohima' },
    { name: 'Kachari Ruins', type: 'Historical Site', city: 'Dimapur' },
    { name: 'Intanki Wildlife Sanctuary', type: 'Wildlife Sanctuary', district: 'Dimapur' },
  ],

  history: `Nagaland, "Land of the Nagas," became India's 16th state on December 1, 1963. The region has a rich tribal heritage with 17 major tribes, each with distinct customs and traditions. The Battle of Kohima (1944) during WWII was a turning point against Japanese invasion. The Naga tribes were headhunters until the late 19th century when Christianity spread.`,

  interestingFacts: [
    'The Hornbill Festival is called the "Festival of Festivals" and attracts tourists worldwide.',
    'Nagaland has 17 major tribes, each with its own language and customs.',
    'The Battle of Kohima is called "Stalingrad of the East."',
    'Khonoma is India\'s first green village, where hunting is banned.',
    'The Naga King Chilli (Bhut Jolokia) is one of the hottest in the world.',
    'Each tribe has its own colorful traditional shawls with unique patterns.',
  ],
};

module.exports = nagaland;
