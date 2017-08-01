**노트**

확인해보세요! [Example Demo Web](#Web)이 추가되었습니다!
>`Frequency to EARFCN` 기능이 추가될 예정입니다!

# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)

## 개요
LTE EARFCN 계산기 입니다. EARFCN을 주파수로 변환하거나 반대로 주파수와 밴드를 이용하여 EARFCN을 계산하는 기능이 주 목적입니다.
>[영어](/README.md)

### 지원 밴드
1~48 (2017년 7월 18일 기준)
>LTE frequency band [36.101](http://www.3gpp.org/DynaReport/36101-CRs.htm) (Rel 14 Jun 2017)

## 예제

### 웹
>[데모 : Sandbox](https://codesandbox.io/s/github/qvil/lte-earfcn-calculator/tree/master/example)

**실행**
```sh
cd example
npm install
npm start
```

코드를 실행하기 전에 [설치](#설치)하세요.

>라이브러리에 예제 코드가 포함되어 있습니다. 이 파일을 확인하십시오. `/src/example.js` 예제를 실행하려면`node src/example.js`를 시도해보십시오.

```js
const LteEarfcnCalculator = require('lte-earfcn-calculator');

console.log(LteEarfcnCalculator.earfcnToFreq(0)); // 2110.0
```

## 설치
```
yarn add lte-earfcn-calculator
```
or
```
npm install lte-earfcn-calculator
```

## 테스트
이 프로젝트는 [mocha](https://mochajs.org)를 이용한 유닛테스트를 지원합니다.

```
yarn test
```
or
```
npm test
```

## 기여
지금 바로 이 프로젝트에 참여하세요! 주파수를 추가하거나, 테스트 케이스를 추가하거나, 오타 수정 등 어떤 것이든 환영합니다!

### 기여자
- [qvil(현 태수)](https://github.com/qvil)

## 참고
- <http://niviuk.free.fr/lte_band.php>
- [jsonfile](https://www.npmjs.com/package/jsonfile) - 테스트를 위한 json file 생성을 위해 사용됩니다.

## [라이센스](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
MIT