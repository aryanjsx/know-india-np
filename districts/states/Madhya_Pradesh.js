/**
 * Madhya Pradesh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Madhya Pradesh, Ministry of Tourism
 */

const madhyaPradesh = {
  name: 'Madhya Pradesh',
  capital: 'Bhopal',
  largestCity: 'Indore',
  stateCode: 'MP',
  region: 'Central India',
  area: '308,252 km²',
  population: '87 million (2025 est.)',
  density: '282/km²',
  districts: 55,
  gdp: '$170 billion (2024-25 est.)',
  officialLanguages: ['Hindi'],
  literacyRate: '70.6%',
  sexRatio: '931 females per 1000 males',
  stateAnimal: 'Barasingha (Swamp Deer)',
  stateBird: 'Asian Paradise Flycatcher',
  stateFlower: 'Palash (Flame of the Forest)',
  stateTree: 'Banyan Tree',

  // Language data
  languages: {
    official: ['Hindi'],
    regional: ['Malvi', 'Bundeli', 'Bagheli', 'Nimadi', 'Gondi'],
  },

  famousFor: [
    'Khajuraho Temples',
    'Tiger Reserves',
    'Sanchi Stupa',
    'Bhimbetka Caves',
    'Tribal Culture',
  ],

  // Major festivals
  majorFestivals: [
    'Diwali',
    'Holi',
    'Navratri',
    'Tansen Music Festival',
    'Khajuraho Dance Festival',
  ],

  festivals: [
    'Tansen Music Festival',
    'Khajuraho Dance Festival',
    'Lokrang Festival',
    'Diwali',
    'Bhagoria Haat',
    'Navratri',
  ],

  cuisine: [
    'Poha & Jalebi (Indore)',
    'Dal Bafla',
    'Bhutte ka Kees',
    'Mawa Bati',
    'Sabudana Khichdi',
    'Palak Puri',
    'Malpua',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Khajuraho Temples', type: 'UNESCO', city: 'Chhatarpur' },
    { name: 'Sanchi Stupa', type: 'UNESCO', city: 'Raisen' },
    { name: 'Bhimbetka Rock Shelters', type: 'UNESCO', city: 'Raisen' },
    { name: 'Kanha National Park', type: 'Natural', city: 'Mandla' },
    { name: 'Bandhavgarh Tiger Reserve', type: 'Natural', city: 'Umaria' },
  ],

  touristAttractions: [
    { name: 'Khajuraho Temples', type: 'UNESCO World Heritage Site', district: 'Chhatarpur' },
    { name: 'Sanchi Stupa', type: 'UNESCO World Heritage Site', district: 'Raisen' },
    { name: 'Bhimbetka Rock Shelters', type: 'UNESCO World Heritage Site', district: 'Raisen' },
    { name: 'Kanha National Park', type: 'Tiger Reserve', district: 'Mandla' },
    { name: 'Bandhavgarh National Park', type: 'Tiger Reserve', district: 'Umaria' },
    { name: 'Pachmarhi', type: 'Hill Station', district: 'Narmadapuram' },
    { name: 'Orchha', type: 'Historical Town', district: 'Niwari' },
    { name: 'Ujjain (Mahakaleshwar)', type: 'Jyotirlinga Temple', city: 'Ujjain' },
  ],

  history: `Madhya Pradesh, often called the "Heart of India" due to its central location, has witnessed the rise and fall of several empires from the Mauryas to the Mughals. The Bhimbetka caves contain rock art from 30,000 years ago. The region was home to the Paramara, Chandela, and Holkar dynasties. Sanchi Stupa was built by Emperor Ashoka in the 3rd century BCE.`,

  interestingFacts: [
    'Madhya Pradesh has the largest forest cover in India.',
    'The state has 3 UNESCO World Heritage Sites.',
    'MP has the highest number of tigers in India (Tiger State).',
    'The Barasingha, found only in Kanha, is the state animal.',
    'Ujjain hosts the famous Simhastha (Kumbh) Mela every 12 years.',
    'Madhya Pradesh is the second largest state in India by area.',
  ],
};

module.exports = madhyaPradesh;
