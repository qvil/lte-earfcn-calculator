'use strict';

var table = require('../lteBandTable.json');
var constant = require('./constant');

module.exports = function (earfcn) {
    var dataObj = {
        link: "DL",
        band: 0
    };
    var nMin = void 0,
        nMax = void 0;
    if (earfcn < constant.UL_EARFCN_MIN || earfcn > constant.UL_EARFCN_MAX && earfcn <= constant.EARFCN_LIMIT) {
        // DL
        nMin = 'NDL_Min';
        nMax = 'NDL_Max';
        dataObj.link = "DL";
    } else if (earfcn >= constant.UL_EARFCN_MIN && earfcn <= constant.UL_EARFCN_MAX) {
        // UL
        nMin = 'NUL_Min';
        nMax = 'NUL_Max';
        dataObj.link = "UL";
    } else {
        console.error('[Error] Wrong earfcn value.');
        return false;
    }
    for (var key in table) {
        if (table.hasOwnProperty(key)) {
            var element = table[key];
            if (earfcn >= element[nMin] && earfcn <= element[nMax]) {
                dataObj.band = element.band;
                return dataObj;
            }
        }
    }
};