var jsonfile = require('jsonfile');

var file = './test/test.json';
let array = [];

// Map callback Test
// var obj = {
//     "inputEarfcn": 0,
//     "outputFreq": 0
// };

// var file = './data.json'
// for (var i = 0; i < 10; i++) {
//     obj.inputEarfcn = i
//     obj.outputFreq = i*2

//     array[0].
//     array.push(obj);
//     array.map((value) => {
//         console.log(value);
//     });
//     console.log("--------------------");
//     // array.push({inputEarfcn, i}, {outputFreq, i});
// }

// obj.inputEarfcn = 200;
// obj.outputFreq = 300;

// console.log(array);

var args = process.argv.slice(2);
console.log(`[TS_LOG] args : ${args}`);

let mode = args[0];
let start = parseInt(args[1]);
let end = parseInt(args[2]);
let step = parseFloat(args[3]);
console.log(`[TS_LOG] step : ${step}`);

// for (let i = start; i < end; i++) {
for (let i = start; i < end; i += step) {
    let obj = {
        "inputEarfcn": i,
        "outputFreq": i
    };
    array.push(obj);
}

jsonfile.writeFile(file, array, function (err) {
    console.error(err);
})