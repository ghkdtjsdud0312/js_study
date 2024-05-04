// typeof 연산자
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const e = Symbol("hello");
console.log(typeof e);

// 블리언
let isEmployed = true;
let isMarried = false;

console.log("직업 있음:", isEmployed);
console.log("기혼:", isMarried);

const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);

// 숫자
let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

// 문자열
let first_name = "Brendan";
let last_name = "Eich";
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

// undefined : 값이 부여되지 않은 상태
let x;
console.log(typeof x);

// null
let xy;
console.log("값 넣기 전", typeof xy);

xy = null;
console.log("null값 넣은 후", typeof xy);

let xz = 1;
console.log("변경 전", xz);

xz = null;
console.log("변경 후", xz);

// 컴파일언어(정적 타입) → 포장(컴파일)하면서 자료형 오류도 검수해냄
// 인터프리터 언어(동적타입) → 포장같은거 안하고 사용자한테 바로 갖다줌 -> 자바스크립트
