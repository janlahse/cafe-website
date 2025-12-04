const burgerButton = document.querySelector(".burger-button");
const burgerContent = document.querySelector(".burger-content");
const burgerIconOuter = document.querySelector(".burger-icon-outer");
const openMenuButton = document.querySelector(".open-menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const menu = document.querySelector(".menu");
const menuCard = document.querySelector(".menu-card");

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

openMenuButton.addEventListener("click", () => {
  menu.classList.add("menu-active");
});

document.addEventListener("click", (e) => {
  if (
    (!menuCard.contains(e.target) && !openMenuButton.contains(e.target)) ||
    closeMenuButton.contains(e.target)
  ) {
    menu.classList.remove("menu-active");
    menu.scroll({ top: 0, behavior: "smooth" });
  }
});
