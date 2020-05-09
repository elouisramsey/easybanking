const burgerToggle = () => {
    const burger = document.querySelector('.burger');
    const close = document.querySelector('.burger-active')
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        close.style.display = 'block'
        burger.style.display = 'none'
    })
    
    close.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        close.style.display = 'none'
        burger.style.display = 'block'
    })

}

burgerToggle()