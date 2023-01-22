let btn = document.querySelector(".cube");

getAdvice();

btn.addEventListener("click", () => {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      document.querySelector(".advice-text").innerHTML = advice;
    });
}
