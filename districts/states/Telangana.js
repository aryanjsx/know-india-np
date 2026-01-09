/**
 * Telangana State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Telangana, Ministry of Tourism
 */

const telangana = {
  name: 'Telangana',
  capital: 'Hyderabad',
  largestCity: 'Hyderabad',
  stateCode: 'TG',
  region: 'South India',
  area: '112,077 km²',
  population: '40 million (2025 est.)',
  density: '357/km²',
  districts: 33,
  gdp: '$160 billion (2024-25 est.)',
  officialLanguages: ['Telugu', 'Urdu'],
  literacyRate: '67.0%',
  sexRatio: '988 females per 1000 males',
  stateAnimal: 'Spotted Deer (Chital)',
  stateBird: 'Indian Roller (Palapitta)',
  stateFlower: 'Tangedu (Senna)',
  stateTree: 'Jammi Chettu (Prosopis cineraria)',

  // Language data
  languages: {
    official: ['Telugu', 'Urdu'],
    regional: ['Hindi', 'Marathi', 'Kannada', 'Tamil', 'English'],
  },

  famousFor: [
    'Hyderabadi Biryani',
    'Charminar',
    'IT Hub (HITEC City)',
    'Pearl & Diamond Trading',
    'Ramoji Film City',
  ],

  // Major festivals
  majorFestivals: [
    'Bonalu',
    'Bathukamma',
    'Ugadi',
    'Dasara',
    'Eid-ul-Fitr',
  ],

  festivals: [
    'Bonalu',
    'Bathukamma',
    'Dasara',
    'Ugadi',
    'Sankranti',
    'Eid-ul-Fitr',
  ],

  cuisine: [
    'Hyderabadi Biryani',
    'Haleem',
    'Mirchi Ka Salan',
    'Double Ka Meetha',
    'Pesarattu',
    'Qubani Ka Meetha',
    'Irani Chai',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Charminar', type: 'Historical', city: 'Hyderabad' },
    { name: 'Golconda Fort', type: 'Historical', city: 'Hyderabad' },
    { name: 'Ramoji Film City', type: 'Cultural', city: 'Hyderabad' },
    { name: 'Warangal Fort', type: 'Historical', city: 'Warangal' },
    { name: 'Thousand Pillar Temple', type: 'Religious', city: 'Warangal' },
  ],

  touristAttractions: [
    { name: 'Charminar', type: 'Monument', city: 'Hyderabad' },
    { name: 'Golconda Fort', type: 'Historical Site', city: 'Hyderabad' },
    { name: 'Ramoji Film City', type: 'Film Studio', city: 'Hyderabad' },
    { name: 'Hussain Sagar Lake', type: 'Lake', city: 'Hyderabad' },
    { name: 'Warangal Fort', type: 'Historical Fort', city: 'Warangal' },
    { name: 'Thousand Pillar Temple', type: 'Temple', city: 'Warangal' },
    { name: 'Nagarjuna Sagar Dam', type: 'Dam', district: 'Nalgonda' },
    { name: 'Bhongir Fort', type: 'Fort', district: 'Yadadri Bhuvanagiri' },
  ],

  history: `Telangana was formed on June 2, 2014, as the 29th state of India, carved out of Andhra Pradesh. The region has a rich cultural heritage dating back to the Kakatiya dynasty, Qutb Shahi dynasty, and the Nizams of Hyderabad. The Kakatiya dynasty built the famous Warangal Fort and the Thousand Pillar Temple. Hyderabad was founded by Muhammad Quli Qutb Shah in 1591.`,

  interestingFacts: [
    'Hyderabad is known as the "City of Pearls" and "City of Nizams."',
    'Telangana has a vibrant film industry known as Tollywood.',
    'Ramoji Film City is the largest integrated film studio complex in the world.',
    'Golconda was once the diamond capital of the world, producing the famous Kohinoor.',
    'Bathukamma is a unique floral festival celebrated only in Telangana.',
    'Hyderabad is the pharmaceutical and IT capital of India.',
  ],
};

module.exports = telangana;
