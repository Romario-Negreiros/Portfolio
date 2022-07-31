import Email from './email.js'
import toggleToast from './toast.js'
import '../styles/css/index.css'
import '../../public/assets/arrow-up.svg'
import '../../public/assets/code-solid.svg'
import '../../public/assets/css3-alt-brands.svg'
import '../../public/assets/expand-arrows-alt-solid.svg'
import '../../public/assets/file-download-solid.svg'
import '../../public/assets/git-alt-brands.svg'
import '../../public/assets/github-square-brands.svg'
import '../../public/assets/hand-point-up-regular.svg'
import '../../public/assets/html5-brands.svg'
import '../../public/assets/jquery-brands.svg'
import '../../public/assets/js-square-brands.svg'
import '../../public/assets/link-solid.svg'
import '../../public/assets/linkedin-brands.svg'
import '../../public/assets/palette-solid.svg'
import '../../public/assets/react-brands.svg'
import '../../public/assets/sass-brands.svg'
import '../../public/assets/share-square-solid.svg'
import '../../public/assets/sitemap-solid.svg'
import '../../public/assets/typescript-brands.svg'
import '../../public/assets/circle-check-solid.svg'
import '../../public/assets/circle-exclamation-solid.svg'
import '../../public/assets/nextjs-original.svg'
import '../../public/assets/bootstrap-brands.svg'

/*************** Email sender ****************/
const emailForm = document.querySelector('.emailForm')

const handleFormSubmit = async event => {
  event.preventDefault()
  const templateParams = {
    [event.target[0].name]: event.target[0].value,
    [event.target[1].name]: event.target[1].value,
    [event.target[2].name]: event.target[2].value,
    [event.target[3].name]: event.target[3].value
  }
  try {
    for (const param in templateParams) {
      if (!templateParams[param]) {
        throw new Error(`Todos campos precisam ser preenchidos!`)
      }
    }
    await Email.send(templateParams)
    localStorage.setItem('hasSent', true)
    toggleToast('sucesso', 'Email enviado com sucesso!')
  } catch (err) {
    console.error('Exception while sending email => ' + err.message)
    toggleToast('aviso', err.message)
  }
}
emailForm.onsubmit = handleFormSubmit

/*************** Mobile menu ****************/
const menuMechanisms = event => {
  if (window.innerWidth <= 700) {
    if (event.target.alt === 'back to top') return
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
mobileMenuBtn.onclick = menuMechanisms

/*************** Smooth scroll on intern links ****************/
const internLinks = [...document.querySelectorAll('[href^="#')]
internLinks.forEach(link => {
  link.onclick = event => {
    event.preventDefault()
    // Makes menu close
    menuMechanisms(event)
    // Smooth scroll
    if (
      event.target.getAttribute('href') === '#header' ||
      event.target.alt === 'voltar ao topo'
    ) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const element = document.querySelector(event.target.getAttribute('href'))
      window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }
})

/*************** Animate on scroll ****************/
const addAnimationClasses = () => {
  const animateDirections = {
    top: 'animate-top',
    right: 'animate-right',
    left: 'animate-left',
    'top&right': 'animate-top-right',
    'right&top': 'animate-right-top',
    'top&left': 'animate-top-left',
    'left&right': 'animate-left-right',
    'right&left': 'animate-right-left'
  }

  const elementsToAnimate = Array.from(document.querySelectorAll('[data-aos]'))
  elementsToAnimate.forEach(element => {
    const animateDirection = element.getAttribute('data-direction')
    element.classList.add(animateDirections[animateDirection])
  })
}

const animateOnScroll = () => {
  const { pageYOffset, innerHeight } = window
  const elementsToAnimate = Array.from(document.querySelectorAll('[data-aos]'))
  elementsToAnimate.forEach(element => {
    if (
      element.offsetTop - pageYOffset <=
      innerHeight - (element.offsetTop - pageYOffset) / 7
    ) {
      element.classList.add('animated')
    }
  })
}

window.onscroll = animateOnScroll
window.onload = () => {
  addAnimationClasses()
  // delay to allow seeing the animation in presentational section
  setTimeout(() => animateOnScroll(), 200)
}

/*************** Display back to top button  ****************/
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= document.querySelector('#services').offsetTop)
    document.querySelector('.back-to-top').classList.add('back-to-top--active')
  else {
    if (document.querySelector('.back-to-top--active'))
      document
        .querySelector('.back-to-top--active')
        .classList.remove('back-to-top--active')
  }
})
