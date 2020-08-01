const toggle = document.querySelector('.toggle-nav')
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const closeButton = document.querySelector('.nav__close-button')

toggle.addEventListener('click', () => {
  nav.classList.toggle('open')

  if (main.classList.contains('open')) {
    toggle.innerHTML = '<img src="assets/close.svg">Close'
  } else {
    toggle.innerHTML = '<img src="assets/menu.svg">Open'
  }
})

closeButton.addEventListener('click', () => {
  nav.classList.remove('open')
})
