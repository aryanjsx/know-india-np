/**
 * Uttar Pradesh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Uttar Pradesh, Ministry of Tourism
 */

const uttarPradesh = {
  name: 'Uttar Pradesh',
  capital: 'Lucknow',
  largestCity: 'Lucknow',
  stateCode: 'UP',
  region: 'North India',
  area: '243,286 km²',
  population: '241 million (2025 est.)',
  density: '991/km²',
  districts: 75,
  gdp: '$280 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'Urdu'],
  literacyRate: '73.0%',
  sexRatio: '912 females per 1000 males',
  stateAnimal: 'Swamp Deer (Barasingha)',
  stateBird: 'Sarus Crane',
  stateFlower: 'Palash (Flame of the Forest)',
  stateTree: 'Ashoka Tree',

  // Language data
  languages: {
    official: ['Hindi', 'Urdu'],
    regional: ['Awadhi', 'Bhojpuri', 'Braj', 'Bundeli', 'Kannauji'],
  },

  famousFor: [
    'Taj Mahal',
    'Varanasi Ghats',
    'Kumbh Mela',
    'Ayodhya Ram Mandir',
    'Awadhi Cuisine',
  ],

  // Major festivals
  majorFestivals: [
    'Holi',
    'Diwali',
    'Kumbh Mela',
    'Eid',
    'Dev Deepawali',
  ],

  festivals: [
    'Holi',
    'Diwali',
    'Eid',
    'Kumbh Mela',
    'Dev Deepawali',
    'Ganga Mahotsav',
  ],

  cuisine: [
    'Tunde Kababi',
    'Lucknowi Biryani',
    'Awadhi Kebabs',
    'Peda (Mathura)',
    'Kachori-Sabzi',
    'Petha (Agra)',
    'Malaiyyo',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Taj Mahal', type: 'UNESCO', city: 'Agra' },
    { name: 'Fatehpur Sikri', type: 'UNESCO', city: 'Agra' },
    { name: 'Varanasi Ghats', type: 'Religious', city: 'Varanasi' },
    { name: 'Ayodhya Ram Mandir', type: 'Religious', city: 'Ayodhya' },
    { name: 'Sarnath', type: 'Historical', city: 'Varanasi' },
  ],

  touristAttractions: [
    { name: 'Taj Mahal', type: 'UNESCO World Heritage Site', city: 'Agra' },
    { name: 'Varanasi Ghats', type: 'Spiritual Capital', city: 'Varanasi' },
    { name: 'Ayodhya Ram Mandir', type: 'Temple', city: 'Ayodhya' },
    { name: 'Fatehpur Sikri', type: 'UNESCO World Heritage Site', district: 'Agra' },
    { name: 'Lucknow (Bara Imambara)', type: 'Historical Monument', city: 'Lucknow' },
    { name: 'Sarnath', type: 'Buddhist Site', city: 'Varanasi' },
    { name: 'Prayagraj (Sangam)', type: 'Religious Hub', city: 'Prayagraj' },
    { name: 'Mathura & Vrindavan', type: 'Pilgrimage Site', district: 'Mathura' },
  ],

  history: `Uttar Pradesh has been a cradle of Indian civilization, hosting major cultural and religious events throughout history. The region saw the rise and fall of empires including the Mauryas, Guptas, Mughals, and British. It is the birthplace of Lord Rama and Lord Krishna, and home to the ancient universities of Taxila and Nalanda's cultural influence. The state has played a crucial role in India's independence movement.`,

  interestingFacts: [
    'Uttar Pradesh is the most populous state in India and the most populous subnational entity in the world.',
    'The Taj Mahal is one of the New Seven Wonders of the World.',
    'The Kumbh Mela in Prayagraj is the largest religious gathering on Earth (over 120 million visitors).',
    'Varanasi is one of the oldest continuously inhabited cities in the world (over 3,000 years old).',
    'The state has 3 UNESCO World Heritage Sites.',
    'UP contributes the largest number of parliamentarians to the Indian Parliament.',
  ],
};

module.exports = uttarPradesh;
