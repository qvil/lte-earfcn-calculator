let table = require('../lteBandTable.json');
let checkBandByFreq = require('./checkBandByFreq');
let checkBandByEarfcn = require('./checkBandByEarfcn');
let checkULDLByEarfcn = require('./checkULDLByEarfcn');

let LTE = {
    freqToEarfcn: (freq) => {
        // let band = checkBandByFreq();
        // console.log(`[TS_LOG] band : ${band}`);
        // return earfcn;
        console.log("Currently not support. It'll be return false.");
        return false;
    },
    earfcnToFreq: (earfcn) => {
        let band = checkBandByEarfcn(earfcn);
        let link = checkULDLByEarfcn(earfcn);
        console.log(`[TS_LOG] link : ${link}`);
        // let freq = { DL: '', UL: '' }; // MHz
        let freq = ''; // MHz
        let index = band - 1;

        if ( link === "DL" ) {
            freq = table[index].FDL_Low + 0.1 * (earfcn - table[index].NDL_Min);
        }
        else if ( link === "UL" ) {
            freq = table[index].bandType !== 'TDD' ? table[index].FUL_Low + 0.1 * (earfcn - table[index].NUL_Min) : undefined;
        }
        else {
            console.error('[Error] Wrong earfcn value.');
            return false;
        }

        console.log(`[TS_LOG] band : ${band}`);
        
        return freq;
    },
};

module.exports = LTE;