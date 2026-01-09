/**
 * Know India - A structured dataset package for Indian states and union territories
 * 
 * This package provides comprehensive data about India's 28 states and 8 union territories,
 * including capitals, regions, demographics, tourism information, and cultural details.
 * 
 * @module knowindia
 * @author Kuntal Ojha
 * @license MIT
 * @see https://github.com/kuntalojha/knowindia
 * 
 * Data Sources:
 * - Census of India
 * - Government of India official portals
 * - Ministry of Tourism, India
 * 
 * Usage:
 *   const { states, uts, India, INDIA } = require('knowindia');
 *   
 *   // Get all states
 *   const allStates = states();
 *   
 *   // Get specific state by code
 *   const maharashtra = states().MH;
 */

// Import data modules
const utsData = require('./districts/uts.js');
const statesData = require('./districts/states.js');
const IndiaData = require('./India.js');

/**
 * Get all Indian states data
 * Returns an object containing detailed information for all 28 Indian states
 * Each state is accessible via its ISO-standard short code (e.g., 'MH' for Maharashtra)
 * 
 * @returns {Object} Object containing all states data keyed by state codes
 * @example
 *   const allStates = states();
 *   const westBengal = allStates.WB;
 *   console.log(westBengal.capital); // 'Kolkata'
 */
const states = () => {
  return statesData.states;
};

/**
 * Get all Union Territories data
 * Returns an object containing detailed information for all 8 Indian union territories
 * Each UT is accessible via its short code (e.g., 'DL' for Delhi)
 * 
 * @returns {Object} Object containing all union territories data keyed by UT codes
 * @example
 *   const allUTs = uts();
 *   const delhi = allUTs.DL;
 *   console.log(delhi.capital); // 'New Delhi'
 */
const uts = () => {
  return utsData.uts;
};

/**
 * Get combined data for all states and union territories
 * Returns a unified object containing both states and UTs data
 * Useful for getting complete India geographical data in one call
 * 
 * @returns {Object} Object with 'states' and 'uts' properties containing respective data
 * @example
 *   const indiaData = INDIA();
 *   console.log(Object.keys(indiaData.states).length); // 28
 *   console.log(Object.keys(indiaData.uts).length); // 8
 */
const INDIA = () => {
  return { states: states(), uts: uts() };
};

/**
 * Get quick lookup object for all states and union territories
 * Returns a simplified object with state/UT codes mapped to their names
 * Useful for dropdowns, quick lookups, and name resolution
 * 
 * @returns {Object} Object with 'allStates' and 'allUts' containing code-to-name mappings
 * @example
 *   const lookup = India();
 *   console.log(lookup.allStates.MH); // 'Maharashtra'
 *   console.log(lookup.allUts.DL); // 'Delhi'
 */
const India = () => {
  return IndiaData.India;
};

// Export all functions for CommonJS usage
module.exports = { states, uts, India, INDIA };
