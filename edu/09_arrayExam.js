// indexOf() 메서드 구현
// 설명:
// 배열을 순회하면서 특정 값(searchElement)과 일치하는 요소를 찾는다.
// 일치하는 값이 있으면 해당 요소의 인덱스를 반환한다.
// 만약 일치하는 값이 없으면 -1을 반환한다.
const indexOfEx = (arr, searchElement) => {
  for (let i = 0; i < arr.length; i++) {
    // 배열을 순회하면서 값 비교
    if (arr[i] === searchElement) {
      return i; // 일치하는 요소의 인덱스 반환
    }
  }
  return -1; // 값이 없을 경우
};
// 사용 예시
console.log(indexOfEx(["홍길동", "둘리", "도우너"], "홍길동"));
console.log(indexOfEx(["홍길동", "둘리", "도우너"], "고길동"));

// push() 메서드 구현
// 설명:
// 배열의 마지막 인덱스 뒤에 새로운 요소들을 추가한다.
// 여러 개의 값을 받을 수 있으며, 순회하면서 배열에 순차적으로 추가한다.
// 최종적으로 변경된 배열의 길이를 반환한다.
const pushEx = (array, ...elements) => {
  for (let i = 0; i < elements.length; i++) {
    array[array.length] = elements[i]; // 마지막 인덱스에 추가
  }
  return array.length; // 변경 된 길이 반환
};

// 사용 예시
let arrayPushEx = [1, 2, 3, 4, 5];
let result = pushEx(arrayPushEx, 1, 2, 3);
console.log(result, arrayPushEx);

// pop() 메서드 구현
// 설명:
// 배열이 존재하지 않는다면 undefined를 반환한다.
// 배열의 마지막요소를 변수에 담아두고 배열의 마지막 요소를 삭제한다.
// 담아두었던 배열의 마지막 요소를 리턴한다.
const popEx = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  const lastElm = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElm;
};

// 사용 예시
let arrayPopEx = [1, 2, 3, 4];
let popResult = popEx(arrayPopEx);
console.log(popResult, arrayPopEx);

// concat() 메서드 구현
const concatEx = (array, ...args) => {
  let copy = JSON.parse(JSON.stringify(array));
  let newArray = copy; // 선생님께 물어보기 이차원배열로 들어오면 어떻게 해야하나?
  for (let i = 0; i < args.length; i++) {
    newArray[newArray.length] = args[i];
  }
  return newArray;
};

console.log(concatEx([1, 2, 3], 1, 2, 3));

// unshift() 메서드 구현
const unshiftEx = (array, ...args) => {
  let lenPlusLen = array.length + args.length;
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + args.length] = array[i];
  }
  for (let i = 0; i < args.length; i++) {
    array[i] = args[i];
  }
  return lenPlusLen;
};

let arrayUnshiftEx = [1, 2, 3];
let unshiftResult = unshiftEx(arrayUnshiftEx, 3, 2, 1);
console.log(unshiftResult, arrayUnshiftEx);

// shift() 메서드 구현
const shiftEx = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let firstElm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return firstElm;
};

let arrayShiftEx = [1, 2, 3];
let shiftResult = shiftEx(arrayShiftEx);
console.log(shiftResult, arrayShiftEx);

// splice() 메서드 구현
const spliceEx = (array, start, count, ...args) => {};
