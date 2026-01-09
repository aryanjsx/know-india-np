# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-01-10

### Added
- **New cultural and tourism-focused fields** for all 28 states and 8 Union Territories:
  - `languages`: Object with `official` and `regional` language arrays for linguistic diversity
  - `majorFestivals`: Array of 3-6 major festivals celebrated in each region
  - `tourismHighlights`: Structured array of tourist attractions with `name`, `type` (UNESCO/Historical/Religious/Natural/Cultural), and `city`
- Enhanced data suitable for:
  - Tourism platforms and travel apps
  - Educational applications
  - Dashboards and data visualization
  - AI/LLM training datasets (Hugging Face compatible)

### Changed
- All state and UT data files now include comprehensive cultural metadata
- Improved data consistency across all 36 entries
- Enhanced festival and tourism information with structured formats

### Data Coverage
- Languages: Official + 3-5 regional languages per state/UT
- Major Festivals: 3-6 festivals per state/UT
- Tourism Highlights: 2-5 categorized attractions per state/UT

---

## [1.1.0] - 2026-01-10

### Added
- **New data fields** for all states and UTs:
  - `stateCode` / `utCode`: Official ISO state codes
  - `region`: Geographic region classification
  - `largestCity`: Most populous city
  - `density`: Population density per km²
  - `districts`: Number of districts
  - `gdp`: Gross Domestic Product estimates
  - `sexRatio`: Sex ratio statistics
- Detailed documentation comments in all data files with data sources
- More tourist attractions with location details
- Additional festivals and cultural events
- Expanded cuisine lists with regional specialties
- Enhanced historical information
- More interesting facts for each state/UT

### Changed
- **Population data updated** to 2025 estimates for all 28 states and 8 UTs
- **Literacy rates** updated with latest figures
- Fixed Puducherry UT code from 'PR' to 'PY' (correct ISO code)
- Enhanced data structure with more comprehensive fields
- Improved accuracy of geographical and demographic data
- Updated tourist attractions with current status
- Modernized festival and cuisine information

### Data Coverage
- All 28 Indian states updated with 2025 data
- All 8 Union Territories updated with 2025 data
- Added new fields: region, largestCity, density, districts, gdp, sexRatio

---

## [1.0.0] - 2026-01-10

### Added
- Comprehensive README documentation with usage examples for Node.js, ES Modules, React, Next.js, and Express
- Detailed API reference section with function descriptions and return types
- State and Union Territory code reference tables
- Real-world usage examples and use cases
- Version history and semantic versioning documentation
- JSDoc comments throughout the codebase for better developer experience
- Package metadata including engines, files, and improved keywords

### Changed
- Updated package description to clearly state purpose and capabilities
- Enhanced keywords for better npm discoverability
- Improved code documentation with detailed comments explaining data sources and usage
- Updated license to MIT for broader compatibility
- Bumped version to 1.0.0 for production-ready release

### Documentation
- Added project overview explaining the Know India platform integration
- Added feature list with detailed descriptions
- Added installation instructions for npm, yarn, pnpm, and bun
- Added data structure examples showing state and UT object formats
- Added contributing guidelines reference
- Added security policy reference

---

## [0.0.0-beta.0] - Previous Release

### Added
- Initial beta release of the `knowindia` package
- Functions to retrieve data for all Indian states and union territories:
  - `states()`: Returns data for all 28 Indian states
  - `uts()`: Returns data for all 8 Union Territories (UTs)
  - `INDIA()`: Returns an object containing all states and UTs
  - `India()`: Returns the complete India data structure with quick lookups

### Data Included
- Complete state data for all 28 Indian states
- Complete union territory data for all 8 UTs
- Information includes: name, capital, area, population, languages, literacy rate
- Cultural data: state symbols, festivals, cuisine
- Tourism data: tourist attractions, famous landmarks
- Historical information and interesting facts

---

## [0.0.0-pre-alpha.0] - Initial Release

### Added
- Initial pre-alpha release
- Basic package structure and data organization
- Core functions for accessing Indian states and UT data
