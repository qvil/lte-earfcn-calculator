const LteEarfcnCalculator = require('./index');

console.log(LteEarfcnCalculator.earfcnToFreq(0)); // 2110.0
console.log(LteEarfcnCalculator.earfcnToFreq(2750)); // 2620.0
console.log(LteEarfcnCalculator.earfcnToFreq(55240)); // 3550.0
console.log(LteEarfcnCalculator.earfcnToFreq(22150)); // 1710.0
console.log(LteEarfcnCalculator.earfcnToFreq(36000)); // 1900.0