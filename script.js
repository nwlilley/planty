const openNav = document.querySelector('.nav__open-button')
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const closeButton = document.querySelector('.nav__close-button')

openNav.addEventListener('click', () => {
  nav.classList.toggle('open')
})

closeButton.addEventListener('click', () => {
  nav.classList.remove('open')
})
