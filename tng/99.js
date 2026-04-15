const form = document.querySelector("form");
// page 변환 변수
let pagePlus = 0;

async function render(page, limit) {
  try {
    const urlName = "https://picsum.photos/v2/list";
    const url = `${urlName}?page=${page}&limit=${limit}`;
    const response = await axios.get(url);
    const container = document.querySelector(".container");
    container.classList.add("container");

    response.data.forEach((item) => {
      // 카드 요소 만들기
      const newCard = document.createElement("div");
      newCard.classList.add("card");

      // 카드 이미지 만들기
      const newCardImg = document.createElement("div");
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add("card-img");
      // 카드 저자 소개 만들기
      const newCardAuther = document.createElement("span");
      newCardAuther.textContent = `${item.id} : ${item.author}`;

      newCard.appendChild(newCardImg);
      newCard.appendChild(newCardAuther);

      container.appendChild(newCard);
    });
  } catch (error) {
    console.error(error);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pagePlus++;
  let limit = 3;
  render(pagePlus, limit);
});
form.addEventListener("reset", () => {
  pagePlus = 0; // 초기화
  const container = document.querySelector(".container");
  container.textContent = "";
});
