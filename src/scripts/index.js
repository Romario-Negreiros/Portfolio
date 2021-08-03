/*************** Mobile menu ****************/
const menuMechanisms = () => {
  if(window.innerWidth <= 600) {
    window.document.body.classList.toggle('body--active') 

    const spans = [...document.querySelectorAll('.burguer')]
    spans.forEach((span, index) => {
      if(index === 0) span.classList.toggle('close-left')
      else if(index === 1) span.classList.toggle('close-right')
      else span.classList.toggle('fade')
    })

    const menu = document.querySelector('.a-header__navList')
    menu.classList.toggle('a-header__mobile--active')
  }
}

const mobileMenuBtn = document.querySelector('.mobile-menu__container')
mobileMenuBtn.addEventListener('click', menuMechanisms)
 
/*************** Smooth scroll on intern links ****************/
const internLinks = [...document.querySelectorAll('[href^="#')]
internLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    // Makes menu close 
    menuMechanisms()
    // Smooth scroll
    const element = document.querySelector(event.target.getAttribute('href'))
    window.scroll({
      top: element.offsetTop,
      behavior: "smooth"
    })
  })
})

/*************** Animate on scroll ****************/
const animations = () => {
  const { pageYOffset, innerHeight } = window;
  const elementsToAnimate = [...document.querySelectorAll("[data-aos]")];
  elementsToAnimate.forEach((element) => {
    if (
      element.offsetTop - pageYOffset <=
      innerHeight - (element.offsetTop - pageYOffset) / 7
    ) {
      element.classList.add("animated");
    }
  });
};

window.addEventListener("scroll", animations);
window.addEventListener("load", animations);