# Know India 🇮🇳

[![npm version](https://img.shields.io/npm/v/@aryanjsx/knowindia.svg)](https://www.npmjs.com/package/@aryanjsx/knowindia)
[![License](https://img.shields.io/npm/l/@aryanjsx/knowindia.svg)](https://github.com/aryanjsx/know-india/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/@aryanjsx/knowindia.svg)](https://www.npmjs.com/package/@aryanjsx/knowindia)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/@aryanjsx/knowindia)](https://www.npmjs.com/package/@aryanjsx/knowindia)
[![GitHub stars](https://img.shields.io/github/stars/aryanjsx/know-india)](https://github.com/aryanjsx/know-india/stargazers)

> A structured dataset and utility package by **[@aryanjsx](https://github.com/aryanjsx)** providing Indian states, union territories, capitals, regions, and metadata for web and backend applications.

---

## 📖 Project Overview

**Know India** is a comprehensive npm package designed to provide structured, reliable data about India's states and union territories. It powers the **Know India** tourism platform and can be seamlessly integrated into dashboards, websites, APIs, and educational applications.

Whether you're building a travel website, an educational app, a government portal, or any application that requires Indian geographical data, this package provides everything you need in a clean, well-organized format.

### Who is this for?

- 🌐 **Web Developers** building tourism or travel websites
- 📊 **Data Analysts** needing structured Indian geographical data
- 📱 **App Developers** creating location-based services
- 🎓 **Educators** building learning platforms about India
- 🏛️ **Government Projects** requiring standardized state/UT data

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🗺️ **Complete Coverage** | All 28 Indian states and 8 union territories |
| 🏛️ **Rich Metadata** | Capitals, regions, area, population, languages, and more |
| 🎯 **State Codes** | ISO-standard short codes for each state/UT |
| 🏞️ **Tourism Data** | Tourist attractions, festivals, cuisine, and famous landmarks |
| 📜 **Historical Info** | Brief history and interesting facts for each region |
| 🌸 **State Symbols** | State animals, birds, flowers, and trees |
| 📦 **Zero Dependencies** | Lightweight and fast - no external dependencies |
| 🔧 **Easy Integration** | Works with React, Next.js, Node.js, Express, and more |
| 📝 **Clean JSON Structure** | Well-organized data ready for immediate use |

---

## 📦 Installation

Install the package using your preferred package manager:

| Package Manager | Command |
|-----------------|---------|
| **npm** | `npm install @aryanjsx/knowindia` |
| **yarn** | `yarn add @aryanjsx/knowindia` |
| **pnpm** | `pnpm add @aryanjsx/knowindia` |
| **bun** | `bun add @aryanjsx/knowindia` |

---

## 🚀 Usage Examples

### Node.js (CommonJS)

```javascript
const { states, uts, India, INDIA } = require('@aryanjsx/knowindia');

// Get all states data
const allStates = states();
console.log(allStates);

// Get all union territories data
const allUTs = uts();
console.log(allUTs);

// Get combined data (states + UTs)
const indiaData = INDIA();
console.log(indiaData);

// Get quick lookup of all states and UTs
const lookup = India();
console.log(lookup);
```

### ES Modules (import)

```javascript
import { states, uts, India, INDIA } from '@aryanjsx/knowindia';

// Get specific state data
const maharashtra = states().MH;
console.log(maharashtra);

// Get specific UT data
const delhi = uts().DL;
console.log(delhi);
```

### React / Next.js

```jsx
import { states, uts } from '@aryanjsx/knowindia';

function StatesList() {
  const allStates = states();
  
  return (
    <div className="states-grid">
      {Object.entries(allStates).map(([code, state]) => (
        <div key={code} className="state-card">
          <h3>{state.name}</h3>
          <p>Capital: {state.capital}</p>
          <p>Population: {state.population}</p>
        </div>
      ))}
    </div>
  );
}

export default StatesList;
```

### Express.js API

```javascript
const express = require('express');
const { states, uts, INDIA } = require('@aryanjsx/knowindia');

const app = express();

// Get all Indian data
app.get('/api/india', (req, res) => {
  res.json(INDIA());
});

// Get specific state by code
app.get('/api/states/:code', (req, res) => {
  const stateData = states()[req.params.code.toUpperCase()];
  if (stateData) {
    res.json(stateData);
  } else {
    res.status(404).json({ error: 'State not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📊 Data Structure

### State Data Example

Each state object contains comprehensive information:

```javascript
{
  name: 'West Bengal',
  capital: 'Kolkata',
  area: '88,752 km²',
  population: '104 million (2023 est.)',
  officialLanguages: ['Bengali', 'English'],
  literacyRate: '77.9%',
  stateAnimal: 'Fishing Cat',
  stateBird: 'White-throated Kingfisher',
  stateFlower: 'Night-flowering Jasmine',
  stateTree: 'Devil Tree',
  famousFor: [
    'Howrah Bridge',
    'Victoria Memorial',
    'Sundarbans',
    'Darjeeling Tea'
  ],
  festivals: ['Durga Puja', 'Kali Puja', 'Poush Mela', 'Rath Yatra'],
  cuisine: ['Roshogolla', 'Macher Jhol', 'Shorshe Ilish', 'Sandesh'],
  touristAttractions: [
    { name: 'Sundarbans National Park', type: 'National Park' },
    { name: 'Victoria Memorial', type: 'Historical Monument' },
    { name: 'Darjeeling', type: 'Hill Station' },
    { name: 'Kalimpong', type: 'Hill Station' }
  ],
  history: 'West Bengal has a rich history with contributions to literature...',
  interestingFacts: [
    'Home to the largest mangrove forest, Sundarbans.',
    'The birthplace of Rabindranath Tagore, Asia\'s first Nobel laureate.',
    'Known for its vibrant Durga Puja celebrations.'
  ]
}
```

### Union Territory Data Example

```javascript
{
  name: 'Delhi',
  capital: 'New Delhi',
  area: '1,484 km²',
  population: '31.2 million (2023 est.)',
  officialLanguages: ['Hindi', 'English', 'Punjabi', 'Urdu'],
  literacyRate: '88.7%',
  utAnimal: 'Nilgai',
  utBird: 'House Sparrow',
  utFlower: 'Alamanda',
  utTree: 'Jamun Tree',
  famousFor: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple'],
  festivals: ['Diwali', 'Holi', 'Eid', 'Lohri'],
  cuisine: ['Chole Bhature', 'Paratha', 'Butter Chicken', 'Biryani'],
  touristAttractions: [
    { name: 'Red Fort', type: 'Historical Monument' },
    { name: 'Qutub Minar', type: 'Monument' },
    { name: 'India Gate', type: 'War Memorial' },
    { name: 'Lotus Temple', type: 'Temple' }
  ],
  history: 'Delhi has a storied history, serving as the seat of several empires...',
  interestingFacts: [
    'Delhi is the second most populous city in India.',
    'It houses the President\'s residence, Rashtrapati Bhavan.',
    'Chandni Chowk is one of the oldest and busiest markets in India.'
  ]
}
```

---

## 🔑 API Reference

### Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `states()` | Get all Indian states data | Object with state codes as keys |
| `uts()` | Get all Union Territories data | Object with UT codes as keys |
| `INDIA()` | Get combined states and UTs data | `{ states: {...}, uts: {...} }` |
| `India()` | Get quick lookup with state/UT names | `{ allStates: {...}, allUts: {...} }` |

### State Codes Reference

#### States (28)

| Code | State | Code | State |
|------|-------|------|-------|
| AP | Andhra Pradesh | MN | Manipur |
| AR | Arunachal Pradesh | ML | Meghalaya |
| AS | Assam | MZ | Mizoram |
| BR | Bihar | NL | Nagaland |
| CG | Chhattisgarh | OD | Odisha |
| GA | Goa | PB | Punjab |
| GJ | Gujarat | RJ | Rajasthan |
| HR | Haryana | SK | Sikkim |
| HP | Himachal Pradesh | TN | Tamil Nadu |
| JH | Jharkhand | TG | Telangana |
| KA | Karnataka | TR | Tripura |
| KL | Kerala | UP | Uttar Pradesh |
| MP | Madhya Pradesh | UK | Uttarakhand |
| MH | Maharashtra | WB | West Bengal |

#### Union Territories (8)

| Code | Union Territory |
|------|-----------------|
| AN | Andaman and Nicobar Islands |
| CH | Chandigarh |
| DN | Dadra and Nagar Haveli and Daman and Diu |
| DL | Delhi |
| JK | Jammu and Kashmir |
| LA | Ladakh |
| LD | Lakshadweep |
| PY | Puducherry |

---

## 🌐 Real-World Usage

> **This package by [@aryanjsx](https://github.com/aryanjsx) is actively used in the [Know India](https://github.com/aryanjsx/know-india) tourism platform to dynamically render state-based content, power location filters, and provide educational information about Indian geography.**

### Example Use Cases

- **Tourism Websites**: Display state information, attractions, and travel guides
- **E-commerce Platforms**: State/city selection dropdowns
- **Educational Apps**: Learn about Indian geography and culture
- **Government Portals**: Official state data and statistics
- **Travel Planning Apps**: Destination information and recommendations
- **Data Visualization**: Create maps and charts with Indian data

---

## 📋 Versioning

This package follows **Semantic Versioning (SemVer)**:

- **MAJOR** version: Breaking changes (incompatible API changes)
- **MINOR** version: New features (backward compatible)
- **PATCH** version: Bug fixes (backward compatible)

Example: `1.2.3` = Major.Minor.Patch

### Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history and release notes.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on:

- How to submit issues
- How to propose new features
- Code style guidelines
- Pull request process

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🔒 Security

For security concerns, please review our [Security Policy](./SECURITY.md) or report vulnerabilities through GitHub's security advisory feature.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Aryan Kumar** ([@aryanjsx](https://aryankr.netlify.app))

- GitHub: [@aryanjsx](https://github.com/aryanjsx)
- npm: [@aryanjsx](https://www.npmjs.com/package/@aryanjsx)
- Twitter: [@aryanjsx](https://twitter.com/aryanjsx)

---

## ⭐ Support

If you find this package helpful, please consider:

- ⭐ Starring the [GitHub repository](https://github.com/aryanjsx/know-india)
- 📢 Sharing it with others
- 🐛 Reporting bugs or suggesting features
- 🤝 Contributing to the codebase

---

<p align="center">Made with ❤️ for India by <a href="https://github.com/aryanjsx">@aryanjsx</a></p>
