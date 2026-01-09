/**
 * Bihar State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Bihar, Ministry of Tourism
 */

const bihar = {
  name: 'Bihar',
  capital: 'Patna',
  largestCity: 'Patna',
  stateCode: 'BR',
  region: 'East India',
  area: '94,163 km²',
  population: '130 million (2025 est.)',
  density: '1,380/km²',
  districts: 38,
  gdp: '$100 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'Urdu'],
  literacyRate: '63.8%',
  sexRatio: '918 females per 1000 males',
  stateAnimal: 'Gaur (Indian Bison)',
  stateBird: 'House Sparrow',
  stateFlower: 'Kachnar (Bauhinia)',
  stateTree: 'Peepal Tree',

  // Language data
  languages: {
    official: ['Hindi', 'Urdu'],
    regional: ['Bhojpuri', 'Maithili', 'Magahi', 'Angika', 'Bajjika'],
  },

  famousFor: [
    'Bodh Gaya (Buddha\'s Enlightenment)',
    'Nalanda University',
    'Madhubani Paintings',
    'Chhath Puja',
    'Ancient Learning Centers',
  ],

  // Major festivals
  majorFestivals: [
    'Chhath Puja',
    'Holi',
    'Diwali',
    'Buddha Purnima',
    'Sonepur Mela',
  ],

  festivals: [
    'Chhath Puja',
    'Sonepur Mela',
    'Makar Sankranti',
    'Holi',
    'Sama-Chakeva',
    'Buddha Purnima',
  ],

  cuisine: [
    'Litti Chokha',
    'Sattu Paratha',
    'Thekua',
    'Khaja',
    'Dhuska',
    'Malpua',
    'Tilkut',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Mahabodhi Temple', type: 'UNESCO', city: 'Bodh Gaya' },
    { name: 'Nalanda University', type: 'UNESCO', city: 'Nalanda' },
    { name: 'Vikramshila', type: 'Historical', city: 'Bhagalpur' },
    { name: 'Rajgir', type: 'Religious', city: 'Nalanda' },
    { name: 'Vaishali', type: 'Historical', city: 'Vaishali' },
  ],

  touristAttractions: [
    { name: 'Mahabodhi Temple (Bodh Gaya)', type: 'UNESCO World Heritage Site', district: 'Gaya' },
    { name: 'Nalanda University Ruins', type: 'UNESCO World Heritage Site', district: 'Nalanda' },
    { name: 'Vikramshila University', type: 'Ancient University', district: 'Bhagalpur' },
    { name: 'Rajgir', type: 'Historical & Religious Site', district: 'Nalanda' },
    { name: 'Vaishali', type: 'Buddhist Site', district: 'Vaishali' },
    { name: 'Patna Sahib Gurudwara', type: 'Religious Site', city: 'Patna' },
    { name: 'Gandhi Setu', type: 'Bridge', city: 'Patna' },
    { name: 'Kesaria Stupa', type: 'Buddhist Stupa', district: 'East Champaran' },
  ],

  history: `Bihar was the center of power, learning, and culture in ancient India. It was home to the Maurya and Gupta empires and the world's oldest university, Nalanda. The region witnessed Buddha's enlightenment at Bodh Gaya and Mahavir's nirvana. Chandragupta Maurya and Emperor Ashoka ruled from Pataliputra (modern Patna). Bihar has produced many scholars, leaders, and revolutionaries.`,

  interestingFacts: [
    'Bodh Gaya is where Gautama Buddha attained enlightenment under the Bodhi Tree.',
    'Nalanda was the world\'s first residential university (5th century CE).',
    'Chhath Puja is the only Vedic festival dedicated to the Sun God.',
    'Bihar has produced India\'s first President (Dr. Rajendra Prasad).',
    'Chanakya, the ancient strategist and author of Arthashastra, was from Bihar.',
    'The state has 3 UNESCO World Heritage Sites.',
  ],
};

module.exports = bihar;
