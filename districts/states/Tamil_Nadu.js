/**
 * Tamil Nadu State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Tamil Nadu, Ministry of Tourism
 */

const tamilNadu = {
  name: 'Tamil Nadu',
  capital: 'Chennai',
  largestCity: 'Chennai',
  stateCode: 'TN',
  region: 'South India',
  area: '130,058 km²',
  population: '77 million (2025 est.)',
  density: '592/km²',
  districts: 38,
  gdp: '$310 billion (2024-25 est.)',
  officialLanguages: ['Tamil'],
  literacyRate: '80.3%',
  sexRatio: '996 females per 1000 males',
  stateAnimal: 'Nilgiri Tahr',
  stateBird: 'Emerald Dove',
  stateFlower: 'Gloriosa Lily (Karthigai Poo)',
  stateTree: 'Palmyra Palm',

  // Language data
  languages: {
    official: ['Tamil'],
    regional: ['Telugu', 'Kannada', 'Malayalam', 'Urdu', 'English'],
  },

  famousFor: [
    'Mahabalipuram Temples',
    'Bharatanatyam Dance',
    'Kanchipuram Silk Sarees',
    'Chettinad Architecture',
    'Tamil Literature',
  ],

  // Major festivals
  majorFestivals: [
    'Pongal',
    'Thaipusam',
    'Deepavali',
    'Karthigai Deepam',
    'Chithirai Thiruvizha',
  ],

  festivals: [
    'Pongal',
    'Thaipusam',
    'Deepavali',
    'Karthigai Deepam',
    'Chithirai Thiruvizha',
    'Navaratri',
  ],

  cuisine: [
    'Idli & Dosa',
    'Sambar & Rasam',
    'Chettinad Chicken',
    'Filter Coffee',
    'Pongal (dish)',
    'Kothu Parotta',
    'Murukku',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Mahabalipuram', type: 'UNESCO', city: 'Chengalpattu' },
    { name: 'Great Living Chola Temples', type: 'UNESCO', city: 'Thanjavur' },
    { name: 'Meenakshi Amman Temple', type: 'Religious', city: 'Madurai' },
    { name: 'Nilgiri Mountain Railway', type: 'UNESCO', city: 'Ooty' },
    { name: 'Marina Beach', type: 'Natural', city: 'Chennai' },
  ],

  touristAttractions: [
    { name: 'Meenakshi Amman Temple', type: 'Temple', city: 'Madurai' },
    { name: 'Mahabalipuram', type: 'UNESCO World Heritage Site', district: 'Chengalpattu' },
    { name: 'Ooty (Udhagamandalam)', type: 'Hill Station', district: 'Nilgiris' },
    { name: 'Marina Beach', type: 'Beach', city: 'Chennai' },
    { name: 'Kodaikanal', type: 'Hill Station', district: 'Dindigul' },
    { name: 'Thanjavur Big Temple', type: 'UNESCO World Heritage Site', district: 'Thanjavur' },
    { name: 'Rameswaram', type: 'Pilgrimage Site', district: 'Ramanathapuram' },
    { name: 'Kanyakumari', type: 'Southern Tip of India', district: 'Kanyakumari' },
  ],

  history: `Tamil Nadu has a rich cultural history spanning over 2,000 years, with the Chola, Pandya, and Pallava dynasties leaving their mark through grand temples and monuments. The state is the cradle of Dravidian culture and Tamil literature. It has produced renowned poets like Thiruvalluvar and Bharathiar. Today, it is a hub for cultural festivals, classical arts, and automotive industry.`,

  interestingFacts: [
    'Tamil is one of the oldest living languages in the world (over 2,500 years old).',
    'Chennai houses India\'s longest natural urban beach, Marina Beach (13 km).',
    'Tamil Nadu is the leading producer of wind energy in India.',
    'The Great Living Chola Temples are UNESCO World Heritage Sites.',
    'The state has the highest number of temples in India.',
    'Tamil Nadu is known as the Detroit of India for its automobile industry.',
  ],
};

module.exports = tamilNadu;
