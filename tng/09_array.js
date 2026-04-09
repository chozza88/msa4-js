// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40];
let result = [...ARR1].sort((a, b) => a - b);
console.log(result);
console.log(ARR1);

// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5, 7, 3, 4, 5, 1, 2];

let result2 = ARR2.filter((item) => item % 2 === 0);
let result3 = ARR2.filter((item) => item % 2 !== 0);

console.log(result2, result3);

let arr1 = [1, 2, 3, 4, 5];

let arr = [...arr1];

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5, 7, 3, 4, 5, 1, 2, 0];

const result4 = ARR3.map((elm) => elm % 3);

console.log(result4);

const newArray = [];
ARR3.forEach((elm) => {
  newArray.push(elm % 3);
});

console.log(newArray);

const arr4 = [5, 7, 3, 4, 5, 1, 2, 0];
const result5 = test(arr4);

console.log(arr4, result5);

function test(arr) {
  return arr.sort((a, b) => a - b);
}
