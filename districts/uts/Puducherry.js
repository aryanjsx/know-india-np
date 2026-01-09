/**
 * Puducherry (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Puducherry, Ministry of Tourism
 */

const puducherry = {
  name: 'Puducherry',
  capital: 'Puducherry',
  utCode: 'PY',
  region: 'South India (Coastal)',
  area: '492 km²',
  population: '1.6 million (2025 est.)',
  density: '3,252/km²',
  districts: 4,
  gdp: '$10 billion (2024-25 est.)',
  officialLanguages: ['Tamil', 'French', 'English', 'Telugu', 'Malayalam'],
  literacyRate: '86.1%',
  sexRatio: '1,037 females per 1000 males',
  utAnimal: 'Indian Palm Squirrel',
  utBird: 'Asian Koel',
  utFlower: 'Cannonball Tree Flower',
  utTree: 'Bilva (Bael)',

  // Language data
  languages: {
    official: ['Tamil', 'French', 'English'],
    regional: ['Telugu', 'Malayalam', 'Hindi', 'Urdu', 'Creole French'],
  },

  famousFor: [
    'French Colonial Heritage',
    'Auroville (Universal Township)',
    'Sri Aurobindo Ashram',
    'Promenade Beach',
    'French Cuisine',
  ],

  // Major festivals
  majorFestivals: [
    'Pongal',
    'Bastille Day',
    'Massi Magam',
    'Diwali',
    'Fête de Puducherry',
  ],

  festivals: [
    'Pongal',
    'Bastille Day (July 14)',
    'Massi Magam',
    'Diwali',
    'Villianur Temple Festival',
    'Fête de Puducherry',
  ],

  cuisine: [
    'French Crepes',
    'Croissants & Baguettes',
    'Seafood Dishes',
    'Tamil Cuisine',
    'Coffee at French Cafés',
    'Creole Cuisine',
    'Filter Coffee',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Auroville (Matrimandir)', type: 'Cultural', city: 'Puducherry' },
    { name: 'Sri Aurobindo Ashram', type: 'Religious', city: 'Puducherry' },
    { name: 'French Quarter', type: 'Historical', city: 'Puducherry' },
    { name: 'Promenade Beach', type: 'Natural', city: 'Puducherry' },
    { name: 'Paradise Beach', type: 'Natural', city: 'Chunnambar' },
  ],

  touristAttractions: [
    { name: 'Auroville', type: 'Universal Township', district: 'Puducherry' },
    { name: 'Sri Aurobindo Ashram', type: 'Spiritual Center', area: 'White Town' },
    { name: 'Promenade Beach', type: 'Beach Boulevard', area: 'Puducherry' },
    { name: 'French Quarter (White Town)', type: 'Heritage Area', area: 'Puducherry' },
    { name: 'Paradise Beach', type: 'Beach', area: 'Chunnambar' },
    { name: 'Basilica of the Sacred Heart', type: 'Church', area: 'Puducherry' },
    { name: 'Botanical Garden', type: 'Garden', area: 'Puducherry' },
    { name: 'Serenity Beach', type: 'Beach', area: 'Puducherry' },
  ],

  history: `Puducherry (formerly Pondicherry) was a French colony from 1674 to 1954, making it one of the last European colonies in India. The French influence is still visible in its architecture, language, and cuisine. The territory consists of four disconnected regions: Puducherry and Karaikal (Tamil Nadu), Yanam (Andhra Pradesh), and Mahe (Kerala).`,

  interestingFacts: [
    'Puducherry is the only place in India where French is an official language.',
    'Bastille Day (French National Day) is still celebrated here.',
    'Auroville has residents from over 60 countries.',
    'The Matrimandir in Auroville took 37 years to complete.',
    'Puducherry has the highest sex ratio among all Indian territories (1,037).',
    'The territory is spread across four non-contiguous regions.',
  ],
};

module.exports = puducherry;
