/**
 * Andaman and Nicobar Islands (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of A&N Islands, Ministry of Tourism
 */

const andamanNicobarIslands = {
  name: 'Andaman and Nicobar Islands',
  capital: 'Port Blair',
  utCode: 'AN',
  region: 'Bay of Bengal (Island Territory)',
  area: '8,249 km²',
  population: '0.4 million (2025 est.)',
  density: '49/km²',
  districts: 3,
  islands: 572,
  gdp: '$1.5 billion (2024-25 est.)',
  officialLanguages: ['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu', 'Malayalam'],
  literacyRate: '86.6%',
  sexRatio: '876 females per 1000 males',
  utAnimal: 'Dugong (Sea Cow)',
  utBird: 'Andaman Wood Pigeon',
  utFlower: 'Andaman Pyinma',
  utTree: 'Andaman Padauk',

  // Language data
  languages: {
    official: ['Hindi', 'English'],
    regional: ['Bengali', 'Tamil', 'Telugu', 'Malayalam', 'Nicobarese'],
  },

  famousFor: [
    'Cellular Jail (Kala Pani)',
    'Pristine Beaches',
    'Coral Reefs & Scuba Diving',
    'Indigenous Tribes',
    'Radhanagar Beach',
  ],

  // Major festivals
  majorFestivals: [
    'Island Tourism Festival',
    'Subhash Mela',
    'Beach Festival',
    'Diwali',
    'Pongal',
  ],

  festivals: [
    'Island Tourism Festival',
    'Subhash Mela',
    'Beach Festival',
    'Diwali',
    'Pongal',
    'Monsoon Festival',
  ],

  cuisine: [
    'Fish Curry with Rice',
    'Lobster Thermidor',
    'Coconut Prawn Curry',
    'Grilled Seafood',
    'Macher Jhol',
    'Coconut Water',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Cellular Jail', type: 'Historical', city: 'Port Blair' },
    { name: 'Radhanagar Beach', type: 'Natural', city: 'Havelock' },
    { name: 'Havelock Island', type: 'Natural', city: 'South Andaman' },
    { name: 'Ross Island', type: 'Historical', city: 'Port Blair' },
    { name: 'Barren Island', type: 'Natural', city: 'North Andaman' },
  ],

  touristAttractions: [
    { name: 'Cellular Jail', type: 'National Memorial', city: 'Port Blair' },
    { name: 'Radhanagar Beach', type: 'Asia\'s Best Beach', island: 'Havelock' },
    { name: 'Havelock Island (Swaraj Dweep)', type: 'Beach Island', district: 'South Andaman' },
    { name: 'Ross Island (Netaji Subhas Chandra Bose Island)', type: 'Historical Island', district: 'South Andaman' },
    { name: 'Neil Island (Shaheed Dweep)', type: 'Beach Island', district: 'South Andaman' },
    { name: 'Baratang Island', type: 'Limestone Caves', district: 'North & Middle Andaman' },
    { name: 'Barren Island', type: 'Active Volcano', district: 'North & Middle Andaman' },
    { name: 'North Bay Island', type: 'Coral Reef', district: 'South Andaman' },
  ],

  history: `The Andaman and Nicobar Islands have a rich history, from indigenous tribal settlements to British colonial rule. The infamous Cellular Jail (Kala Pani) was built by the British in 1906 to exile Indian freedom fighters. The islands were occupied by Japan during WWII (1942-45). They became a Union Territory of India in 1956.`,

  interestingFacts: [
    'Barren Island has the only active volcano in South Asia.',
    'The Sentinelese tribe on North Sentinel Island are among the world\'s last uncontacted peoples.',
    'Radhanagar Beach was voted Asia\'s best beach by TIME magazine.',
    'The Cellular Jail held freedom fighters like Veer Savarkar and Batukeshwar Dutt.',
    'The islands have India\'s only bio-luminescent beach at Havelock.',
    'Of 572 islands, only 37 are inhabited.',
  ],
};

module.exports = andamanNicobarIslands;
