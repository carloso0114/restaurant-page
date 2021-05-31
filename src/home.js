var renderHomePage = (function () {
  return {
      displayHome: function () {
          const main = document.querySelector('#content');
          const homeLink = document.querySelector("#home-link");
          const menuLink = document.querySelector("#menu-link");
          const contactLink = document.querySelector('#contact-link');
          homeLink.classList.add('active');
          menuLink.classList.remove('active');
          contactLink.classList.remove('active');
          const logo = document.createElement('img');
          const backgroundDiv = document.createElement('div');
          const description = document.createElement('h1');
          main.classList.add('mx-auto');
          backgroundDiv.classList.add('background','my-2');
          logo.src='./images/logo.png'
          logo.classList.add('rounded-circle');
          description.textContent= "Welcome";
          main.innerHTML = `` 
          main.append(backgroundDiv); 
          backgroundDiv.appendChild(description); 
          backgroundDiv.appendChild(logo); 
       }        
   };
})();
export {
  renderHomePage
};