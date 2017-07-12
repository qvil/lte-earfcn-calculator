const table = require('../lteBandTable.json');
const checkBandByEarfcn = require('./checkBandByEarfcn');

let LTE = {
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
                    console.log(`[TS_LOG] earfcn : ${earfcn}`);
                    return earfcn;
                }
            }
        }
    },
    earfcnToFreq: (earfcn) => {
        let data = checkBandByEarfcn(earfcn);
        let freq = ''; // MHz
        let index = data.band - 1;

        if ( data.link === "DL" ) {
            freq = table[index].FDL_Low + 0.1 * (earfcn - table[index].NDL_Min);
        }
        else if ( data.link === "UL" ) {
            freq = table[index].bandType !== 'TDD' ? table[index].FUL_Low + 0.1 * (earfcn - table[index].NUL_Min) : undefined;
        }
        else {
            console.error('[Error] Wrong earfcn value.');
            return false;
        }

        return freq;
    },
};

module.exports = LTE;