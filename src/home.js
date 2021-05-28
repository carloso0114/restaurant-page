const renderHomePage = (() => {
  const contentContainer = document.querySelector('#content');

  const homeHtml = `
    <main>
    <h1 class="text-center"> Restaurant Page </h1>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Delicious FastFood</h5>
  <p class="card-text">Prepare yourself to taste the heaven in a dish.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-header">Hours</div>
<div class="card-body">
  <h5 class="card-title">24/7</h5>
  <p class="card-text"> From Thursday to Sunday only.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-header">Location</div>
<div class="card-body">
  <h5 class="card-title">Barranquilla, Colombia</h5>
  <p class="card-text">742 Evergreen Terrace.</p>
</div>
</div>
    </main>`
  contentContainer.innerHTML = homeHtml;

  const homeLink = document.querySelector('#home-link')
  homeLink.addEventListener("click", e => {
    contentContainer.innerHTML = homeHtml;
  })
})();
export {
  renderHomePage
};