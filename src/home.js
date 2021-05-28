const renderHomePage = (() => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML=`home`
    
    const homeLink = document.querySelector('#home-link')
    homeLink.addEventListener("click", e => {
      contentContainer.innerHTML = `home`
    })
  })();
  export { renderHomePage };


