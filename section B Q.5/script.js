const counter = document.getElementById("counter");
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");

let count = 0;

increaseButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decreaseButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});