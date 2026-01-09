/**
 * Meghalaya State Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Meghalaya, Ministry of Tourism
 */

const meghalaya = {
  name: 'Meghalaya',
  capital: 'Shillong',
  largestCity: 'Shillong',
  stateCode: 'ML',
  region: 'Northeast India',
  area: '22,429 km²',
  population: '3.6 million (2025 est.)',
  density: '160/km²',
  districts: 12,
  gdp: '$6 billion (2024-25 est.)',
  officialLanguages: ['English', 'Khasi', 'Garo'],
  literacyRate: '75.5%',
  sexRatio: '989 females per 1000 males',
  stateAnimal: 'Clouded Leopard',
  stateBird: 'Hill Myna',
  stateFlower: 'Lady\'s Slipper Orchid',
  stateTree: 'Gamhar (Gmelina arborea)',

  // Language data
  languages: {
    official: ['English', 'Khasi', 'Garo'],
    regional: ['Jaintia (Pnar)', 'Hindi', 'Bengali', 'Nepali', 'Assamese'],
  },

  famousFor: [
    'Living Root Bridges',
    'Cherrapunji (Wettest Place)',
    'Limestone Caves',
    'Matrilineal Tribes',
    'Music & Rock Bands',
  ],

  // Major festivals
  majorFestivals: [
    'Shad Suk Mynsiem',
    'Wangala',
    'Behdienkhlam',
    'Nongkrem Dance Festival',
    'Cherry Blossom Festival',
  ],

  festivals: [
    'Shad Suk Mynsiem',
    'Wangala (100 Drums Festival)',
    'Behdienkhlam',
    'Nongkrem Dance Festival',
    'Christmas',
    'Cherry Blossom Festival',
  ],

  cuisine: [
    'Jadoh',
    'Doh-Khlieh',
    'Tungrymbai',
    'Dohneiiong',
    'Ki Kpu',
    'Nakham Bitchi',
    'Pukhlein',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Living Root Bridges', type: 'Natural', city: 'East Khasi Hills' },
    { name: 'Nohkalikai Falls', type: 'Natural', city: 'Cherrapunji' },
    { name: 'Mawlynnong Village', type: 'Cultural', city: 'East Khasi Hills' },
    { name: 'Dawki River', type: 'Natural', city: 'West Jaintia Hills' },
    { name: 'Mawsmai Cave', type: 'Natural', city: 'Cherrapunji' },
  ],

  touristAttractions: [
    { name: 'Living Root Bridges', type: 'Natural Wonder', district: 'East Khasi Hills' },
    { name: 'Nohkalikai Falls', type: 'Tallest Plunge Waterfall in India', town: 'Cherrapunji' },
    { name: 'Mawlynnong Village', type: 'Cleanest Village in Asia', district: 'East Khasi Hills' },
    { name: 'Dawki River', type: 'Crystal Clear River', district: 'West Jaintia Hills' },
    { name: 'Mawsmai Cave', type: 'Limestone Cave', town: 'Cherrapunji' },
    { name: 'Elephant Falls', type: 'Waterfall', city: 'Shillong' },
    { name: 'Laitlum Canyons', type: 'Viewpoint', district: 'East Khasi Hills' },
    { name: 'Umiam Lake', type: 'Lake', district: 'Ri Bhoi' },
  ],

  history: `Meghalaya, meaning "Abode of Clouds," was carved out of Assam on January 21, 1972. The state is home to the Khasi, Jaintia, and Garo tribes, each with distinct cultures. These tribes follow a matrilineal system where lineage is traced through the mother. The region was known for its strategic importance during British rule and was part of the Assam province.`,

  interestingFacts: [
    'Cherrapunji and Mawsynram are the wettest places on Earth.',
    'The living root bridges take 15-30 years to become fully functional.',
    'Meghalaya has a matrilineal society where children take the mother\'s surname.',
    'Mawlynnong was named Asia\'s cleanest village by Discover India.',
    'Shillong is called the "Scotland of the East" for its scenic beauty.',
    'The state has some of the longest and deepest caves in Asia.',
  ],
};

module.exports = meghalaya;
