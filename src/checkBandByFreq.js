const table = require('../lteBandTable.json');

module.exports = (freq) => {
    for (let key in table) {
        if (table.hasOwnProperty(key)) {
            let element = table[key];
            let dataObj = {
                link: "DL",
                band: 0
            };
            if ( freq >= element.FDL_Low && freq <= element.FDL_High ) {
                dataObj.band = element.band;
                dataObj.link = "DL";
                console.log(1111);
                console.log(`[TS_LOG] dataObj.link : ${dataObj.link}`);
                console.log(`[TS_LOG] dataObj.band : ${dataObj.band}`);
                return dataObj;
            }
            else if ( freq >= element.FUL_Low && freq <= element.FUL_High ) {
                dataObj.band = element.band;
                dataObj.link = "UL";
                console.log(2222);
                return dataObj;
            }
            else {
                console.error('[Error] Wrong frequency value.');
                return false;
            }
        }
    }
};