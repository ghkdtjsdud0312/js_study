// if문
const open = true;

// 한줄 코드
if (open) console.log("영업중입니다.");

// 여러줄 코드 - 블록문 사용
if (open) {
  console.log("환영합니다.");
  console.log("즐거운 쇼핑하세요!");
}

// if ~ else문
const xq = 20;

if (xq % 2) {
  console.log("홀수입니다.");
} else {
  console.log("짝수입니다.");
}

// 중첩사용
const xw = 22;

if (xw % 4) {
  if (xw % 2) {
    console.log("홀수입니다.");
  } else {
    console.log("짝수입니다.");
  }
} else {
  console.log("4의 배수입니다.");
}

// if ~ else if ~문
const x = 21;

if (x % 2) {
  console.log("홀수입니다.");
} else if (x % 4) {
  console.log("짝수입니다.");
} else {
  console.log("4의 배수입니다.");
}

// return 문
function evalNum() {
  const x = 21;

  if (x % 2) {
    console.log("홀수입니다.");
    return;
  }

  if (x % 4) {
    console.log("짝수입니다.");
    return;
  }

  console.log("4의 배수입니다.");
}

evalNum();
console.log("블록문 바깥");
