/**
 * Delhi (National Capital Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Delhi, Ministry of Tourism
 */

const delhi = {
  name: 'Delhi',
  capital: 'New Delhi',
  utCode: 'DL',
  region: 'North India',
  area: '1,484 km²',
  population: '32 million (2025 est.)',
  density: '11,300/km²',
  districts: 11,
  gdp: '$150 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'English', 'Punjabi', 'Urdu'],
  literacyRate: '88.7%',
  sexRatio: '866 females per 1000 males',
  utAnimal: 'Nilgai',
  utBird: 'House Sparrow',
  utFlower: 'Alstonia (Saptaparni)',
  utTree: 'Jamun',

  // Language data
  languages: {
    official: ['Hindi', 'English'],
    regional: ['Punjabi', 'Urdu', 'Bengali', 'Bhojpuri', 'Haryanvi'],
  },

  famousFor: [
    'Red Fort',
    'India Gate',
    'Qutub Minar',
    'Lotus Temple',
    'National Capital',
  ],

  // Major festivals
  majorFestivals: [
    'Diwali',
    'Holi',
    'Eid',
    'Republic Day',
    'Durga Puja',
  ],

  festivals: [
    'Diwali',
    'Holi',
    'Eid',
    'Republic Day Parade',
    'Durga Puja',
    'Phool Walon Ki Sair',
  ],

  cuisine: [
    'Chole Bhature',
    'Butter Chicken',
    'Paranthe Wali Gali',
    'Chaat',
    'Delhi Biryani',
    'Kebabs',
    'Kulfi Falooda',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Red Fort', type: 'UNESCO', city: 'Old Delhi' },
    { name: 'Qutub Minar', type: 'UNESCO', city: 'Mehrauli' },
    { name: 'Humayun\'s Tomb', type: 'UNESCO', city: 'Nizamuddin' },
    { name: 'India Gate', type: 'Historical', city: 'New Delhi' },
    { name: 'Lotus Temple', type: 'Religious', city: 'Nehru Place' },
  ],

  touristAttractions: [
    { name: 'Red Fort', type: 'UNESCO World Heritage Site', area: 'Old Delhi' },
    { name: 'Qutub Minar', type: 'UNESCO World Heritage Site', area: 'Mehrauli' },
    { name: 'Humayun\'s Tomb', type: 'UNESCO World Heritage Site', area: 'Nizamuddin' },
    { name: 'India Gate', type: 'War Memorial', area: 'Rajpath' },
    { name: 'Lotus Temple', type: 'Bahai House of Worship', area: 'Nehru Place' },
    { name: 'Akshardham Temple', type: 'Temple', area: 'Akshardham' },
    { name: 'Chandni Chowk', type: 'Historical Market', area: 'Old Delhi' },
    { name: 'Jama Masjid', type: 'Mosque', area: 'Old Delhi' },
  ],

  history: `Delhi has been continuously inhabited since the 6th century BCE and has served as the capital of various empires including the Delhi Sultanate, Mughal Empire, and British India. New Delhi was designed by Edwin Lutyens and Herbert Baker and inaugurated as the capital in 1931. Delhi became a Union Territory in 1956 and was given special National Capital Territory status in 1991.`,

  interestingFacts: [
    'Delhi has 3 UNESCO World Heritage Sites.',
    'The Delhi Metro is India\'s first modern metro system (opened 2002).',
    'Chandni Chowk is one of the oldest and busiest markets in India.',
    'Delhi hosts the Republic Day Parade, India\'s largest annual event.',
    'Rashtrapati Bhavan is the largest residence of any head of state in the world.',
    'Delhi has been destroyed and rebuilt 7 times throughout history.',
  ],
};

module.exports = delhi;
