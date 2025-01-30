import "../../../public/assets/logo.svg";

import "../styles/index.css";

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
//#endregion

//#region Switch experience content
const expOptions = [...document.querySelectorAll(".exp-list li")];

let selectedIndex = 0;

const handleExperienceSelect = (ev) => {
  const optTxt = ev.target.innerText;

  const optIdx = expOptions.findIndex((opt) => opt.innerText == optTxt);

  if (optIdx === -1) return;

  if (optIdx === selectedIndex) return;

  selectedIndex = optIdx;

  const contents = [...document.querySelectorAll(".exp-content li")];

  for (let i = 0; i < contents.length; i++) {
    if (i !== optIdx) {
      contents[i].style.display = "none";
      expOptions[i].classList.remove("selected");
    } else {
      contents[i].style.display = "block";
      expOptions[i].classList.add("selected");
    }
  }
};

for (let i = 0; i < expOptions.length; i++) {
  expOptions[i].addEventListener("click", handleExperienceSelect);
}
//#endregion

//#region Animate on scroll
const addAnimationClasses = () => {
  const animateDirections = {
    right: "animate-right",
    left: "animate-left",
  };

  const elementsToAnimate = Array.from(document.querySelectorAll("[data-aos]"));
  elementsToAnimate.forEach((element) => {
    const animateDirection = element.getAttribute("data-direction");
    element.classList.add(animateDirections[animateDirection]);
  });
};

const animateOnScroll = () => {
  const { scrollY, innerHeight } = window;
  const elementsToAnimate = Array.from(document.querySelectorAll("[data-aos]"));
  elementsToAnimate.forEach((element) => {
    if (
      element.offsetTop - scrollY <=
      innerHeight - (element.offsetTop - scrollY) / 7
    ) {
      element.classList.add("animated");
    }
  });
};

window.onload = () => {
  addAnimationClasses();
  // Delay to allow seeing the animation in presentational section
  setTimeout(() => animateOnScroll(), 200);
};
//#endregion

window.onscroll = (e) => {
  handleHeaderScrollEffect(e);
  animateOnScroll(e);
};
