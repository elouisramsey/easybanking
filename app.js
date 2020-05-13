const burgerToggle = () => {
  const burger = document.querySelector('.burger')
  const close = document.querySelector('.burger-active')
  const nav = document.querySelector('.nav-links')

  burger.addEventListener('click', () => {
    close.style.display = 'block'
    burger.style.display = 'none'
    nav.style.display = 'block'
  })

  close.addEventListener('click', () => {
    nav.style.display = 'none'
    close.style.display = 'none'
    burger.style.display = 'block'
  })
}

burgerToggle()
