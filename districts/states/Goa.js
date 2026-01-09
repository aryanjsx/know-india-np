/**
 * Goa State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Goa, Ministry of Tourism
 */

const goa = {
  name: 'Goa',
  capital: 'Panaji',
  largestCity: 'Vasco da Gama',
  stateCode: 'GA',
  region: 'West India (Konkan Coast)',
  area: '3,702 km²',
  population: '1.6 million (2025 est.)',
  density: '432/km²',
  districts: 2,
  gdp: '$12 billion (2024-25 est.)',
  officialLanguages: ['Konkani'],
  literacyRate: '88.7%',
  sexRatio: '973 females per 1000 males',
  stateAnimal: 'Gaur (Indian Bison)',
  stateBird: 'Ruby-throated Yellow Bulbul',
  stateFlower: 'Plumeria (Frangipani)',
  stateTree: 'Matti (Coconut Palm)',

  // Language data
  languages: {
    official: ['Konkani'],
    regional: ['Marathi', 'Hindi', 'English', 'Portuguese', 'Kannada'],
  },

  famousFor: [
    'Beaches',
    'Portuguese Heritage',
    'Nightlife & Casinos',
    'Goa Carnival',
    'Seafood & Feni',
  ],

  // Major festivals
  majorFestivals: [
    'Goa Carnival',
    'Shigmo',
    'Christmas',
    'Sao Joao',
    'Feast of St. Francis Xavier',
  ],

  festivals: [
    'Goa Carnival',
    'Shigmo',
    'Christmas',
    'Sao Joao',
    'Diwali',
    'Feast of St. Francis Xavier',
  ],

  cuisine: [
    'Fish Curry Rice',
    'Pork Vindaloo',
    'Bebinca',
    'Xacuti',
    'Sorpotel',
    'Prawn Balchao',
    'Feni (Cashew/Coconut)',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Churches of Old Goa', type: 'UNESCO', city: 'Old Goa' },
    { name: 'Baga Beach', type: 'Natural', city: 'Bardez' },
    { name: 'Dudhsagar Falls', type: 'Natural', city: 'Sanguem' },
    { name: 'Fort Aguada', type: 'Historical', city: 'Bardez' },
    { name: 'Basilica of Bom Jesus', type: 'Religious', city: 'Old Goa' },
  ],

  touristAttractions: [
    { name: 'Baga & Calangute Beach', type: 'Beach', taluka: 'Bardez' },
    { name: 'Basilica of Bom Jesus', type: 'UNESCO World Heritage Site', city: 'Old Goa' },
    { name: 'Dudhsagar Falls', type: 'Waterfall', taluka: 'Sanguem' },
    { name: 'Fort Aguada', type: 'Portuguese Fort', taluka: 'Bardez' },
    { name: 'Anjuna Flea Market', type: 'Market', taluka: 'Bardez' },
    { name: 'Se Cathedral', type: 'Church', city: 'Old Goa' },
    { name: 'Palolem Beach', type: 'Beach', taluka: 'Canacona' },
    { name: 'Bhagwan Mahavir Wildlife Sanctuary', type: 'Wildlife Sanctuary', taluka: 'Sanguem' },
  ],

  history: `Goa was a Portuguese colony for over 450 years (1510-1961), making it the longest European colonization in India. It was liberated by the Indian Army in Operation Vijay on December 19, 1961. The state retains a unique blend of Indian and Portuguese cultures. Goa became a full state in 1987 after being a Union Territory.`,

  interestingFacts: [
    'Goa is the smallest state in India by area.',
    'It has the highest per capita income among Indian states.',
    'The Churches and Convents of Goa are UNESCO World Heritage Sites.',
    'Goa has Asia\'s only naval aviation museum.',
    'The state receives over 8 million tourists annually.',
    'Goa has the highest urbanization rate (62%) in India.',
  ],
};

module.exports = goa;
