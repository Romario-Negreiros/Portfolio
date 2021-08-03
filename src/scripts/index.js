/*************** Mobile menu ****************/
const menuMechanisms = (event, smoothScroll) => {
  smoothScroll ? smoothScroll(event) : "";
  const { body } = window.document;
  body.classList.toggle("body--active");
  const spans = [...document.querySelectorAll(".burguer")];
  spans.forEach((span, index) => {
    if (index === 1) span.classList.toggle("close-left");
    else if (index === 2) span.classList.toggle("close-right");
    else span.classList.toggle("fade");
  });
  const menuList = document.querySelector(".a-header__navList");
  menuList.classList.toggle("a-header__mobile--active");
};

const mobileMenu = document.querySelector(".mobile-menu__container");
mobileMenu.addEventListener("click", menuMechanisms);

/*************** Animate on scroll ****************/
const animations = () => {
  const { pageYOffset, innerHeight } = window;
  const elementsToAnimate = [...document.querySelectorAll("[data-aos]")];
  elementsToAnimate.forEach((element) => {
    if (
      element.offsetTop - pageYOffset <=
      innerHeight - (element.offsetTop - pageYOffset) / 6
    ) {
      element.classList.add("animated");
    }
  });
};

window.addEventListener("scroll", animations);
window.addEventListener("load", animations);

/*************** Smooth scroll on links ****************/
const smoothScroll = (event) => {
  event.preventDefault();
  const element = document.querySelector(event.target.getAttribute("href"));

  window.scroll({
    top: element.offsetTop,
    behavior: "smooth",
  });
};

const internLinks = [...document.querySelectorAll('[href^="#"]')];
internLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    menuMechanisms(event, smoothScroll);
  });
});
