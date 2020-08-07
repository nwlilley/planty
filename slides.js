const slideArea = document.querySelector('.plant-content__slide')
const images = document.querySelectorAll('.plant-content__slide--image')

let currentSlide = 0
let z = 1

slideArea.addEventListener('click', () => {
  z += 1
  currentSlide += 1
  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }
  images.forEach(image => {
    image.style.animation = ''
  })
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = 'fade 0.5s'
})

slideArea.addEventListener('mouseover', () => {
  images.forEach(image => {
    const x = 25 * Math.floor(Math.random() * 4) - 50
    const y = 25 * Math.floor(Math.random() * 4) - 50
    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

slideArea.addEventListener('mouseout', () => {
  images.forEach(image => {
    image.style.transform = ''
  })
})
