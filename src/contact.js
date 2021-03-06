const renderContactPage = (() => ({
  displayContact() {
    const main = document.querySelector('#content');
    const homeLink = document.querySelector('#home-link');
    const menuLink = document.querySelector('#menu-link');
    const contactLink = document.querySelector('#contact-link');
    const bodySel = document.querySelector('body');
    bodySel.classList.remove('bodyBackground2');
    homeLink.classList.remove('active');
    menuLink.classList.remove('active');
    contactLink.classList.add('active');
    main.innerHTML = `<div class="container my-2">

                  <div class="row background ">
                    <h1 class="header-title"> Contact </h1>
                    <hr>
                    <div class="col-sm-6">
                      <iframe width="100%" height="320px;" frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco"
                        allowfullscreen></iframe>
                    </div>
                  
                    <div class="col-sm-6">
                      <form action="form.php" class="contact-form" method="post">
                  
                        <div class="form-group">
                          <input type="text" class="form-control" id="name" name="nm" placeholder="Name" required="">
                        </div>
                  
                  
                        <div class="form-group form_left">
                          <input type="email" class="form-control" id="email" name="em" placeholder="Email" required="">
                        </div>
                  
                        <div class="form-group">
                          <textarea class="form-control textarea-contact" rows="5" id="comment" name="FB"
                            placeholder="Type Your Message/Feedback here..." required=""></textarea>
                          <br>
                          <button class="btn btn-dark"> <i class="fas fa-paper-plane"></i> Send </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                  </div>
                  
                  <div class="container my-2">
                  <div class="row background">
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">MAIL</h3>
                            <p>
                              <i class="fa fa-envelope" aria-hidden="true"></i> elgordo@eltexano1931.com
                            </p>
                          </div>
                        </div>
                        <div class="space"></div>
                      </div>
                    </div>
                  
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">CONTACT</h3>
                            <p>
                              <i class="fab fa-whatsapp-square"></i> (+57)-3126128566
                            </p>
                          </div>
                        </div>
                        <div class="space"></div>
                      </div>
                    </div>
                  
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">ADDRESS</h3>
                            <p>
                              <i class="fa fa-map-marker" aria-hidden="true"></i> Street 93 # 51B # 425
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>`;
  },
}))();
export default renderContactPage;