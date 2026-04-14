// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.

// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
// 	- 들켰다

// 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.

// 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
// 	- 숨는다

// 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// -- 보너스 문제 --
// 다시 숨을 때 랜덤한 위치로 이동

const gameMsgBtn = document.querySelector("#gameMsgBtn");
// 1번문제 메시지 출력
const msg = () => {
  alert("숨어있는 div를 찾아주세요.");
};
gameMsgBtn.addEventListener("click", msg);

const gameSearch = document.querySelector("#gameSearch");
const randomLocation = () => {
  let randX = Math.floor((Math.random() + 1) * 300);
  let randY = Math.floor((Math.random() + 1) * 300);
  gameSearch.style.top = randY + "px";
  gameSearch.style.left = randX + "px";
};
randomLocation();
const msgConsole = () => {
  alert("두근두근");
};
gameSearch.addEventListener("mouseenter", msgConsole);
let hidden = true;
const msgComConsole = () => {
  if (hidden) {
    gameSearch.removeEventListener("mouseover", msgConsole);
    gameSearch.classList.remove("hide-box-visi-hidden");
    alert("들켯다");
    hidden = !hidden;
  } else {
    gameSearch.addEventListener("mouseover", msgConsole);
    gameSearch.classList.add("hide-box-visi-hidden");
    alert("숨는다");
    randomLocation();
    hidden = !hidden;
  }
};
gameSearch.addEventListener("click", msgComConsole);
