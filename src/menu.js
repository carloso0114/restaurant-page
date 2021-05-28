const renderMenu = (() => {
    const menuLink = document.querySelector('#menu-link');
    const body = document.querySelector('#content');
    

    menuLink.addEventListener("click", e => {
        body.classList.remove('test');
        body.classList.add('test2');
        body.innerHTML = `menu`
    })

})();
export {
    renderMenu
};