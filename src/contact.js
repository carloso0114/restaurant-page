const renderContactPage = (() => {
  const contactLink = document.querySelector('#contact-link')
  const body = document.querySelector('#content');

  contactLink.addEventListener("click", e => {
    body.innerHTML = `contact`
  })
  })();
  
  export { renderContactPage };