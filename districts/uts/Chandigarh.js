/**
 * Chandigarh (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Chandigarh, Ministry of Tourism
 */

const chandigarh = {
  name: 'Chandigarh',
  capital: 'Chandigarh',
  utCode: 'CH',
  region: 'North India',
  area: '114 km²',
  population: '1.3 million (2025 est.)',
  density: '11,400/km²',
  sectors: 56,
  gdp: '$7 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'English', 'Punjabi'],
  literacyRate: '86.4%',
  sexRatio: '818 females per 1000 males',
  utAnimal: 'Indian Grey Mongoose',
  utBird: 'Indian Grey Hornbill',
  utFlower: 'Dhak (Palash)',
  utTree: 'Mango',

  // Language data
  languages: {
    official: ['Hindi', 'English', 'Punjabi'],
    regional: ['Haryanvi', 'Urdu', 'Bengali', 'Tamil', 'Nepali'],
  },

  famousFor: [
    'Le Corbusier\'s Urban Planning',
    'Rock Garden',
    'Sukhna Lake',
    'Cleanest City in India',
    'Capitol Complex (UNESCO Site)',
  ],

  // Major festivals
  majorFestivals: [
    'Chandigarh Carnival',
    'Rose Festival',
    'Baisakhi',
    'Lohri',
    'Mango Festival',
  ],

  festivals: [
    'Chandigarh Carnival',
    'Rose Festival',
    'Mango Festival',
    'Baisakhi',
    'Lohri',
    'Teej',
  ],

  cuisine: [
    'Chole Bhature',
    'Amritsari Kulcha',
    'Butter Chicken',
    'Lassi',
    'Aloo Paratha',
    'Rajma Chawal',
    'Pindi Chole',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Capitol Complex', type: 'UNESCO', city: 'Chandigarh' },
    { name: 'Rock Garden', type: 'Cultural', city: 'Chandigarh' },
    { name: 'Sukhna Lake', type: 'Natural', city: 'Chandigarh' },
    { name: 'Rose Garden', type: 'Natural', city: 'Chandigarh' },
    { name: 'Open Hand Monument', type: 'Cultural', city: 'Chandigarh' },
  ],

  touristAttractions: [
    { name: 'Rock Garden', type: 'Sculpture Garden', sector: '1' },
    { name: 'Sukhna Lake', type: 'Artificial Lake', sector: '1' },
    { name: 'Capitol Complex', type: 'UNESCO World Heritage Site', sector: '1' },
    { name: 'Rose Garden (Zakir Hussain)', type: 'Asia\'s Largest Rose Garden', sector: '16' },
    { name: 'Open Hand Monument', type: 'Le Corbusier Sculpture', sector: '1' },
    { name: 'Elante Mall', type: 'Shopping Mall', sector: 'Industrial Area' },
    { name: 'Pinjore Gardens', type: 'Mughal Gardens', nearby: 'Pinjore' },
    { name: 'Chandigarh Museum', type: 'Museum', sector: '10' },
  ],

  history: `Chandigarh was designed by the French architect Le Corbusier after the partition of India in 1947, when Lahore became part of Pakistan. It was built as a planned city and serves as the capital of both Punjab and Haryana. The Capitol Complex was declared a UNESCO World Heritage Site in 2016 as an outstanding example of Modern Movement in architecture.`,

  interestingFacts: [
    'Chandigarh is the first planned city in India post-independence.',
    'It has been consistently ranked among the cleanest cities in India.',
    'The Capitol Complex is a UNESCO World Heritage Site.',
    'Rock Garden is built entirely from industrial and household waste.',
    'Chandigarh has the highest per capita income in India.',
    'The city has a unique sector-based numbering system (no Sector 13).',
  ],
};

module.exports = chandigarh;
