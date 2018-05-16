# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)

[![npm version](https://badge.fury.io/js/lte-earfcn-calculator.svg)](https://badge.fury.io/js/lte-earfcn-calculator)
[![Build Status](https://travis-ci.org/qvil/lte-earfcn-calculator.svg?branch=master)](https://travis-ci.org/qvil/lte-earfcn-calculator)
[![Coverage Status](https://coveralls.io/repos/github/qvil/lte-earfcn-calculator/badge.svg?branch=master)](https://coveralls.io/github/qvil/lte-earfcn-calculator?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

EARFCN 과 Frequency 변환을 위한 자바스크립트 라이브러리 입니다. EARFCN 을 주파수로 변환하거나 반대로 주파수와 밴드를 이용하여 EARFCN 을 계산하는 기능이 주 목적입니다.

> [영어](/README.md)

### 지원 밴드

1~52 (2018 년 5 월 16 일 기준)

## 설치

```
npm install --save lte-earfcn-calculator
```

## 예제

코드를 실행하기 전에 [설치](#설치)하세요.

> 라이브러리에 예제 코드가 포함되어 있습니다. 이 파일을 확인하십시오. `/src/example.js` 예제를 실행하려면`node src/example.js`를 시도해보십시오.

```js
import LTE from "lte-earfcn-calculator";

console.log(LTE.earfcnToFreq(0)); // 2110.0
console.log(LTE.freqToEarfcnByBand(1, 2110)); // 0.0
```

## 데모

* [웹](https://codesandbox.io/s/github/qvil/lte-earfcn-calculator/tree/master/demo/web)

## 테스트

이 프로젝트는 [mocha](https://mochajs.org)를 이용한 유닛테스트를 지원합니다.

```
npm test
```

## 기여

지금 바로 이 프로젝트에 참여하세요! 주파수를 추가하거나, 테스트 케이스를 추가하거나, 오타 수정 등 어떤 것이든 환영합니다!

### 기여자

* [qvil(현 태수)](https://github.com/qvil)
* [yellowgg2(강 영기)](https://github.com/yellowgg2)

## 참고

* <http://niviuk.free.fr/lte_band.php>
* [jsonfile](https://www.npmjs.com/package/jsonfile) - 테스트를 위한 json file 생성을 위해 사용됩니다.

## [라이센스](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)

[MIT](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
