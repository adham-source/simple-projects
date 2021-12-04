const closer = document.querySelector('#closer'),
    navbar = document.querySelector('#navbar'),
    menuBtn = document.querySelector('#menuBtn'),
    shoppingCart = document.querySelector('#shoppingCart'),
    cartBtn = document.querySelector('#cartBtn'),
    loginForm = document.querySelector('#loginForm'),
    loginBtn = document.querySelector('#loginBtn'),
    searchForm = document.querySelector('#searchForm'),
    searchBtn = document.querySelector('#searchBtn')

closer.addEventListener('click', () => {
    closer.style.display = 'none'
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
})

menuBtn.addEventListener('click', () => {
    closer.style.display = 'block'
    navbar.classList.toggle('active')
})

cartBtn.addEventListener('click', () => {
    closer.style.display = 'block'
    shoppingCart.classList.toggle('active')
})

loginBtn.addEventListener('click', () => {
    closer.style.display = 'block'
    loginForm.classList.toggle('active')
})

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active')
})

window.onscroll = () => {
    searchForm.classList.remove('active')
}