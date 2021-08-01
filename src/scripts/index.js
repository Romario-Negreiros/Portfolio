const menuMechanisms = () => {
    const spans = [...document.querySelectorAll('.burguer')]
    spans.forEach((span, index) => {
        if(index === 1) span.classList.toggle('close-left')
        else if(index === 2) span.classList.toggle('close-right')
        else span.classList.toggle('fade')
    })
    const menuList = document.querySelector('.a-header__navList')
    menuList.classList.toggle('a-header__mobile--active')
}

const mobileMenu = document.querySelector('.mobile-menu__container')
mobileMenu.addEventListener('click', menuMechanisms)