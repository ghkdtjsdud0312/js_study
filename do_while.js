// while - 조건이 참인 동안 반복수행
let xb = 0;

while (xb < 10) {
  console.log(xb++);
}

// break문으로 무한반복 탈출 가능
let xv = 0;

while (true) {
  if (xv++ >= 5) break; // 😎
  console.log(xv);
}
// 1 ~ 5 출력

//continue와 break 사용
// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
let xx = 0;
while (xx < 14) {
  if (xx % 2 === 0) continue;
  if (xx > 7) break;
  console.log(xx++);
}

// 짧게 짠 수정 코드
let xc = 0;
while (xc < 14) {
  if (xc++ % 2 === 0) continue;
  if (xc > 8) break;
  console.log(xc - 1);
}

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
let x = 0;
while (x < 14) {
  const toContinue = x % 2 === 0;
  const toBreak = x > 7;
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow);
}

// do while - 일단 수행하고 조건을 평가
let xz = 12;

do {
  console.log(xz++);
} while (xz < 10);
