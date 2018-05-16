# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)

[![npm version](https://badge.fury.io/js/lte-earfcn-calculator.svg)](https://badge.fury.io/js/lte-earfcn-calculator)
[![Build Status](https://travis-ci.org/qvil/lte-earfcn-calculator.svg?branch=master)](https://travis-ci.org/qvil/lte-earfcn-calculator)
[![Coverage Status](https://coveralls.io/repos/github/qvil/lte-earfcn-calculator/badge.svg?branch=master)](https://coveralls.io/github/qvil/lte-earfcn-calculator?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Javascript library for calculate EARFCN and Frequency. The main purpose is to convert EARFCN to Frequency or vice versa to calculate EARFCN using frequency and band.

> [한국어](/README_ko.md)

## Supported Band

1~52 (Rel 16 May 2018)

## Install

```
npm install --save lte-earfcn-calculator
```

## Example

[Install](#Install) before execute code.

> Included example code in this library. Check this file. `/src/example.js` If you want to execute example try this `node src/example.js`

```js
import LTE from "lte-earfcn-calculator";

let earfcn = 0;
let band = 1;
let frequency = 2110; // MHz

console.log(LTE.earfcnToFreq(earfcn)); // 2110.0
console.log(LTE.freqToEarfcnByBand(band, frequency)); // 0.0
```

## Demo

* [Web](https://codesandbox.io/s/github/qvil/lte-earfcn-calculator/tree/master/demo/web)

## Test

This project support unit test using [mocha](https://mochajs.org)

```
npm test
```

## Contribute

Now you can dive into the project! Welcome anything, such as add frequencies, add test case, edit typo!

### Contributors

* [qvil(Taesu Hyeon)](https://github.com/qvil)
* [yellowgg2(Youngki Kang)](https://github.com/yellowgg2)

## Reference

* <http://niviuk.free.fr/lte_band.php>
* [jsonfile](https://www.npmjs.com/package/jsonfile) - To generate test json file.

## [LICENSE](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)

[MIT](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
