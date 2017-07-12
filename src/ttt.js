const LTE = require('./index');
// console.log(LTE);
console.log(LTE.earfcnToFreq(3802).toFixed(1));
console.log(LTE.freqToEarfcn(2, 1930));
// console.log(LTE.freqToEarfcn(1940));