var renderMenuPage = (function () {
  return {
      displayMenu: function () {
              const main = document.querySelector('#content');
              const homeLink = document.querySelector("#home-link");
              const menuLink = document.querySelector("#menu-link");
              const contactLink = document.querySelector('#contact-link');
              main.classList.add('mx-auto');
              homeLink.classList.remove('active');
              menuLink.classList.add('active');
              contactLink.classList.remove('active');
              main.innerHTML=``;              
              renderMenuPage.card("./images/logo.png","Beef","this comes from cow","1000");
              renderMenuPage.card("./images/logo.png","Beef","this comes from cow","1000");
    },
    card: function(picture, title, description, price) {
       const main = document.querySelector('#content');
       const divCard = document.createElement('div');
       const cardImage = document.createElement('img');
       const cardTitle = document.createElement('h4');
       const cardText = document.createElement('h5');
       const priceTag = document.createElement('h5');
       divCard.classList.add('background','my-2');
       cardImage.src = picture;
       cardImage.classList.add('rounded-circle');
       cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
       cardTitle.textContent = title;
       cardText.classList.add('card-text');
       cardText.textContent = description;
       priceTag.textContent = price+" USD $";
       
       divCard.append(cardImage);
       divCard.append(cardTitle);
       divCard.append(cardText);
       divCard.append(priceTag);
       main.append(divCard);
    }        
};
})();
export {
    renderMenuPage
};