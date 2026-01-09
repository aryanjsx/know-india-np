/**
 * West Bengal State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of West Bengal, Ministry of Tourism
 */

const westBengal = {
  name: 'West Bengal',
  capital: 'Kolkata',
  largestCity: 'Kolkata',
  stateCode: 'WB',
  region: 'East India',
  area: '88,752 km²',
  population: '105 million (2025 est.)',
  density: '1,183/km²',
  districts: 23,
  gdp: '$200 billion (2024-25 est.)',
  officialLanguages: ['Bengali', 'English'],
  literacyRate: '77.9%',
  sexRatio: '950 females per 1000 males',
  stateAnimal: 'Fishing Cat',
  stateBird: 'White-throated Kingfisher',
  stateFlower: 'Night-flowering Jasmine (Shiuli)',
  stateTree: 'Chatim (Devil Tree)',

  // Language data
  languages: {
    official: ['Bengali', 'English'],
    regional: ['Hindi', 'Santali', 'Urdu', 'Nepali', 'Odia'],
  },

  famousFor: [
    'Howrah Bridge',
    'Victoria Memorial',
    'Sundarbans',
    'Darjeeling Tea',
    'Durga Puja',
  ],

  // Major festivals
  majorFestivals: [
    'Durga Puja',
    'Kali Puja',
    'Poila Boishakh',
    'Saraswati Puja',
    'Rath Yatra',
  ],

  festivals: [
    'Durga Puja',
    'Kali Puja',
    'Poush Mela',
    'Rath Yatra',
    'Saraswati Puja',
    'Poila Boishakh',
  ],

  cuisine: [
    'Rasgulla',
    'Sandesh',
    'Mishti Doi',
    'Macher Jhol',
    'Shorshe Ilish',
    'Kosha Mangsho',
    'Luchi-Alur Dom',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Sundarbans', type: 'UNESCO', city: 'South 24 Parganas' },
    { name: 'Darjeeling Himalayan Railway', type: 'UNESCO', city: 'Darjeeling' },
    { name: 'Victoria Memorial', type: 'Historical', city: 'Kolkata' },
    { name: 'Howrah Bridge', type: 'Cultural', city: 'Kolkata' },
    { name: 'Shantiniketan', type: 'Cultural', city: 'Birbhum' },
  ],

  touristAttractions: [
    { name: 'Sundarbans National Park', type: 'UNESCO World Heritage Site', district: 'South 24 Parganas' },
    { name: 'Victoria Memorial', type: 'Historical Monument', city: 'Kolkata' },
    { name: 'Darjeeling', type: 'Hill Station', district: 'Darjeeling' },
    { name: 'Howrah Bridge', type: 'Iconic Bridge', city: 'Kolkata' },
    { name: 'Kalimpong', type: 'Hill Station', district: 'Kalimpong' },
    { name: 'Shantiniketan', type: 'Cultural Site', district: 'Birbhum' },
    { name: 'Digha Beach', type: 'Beach', district: 'Purba Medinipur' },
    { name: 'Bishnupur Terracotta Temples', type: 'Heritage Site', district: 'Bankura' },
  ],

  history: `West Bengal has a rich history with significant contributions to literature, art, science, and the freedom movement. It was home to the Bengal Renaissance, with key figures like Rabindranath Tagore, Swami Vivekananda, and Raja Ram Mohan Roy shaping modern India. Kolkata served as the capital of British India until 1911. The state has been a cradle of intellectual and cultural movements.`,

  interestingFacts: [
    'Kolkata has the only operating tram network in India.',
    'Sundarbans is home to the largest mangrove forest in the world and the Royal Bengal Tiger.',
    'Rabindranath Tagore, Asia\'s first Nobel laureate, was from West Bengal.',
    'Durga Puja in Kolkata is a UNESCO Intangible Cultural Heritage.',
    'Darjeeling tea is known as the "Champagne of Teas."',
    'The Howrah Bridge carries over 100,000 vehicles daily without any nuts or bolts.',
  ],
};

module.exports = westBengal;
