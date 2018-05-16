'use strict';

var jsonfile = require('jsonfile');

var file = './test/test.json';
var array = [];

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

var mode = args[0];
var start = parseInt(args[1]);
var end = parseInt(args[2]);
var step = parseFloat(args[3]);

// for (let i = start; i < end; i++) {
for (var i = start; i < end; i += step) {
    var obj = {
        "inputEarfcn": i,
        "outputFreq": i
    };
    array.push(obj);
}

jsonfile.writeFile(file, array, function (err) {
    console.error(err);
});