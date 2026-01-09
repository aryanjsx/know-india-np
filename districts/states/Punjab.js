/**
 * Punjab State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Punjab, Ministry of Tourism
 */

const punjab = {
  name: 'Punjab',
  capital: 'Chandigarh (shared with Haryana)',
  largestCity: 'Ludhiana',
  stateCode: 'PB',
  region: 'North India',
  area: '50,362 km²',
  population: '31 million (2025 est.)',
  density: '616/km²',
  districts: 23,
  gdp: '$85 billion (2024-25 est.)',
  officialLanguages: ['Punjabi'],
  literacyRate: '76.7%',
  sexRatio: '895 females per 1000 males',
  stateAnimal: 'Blackbuck',
  stateBird: 'Northern Goshawk',
  stateFlower: 'Gladiolus',
  stateTree: 'Shisham (Indian Rosewood)',

  // Language data
  languages: {
    official: ['Punjabi'],
    regional: ['Hindi', 'Urdu', 'English', 'Dogri', 'Bagri'],
  },

  famousFor: [
    'Golden Temple (Harmandir Sahib)',
    'Bhangra & Gidda Dance',
    'Agricultural Prosperity',
    'Punjabi Food',
    'Sikh Heritage',
  ],

  // Major festivals
  majorFestivals: [
    'Baisakhi',
    'Lohri',
    'Gurpurab',
    'Diwali',
    'Hola Mohalla',
  ],

  festivals: [
    'Baisakhi',
    'Lohri',
    'Gurpurab',
    'Diwali',
    'Hola Mohalla',
    'Maghi',
  ],

  cuisine: [
    'Sarson da Saag & Makki di Roti',
    'Butter Chicken',
    'Dal Makhani',
    'Chole Bhature',
    'Amritsari Kulcha',
    'Lassi',
    'Tandoori Chicken',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Golden Temple', type: 'Religious', city: 'Amritsar' },
    { name: 'Jallianwala Bagh', type: 'Historical', city: 'Amritsar' },
    { name: 'Wagah Border', type: 'Cultural', city: 'Amritsar' },
    { name: 'Anandpur Sahib', type: 'Religious', city: 'Rupnagar' },
    { name: 'Partition Museum', type: 'Historical', city: 'Amritsar' },
  ],

  touristAttractions: [
    { name: 'Golden Temple (Harmandir Sahib)', type: 'Religious Site', city: 'Amritsar' },
    { name: 'Jallianwala Bagh', type: 'Historical Site', city: 'Amritsar' },
    { name: 'Wagah Border', type: 'Border Ceremony', city: 'Amritsar' },
    { name: 'Anandpur Sahib', type: 'Religious Site', district: 'Rupnagar' },
    { name: 'Partition Museum', type: 'Museum', city: 'Amritsar' },
    { name: 'Patiala Palace', type: 'Palace', city: 'Patiala' },
    { name: 'Harike Wetland', type: 'Bird Sanctuary', district: 'Tarn Taran' },
  ],

  history: `Punjab, the "Land of Five Rivers," has a rich history and is the birthplace of Sikhism. The region was part of the Indus Valley Civilization and later ruled by the Mauryas, Guptas, and Mughals. The Sikh Empire under Maharaja Ranjit Singh was a powerful force in the 19th century. Punjab was partitioned in 1947, and the current state was reorganized in 1966.`,

  interestingFacts: [
    'Punjab is the "Granary of India," producing 20% of India\'s wheat.',
    'The Golden Temple serves free meals to over 100,000 visitors daily.',
    'The Wagah Border ceremony attracts thousands of visitors every evening.',
    'Punjab has the highest per capita income among large states in India.',
    'Bhangra music and dance have gained worldwide popularity.',
    'Punjab contributes significantly to the Indian Armed Forces.',
  ],
};

module.exports = punjab;
