// 콘솔 사용해보기
console.log("Hello World!");
console.log(1);
console.log(true);
console.log({ name: "홍길동", age: 20, married: false });
console.log("Hi!", 100, true, [1, 2, 3]);

// 흔히 활용되는 console 기능들
console.log("로그 - 기본적인 출력");
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능");
console.warn("경고 - 문제가 될 수 있는 부분");
console.error("오류 - 에러 발생 상황");

// 변수와 상수

// 값들을 주머니에 담아 사용하기
const SALUTATION = "Hello,";
let person = "철수";

console.log(SALUTATION, person);

let x; // x라는 변수 주머니를 만듦
console.log(x); // 자바스크립트는 undefined는 값으로 인식!

x = 1; // x 안에 1이라는 값을 넣음
console.log(x);

// 변수 선언과 값 넣기를 동시에 가능 (초기화 - 일반적인 사용법)
let y = 1; // 선언과 초기화를 함
console.log(y);

//다른 변수가 값은 값을 가질 때 - 메모리 절약 가능
let xy = 1;
let yz = x; // x가 가진 값을 y에 할당

console.log(xy, yz);

//x에 1을 넣은 뒤 값을 'Hello!'로 변경
let x1 = 1;
let y1 = x;
console.log("변경 전", x1, y1);

x1 = "Hello!";
console.log("변경 후", x1, y1);

// 이미 만들어진 주머니를 다시 만들(재선언) 수 없음
let xz = 1;
console.log("첫 선언", xz);

// let xz = 2; // 같은 변수 설정의 값은 사용할 수 없음
console.log("다시 선언", xz);

// 선언하기 전 코드를 사용할 수 없음
console.log(xyz);
let xyz = 1;
