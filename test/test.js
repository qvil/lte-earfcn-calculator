const assert = require('assert');
const LTE = require('../src');
const checkBandByEarfcn = require('../src/checkBandByEarfcn');
const table = require('../lteBandTable.json');
const testCase = require('./testCase.json');

// describe('Check Band', () => {
//     describe('#By EARFCN', () => {
//         it('Should return DL band', () => {
//             for (let key in table) {
//                 if (table.hasOwnProperty(key)) {
//                     let element = table[key];
//                     for (var index = element["NDL_Min"]; index < element["NDL_Max"]; index++) {
//                         assert.equal(element.band, checkBandByEarfcn(index).band);
//                     }
//                 }
//             }
//         });
//         it('Should return UL band', () => {
//             for (let key in table) {
//                 if (table.hasOwnProperty(key)) {
//                     let element = table[key];
//                     for (var index = element["NUL_Min"]; index < element["NUL_Max"]; index++) {
//                         assert.equal(element.band, checkBandByEarfcn(index).band);
//                     }
//                 }
//             }
//         });
//     });
// });

describe('Check EARFCN', () => {
    describe('#By Band, Freq.', () => {
        it('Should return DL EARFCN', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var freq = element["FDL_Low"]; freq < element["FDL_High"]; freq = freq + 0.1) {
                        earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
                        assert.equal(earfcn.toFixed(1), LTE.freqToEarfcn(element.band, freq));
                    }
                }
            }
        });
        it('Should return UL EARFCN', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var freq = element["FUL_Low"]; freq < element["FUL_High"]; freq = freq + 0.1) {
                        earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
                        assert.equal(earfcn.toFixed(1), LTE.freqToEarfcn(element.band, freq));
                    }
                }
            }
        });
    });
});

describe('Check Freq.', () => {
    describe('#By EARFCN', () => {
        it('Should return DL Freq.', () => {
            testCase.map((value, index, array) => {
                assert.equal(value.outputFreq, LTE.earfcnToFreq(value.inputEarfcn));
            });
        });
    });
});