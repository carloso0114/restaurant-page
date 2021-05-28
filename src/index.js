import {
    pageLoad
} from './pageload';
import {
    renderHomePage
} from './home';
const body = document.querySelector('#content');
const menuLink = document.querySelector('#menu-link');
const homeLink = document.querySelector('#home-link')
const contactLink = document.querySelector('#contact-link')

menuLink.addEventListener("click", e => {
    body.innerHTML = `menu`
})
homeLink.addEventListener("click", e => {
    body.innerHTML = `home`
})
contactLink.addEventListener("click", e => {
    body.innerHTML = `contact`
})

