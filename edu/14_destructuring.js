// Destructuring (구조분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
let arrVal1 = arr[0];
let arrVal2 = arr[1];

// const [val1, val2, val3, val4, val5] = arr;
// const [val1, , , , val5] = arr;
const [, val2, , var4] = arr;

// ------------------------------------------
const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  addr: "서울시",
  info: {
    board: 1,
  },
};
const age = 0;
// 변수명이 같을 경우 :(콜론)을 사용하여 변수명을 바꿀 수 있음.
// 해당 객체의 값이 없을 경우에는 디폴트 값을 설정
// 딥스가 깊을 경우에는 프로퍼티 객체를 가져와서 접근함.
const { age: userAge, gender, addr = "없음", info } = user;
console.log(userAge);
