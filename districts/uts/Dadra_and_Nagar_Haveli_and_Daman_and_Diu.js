/**
 * Dadra and Nagar Haveli and Daman and Diu (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of DNH & DD, Ministry of Tourism
 */

const dadraNagarHaveliDamanDiu = {
  name: 'Dadra and Nagar Haveli and Daman and Diu',
  capital: 'Daman',
  utCode: 'DN',
  region: 'West India (Coastal & Inland)',
  area: '603 km²',
  population: '0.6 million (2025 est.)',
  density: '995/km²',
  districts: 3,
  gdp: '$3 billion (2024-25 est.)',
  officialLanguages: ['Gujarati', 'Hindi', 'English', 'Marathi'],
  literacyRate: '77.7%',
  sexRatio: '774 females per 1000 males',
  utAnimal: 'Lion-tailed Macaque',
  utBird: 'Black Drongo',
  utFlower: 'Nagalinga (Cannonball)',
  utTree: 'Coconut Palm',

  // Language data
  languages: {
    official: ['Gujarati', 'Hindi', 'English'],
    regional: ['Marathi', 'Konkani', 'Portuguese', 'Bhili', 'Varli'],
  },

  famousFor: [
    'Portuguese Heritage',
    'Beaches',
    'Wildlife Sanctuaries',
    'Tribal Culture',
    'Water Sports',
  ],

  // Major festivals
  majorFestivals: [
    'Nariyal Purnima',
    'Diwali',
    'Christmas',
    'Holi',
    'Tarpa Festival',
  ],

  festivals: [
    'Nariyal Purnima (Coconut Day)',
    'Christmas',
    'Diwali',
    'Easter',
    'Tarpa Festival',
    'Holi',
  ],

  cuisine: [
    'Seafood Curry',
    'Chicken Vindaloo',
    'Fish Recheado',
    'Bebinca',
    'Prawn Balchao',
    'Ubadiyu',
    'Tribal Delicacies',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Devka Beach', type: 'Natural', city: 'Daman' },
    { name: 'Diu Fort', type: 'Historical', city: 'Diu' },
    { name: 'Nagoa Beach', type: 'Natural', city: 'Diu' },
    { name: 'Vanganga Lake Garden', type: 'Natural', city: 'Silvassa' },
    { name: 'Tribal Museum', type: 'Cultural', city: 'Silvassa' },
  ],

  touristAttractions: [
    { name: 'Devka Beach', type: 'Beach', area: 'Daman' },
    { name: 'Jampore Beach', type: 'Beach', area: 'Daman' },
    { name: 'Moti Daman Fort', type: 'Portuguese Fort', area: 'Daman' },
    { name: 'Nagoa Beach', type: 'Beach', area: 'Diu' },
    { name: 'Diu Fort', type: 'Portuguese Fort', area: 'Diu' },
    { name: 'Vanganga Lake Garden', type: 'Lake Garden', area: 'Silvassa' },
    { name: 'Tribal Museum', type: 'Museum', area: 'Silvassa' },
    { name: 'Satmaliya Deer Park', type: 'Wildlife Park', area: 'Silvassa' },
  ],

  history: `This UT was formed on January 26, 2020, by merging the former UTs of Dadra and Nagar Haveli and Daman and Diu. All three regions were Portuguese colonies until 1961 when they were liberated by the Indian Army. The Portuguese ruled Daman and Diu for over 450 years. Dadra and Nagar Haveli has a significant tribal population.`,

  interestingFacts: [
    'This is India\'s newest Union Territory (formed in 2020).',
    'Daman and Diu were the last Portuguese territories to be liberated (1961).',
    'The UT has Portuguese-era churches over 400 years old.',
    'Dadra and Nagar Haveli has a significant Varli tribal population.',
    'Nariyal Purnima marks the start of the fishing season.',
    'The region is a popular weekend getaway from Mumbai and Gujarat.',
  ],
};

module.exports = dadraNagarHaveliDamanDiu;
