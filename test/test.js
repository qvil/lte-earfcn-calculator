const assert = require('assert');
const checkBandByEarfcn = require('../src/checkBandByEarfcn');
const checkBandByFreq = require('../src/checkBandByFreq');
const table = require('../lteBandTable.json');

describe('Check Band', () => {
    describe('#By EARFCN', () => {
        it('Should return DL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["NDL_Min"]; index < element["NDL_Max"]; index++) {
                        assert.equal(element.band, checkBandByEarfcn(index).band);
                    }
                }
            }
        });
        it('Should return UL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["NUL_Min"]; index < element["NUL_Max"]; index++) {
                        assert.equal(element.band, checkBandByEarfcn(index).band);
                    }
                }
            }
        });
    });
    describe('#By Freq.', () => {
        it('Should return DL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["FDL_Min"]; index < element["FDL_Max"]; index++) {
                        assert.equal(element.band, checkBandByFreq(index).band);
                    }
                }
            }
        });
        it('Should return UL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["FUL_Min"]; index < element["FUL_Max"]; index++) {
                        assert.equal(element.band, checkBandByFreq(index).band);
                    }
                }
            }
        });
    });
});