import {
    pageLoad
} from './pageload';
import {
    renderHomePage
} from './home';
import {
    renderMenu
} from './menu';
import {
    renderContactPage
} from './contact';

const homeLink = document.querySelector("#home-link");
const menuLink = document.querySelector("#menu-link");
const contactLink = document.querySelector('#contact-link');

renderHomePage.displayHome();

homeLink.addEventListener("click", () => { renderHomePage.displayHome()})
menuLink.addEventListener("click", () => { DisplayMenu.displayMenu()})
contactLink.addEventListener("click", () => { DisplayContact.displayContact()})