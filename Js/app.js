let burgerIcon = document.querySelector('#burger-icon')
let mobileMenu = document.querySelector('#mobile-menu')
let closeBtn = document.querySelector('#close-btn')

burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('right-[100%]')
    mobileMenu.classList.toggle('right-0')
})


closeBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('right-[100%]')
    mobileMenu.classList.toggle('right-0')
})