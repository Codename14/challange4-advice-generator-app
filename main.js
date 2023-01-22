let btn = document.querySelector(".cube");

fetch();

btn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      document.querySelector(".advice-text").innerHTML = advice;
    });
});
