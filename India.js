/**
 * India Data Module - Quick lookup mappings for Indian states and union territories
 * 
 * This module provides simplified code-to-name mappings for all Indian states and UTs.
 * Useful for dropdowns, form validation, and quick name resolution.
 * 
 * Data updated: January 2026
 * 
 * @module India
 * @author Kuntal Ojha
 * @license MIT
 */

/**
 * All Indian states with their ISO-standard codes
 * Total: 28 states as of 2025
 * 
 * @constant {Object} states
 */
const states = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CG: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OD: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UP: 'Uttar Pradesh',
  UK: 'Uttarakhand',
  WB: 'West Bengal',
};

/**
 * All Indian union territories with their codes
 * Total: 8 union territories as of 2025
 * 
 * Note: Jammu & Kashmir and Ladakh became UTs on October 31, 2019
 * Dadra and Nagar Haveli and Daman and Diu merged on January 26, 2020
 * 
 * @constant {Object} unionTerritories
 */
const unionTerritories = {
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
};

/**
 * Combined India object containing all states and union territories
 * Provides quick lookup for state/UT names by their codes
 * 
 * @constant {Object} India
 * @property {Object} allStates - Object containing all 28 state code-to-name mappings
 * @property {Object} allUts - Object containing all 8 UT code-to-name mappings
 * @property {number} totalStates - Number of states (28)
 * @property {number} totalUTs - Number of union territories (8)
 * 
 * @example
 *   const { India } = require('./India.js');
 *   console.log(India.allStates.MH); // 'Maharashtra'
 *   console.log(India.allUts.DL); // 'Delhi'
 */
const India = {
  allStates: states,
  allUts: unionTerritories,
  totalStates: 28,
  totalUTs: 8,
};

module.exports = { India };
