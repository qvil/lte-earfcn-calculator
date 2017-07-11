let constant = require('./constant');

module.exports = (earfcn) => {
    if ( earfcn < constant.UL_EARFCN_MIN || (earfcn > constant.UL_EARFCN_MAX && earfcn <= constant.EARFCN_LIMIT) ) {
        return 'DL';
    } 
    else if (earfcn >= constant.UL_EARFCN_MIN && earfcn <= constant.UL_EARFCN_MAX) {
        return 'UL';
    }
    else {
        console.error('[Error] Wrong earfcn value.');
        return false;
    }
};