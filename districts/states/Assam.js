/**
 * Assam State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Assam, Ministry of Tourism
 */

const assam = {
  name: 'Assam',
  capital: 'Dispur',
  largestCity: 'Guwahati',
  stateCode: 'AS',
  region: 'Northeast India',
  area: '78,438 km²',
  population: '37 million (2025 est.)',
  density: '472/km²',
  districts: 35,
  gdp: '$60 billion (2024-25 est.)',
  officialLanguages: ['Assamese', 'Bodo', 'Bengali'],
  literacyRate: '72.2%',
  sexRatio: '958 females per 1000 males',
  stateAnimal: 'One-horned Rhinoceros',
  stateBird: 'White-winged Duck',
  stateFlower: 'Foxtail Orchid (Kopou Phul)',
  stateTree: 'Hollong',

  // Language data
  languages: {
    official: ['Assamese', 'Bodo', 'Bengali'],
    regional: ['Hindi', 'Nepali', 'Karbi', 'Mishing', 'Dimasa'],
  },

  famousFor: [
    'Assam Tea',
    'Kaziranga National Park',
    'Muga Silk',
    'Brahmaputra River',
    'Bihu Dance',
  ],

  // Major festivals
  majorFestivals: [
    'Bihu (Rongali, Bhogali, Kongali)',
    'Ambubachi Mela',
    'Durga Puja',
    'Baishagu',
    'Me-Dam-Me-Phi',
  ],

  festivals: [
    'Bihu (Rongali, Bhogali, Kongali)',
    'Ambubachi Mela',
    'Durga Puja',
    'Baishagu',
    'Me-Dam-Me-Phi',
    'Ali-Ai-Ligang',
  ],

  cuisine: [
    'Assamese Thali',
    'Masor Tenga (Sour Fish Curry)',
    'Pitha',
    'Khar',
    'Duck Curry',
    'Xaak Bhaji',
    'Jolpan',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Kaziranga National Park', type: 'UNESCO', city: 'Golaghat' },
    { name: 'Manas National Park', type: 'UNESCO', city: 'Baksa' },
    { name: 'Kamakhya Temple', type: 'Religious', city: 'Guwahati' },
    { name: 'Majuli Island', type: 'Natural', city: 'Majuli' },
    { name: 'Sivasagar', type: 'Historical', city: 'Sivasagar' },
  ],

  touristAttractions: [
    { name: 'Kaziranga National Park', type: 'UNESCO World Heritage Site', district: 'Golaghat' },
    { name: 'Manas National Park', type: 'UNESCO World Heritage Site', district: 'Baksa' },
    { name: 'Kamakhya Temple', type: 'Shakti Peetha', city: 'Guwahati' },
    { name: 'Majuli Island', type: 'World\'s Largest River Island', district: 'Majuli' },
    { name: 'Sivasagar', type: 'Ahom Heritage Site', district: 'Sivasagar' },
    { name: 'Tawang (via Assam)', type: 'Gateway to Arunachal', city: 'Tezpur' },
    { name: 'Pobitora Wildlife Sanctuary', type: 'Rhino Habitat', district: 'Morigaon' },
  ],

  history: `Assam has a long history dating back to ancient times, known as Pragjyotishpura and Kamarupa. The powerful Ahom dynasty ruled for over 600 years (1228-1826), resisting Mughal invasions 17 times. The region became important during British rule due to its tea plantations. Assam played a significant role in the 1942 Quit India Movement.`,

  interestingFacts: [
    'Kaziranga houses two-thirds of the world\'s one-horned rhinoceros population.',
    'Majuli is the world\'s largest river island and a hub of neo-Vaishnavite culture.',
    'Assam produces over 50% of India\'s tea.',
    'The state has two UNESCO World Heritage Sites.',
    'Assamese Muga silk is the only golden silk in the world.',
    'The Brahmaputra is one of the few rivers named after a male deity.',
  ],
};

module.exports = assam;
