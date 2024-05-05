// 함수의 의미와 사용법

// 기본 문법
function 함수명(입력값) {
  // 수행할 일
  return 반환값; // 있을 시
}

함수명(입력값);

// 1. 한 번 이상 사용하는 코드들을 함수로 간략하게 만들 수 있음

function allArithemics(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3,
  b = 4;
allArithemics(a, b); // 함수 실행 넣기

let c = 10,
  d = 2;
allArithemics(c, d);

let e = 7,
  f = 5;
allArithemics(e, f);

// 2. input을 받아 output을 반환 return 하는 것
function add(x, y) {
  return x + y; // ⭐️ 값을 반환(대체 할 수 있는 것)
}

let z = add(2, 3);

console.log(z);

// 특정 값을 반환하는 함수는 return문 필요
// 없다면 undefined를 반환

function isOdd(x) {
  return !!(x % 2);
}

let num = 12;

console.log(`${num}(는)은 ${isOdd(num) ? "홀" : "짝"}수입니다.`);

//  input으로 받는 값 - 인수와 인자
function add(x, y) {
  // x, y를 인자 또는 매개변수(parameter)라 부름
  return x + y;
}

// a, b를 인수(argument)라 부름
let zz = add(2, 3);

// 꼭 인자를 받거나 값을 반환하는 것은 아님
let currentTemp = 24.5;

function logCurrentTemp() {
  console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

console.log("반환값:", logCurrentTemp());

// return문은 꼭 마지막에
function add(x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y; // 마지막에 있어야 다 실행 됨
}

console.log(add(2, 7));

//호이스팅
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
  return x + y;
}

// 함수를 정의하는 방법들
// 1. 함수 선언
function add(x, y) {
  return x + y;
}

console.log(add(2, 7));
// 2. 상수나 변수에 함수 대입 함수도 값
const subt = function (x, y) {
  return x - y;
};

console.log(subt(7, 2));

function add(x, y) {
  return x + y;
}

console.log(add(2, 7));

// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
};

console.log(add(2, 7));

// 3. 화살표 함수
// 한 줄 안에 값만 반환시(인자를 받고 값을 반환하는 용도로 많이 쓰임)
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult1 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
// 화살표 한줄일 경우 return문은 필요 없음
const pow = (x) => x ** 2;
console.log(pow(3));
