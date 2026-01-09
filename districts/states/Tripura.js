/**
 * Tripura State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Tripura, Ministry of Tourism
 */

const tripura = {
  name: 'Tripura',
  capital: 'Agartala',
  largestCity: 'Agartala',
  stateCode: 'TR',
  region: 'Northeast India',
  area: '10,491 km²',
  population: '4.3 million (2025 est.)',
  density: '410/km²',
  districts: 8,
  gdp: '$8 billion (2024-25 est.)',
  officialLanguages: ['Bengali', 'Kokborok', 'English'],
  literacyRate: '87.8%',
  sexRatio: '960 females per 1000 males',
  stateAnimal: 'Phayre\'s Langur',
  stateBird: 'Green Imperial Pigeon',
  stateFlower: 'Nageshwar (Mesua ferrea)',
  stateTree: 'Agar (Aquilaria malaccensis)',

  // Language data
  languages: {
    official: ['Bengali', 'Kokborok', 'English'],
    regional: ['Hindi', 'Chakma', 'Mog', 'Halam', 'Reang'],
  },

  famousFor: [
    'Ujjayanta Palace',
    'Neermahal (Water Palace)',
    'Tribal Heritage',
    'Bamboo & Cane Handicrafts',
    'Rock Carvings of Unakoti',
  ],

  // Major festivals
  majorFestivals: [
    'Durga Puja',
    'Kharchi Puja',
    'Garia Puja',
    'Ker Puja',
    'Buddha Purnima',
  ],

  festivals: [
    'Durga Puja',
    'Kharchi Puja',
    'Garia Puja',
    'Ker Puja',
    'Orange & Tourism Festival',
    'Buddha Purnima',
  ],

  cuisine: [
    'Mui Borok (Traditional Thali)',
    'Chakhwi',
    'Wahan Mosdeng',
    'Awandru',
    'Bamboo Shoot Curry',
    'Bhangui (Fermented Fish)',
    'Gudok',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Ujjayanta Palace', type: 'Historical', city: 'Agartala' },
    { name: 'Neermahal', type: 'Historical', city: 'Sepahijala' },
    { name: 'Unakoti', type: 'Historical', city: 'Unakoti' },
    { name: 'Tripura Sundari Temple', type: 'Religious', city: 'Gomati' },
    { name: 'Jampui Hills', type: 'Natural', city: 'North Tripura' },
  ],

  touristAttractions: [
    { name: 'Ujjayanta Palace', type: 'Royal Palace & Museum', city: 'Agartala' },
    { name: 'Neermahal', type: 'Water Palace', district: 'Sepahijala' },
    { name: 'Unakoti', type: 'Rock-cut Sculptures', district: 'Unakoti' },
    { name: 'Sepahijala Wildlife Sanctuary', type: 'Wildlife Sanctuary', district: 'Sepahijala' },
    { name: 'Jampui Hills', type: 'Hill Station', district: 'North Tripura' },
    { name: 'Tripura Sundari Temple', type: 'Shakti Peetha', district: 'Gomati' },
    { name: 'Dumboor Lake', type: 'Lake', district: 'Dhalai' },
    { name: 'Pilak', type: 'Buddhist Archaeological Site', district: 'South Tripura' },
  ],

  history: `Tripura has a rich history dating back to the Manikya dynasty, which ruled for over 500 years until 1949. The state merged with India on October 15, 1949. It became a full state on January 21, 1972. Tripura has a diverse population of Bengali settlers and indigenous tribal communities, primarily the Kokborok-speaking Tripuri people.`,

  interestingFacts: [
    'Tripura is the third-smallest state in India by area.',
    'The state has the third-highest literacy rate in India.',
    'Unakoti has 99,99,999 rock carvings (one short of a crore).',
    'Neermahal is one of the two water palaces in India.',
    'Tripura produces premium Agar oil for perfumes.',
    'The state is surrounded by Bangladesh on three sides.',
  ],
};

module.exports = tripura;
