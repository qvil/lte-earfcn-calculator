const table = require('../lteBandTable.json');
const checkBandByEarfcn = require('./checkBandByEarfcn');

module.exports = {
    freqToEarfcn: (band, freq) => {
        for (let key in table) {
            if (table.hasOwnProperty(key)) {
                let element = table[key];
                let earfcn;
                if ( band == element.band ) {
                    if ( freq >= element.FDL_Low && freq <= element.FDL_High ) {
                        earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
                    }
                    else if ( freq >= element.FUL_Low && freq <= element.FUL_High ) {
                        earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
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
    earfcnToFreq: (earfcn) => {
        for (let key in table) {
            if (table.hasOwnProperty(key)) {
                let element = table[key];
                let freq;
                // Check Uplink Earfcn
                if (earfcn >= 18000 && earfcn < 36000){
                    if ( earfcn >= element.NUL_Min && earfcn <= element.NUL_Max ) {
                        freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
                    }
                    else {
                        continue;
                    }
                }
                // Check Downlink Earfcn
                else if (earfcn < 36000 || (earfcn > 65535 && earfcn <= 98303)) {
                    if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
                        freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
                    }
                    else {
                        continue;
                    }
                }
                // Check TDD Uplink Earfcn
                else if (earfcn >= 36000 && earfcn <= 65535){
                    if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
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