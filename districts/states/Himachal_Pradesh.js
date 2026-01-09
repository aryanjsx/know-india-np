/**
 * Himachal Pradesh State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Himachal Pradesh, Ministry of Tourism
 */

const himachalPradesh = {
  name: 'Himachal Pradesh',
  capital: 'Shimla (Summer), Dharamshala (Winter)',
  largestCity: 'Shimla',
  stateCode: 'HP',
  region: 'North India (Himalayan)',
  area: '55,673 km²',
  population: '7.6 million (2025 est.)',
  density: '137/km²',
  districts: 12,
  gdp: '$30 billion (2024-25 est.)',
  officialLanguages: ['Hindi'],
  literacyRate: '83.8%',
  sexRatio: '972 females per 1000 males',
  stateAnimal: 'Snow Leopard',
  stateBird: 'Western Tragopan (Jujurana)',
  stateFlower: 'Pink Rhododendron',
  stateTree: 'Deodar Cedar',

  // Language data
  languages: {
    official: ['Hindi'],
    regional: ['Pahari', 'Kangri', 'Mandiali', 'Kulvi', 'Kinnauri'],
  },

  famousFor: [
    'Hill Stations',
    'Himalayan Landscapes',
    'Adventure Sports',
    'Apple Orchards',
    'Tibetan Culture (McLeodganj)',
  ],

  // Major festivals
  majorFestivals: [
    'Kullu Dussehra',
    'Lohri',
    'Shivratri (Mandi)',
    'Minjar Mela',
    'Fagli',
  ],

  festivals: [
    'Kullu Dussehra',
    'Lohri',
    'Shivratri (Mandi)',
    'Minjar Mela',
    'Fagli',
    'Halda Festival',
  ],

  cuisine: [
    'Dham',
    'Madra',
    'Chana Madra',
    'Tudkiya Bhath',
    'Siddu',
    'Babru',
    'Aktori',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Great Himalayan National Park', type: 'UNESCO', city: 'Kullu' },
    { name: 'Shimla', type: 'Historical', city: 'Shimla' },
    { name: 'Dharamshala', type: 'Religious', city: 'Kangra' },
    { name: 'Manali', type: 'Natural', city: 'Kullu' },
    { name: 'Spiti Valley', type: 'Natural', city: 'Lahaul-Spiti' },
  ],

  touristAttractions: [
    { name: 'Shimla', type: 'Hill Station (Queen of Hills)', district: 'Shimla' },
    { name: 'Manali', type: 'Adventure Hub', district: 'Kullu' },
    { name: 'Dharamshala & McLeodganj', type: 'Dalai Lama Residence', district: 'Kangra' },
    { name: 'Rohtang Pass', type: 'Mountain Pass', district: 'Kullu' },
    { name: 'Spiti Valley', type: 'Cold Desert', district: 'Lahaul-Spiti' },
    { name: 'Kasol', type: 'Backpacker Paradise', district: 'Kullu' },
    { name: 'Dalhousie', type: 'Hill Station', district: 'Chamba' },
    { name: 'Great Himalayan National Park', type: 'UNESCO World Heritage Site', district: 'Kullu' },
  ],

  history: `Himachal Pradesh, known as "Dev Bhoomi" (Land of Gods), has been an important center of Buddhist learning and Hindu pilgrimage throughout history. The region was ruled by various hill kingdoms before British consolidation. It became a Union Territory in 1948 and achieved statehood in 1971. The state is home to many ancient temples and monasteries.`,

  interestingFacts: [
    'Himachal Pradesh is the largest producer of apples in India.',
    'The Great Himalayan National Park is a UNESCO World Heritage Site.',
    'Dharamshala is the headquarters of the Tibetan Government in Exile.',
    'The state has the highest per capita income in the Himalayan region.',
    'Himachal has achieved 100% electrification of villages.',
    'The Kullu Dussehra is celebrated for 7 days, unlike one day elsewhere.',
  ],
};

module.exports = himachalPradesh;
