// 에러: 소스코드에 의해서 수습될 수 없는 심각한 오류.(페이탈 오류)
// 예외: 소스코드로 수습을 할 수 있는 것.
// 예외 부분에서 로그를 작성하여 확인
// 파일을 작성한다고 하면.... finally에서 파일을 닫아줌.

// Try 문
try {
  // 내가 실행할 처리를 작성
  console.log("아아아");
  console.log("아아아");
  // user.name;
} catch (error) {
  // try문에서 에러가 발생시 처리할 로직 작성
  console.log("에러 발생!!!!!");
  console.log(error.name); // 발생한 에러명
  console.log(error.message); // 발생한 에러 상세
  console.log(error.stack); // 발생한 에러 상세정보
} finally {
  // 예외 여부와 상관없이 무조건 실행시켜야할 로직 작성
  console.log("파이널리~~~~~");
}

console.log("아아아");
console.log("아아아");

try {
  // throw: 강제 예외 발생
  console.log("트라이 시작");
  if (true) {
    const error = new Error("내가 강제로 일으킨 에러");
    error.name = "커스텀 에러";
    throw error;
  }
  console.log("트라이 끝");
} catch (error) {
  console.log(error.stack);
}

// 에러를 상세하게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을 때,
// instanceof 연산자를 사용하여 예외를 구체적으로 처리
try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("참조참조!");
  } else {
    console.log("짜장면");
  }
}
