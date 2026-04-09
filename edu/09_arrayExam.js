// indexOf() 메서드 구현
const indexOfEx = (arr, searchIndex) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchIndex) {
      return i;
    }
  }
  return -1;
};

console.log(indexOfEx(["홍길동", "둘리", "도우너"], "홍길동"));
console.log(indexOfEx(["홍길동", "둘리", "도우너"], "고길동"));

// push() 메서드 구현
const pushEx = (array, ...arr) => {
  for (let i = 0; i < arr.length; i++) {
    array[array.length] = arr[i];
  }
  return array.length;
};

let arrayPushEx = [1, 2, 3, 4, 5];
let result = pushEx(arrayPushEx, 1, 2, 3);
console.log(result, arrayPushEx);

// pop() 메서드 구현
const popEx = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let lastElm = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElm;
};
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
