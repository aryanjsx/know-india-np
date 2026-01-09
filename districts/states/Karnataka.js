/**
 * Karnataka State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Karnataka, Ministry of Tourism
 */

const karnataka = {
  name: 'Karnataka',
  capital: 'Bengaluru',
  largestCity: 'Bengaluru',
  stateCode: 'KA',
  region: 'South India',
  area: '191,791 km²',
  population: '71 million (2025 est.)',
  density: '370/km²',
  districts: 31,
  gdp: '$270 billion (2024-25 est.)',
  officialLanguages: ['Kannada'],
  literacyRate: '75.6%',
  sexRatio: '973 females per 1000 males',
  stateAnimal: 'Indian Elephant',
  stateBird: 'Indian Roller (Neelakantha)',
  stateFlower: 'Lotus',
  stateTree: 'Sandalwood',

  // Language data
  languages: {
    official: ['Kannada'],
    regional: ['Tulu', 'Konkani', 'Kodava', 'Urdu', 'Telugu'],
  },

  famousFor: [
    'Silicon Valley of India (Bengaluru)',
    'Hampi Ruins',
    'Mysore Palace',
    'Coorg Coffee Plantations',
    'Carnatic Music',
  ],

  // Major festivals
  majorFestivals: [
    'Mysore Dasara',
    'Ugadi',
    'Makar Sankranti',
    'Karaga',
    'Hampi Utsav',
  ],

  festivals: [
    'Mysore Dasara',
    'Ugadi',
    'Makar Sankranti',
    'Karaga',
    'Hampi Utsav',
    'Pattadakal Dance Festival',
  ],

  cuisine: [
    'Bisi Bele Bath',
    'Mysore Pak',
    'Ragi Mudde',
    'Neer Dosa',
    'Mangalore Buns',
    'Rava Idli',
    'Akki Roti',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Hampi', type: 'UNESCO', city: 'Ballari' },
    { name: 'Pattadakal', type: 'UNESCO', city: 'Bagalkot' },
    { name: 'Mysore Palace', type: 'Historical', city: 'Mysore' },
    { name: 'Coorg (Kodagu)', type: 'Natural', city: 'Madikeri' },
    { name: 'Jog Falls', type: 'Natural', city: 'Shivamogga' },
  ],

  touristAttractions: [
    { name: 'Mysore Palace', type: 'Historical Monument', city: 'Mysore' },
    { name: 'Hampi', type: 'UNESCO World Heritage Site', district: 'Ballari' },
    { name: 'Pattadakal', type: 'UNESCO World Heritage Site', district: 'Bagalkot' },
    { name: 'Coorg (Kodagu)', type: 'Hill Station', district: 'Kodagu' },
    { name: 'Bandipur National Park', type: 'Wildlife Sanctuary', district: 'Chamarajanagar' },
    { name: 'Jog Falls', type: 'Waterfall', district: 'Shivamogga' },
    { name: 'Gokarna Beach', type: 'Beach', district: 'Uttara Kannada' },
    { name: 'Badami Caves', type: 'Rock-cut Caves', district: 'Bagalkot' },
  ],

  history: `Karnataka has a rich heritage with the Vijayanagara Empire and Mysore Kingdom being key parts of its history. The region was ruled by dynasties like Kadambas, Chalukyas, Hoysalas, and Wodeyars. Today, it is known for its booming IT sector, with Bengaluru being the tech capital of India. The state has produced legendary figures like Basavanna and Kuvempu.`,

  interestingFacts: [
    'Bengaluru is known as the Silicon Valley of India, hosting over 400 tech companies.',
    'Karnataka is the largest producer of coffee in India (70% of total production).',
    'The state has the second highest number of UNESCO World Heritage Sites in India.',
    'Mysore Dasara is celebrated grandly for 10 days with a royal procession.',
    'Karnataka has the highest number of biotechnology companies in India.',
    'The famous Carnatic music trinity belonged to Karnataka.',
  ],
};

module.exports = karnataka;
