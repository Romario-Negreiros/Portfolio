import texts from './texts.js'
import '../styles/css/index.css'
import '../public/assets/arrow-up.svg'
import '../public/assets/code-solid.svg'
import '../public/assets/css3-alt-brands.svg'
import '../public/assets/expand-arrows-alt-solid.svg'
import '../public/assets/file-download-solid.svg'
import '../public/assets/git-alt-brands.svg'
import '../public/assets/github-square-brands.svg'
import '../public/assets/hand-point-up-regular.svg'
import '../public/assets/html5-brands.svg'
import '../public/assets/jquery-brands.svg'
import '../public/assets/js-square-brands.svg'
import '../public/assets/link-solid.svg'
import '../public/assets/linkedin-brands.svg'
import '../public/assets/node-js-brands.svg'
import '../public/assets/palette-solid.svg'
import '../public/assets/postgresql-brands.svg'
import '../public/assets/react-brands.svg'
import '../public/assets/sass-brands.svg'
import '../public/assets/share-square-solid.svg'
import '../public/assets/sitemap-solid.svg'
import '../public/assets/typescript-brands.svg'

/*************** Mobile menu ****************/
const menuMechanisms = event => {
  if (window.innerWidth <= 700) {
    if (event.target.alt === 'voltar ao topo') return
    else {
      window.document.body.classList.toggle('body--active')

      const spans = [...document.querySelectorAll('.burguer')]
      spans.forEach((span, index) => {
        if (index === 0) span.classList.toggle('close-left')
        else if (index === 1) span.classList.toggle('close-right')
        else span.classList.toggle('fade')
      })

      const menu = document.querySelector('.a-header__navList')
      menu.classList.toggle('a-header__mobile--active')
    }
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
    menuMechanisms(event)
    // Smooth scroll
    if (event.target.getAttribute('href') === '#header' || event.target.alt === 'voltar ao topo') {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    } else if (event.target.getAttribute('href') === '#contacts') {
      window.scroll({
        top: window.document.body.offsetHeight,
        behavior: 'smooth'
      })
    } else {
      const element = document.querySelector(event.target.getAttribute('href'))
      window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  })
})

/*************** Animate on scroll ****************/
const animations = () => {
  const { pageYOffset, innerHeight } = window
  const elementsToAnimate = [...document.querySelectorAll('[data-aos]')]
  elementsToAnimate.forEach(element => {
    if (element.offsetTop - pageYOffset <= innerHeight - (element.offsetTop - pageYOffset) / 7) {
      element.classList.add('animated')
    }
  })
}

window.addEventListener('scroll', animations)
window.addEventListener('load', animations)

/*************** Animations on skills section  ****************/
const insertContent = event => {
  const tec = event.target.getAttribute('data-skill')
  if (tec !== null) {
    const obj = texts.find(obj => obj.title === tec)
    title.innerHTML = obj.title
    content.innerHTML = obj.description
  }
}
const skills = [...document.querySelectorAll('.skill')]
const title = document.querySelector('.e-skills__contents h3')
const content = document.querySelector('.e-skills__contents p')
skills.forEach(skill => {
  skill.addEventListener('mouseover', insertContent)
  skill.addEventListener('click', insertContent)
  skill.addEventListener('mouseout', () => {
    title.innerHTML = 'Tecnologias'
    content.innerHTML = `
    Hover over the cards to see a brief abstract about the technology. <br />
              If you are in a mobile device, just click on the cards to see the abstract.
    `
  })
})

/*************** Display back to top button  ****************/
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= document.querySelector('#services').offsetTop)
    document.querySelector('.back-to-top').classList.add('back-to-top--active')
  else {
    if (document.querySelector('.back-to-top--active'))
      document.querySelector('.back-to-top--active').classList.remove('back-to-top--active')
  }
})
