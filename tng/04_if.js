import readline from "readline";

// IF로 만들어 주세요.
// 성적
// 범위 :
//    100     : A+
//    90이상 100미만 : A
//    80이상 90미만  : B
//    70이상 80미만  : C
//    60이상 70미만  : D
//    60미만: F

//출력 문구 : "당신의 점수는 xxx점 입니다. <등급>"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("점수를 입력해 주세요.");

// 아래 콜백 함수에 입력값으로 실행할 처리 작성
rl.on("line", (line) => {
  line.trim();
  let score = parseInt(line);
  let grade = "";
  if (score < 0 || score > 100 || typeof grade !== "number") {
    console.log("입력값 오류");
    // 오류패턴
  } else {
    if (score === 100) {
      grade = "A+";
    } else if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
    // 정상패턴
  }

  rl.close(); // 입력 종료
});

// 종료 시 실행
rl.on("close", () => {
  process.exit();
});
