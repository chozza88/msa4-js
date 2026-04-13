// const $ul = document.querySelector("#ul");
// const $apple = document.querySelector("#apple");
// const $amazing = document.querySelector("ul > li:last-child");
// const $koreaChess = document.createElement("li");
// $koreaChess.textContent = "장기게임";
// $ul.insertBefore($koreaChess, $apple);
// const $liAll = document.querySelectorAll("#ul > li");
// $amazing.style.color = "beige";
// $liAll.forEach((elm, idx) => {
//   if (idx % 2 !== 0) {
//     elm.style.color = "red";
//   } else {
//     elm.style.color = "blue";
//   }
// });

const parentUl = document.querySelector("#ul");

// 1. '사과 게임' 위에 '장기' 콘텐츠를 가진 li 태그 삽입
// 넣을 위치 지정할 노드 선택
const appleLi = document.querySelector("#apple");
// 새로운 노드를 만들 때 new를 사용
const newKoreanChess = document.createElement("li");
newKoreanChess.textContent = "장기";
// '장기' 노드 삽입
parentUl.insertBefore(newKoreanChess, appleLi);

// 2. '어메이징브릭'에 베이지 배경색 추가
const ulChildList = document.querySelectorAll("#ul > li");
ulChildList.forEach((item) => {
  if (item.textContent === "어메이징브릭") {
    item.style.backgroundColor = "beige";
  }
});

// 3. 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
// 새로운 문제를 해결할 때는 자식요소를 다시 선택해서 가져온다.
// ulChildList.forEach((item, key) => {
//   // 인덱스가 0부터 시작하니까 +1을 해서 사용(시각적 홀짝과 인덱스적 홀짝이 달라서 이렇게 사용)
//   if ((key + 1) % 2 === 0) {
//     item.style.color = "red";
//   } else {
//     item.style.color = "blue";
//   }
// });
function setlineColor() {
  try {
    const ulChildList = document.querySelectorAll("#ul > li");
    if (ulChildList && ulChildList.length === 0) {
      throw new Error("노드 없음");
    }
    ulChildList.forEach((item, key) => {
      // 인덱스가 0부터 시작하니까 +1을 해서 사용(시각적 홀짝과 인덱스적 홀짝이 달라서 이렇게 사용)
      if ((key + 1) % 2 === 0) {
        item.style.color = "red";
      } else {
        item.style.color = "blue";
      }
    });
  } catch (err) {
    console.log(err);
  }
}
setlineColor();

// 요소 추가시 주의 사항
const starcreft = document.createElement("li");
starcreft.textContent = "스타";
parentUl.appendChild(starcreft);
setlineColor();

// const ul = document.querySelector("#ul");
// const arr = [
//   "수박게임",
//   "지뢰찾기",
//   "스페이스",
//   "장기게임",
//   "사과게임",
//   "체스",
//   "테트리스",
//   "고군붙투",
//   "죽림고수",
//   "어메이징브릭",
// ];

// ul.style.display = "flex";
// ul.style.justifyContent = "space-between";
// arr.forEach((elm) => {
//   const li = document.createElement("li");
//   li.textContent = elm;
//   li.style.backgroundColor = "lightblue";
//   li.style.listStyle = "none";
//   li.setAttribute("class", "li-line");
//   ul.appendChild(li);
// });

// const liAll = document.querySelectorAll("#ul > .li-line");
// liAll.forEach((elm, idx) => {
//   if (idx % 2 !== 0) {
//     elm.style.color = "red";
//   } else {
//     elm.style.color = "blue";
//   }
// });
// liAll.forEach((elm) => {
//   elm.dataset.origin = elm.textContent;
//   elm.addEventListener("click", function () {
//     if (elm.textContent === "안돼") {
//       elm.textContent = elm.dataset.origin;
//     } else {
//       elm.textContent = "안돼";
//     }
//   });
// });
