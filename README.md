This is LTE EARFCN Calculator. The main purpose is to convert EARFCN to Frequency or vice versa to calculate EARFCN using frequency and band.

**Note**

Check out! Added [Example Demo Web](#web)!
>`Frequency to EARFCN` Function is coming!

# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)
[![npm version](https://badge.fury.io/js/lte-earfcn-calculator.svg)](https://badge.fury.io/js/lte-earfcn-calculator)
[![Build Status](https://travis-ci.org/qvil/lte-earfcn-calculator.svg?branch=master)](https://travis-ci.org/qvil/lte-earfcn-calculator)
[![Coverage Status](https://coveralls.io/repos/github/qvil/lte-earfcn-calculator/badge.svg?branch=master)](https://coveralls.io/github/qvil/lte-earfcn-calculator?branch=master)

## Overview
This is LTE EARFCN Calculator. The main purpose is to convert EARFCN to Frequency or vice versa to calculate EARFCN using frequency and band.
>[한국어](/README_ko.md)

### Supported Band
1~48 (Rel 18 July 2017)
>LTE frequency band [36.101](http://www.3gpp.org/DynaReport/36101-CRs.htm) (Rel 14 Jun 2017)

## Example

### Web
>[Demo : Sandbox](https://codesandbox.io/s/github/qvil/lte-earfcn-calculator/tree/master/example)

**Execute**
```sh
cd example
npm install
npm start
```

[Install](#Install) before execute code.

>Included example code in thie library. Check this file. `/src/example.js` If you want to execute example try this `node src/example.js`

```js
const LteEarfcnCalculator = require('lte-earfcn-calculator');

console.log(LteEarfcnCalculator.earfcnToFreq(0)); // 2110.0
```

## Install
```
yarn add lte-earfcn-calculator
```
or
```
npm install lte-earfcn-calculator
```

## Test
This project support unit test using [mocha](https://mochajs.org)

```
yarn test
```
or
```
npm test
```

## Contribute
Now you can dive into the project! Welcome anything, such as add frequencies, add test case, edit typo!

### Contributors
- [qvil(Taesu Hyeon)](https://github.com/qvil)

## Reference
- <http://niviuk.free.fr/lte_band.php>
- [jsonfile](https://www.npmjs.com/package/jsonfile) - To generate test json file.

## [LICENSE](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
MIT