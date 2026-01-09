/**
 * Lakshadweep (Union Territory) Data
 * Data updated: January 2026
 * Sources: Census of India, Government of Lakshadweep, Ministry of Tourism
 */

const lakshadweep = {
  name: 'Lakshadweep',
  capital: 'Kavaratti',
  utCode: 'LD',
  region: 'Arabian Sea (Island Territory)',
  area: '32 km²',
  population: '70,000 (2025 est.)',
  density: '2,187/km²',
  islands: 36,
  inhabitedIslands: 10,
  gdp: '$300 million (2024-25 est.)',
  officialLanguages: ['Malayalam', 'English'],
  literacyRate: '92.3%',
  sexRatio: '946 females per 1000 males',
  utAnimal: 'Butterfly Fish',
  utBird: 'Sooty Tern (Noddy)',
  utFlower: 'Nalpamaram',
  utTree: 'Breadfruit Tree',

  // Language data
  languages: {
    official: ['Malayalam', 'English'],
    regional: ['Mahl (Maldivian)', 'Jeseri', 'Hindi', 'Tamil', 'Arabic'],
  },

  famousFor: [
    'Coral Atolls',
    'Crystal Clear Lagoons',
    'Water Sports',
    'Marine Life',
    'Pristine Beaches',
  ],

  // Major festivals
  majorFestivals: [
    'Eid-ul-Fitr',
    'Eid-ul-Adha',
    'Milad-un-Nabi',
    'Muharram',
    'Independence Day',
  ],

  festivals: [
    'Eid-ul-Fitr',
    'Bakrid',
    'Milad-un-Nabi',
    'Muharram',
    'Independence Day',
    'Republic Day',
  ],

  cuisine: [
    'Tuna Fish Curry',
    'Coconut-based Dishes',
    'Octopus Fry',
    'Tuna Pickle',
    'Appam',
    'Kallummakkaya (Mussels)',
    'Parotta with Fish Curry',
  ],

  // Tourism highlights
  tourismHighlights: [
    { name: 'Agatti Island', type: 'Natural', city: 'Agatti' },
    { name: 'Bangaram Island', type: 'Natural', city: 'Agatti' },
    { name: 'Minicoy Island', type: 'Natural', city: 'Minicoy' },
    { name: 'Kavaratti Island', type: 'Cultural', city: 'Kavaratti' },
    { name: 'Kadmat Island', type: 'Natural', city: 'Amindivi' },
  ],

  touristAttractions: [
    { name: 'Agatti Island', type: 'Gateway Island with Airport', atoll: 'Agatti' },
    { name: 'Bangaram Island', type: 'Resort Island', atoll: 'Agatti' },
    { name: 'Kavaratti Island', type: 'Capital Island', atoll: 'Kavaratti' },
    { name: 'Kadmat Island', type: 'Water Sports Hub', atoll: 'Amindivi' },
    { name: 'Minicoy Island', type: 'Southernmost Island', atoll: 'Minicoy' },
    { name: 'Kalpeni Island', type: 'Lagoon Island', atoll: 'Kalpeni' },
    { name: 'Marine Museum', type: 'Museum', island: 'Kavaratti' },
    { name: 'Thinnakara Island', type: 'Uninhabited Beach Island', atoll: 'Agatti' },
  ],

  history: `Lakshadweep, meaning "One Hundred Thousand Islands" in Sanskrit, has been inhabited for over 1,500 years. Arab traders introduced Islam in the 7th century. The islands were ruled by the Arakkal kingdom and later by Tipu Sultan before coming under British control. Lakshadweep became a Union Territory of India in 1956.`,

  interestingFacts: [
    'Lakshadweep is India\'s smallest Union Territory by area.',
    'It has India\'s only coral atoll system.',
    'The entire population is Muslim (97%).',
    'Entry to Lakshadweep requires a special permit.',
    'Bangaram is the only uninhabited island open to foreign tourists.',
    'Lakshadweep has the highest literacy rate among all Indian territories.',
  ],
};

module.exports = lakshadweep;
