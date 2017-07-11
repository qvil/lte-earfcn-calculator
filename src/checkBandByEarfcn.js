let table = require('../lteBandTable.json');
let constant = require('./constant');

module.exports = (earfcn) => {
    let nMin, nMax;
    if ( earfcn < constant.UL_EARFCN_MIN || (earfcn > constant.UL_EARFCN_MAX && earfcn <= constant.EARFCN_LIMIT) ) {
        // DL
        nMin = 'NDL_Min';
        nMax = 'NDL_Max';
    } 
    else if (earfcn >= constant.UL_EARFCN_MIN && earfcn <= constant.UL_EARFCN_MAX) {
        // UL
        nMin = 'NUL_Min';
        nMax = 'NUL_Max';
    }
    else {
        console.error('[Error] Wrong earfcn value.');
        return false;
    }
    for (let key in table) {
        if (table.hasOwnProperty(key)) {
            let element = table[key];
            if ( earfcn >= element[nMin] && earfcn <= element[nMax] ) {
                let band = element.band;
                return band;
            }
        }
    }
};