/**
 * Gujarat State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Gujarat, Ministry of Tourism
 */

const gujarat = {
  name: 'Gujarat',
  capital: 'Gandhinagar',
  largestCity: 'Ahmedabad',
  stateCode: 'GJ',
  region: 'West India',
  area: '196,024 km²',
  population: '72 million (2025 est.)',
  density: '367/km²',
  districts: 33,
  gdp: '$280 billion (2024-25 est.)',
  officialLanguages: ['Gujarati'],
  literacyRate: '79.5%',
  sexRatio: '918 females per 1000 males',
  stateAnimal: 'Asiatic Lion',
  stateBird: 'Greater Flamingo',
  stateFlower: 'Marigold',
  stateTree: 'Banyan Tree',

  // Language data
  languages: {
    official: ['Gujarati'],
    regional: ['Hindi', 'Sindhi', 'Marathi', 'Kutchi', 'English'],
  },

  famousFor: [
    'Gir National Park (Asiatic Lions)',
    'Rann of Kutch',
    'Statue of Unity',
    'Somnath Temple',
    'Vibrant Gujarat Summit',
  ],

  // Major festivals
  majorFestivals: [
    'Navratri',
    'Uttarayan (Makar Sankranti)',
    'Rann Utsav',
    'Janmashtami',
    'Diwali',
  ],

  festivals: [
    'Navratri',
    'Rann Utsav',
    'Makar Sankranti (Uttarayan)',
    'Janmashtami',
    'Shamlaji Fair',
    'Modhera Dance Festival',
  ],

  cuisine: [
    'Dhokla',
    'Thepla',
    'Khandvi',
    'Undhiyu',
    'Fafda-Jalebi',
    'Dabeli',
    'Gujarati Kadhi',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Rani ki Vav', type: 'UNESCO', city: 'Patan' },
    { name: 'Ahmedabad Old City', type: 'UNESCO', city: 'Ahmedabad' },
    { name: 'Dholavira', type: 'UNESCO', city: 'Kutch' },
    { name: 'Gir National Park', type: 'Natural', city: 'Junagadh' },
    { name: 'Statue of Unity', type: 'Cultural', city: 'Kevadia' },
  ],

  touristAttractions: [
    { name: 'Gir National Park', type: 'Wildlife Sanctuary', district: 'Junagadh' },
    { name: 'Rann of Kutch', type: 'Salt Desert', district: 'Kutch' },
    { name: 'Statue of Unity', type: 'Monument', district: 'Narmada' },
    { name: 'Somnath Temple', type: 'Religious Site', district: 'Gir Somnath' },
    { name: 'Dwarka', type: 'Pilgrimage Site', district: 'Devbhumi Dwarka' },
    { name: 'Ahmedabad Old City', type: 'UNESCO World Heritage Site', city: 'Ahmedabad' },
    { name: 'Rani ki Vav', type: 'UNESCO World Heritage Site', district: 'Patan' },
    { name: 'Dholavira', type: 'UNESCO World Heritage Site', district: 'Kutch' },
  ],

  history: `Gujarat has a rich historical legacy, including the Indus Valley civilization sites at Lothal and Dholavira. It played a pivotal role in India's independence movement, with Mahatma Gandhi being a native of the state. The region was ruled by the Mauryas, Guptas, Chalukyas, and later the Marathas. Today, Gujarat is one of the most industrialized states in India.`,

  interestingFacts: [
    'Gujarat is the only home of the Asiatic Lion in the world.',
    'The state houses the world\'s tallest statue - Statue of Unity (182 meters).',
    'Navratri in Gujarat is celebrated with Garba dance for 9 nights continuously.',
    'Gujarat has the longest coastline in India (1,600 km).',
    'Ahmedabad was the first city in India to be designated a UNESCO World Heritage City.',
    'The state is known for its vibrant textile and diamond industry.',
  ],
};

module.exports = gujarat;
