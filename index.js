const burgerButton = document.querySelector(".burger-button");
const burgerContent = document.querySelector(".burger-content");

burgerButton.addEventListener("click", () => {
  burgerContent.classList.toggle("burger-content-active");
  burgerButton.classList.toggle("burger-button-active");
});

document.addEventListener("click", (e) => {
  if (!burgerButton.contains(e.target) && !burgerContent.contains(e.target)) {
    burgerContent.classList.remove("burger-content-active");
    burgerButton.classList.remove("burger-button-active");
  }
});
