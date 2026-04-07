// for 문
// 기본문법
// for (초기값; 조건식; 1회 루프당 증감값) {
//      // 반복하고 싶은 처리
// }

// for (let i = 0; i < 3; i++) {
//   if (i === 1) {
//     // break: 처리중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for (let i = 1; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(`${i}번재 루프문`);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`부모: ${i}번쨰`);
//   for (let z = 0; z < 3; z++) {
//     console.log(`자식: ${z}번째`);
//   }
// }

//구구단 n단
// let dan = 8;
// let multi = 9;
// for (let i = 1; i <= multi; i++) {
//   console.log(`${dan} x ${i} = ${dan * i}`);
// }
// let startDan = 2;
// let danEnd = 9;
// let mulEnd = 9;
// for (startDan; startDan <= danEnd; startDan++) {
//   console.log(`------------${startDan}단-------------`);

//   for (let mul = 1; mul <= mulEnd; mul++) {
//     console.log(`${startDan} x ${mul} = ${startDan * mul}`);
//   }
// }
