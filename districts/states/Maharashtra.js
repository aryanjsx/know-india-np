/**
 * Maharashtra State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Maharashtra, Ministry of Tourism
 */

const maharashtra = {
  name: 'Maharashtra',
  capital: 'Mumbai',
  largestCity: 'Mumbai',
  stateCode: 'MH',
  region: 'West India',
  area: '307,713 km²',
  population: '126 million (2025 est.)',
  density: '410/km²',
  districts: 36,
  gdp: '$450 billion (2024-25 est.)',
  officialLanguages: ['Marathi'],
  literacyRate: '82.9%',
  sexRatio: '929 females per 1000 males',
  stateAnimal: 'Indian Giant Squirrel (Shekru)',
  stateBird: 'Yellow-footed Green Pigeon (Hariyal)',
  stateFlower: 'Jarul (Pride of India)',
  stateTree: 'Mango Tree',

  // Language data
  languages: {
    official: ['Marathi'],
    regional: ['Hindi', 'Urdu', 'Gujarati', 'Kannada', 'English'],
  },

  famousFor: [
    'Bollywood Film Industry',
    'Gateway of India',
    'Ajanta & Ellora Caves',
    'Maratha Empire Heritage',
    'Lonavala-Khandala',
  ],

  // Major festivals
  majorFestivals: [
    'Ganesh Chaturthi',
    'Gudi Padwa',
    'Diwali',
    'Narali Purnima',
    'Pola',
  ],

  festivals: [
    'Ganesh Chaturthi',
    'Gudi Padwa',
    'Diwali',
    'Pola',
    'Bail Pola',
    'Narali Purnima',
  ],

  cuisine: [
    'Pav Bhaji',
    'Vada Pav',
    'Puran Poli',
    'Modak',
    'Misal Pav',
    'Thalipeeth',
    'Sabudana Khichdi',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Ajanta Caves', type: 'UNESCO', city: 'Aurangabad' },
    { name: 'Ellora Caves', type: 'UNESCO', city: 'Aurangabad' },
    { name: 'Gateway of India', type: 'Historical', city: 'Mumbai' },
    { name: 'Shirdi Sai Baba Temple', type: 'Religious', city: 'Ahmednagar' },
    { name: 'Elephanta Caves', type: 'UNESCO', city: 'Mumbai' },
  ],

  touristAttractions: [
    { name: 'Gateway of India', type: 'Historical Monument', city: 'Mumbai' },
    { name: 'Ajanta Caves', type: 'UNESCO World Heritage Site', district: 'Aurangabad' },
    { name: 'Ellora Caves', type: 'UNESCO World Heritage Site', district: 'Aurangabad' },
    { name: 'Lonavala & Khandala', type: 'Hill Station', district: 'Pune' },
    { name: 'Shirdi Sai Baba Temple', type: 'Religious Place', district: 'Ahmednagar' },
    { name: 'Mahabaleshwar', type: 'Hill Station', district: 'Satara' },
    { name: 'Chhatrapati Shivaji Maharaj Terminus', type: 'UNESCO World Heritage Site', city: 'Mumbai' },
    { name: 'Elephanta Caves', type: 'UNESCO World Heritage Site', city: 'Mumbai' },
  ],

  history: `Maharashtra has a significant historical background, with the Maratha Empire led by Chhatrapati Shivaji Maharaj being a prominent part of its heritage. The region was ruled by the Satavahanas, Chalukyas, Rashtrakutas, and Yadavas before the Marathas. Post-independence, it became a major financial and industrial hub of India. Mumbai is the financial capital of India and home to the Bombay Stock Exchange.`,

  interestingFacts: [
    'Mumbai is the financial capital of India, contributing 25% of industrial output and 70% of maritime trade.',
    'Maharashtra has the largest economy among all Indian states.',
    'The state houses Bollywood, which produces the largest number of films in India.',
    'Ajanta Caves contain paintings from 2nd century BCE.',
    'Maharashtra has 5 UNESCO World Heritage Sites.',
    'The Lavani dance form is a famous traditional dance of the state.',
  ],
};

module.exports = maharashtra;
