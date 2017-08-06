const table = require('../lteBandTable.json');
const checkBandByEarfcn = require('./checkBandByEarfcn');
// TODO: Do you want to slice if the end of value ".0"? Do not?
// const regex = /.0$/;
// earfcn.match(regex) ? earfcn.substr(0, earfcn.length - 2) : earfcn;

module.exports = {
    lteBandTable: table,
    /**
     * Calculate the frequeny using earfcn and band.
     * @author Taesu Hyeon
     * @param {number} inputBand LTE Band.
     * @param {number} freq LTE Frequency.
     * @returns {number}
     */
    freqToEarfcnByBand: (inputBand, freq) => {
        for (let key in table) {
            if (table.hasOwnProperty(key)) {
                let element = table[key];
                let earfcn;
                if (inputBand == element.band) {
                    if (freq >= element.FDL_Low && freq <= element.FDL_High) {
                        earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
                        earfcn = earfcn > element.NDL_Max ? earfcn - 1 : earfcn;
                    }
                    else if (freq >= element.FUL_Low && freq <= element.FUL_High) {
                        earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
                        earfcn = earfcn > element.NUL_Max ? earfcn - 1 : earfcn;
                    }
                    else {
                        console.error('[Error] Wrong frequency value.');
                        return false;
                    }

                    return earfcn.toFixed(1);
                }
            }
        }
    },
    /**
     * Calculate the frequency using earfcn.
     * @author Taesu Hyeon
     * @param {number} earfcn LTE earfcn value.
     * @returns {number}
     */
    earfcnToFreq: (earfcn) => {
        for (let key in table) {
            if (table.hasOwnProperty(key)) {
                let element = table[key];
                let freq;
                // Check Uplink Earfcn
                if (earfcn >= 18000 && earfcn < 36000) {
                    if (earfcn >= element.NUL_Min && earfcn <= element.NUL_Max) {
                        freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
                    }
                    else {
                        continue;
                    }
                }
                // Check Downlink Earfcn
                else if (earfcn < 36000 || (earfcn > 65535 && earfcn <= 98303)) {
                    if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
                        freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
                    }
                    else {
                        continue;
                    }
                }
                // Check TDD Uplink Earfcn
                else if (earfcn >= 36000 && earfcn <= 65535) {
                    if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
                        freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
                    }
                    else {
                        continue;
                    }
                }
                else {
                    continue;
                }

                return freq.toFixed(1);
            }
        }

        console.error('[Error] Wrong earfcn value.');
        return false;
    },
};