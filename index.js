const burgerButton = document.querySelector(".burger-button");
const burgerContent = document.querySelector(".burger-content");
const burgerIconOuter = document.querySelector(".burger-icon-outer");
const startLink = document.querySelector(".start-link");
const hoursLink = document.querySelector(".hours-link");
const aboutLink = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");
const menuLink = document.querySelector(".menu-link");
const startAnchor = document.querySelector(".start-anchor");
const hoursAnchor = document.querySelector(".hours-anchor");
const aboutAnchor = document.querySelector(".about-anchor");
const contactAnchor = document.querySelector(".contact-anchor");
const menuAnchor = document.querySelector(".menu-anchor");
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

document.addEventListener("click", (e) => {
  if (startLink.contains(e.target))
    startAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  if (hoursLink.contains(e.target))
    hoursAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  if (aboutLink.contains(e.target))
    aboutAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  if (contactLink.contains(e.target))
    contactAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  if (menuLink.contains(e.target))
    menuAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
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
