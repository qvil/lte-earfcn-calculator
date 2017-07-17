# [LTE EARFCN Calculator](https://github.com/qvil/lte-earfcn-calculator)
>[영어](/README.md)

## 개요
LTE EARFCN 계산기 입니다. EARFCN을 주파수로 변환하거나 반대로 주파수와 밴드를 이용하여 EARFCN을 계산하는 기능이 주 목적입니다.

## 예제
코드를 실행하기 전에 [설치](#설치)하세요.

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
- [jsonfile](https://www.npmjs.com/package/jsonfile) - 테스트를 위한 json file 생성을 위해 사용됩니다.

## [라이센스](https://github.com/qvil/lte-earfcn-calculator/blob/master/LICENSE)
MIT