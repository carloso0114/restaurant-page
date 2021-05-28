const renderMenu = (() => {
    const menuLink = document.querySelector('#menu-link');
    const body = document.querySelector('#content');
    
    menuLink.addEventListener("click", e => {
      body.innerHTML = `menu`
    })

  })();
  export { renderMenu };