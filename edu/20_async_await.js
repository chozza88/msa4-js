// async/await
const timePromise = (str, ms) => {
  // resolve: 작업이 성공했을 때를 알려주는 객체
  // reject:작업이 실패했을 때를 알려주는 객체
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === "string") {
        console.log(str);
        resolve("성공"); // resolve 내부에 리턴이 들어가있음.
      } else {
        reject(new Error("실패"));
      }
    }, ms);
  });
};

// 프로미스를 기반으로 한 문법
async function test() {
  try {
    await timePromise("A", 1000);
    await timePromise("B", 1000);
    await timePromise("C", 1000);
    await timePromise(1, 1000);
  } catch (error) {
    console.log(error);
  }
}

test();
