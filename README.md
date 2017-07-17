# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)
>[한국어](/README_ko.md)

## Synopsis
This is LTE EARFCN Calculator. The main purpose is to convert EARFCN to Frequency or vice versa to calculate EARFCN using frequency and band.

## Example
[Install](#Install) before execute code.

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
- [jsonfile](https://www.npmjs.com/package/jsonfile) - To generate test json file.

## [LICENSE](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
MIT