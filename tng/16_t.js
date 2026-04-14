const randomPosition = () => {
  // -- 보너스 문제 --
  // 다시 숨을 때 랜덤한 위치로 이동
  const container = document.querySelector(".container");

  const box2 = document.querySelector(".box2");
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - box2.offsetWidth),
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - box2.offsetHeight),
  );
  container.style.top = `${randomY}px`;
  container.style.left = `${randomX}px`;
};
const setRandomBoxBackgroundColor = (element) => {
  const randomRgbRed = Math.round(Math.random() * 255);
  const randomRgbGreen = Math.round(Math.random() * 255);
  const randomRgbBlue = Math.round(Math.random() * 255);
  element.style.backgroundColor = `rgb(${randomRgbRed}, ${randomRgbGreen}, ${randomRgbBlue})`;
};
const dokidoki = () => {
  alert("두근두근");
};

const hide = () => {
  const box2 = document.querySelector(".box2");
  alert("숨는다");
  box2.classList.remove("busted");
  randomPosition(); // 랜덤 위치 설정
  // 숨는다 클릭 이벤트 제거
  box2.removeEventListener("click", hide);

  // 들켰다 이벤트 추가
  box2.addEventListener("click", busted);

  //
  box2.style = "";
  // 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
  //  - 두근두근
  const container = document.querySelector(".container");
  container.addEventListener("mouseenter", dokidoki);
};

const busted = () => {
  const container = document.querySelector(".container");
  const box2 = document.querySelector(".box2");

  box2.classList.add("busted");
  // 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.
  container.removeEventListener("mouseenter", dokidoki);

  // 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
  //  - 숨는다
  box2.addEventListener("click", hide);

  // 들켰다 클릭 이벤트 제거
  box2.removeEventListener("click", busted);

  // 보너스: 랜덤 배경색 지정
  setRandomBoxBackgroundColor(box2);

  alert("들켰다");
};

// ----------------
// 로직 모음
// ----------------
// 즉시 실행함수
(() => {
  randomPosition();
  // 1.`버튼` 클릭시 아래 문구 알러트로 출력
  //  안녕하세요.
  //  숨어있는 div를 찾아주세요.
  const btnInfo = document.querySelector("button");
  btnInfo.addEventListener("click", () => {
    alert("안녕하세요.\n숨어있는 div를 찾아주세요.");
  });

  // 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
  //  - 두근두근
  const container = document.querySelector(".container");
  container.addEventListener("mouseenter", dokidoki);

  // 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
  //  - 들켰다
  const box2 = document.querySelector(".box2");
  box2.addEventListener("click", busted);
})();
