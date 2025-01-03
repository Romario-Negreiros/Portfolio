// import "../../../public/assets/logo.svg";

// import "../styles/index.css";

//#region Mobile menu
const menuMechanisms = (event) => {
  if (window.innerWidth <= 768) {
    window.document.body.classList.toggle("body--active");

    const spans = [...document.querySelectorAll(".burguer")];
    spans.forEach((span, index) => {
      if (index === 0) span.classList.toggle("close-left");
      else if (index === 1) span.classList.toggle("close-right");
      else span.classList.toggle("fade");
    });

    const menu = document.querySelector(".header-linkList");
    menu.classList.toggle("header-linkList--active");
  }
};

const mobileMenuBtn = document.querySelector(".header-mobileMenu");
mobileMenuBtn.onclick = menuMechanisms;

const internLinks = [...document.querySelectorAll('[href^="#')];
internLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    // Closes menu when click occurs on mobile
    menuMechanisms(event);
    const element = document.querySelector(event.target.getAttribute("href"));
    window.scroll({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
});
//#endregion

//#region Header scroll effect
let prevScrollHeight = window.scrollY;

const handleHeaderScrollEffect = () => {
  const header = document.querySelector(".header-container");

  if (window.scrollY === 0) {
    header.classList.remove("header-container--showNotOnTop");
  } else {
    header.classList.add("header-container--showNotOnTop");
    if (window.scrollY > prevScrollHeight) {
      header.classList.add("header-container--hidden");
    } else {
      header.classList.remove("header-container--hidden");
    }
  }

  prevScrollHeight = window.scrollY;
};

window.onscroll = handleHeaderScrollEffect;
//#endregion
