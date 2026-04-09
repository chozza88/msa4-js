// 배열 (Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 데이터 타입 Object
// 배열의 크기가 동적으로 변화 가능
// 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);
console.log(arr1[4]);

// length: 배열의 길이를 반환
// 이터러블: 프로그래밍에서 요소를 하나씩 차례대로 꺼낼 수 있는 '반복 가능한'객체를 뜻함
console.log(arr1.length);
const obj = {
  length: 1, // 속성(프로퍼티): 객체 안에 선언한 변수
  fnc: () => {
    // 메소드(Method): 객체 안에 선언한 함수
    console.log("함수임");
  },
};

// Array.isArray(arg): boolean
//  배열 객체인지 아닌지 체크.
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray("어레이")); // false

// Array.includes(searchElement): boolean
//  배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
console.log(arr1.includes(5));
console.log(arr1.includes(100));

// Array.indexOf(searchElement): number
//    배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
//    없으면 `-1`을 반환
let arr = ["홍길동", "둘리", "도우너"];
console.log(arr.indexOf("둘리")); // 1 반환
console.log(arr.indexOf("도우너")); // 2 반환
console.log(arr.indexOf("또치")); // -1 반환

// Array.push(...args): number ** 원본 배열 변경 **
// 많은 요소(10만개 이상의)를 배열을 담을때는 push를 지양함.
//    원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
let arr2 = [...arr]; // spread 연산자 : ...주소값 을 반환하면 이 주소값의 해당 값만 반환하고 이를 배열로 감싸줌.
// 얕은 복사(deep에서 object를 가지면, 값을 복사하는 것이 아니라 reference를 가진다.)
let resultArr = arr2.push(5); // return값으로 반환대 배열의 길이를 반환
console.log(resultArr, arr, arr2);

// Array.concat(...args): T[]
//    배열의 마지막 요소를 추가한 새로운 배열을 반환
arr = [1, 2, 3];
resultArr = arr.concat(4, 5, 6);
console.log(arr, resultArr);

// Array.pop(): T | undefined ** 원본 변경 **
//    원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 3];
resultArr = arr.pop();
console.log(arr, resultArr);

// Array.unshift(...args): number ** 원본 변경 **
//    원본 배열의 첫번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100);
console.log(arr, resultArr);

// Array.shift() : T | undefined ** 원본 변경 **
//    원본 배열의 첫번째 요소를 제거하고, 해당 요소를 반환
arr = [1, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);

// Array.splice(start, count, ...args): T[] ** 원본 변경 **
//  1. start만 전달했을 경우
//    - start가 양수일 경우
//      > 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환
//    - start가 음수일 경우
//      > 끝 요소부터 start 수 만큼의 해당 인덱스 요소를 모두 제거하고,
//        제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2);
console.log(arr, resultArr);

//  1. start와 count와 args를 전달했을 경우
//     - 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고,
//       해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2, 1);
console.log(arr, resultArr);

arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, 100, 200, 300);
console.log(arr, resultArr);

// Array.join(separator): String
//    배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//    배열의 요소가 없으면 빈문자열을 반환
//    seperator를 생략하면 기본 구분자가 `,`로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(","); // 데이터베이스에서 주소 연결 등에서 많이 사용
console.log(arr, resultArr);

// Array.sort(): T[] ** 원본 변경 **
//    배열의 요소를 문자열로 변환 후, 오름차순 정렬을 하고 정렬한 배열을 반환
arr = [6, 4, 7, 1, 11];
// (a - b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
// (a - b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
// (a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음
result = arr.sort((a, b) => a - b);
// 백엔드에서 데이터 정렬하여 보내주는 것이 성능이 좋음
console.log(arr, resultArr);

// Array.map(callback): T[]
//    배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후,
//    콜백 함수의 리턴 값들을 모아서 새로운 배열을 반환
array = [1, 2, 3, 4, 5, 6];
resultArr = array.map((elm) => {
  if (elm % 3 === 0) {
    return "짝";
  } else {
    return elm;
  }
});

console.log(resultArr);
class MyArr {
  arr = [1, 2, 3, 4, 5, 6];

  map(cb) {
    // 새로운 배열
    const newArr = [];

    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(cb(this.arr[i]));
    }
    return newArr;
  }
}

const myarr = new MyArr();
resultArr = myarr.map((elm) => {
  if (elm % 3 === 0) {
    return "짝";
  } else {
    return elm;
  }
});
console.log(resultArr);
// Array.some(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    조건에 맞는 결과가 하나라도 있으면 true, 없으면 false를 반환
arr = [
  { name: "홍길동", age: 20 },
  { name: "둘리", age: 50 },
  { name: "또치", age: 45 },
];
resultArr = arr.some((item) => item.age >= 50);
console.log(arr, resultArr);

// Array.every(callback): boolean
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    모두 조건에 맞으면 true, 아니면 false를 반환
arr = [
  { name: "홍길동", age: 20 },
  { name: "둘리", age: 50 },
  { name: "또치", age: 45 },
];
resultArr = arr.every((item) => item.age >= 20);
console.log(resultArr);

// Array.filter(callback): T[]
//    배열의 모든 요소에 대해 콜백함수를 실행 한 후,
//    조건에 만족한 요소만 모아서 새로운 배열로 반환
arr = [
  { name: "홍길동", age: 20 },
  { name: "둘리", age: 50 },
  { name: "또치", age: 45 },
];
resultArr = arr.filter((item) => item.age < 50);
console.log(resultArr);

// Array.foreach(callback) : void
//    배열의 모든 요소에 대해 콜백 함수를 반복 실행하고 싶을 때 사용
arr = [
  { name: "홍길동", age: 20 },
  { name: "둘리", age: 50 },
  { name: "또치", age: 45 },
];

arr.forEach((val, idx) => {
  // 내가 하고 싶은 처리
  console.log(val, idx);
});

// for (let i = 0; i < arr.length; i++) {
//   // 내가 하고 싶은 처리
//   // arr[i];
// }

// 버블 정렬
// [5, 4, 3, 2, 1, 10];
// [4, 5, 3, 2, 1, 10];
// [4, 3, 5, 2, 1, 10];
// [4, 3, 2, 5, 1, 10];
// [4, 3, 2, 1, 5, 10];
// [4, 3, 2, 1, 5, 10];

// [4, 3, 2, 1, 5, 10];
// [3, 4, 2, 1, 5, 10];
// [3, 2, 4, 1, 5, 10];
// [3, 2, 1, 4, 5, 10];
// [3, 2, 1, 4, 5, 10];
// [3, 2, 1, 4, 5, 10];
// [3, 2, 1, 4, 5, 10];

// [3, 2, 1, 4, 5, 10];
// [2, 3, 1, 4, 5, 10];
// [2, 1, 3, 4, 5, 10];
// [2, 1, 3, 4, 5, 10];
// [2, 1, 3, 4, 5, 10];
// [2, 1, 3, 4, 5, 10];

// [1, 2, 3, 4, 5, 10];
// [1, 2, 3, 4, 5, 10];
// [1, 2, 3, 4, 5, 10];
// [1, 2, 3, 4, 5, 10];
// [1, 2, 3, 4, 5, 10];
// [1, 2, 3, 4, 5, 10];

// function test(separator = ",") {
//   console.log(separator);
// }
// test();
// test("아아아앙아");

// test(1);
// test("둘리", "도우너");
// function test(...args) {
//   // rest 파라미터
//   // 파라미터 값을 여러개 받아서 배열로 만들어줌.
//   console.log(args);
// }

// ------------------------------------
// 배열 [2,4,5,6,9] 있다.
// 여기서 특정 요소가 있는지 확인하고 true/false를 반환하는
// `myIncludes` 함수를 만들어 주세요.
console.log("");
const myArr = [2, 4, 5, 6, 9];

// let target = 10;
// let resutl = false;

// for (let idx = 0; i < myArr.length; i++) {
//   if (target === myArr[idx]) {
//     result = true;
//     break;
//   }
// }

const myInclude = (arr, val) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = true;
    }
  }
  return false;
};

console.log(myInclude(myArr, 9));
console.log(myInclude(myArr, 2));
