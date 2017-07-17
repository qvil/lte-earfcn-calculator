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
                if (earfcn < 18000 || (earfcn > 65535 && earfcn <= 98303)) {
                    if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
                        freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
                    }
                    else {
                        continue;
                    }
                }
                else if (earfcn >= 18000 && earfcn <= 65535){
                    if ( earfcn >= element.NUL_Min && earfcn <= element.NUL_Max ) {
                        freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
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
        // Old
        // for (let key in table) {
        //     if (table.hasOwnProperty(key)) {
        //         let element = table[key];
        //         let freq;
        //         let test = JSON.stringify(element);
        //         console.log(`[TS_LOG] test : ${test}`);
        //         if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
        //             if ( element.DLOnly ) {
        //                 freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
        //             }
        //             else if ( !element.DLOnly ) {
        //                 freq = element.bandType !== 'TDD' ? element.FUL_Low + 0.1 * (earfcn - element.NUL_Min) : undefined;
        //             }
        //             else {
        //                 console.error('[Error] Wrong earfcn value.');
        //                 return false;
        //             }
        //             return freq.toFixed(1);
        //         }
        //     }
        // }
        // let data = checkBandByEarfcn(earfcn);
        // let freq = ''; // MHz
        // let index = data.band - 1;

        // if ( data.link === "DL" ) {
        //     freq = table[index].FDL_Low + 0.1 * (earfcn - table[index].NDL_Min);
        // }
        // else if ( data.link === "UL" ) {
        //     freq = table[index].bandType !== 'TDD' ? table[index].FUL_Low + 0.1 * (earfcn - table[index].NUL_Min) : undefined;
        // }
        // else {
        //     console.error('[Error] Wrong earfcn value.');
        //     return false;
        // }

        // return freq.toFixed(1);
    },
};

// let LteEarfcnCalculator = {
//     freqToEarfcn: (band, freq) => {
//         for (let key in table) {
//             if (table.hasOwnProperty(key)) {
//                 let element = table[key];
//                 let earfcn;
//                 if ( band == element.band ) {
//                     if ( freq >= element.FDL_Low && freq <= element.FDL_High ) {
//                         earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
//                     }
//                     else if ( freq >= element.FUL_Low && freq <= element.FUL_High ) {
//                         earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
//                     }
//                     else {
//                         console.error('[Error] Wrong frequency value.');
//                         return false;
//                     }

//                     return earfcn.toFixed(1);
//                 }
//             }
//         }
//     },
//     earfcnToFreq: (earfcn) => {
//         for (let key in table) {
//             if (table.hasOwnProperty(key)) {
//                 let element = table[key];
//                 let freq;
//                 if (earfcn < 18000 || (earfcn > 65535 && earfcn <= 98303)) {
//                     if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
//                         freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
//                     }
//                     else {
//                         continue;
//                     }
//                 }
//                 else if (earfcn >= 18000 && earfcn <= 65535){
//                     if ( earfcn >= element.NUL_Min && earfcn <= element.NUL_Max ) {
//                         freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
//                     }
//                     else {
//                         continue;
//                     }
//                 }
//                 else {
//                     continue;
//                 }

//                 return freq.toFixed(1);
//             }
//         }
        
//         console.error('[Error] Wrong earfcn value.');
//         return false;
//         // Old
//         // for (let key in table) {
//         //     if (table.hasOwnProperty(key)) {
//         //         let element = table[key];
//         //         let freq;
//         //         let test = JSON.stringify(element);
//         //         console.log(`[TS_LOG] test : ${test}`);
//         //         if ( earfcn >= element.NDL_Min && earfcn <= element.NDL_Max ) {
//         //             if ( element.DLOnly ) {
//         //                 freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
//         //             }
//         //             else if ( !element.DLOnly ) {
//         //                 freq = element.bandType !== 'TDD' ? element.FUL_Low + 0.1 * (earfcn - element.NUL_Min) : undefined;
//         //             }
//         //             else {
//         //                 console.error('[Error] Wrong earfcn value.');
//         //                 return false;
//         //             }
//         //             return freq.toFixed(1);
//         //         }
//         //     }
//         // }
//         // let data = checkBandByEarfcn(earfcn);
//         // let freq = ''; // MHz
//         // let index = data.band - 1;

//         // if ( data.link === "DL" ) {
//         //     freq = table[index].FDL_Low + 0.1 * (earfcn - table[index].NDL_Min);
//         // }
//         // else if ( data.link === "UL" ) {
//         //     freq = table[index].bandType !== 'TDD' ? table[index].FUL_Low + 0.1 * (earfcn - table[index].NUL_Min) : undefined;
//         // }
//         // else {
//         //     console.error('[Error] Wrong earfcn value.');
//         //     return false;
//         // }

//         // return freq.toFixed(1);
//     },
// };

// module.exports = LteEarfcnCalculator;