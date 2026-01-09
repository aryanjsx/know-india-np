/**
 * Odisha State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Odisha, Ministry of Tourism
 */

const odisha = {
  name: 'Odisha',
  capital: 'Bhubaneswar',
  largestCity: 'Bhubaneswar',
  stateCode: 'OD',
  region: 'East India',
  area: '155,707 km²',
  population: '47 million (2025 est.)',
  density: '302/km²',
  districts: 30,
  gdp: '$90 billion (2024-25 est.)',
  officialLanguages: ['Odia'],
  literacyRate: '73.5%',
  sexRatio: '979 females per 1000 males',
  stateAnimal: 'Sambar Deer',
  stateBird: 'Indian Roller (Nilakantha)',
  stateFlower: 'Ashoka',
  stateTree: 'Ashwatha (Sacred Fig)',

  // Language data
  languages: {
    official: ['Odia'],
    regional: ['Hindi', 'Bengali', 'Telugu', 'Santali', 'Ho'],
  },

  famousFor: [
    'Konark Sun Temple',
    'Jagannath Temple Puri',
    'Odissi Dance',
    'Rath Yatra',
    'Silver Filigree Work',
  ],

  // Major festivals
  majorFestivals: [
    'Rath Yatra',
    'Durga Puja',
    'Raja Parba',
    'Nuakhai',
    'Konark Dance Festival',
  ],

  festivals: [
    'Rath Yatra',
    'Durga Puja',
    'Raja Parba',
    'Nuakhai',
    'Kumar Purnima',
    'Konark Dance Festival',
  ],

  cuisine: [
    'Pakhala Bhata',
    'Dalma',
    'Chhena Poda',
    'Rasabali',
    'Dahi Bara Aloo Dum',
    'Muga Bara',
    'Khaja',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Konark Sun Temple', type: 'UNESCO', city: 'Puri' },
    { name: 'Jagannath Temple', type: 'Religious', city: 'Puri' },
    { name: 'Chilika Lake', type: 'Natural', city: 'Puri' },
    { name: 'Lingaraj Temple', type: 'Religious', city: 'Bhubaneswar' },
    { name: 'Simlipal National Park', type: 'Natural', city: 'Mayurbhanj' },
  ],

  touristAttractions: [
    { name: 'Konark Sun Temple', type: 'UNESCO World Heritage Site', district: 'Puri' },
    { name: 'Jagannath Temple', type: 'Religious Site', city: 'Puri' },
    { name: 'Lingaraj Temple', type: 'Temple', city: 'Bhubaneswar' },
    { name: 'Chilika Lake', type: 'Asia\'s Largest Lagoon', district: 'Puri' },
    { name: 'Puri Beach', type: 'Beach', city: 'Puri' },
    { name: 'Simlipal National Park', type: 'Tiger Reserve', district: 'Mayurbhanj' },
    { name: 'Udayagiri & Khandagiri Caves', type: 'Rock-cut Caves', city: 'Bhubaneswar' },
    { name: 'Bhitarkanika Wildlife Sanctuary', type: 'Mangrove Forest', district: 'Kendrapara' },
  ],

  history: `Odisha, formerly known as Kalinga, has a rich cultural heritage dating back to the 3rd century BCE when Emperor Ashoka fought the Kalinga War. This battle transformed Ashoka and led to the spread of Buddhism. The region was ruled by the Kesari, Ganga, and Surya dynasties who built magnificent temples. Odisha is known as the "Soul of India" for its spiritual and artistic heritage.`,

  interestingFacts: [
    'The Kalinga War fought here transformed Emperor Ashoka to Buddhism.',
    'Rath Yatra at Puri is one of the oldest and largest chariot festivals in the world.',
    'Chilika Lake is the largest coastal lagoon in India and a Ramsar site.',
    'The Konark Sun Temple is designed as a chariot with 24 wheels.',
    'Bhubaneswar has over 700 temples, earning it the name "Temple City."',
    'Odisha has the largest tribal population after Madhya Pradesh.',
  ],
};

module.exports = odisha;
