const burgerButton = document.querySelector(".burger-button");
const burgerContent = document.querySelector(".burger-content");
const burgerIconOuter = document.querySelector(".burger-icon-outer");

burgerButton.addEventListener("click", () => {
  burgerContent.classList.toggle("burger-content-active");
  burgerIconOuter.classList.toggle("burger-icon-outer-hide");
});

document.addEventListener("click", (e) => {
  if (!burgerButton.contains(e.target) && !burgerContent.contains(e.target)) {
    burgerContent.classList.remove("burger-content-active");
    burgerIconOuter.classList.remove("burger-icon-outer-hide");
  }
});
