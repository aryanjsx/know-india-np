/**
 * Rajasthan State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Rajasthan, Ministry of Tourism
 */

const rajasthan = {
  name: 'Rajasthan',
  capital: 'Jaipur',
  largestCity: 'Jaipur',
  stateCode: 'RJ',
  region: 'North India',
  area: '342,239 km²',
  population: '83 million (2025 est.)',
  density: '243/km²',
  districts: 50,
  gdp: '$180 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'Rajasthani'],
  literacyRate: '69.7%',
  sexRatio: '926 females per 1000 males',
  stateAnimal: 'Chinkara (Indian Gazelle)',
  stateBird: 'Great Indian Bustard (Godawan)',
  stateFlower: 'Rohida',
  stateTree: 'Khejri Tree',

  // Language data
  languages: {
    official: ['Hindi'],
    regional: ['Rajasthani', 'Marwari', 'Mewari', 'Bhili', 'Punjabi'],
  },

  famousFor: [
    'Palaces and Forts',
    'Thar Desert',
    'Camel Safaris',
    'Traditional Jewelry',
    'Rajasthani Art & Handicrafts',
  ],

  // Major festivals
  majorFestivals: [
    'Pushkar Fair',
    'Desert Festival',
    'Teej',
    'Gangaur',
    'Diwali',
  ],

  festivals: [
    'Pushkar Fair',
    'Desert Festival (Jaisalmer)',
    'Teej',
    'Gangaur',
    'Mewar Festival',
    'Elephant Festival',
  ],

  cuisine: [
    'Dal Baati Churma',
    'Gatte ki Sabzi',
    'Ker Sangri',
    'Laal Maas',
    'Ghevar',
    'Pyaaz Kachori',
    'Mawa Kachori',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Hill Forts of Rajasthan', type: 'UNESCO', city: 'Multiple Cities' },
    { name: 'Jantar Mantar', type: 'UNESCO', city: 'Jaipur' },
    { name: 'Amber Fort', type: 'Historical', city: 'Jaipur' },
    { name: 'City Palace Udaipur', type: 'Historical', city: 'Udaipur' },
    { name: 'Ranthambore Tiger Reserve', type: 'Natural', city: 'Sawai Madhopur' },
  ],

  touristAttractions: [
    { name: 'Amber Fort', type: 'Historical Monument', city: 'Jaipur' },
    { name: 'City Palace, Udaipur', type: 'Palace', city: 'Udaipur' },
    { name: 'Jaisalmer Fort', type: 'Desert Fort', city: 'Jaisalmer' },
    { name: 'Mehrangarh Fort', type: 'Fort', city: 'Jodhpur' },
    { name: 'Mount Abu', type: 'Hill Station', district: 'Sirohi' },
    { name: 'Ranthambore National Park', type: 'Tiger Reserve', district: 'Sawai Madhopur' },
    { name: 'Pushkar Lake', type: 'Sacred Lake', city: 'Pushkar' },
    { name: 'Hawa Mahal', type: 'Palace', city: 'Jaipur' },
  ],

  history: `Rajasthan, the "Land of Kings," boasts a rich history of Rajput valor, chivalry, and grand architecture. The region was home to many warrior clans who built magnificent forts and palaces. It includes the historic kingdoms of Mewar, Marwar, Jaipur, Bikaner, and Jaisalmer. The state was formed in 1949 after the merger of several princely states.`,

  interestingFacts: [
    'Rajasthan is the largest state in India by area.',
    'The state is home to the Thar Desert, the largest desert in India.',
    'Jaipur is known as the "Pink City" due to its distinctive terracotta pink buildings.',
    'The Pushkar Camel Fair is the world\'s largest camel fair.',
    'Rajasthan has 6 UNESCO World Heritage Sites.',
    'The state produces 90% of India\'s marble and 65% of its zinc.',
  ],
};

module.exports = rajasthan;
