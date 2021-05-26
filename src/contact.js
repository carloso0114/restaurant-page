const renderContactPage = (() => {
    // container
    const contentContainer = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-tab-content', '');
    contact.innerHTML = `
      <div class="hero">
      <h1>Contact us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="address">
          <p>
            <i class="fi-xnsuxl-map-marker-solid"></i>Gombe OUA 390<br />San
            Kinshasa
          </p>
        </div>
        <div class="hours">
          <p>
            <i class="fi-cnsuhl-clock-solid"></i
            ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
            >8am-11pm
          </p>
        </div>
        <div class="phone">
          <p><i class="fi-xnsrxl-phone-solid"></i>(243)-999 999 999</p>
        </div>
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
            <div class="input-box">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Type your message...</span>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { renderContactPage };