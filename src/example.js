
/** ES6 */
// import LTE from 'lte-earfcn-calculator'; // Import outside code.
// import LTE from './index'; // Import inside code.
/** 
 * Below ES6
 * Not suport import below node.js version 8.
 * */
// var LTE = require('lte-earfcn-calculator'); // Import outside code.
var LTE = require('./index'); // Import inside code.

console.log('============ earfcnToFreq ============');
console.log(LTE.earfcnToFreq(0)); // 2110.0
console.log(LTE.earfcnToFreq(2750)); // 2620.0
console.log(LTE.earfcnToFreq(55240)); // 3550.0
console.log(LTE.earfcnToFreq(22150)); // 1710.0
console.log(LTE.earfcnToFreq(36000)); // 1900.0
console.log('============ freqToEarfcnByBand ============');
console.log(LTE.freqToEarfcnByBand(1, 2110)); // 0.0
console.log(LTE.freqToEarfcnByBand(1, 1980)); // 18599.0
console.log(LTE.freqToEarfcnByBand(48, 3700)); // 56739.0