import Email from "./email.js";
import toggleToast from "./toast.js";
import "../styles/css/index.css";
import "../../public/assets/arrow-up.svg";
import "../../public/assets/code-solid.svg";
import "../../public/assets/css3-alt-brands.svg";
import "../../public/assets/expand-arrows-alt-solid.svg";
import "../../public/assets/file-download-solid.svg";
import "../../public/assets/git-alt-brands.svg";
import "../../public/assets/github-square-brands.svg";
import "../../public/assets/hand-point-up-regular.svg";
import "../../public/assets/whatsapp.svg";
import "../../public/assets/html5-brands.svg";
import "../../public/assets/icons8-node-js.svg";
import "../../public/assets/js-square-brands.svg";
import "../../public/assets/csharp.svg";
import "../../public/assets/docker.svg";
import "../../public/assets/linux.svg";
import "../../public/assets/oracle.svg";
import "../../public/assets/link-solid.svg";
import "../../public/assets/linkedin-brands.svg";
import "../../public/assets/palette-solid.svg";
import "../../public/assets/react-brands.svg";
import "../../public/assets/sass-brands.svg";
import "../../public/assets/share-square-solid.svg";
import "../../public/assets/sitemap-solid.svg";
import "../../public/assets/typescript-brands.svg";
import "../../public/assets/circle-check-solid.svg";
import "../../public/assets/circle-exclamation-solid.svg";
import "../../public/assets/nextjs-original.svg";
import "../../public/assets/bootstrap-brands.svg";
import "../../public/assets/retrogames-snapshot.png24";
import "../../public/assets/changix-snapshot.png24";
import "../../public/assets/easybank-snapshot.png24";
import "../../public/assets/fylo-snapshot.png24";
import "../../public/assets/fireblog-snapshot.png24";
import "../../public/assets/fireswift-snapshot.png24";
import "../../public/assets/ip-address-tracker-snapshot.png24";
import "../../public/assets/country-searcher-snapshot.png24";
import "../../public/assets/reactcommerce-snapshot.png24";
import "../../public/assets/space-tourism-snapshot.png24";
import "../../public/assets/yourjob-snapshot.png24";
import "../../public/assets/icons8-mysql.svg";
import "../../public/assets/icons8-python.svg";

/*************** Email sender ****************/
const emailForm = document.querySelector(".emailForm");
const resetBtn = document.querySelector(".resetBtn");

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const templateParams = {
    [event.target[0].name]: event.target[0].value,
    [event.target[1].name]: event.target[1].value,
    [event.target[2].name]: event.target[2].value,
    [event.target[3].name]: event.target[3].value,
  };
  try {
    for (const param in templateParams) {
      if (!templateParams[param]) {
        throw new Error(`Todos campos precisam ser preenchidos!`);
      }
    }
    await Email.send(templateParams);
    localStorage.setItem("hasSent", true);
    toggleToast("sucesso", "Email enviado com sucesso!");
    resetBtn.click();
  } catch (err) {
    console.error("Exception while sending email => " + err.message);
    toggleToast("aviso", err.message);
  }
};
emailForm.onsubmit = handleFormSubmit;

/*************** Mobile menu ****************/
const menuMechanisms = (event) => {
  if (window.innerWidth <= 700) {
    if (event.target.alt === "back to top") return;
    else {
      window.document.body.classList.toggle("body--active");

      const spans = [...document.querySelectorAll(".burguer")];
      spans.forEach((span, index) => {
        if (index === 0) span.classList.toggle("close-left");
        else if (index === 1) span.classList.toggle("close-right");
        else span.classList.toggle("fade");
      });

      const menu = document.querySelector(".header__navList");
      menu.classList.toggle("header__mobile--active");
    }
  }
};

const mobileMenuBtn = document.querySelector(".mobile-menu__container");
mobileMenuBtn.onclick = menuMechanisms;

/*************** Smooth scroll on intern links ****************/
const internLinks = [...document.querySelectorAll('[href^="#')];
internLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    if (
      event.target.getAttribute("href") === "#header" ||
      event.target.alt === "voltar ao topo"
    ) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Makes menu close when click occurs on mobile
      menuMechanisms(event);
      const element = document.querySelector(event.target.getAttribute("href"));
      window.scroll({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
});

/*************** Animate on scroll ****************/
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

window.onscroll = animateOnScroll;
window.onload = () => {
  addAnimationClasses();
  // Delay to allow seeing the animation in presentational section
  setTimeout(() => animateOnScroll(), 200);

  // Force animate on whatsapp-me button
  const whatsappMe = document.querySelector(".whatsapp-me");

  whatsappMe.classList.add("animated");
};

/*************** Display back to top button  ****************/
window.addEventListener("scroll", () => {
  if (window.scrollY >= document.querySelector("#aboutme").offsetTop)
    document.querySelector(".back-to-top").classList.add("back-to-top--active");
  else {
    if (document.querySelector(".back-to-top--active"))
      document
        .querySelector(".back-to-top--active")
        .classList.remove("back-to-top--active");
  }
});

/*************** Set date difference in experiences  ****************/
const monthsDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months < 0 ? 0 : months;
}

const experienceTwoFrom = document.querySelector(".experience_2_from");
const experienceTwoFromDateInISOString = experienceTwoFrom.innerHTML
  .split("/")
  .reverse();
experienceTwoFromDateInISOString[1] = +experienceTwoFromDateInISOString[1] - 1;
const experienceTwoFromDate = new Date(...experienceTwoFromDateInISOString);
const experienceTwoFromToDatesDiff = monthsDiff(experienceTwoFromDate, new Date());

const experienceTwoFromToDiff = document.querySelector(".experience_2_from_to_diff");
experienceTwoFromToDiff.innerHTML = experienceTwoFromToDatesDiff + (experienceTwoFromToDatesDiff > 1 ? " meses" : " mes");
