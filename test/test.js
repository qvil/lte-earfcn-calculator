let assert = require('assert');
let checkBandByEarfcn = require('../src/checkBandByEarfcn');
let table = require('../lteBandTable.json');

describe('Check Band', ()=> {
    describe('#By EARFCN', () => {
        it('Should return DL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["NDL_Min"]; index < element["NDL_Max"]; index++) {
                        assert.equal(element.band, checkBandByEarfcn(index));
                    }
                }
            }
        });
        it('Should return UL band', () => {
            for (let key in table) {
                if (table.hasOwnProperty(key)) {
                    let element = table[key];
                    for (var index = element["NUL_Min"]; index < element["NUL_Max"]; index++) {
                        assert.equal(element.band, checkBandByEarfcn(index));
                    }
                }
            }
        });
    });
});