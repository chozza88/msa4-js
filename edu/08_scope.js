// 스코프
// 변수나 함수의 유효범위
// 어디에 선언되었는지에 따라서 접근 가능 여부가 달라진다.

// 전역 스코프 (Global Scope)
// 전역 스코프로 선언된 변수와 함수는 코드 어디에서나 접근 가능
// 프로그램이 실행되는 동안 계속 유지
let test = "전역 스코프"; // Global Scope

function output() {
  // 지역 스코프 (Local Scope)
  // 함수 내에서 선언 된 변수와 함수는 해당 함수 내부에서 유효
  // 함수가 실행 될 때마다 새로운 지역 스코프가 생성
  let test = "지역 스코프";
  if (true) {
    // 블록레벨 스코프 (Block Level Scope)
    // `{}`로 둘러 쌓인 범위를 의미
    let test = "블록레벨 스코프";
    console.log(test);
  }
  // 스코프 체인 : 지역에서 없으면 지역을 포함하는 스코프에서 해당 변수나 함수를 찾음
  console.log(test);
}

output();
console.log(test);
