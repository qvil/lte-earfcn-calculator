const LteEarfcnCalculator = require('./index');

console.log('============ earfcnToFreq ============');
console.log(LteEarfcnCalculator.earfcnToFreq(0)); // 2110.0
console.log(LteEarfcnCalculator.earfcnToFreq(2750)); // 2620.0
console.log(LteEarfcnCalculator.earfcnToFreq(55240)); // 3550.0
console.log(LteEarfcnCalculator.earfcnToFreq(22150)); // 1710.0
console.log(LteEarfcnCalculator.earfcnToFreq(36000)); // 1900.0
console.log('============ freqToEarfcnByBand ============');
console.log(LteEarfcnCalculator.freqToEarfcnByBand(1, 2170)); // 599.0
console.log(LteEarfcnCalculator.freqToEarfcnByBand(1, 1980)); // 18599.0
console.log(LteEarfcnCalculator.freqToEarfcnByBand(48, 3700)); // 56739.0