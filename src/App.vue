<template>
  <div>

    <!-- // IMPORTANT: YOU NEED TO GENERATE YOUR OWN FACEBOOK COMMENTS PLUGIN CODE - https://developers.facebook.com/docs/plugins/comments/ -->
    <!-- Facebook comments plugin Javascript SDK --->
    <div id="fb-root"></div>
    <!-- Facebook comments plugin Javascript SDK --->


    <!-- ******HEADER****** -->
    <header id="header" class="header fixed-top">
      <div class="container ">
        <nav class="main-nav navbar navbar-expand-md">
          <button class="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="toggle-title">Menu</span>
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbar-collapse" class="navbar-collapse collapse text-center justify-content-center">
            <ul class="nav navbar-nav">
              <li class="nav-item"><a class="nav-link scrollto" href="#wedding">The Wedding</a></li>
              <li class="nav-item"><a class="nav-link scrollto" href="#story">Our Story</a></li>
              <li class="nav-item"><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li class="nav-item"><a class="nav-link scrollto" href="#gift">Registries</a></li>
              <li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="modal"
                  data-bs-target="#rsvp-modal">RSVP</a></li>
            </ul><!--//nav-->
          </div><!--//navabr-collapse-->
        </nav><!--//main-nav-->
      </div><!--//container-->
    </header><!--//header-->

    <div id="hero" class="hero-section">
      <div class="container text-center">
        <div class="row">
          <div class="hero-box col-lg-5 col-md-7 col-12">
            <h1 class="headline script">
              <span class="names display-block">Amy & Nick</span>
              <span class="statement display-block">
                <span class="swirl-left"></span><span class="statement-text">are getting married</span><span
                  class="swirl-right"></span>
              </span><!--//statement-->
            </h1><!--/headline-->
            <div class="date">
              <span class="date-text">July 16, 2026</span>
            </div><!--//date-->
            <a class="btn btn-primary btn-rsvp" href="#" data-bs-toggle="modal" data-bs-target="#rsvp-modal">RSVP
              Now</a>
          </div><!--//hero-box-->
        </div>
      </div><!--//container-->
      <div class="curve-holder"></div>
    </div><!--//hero-section-->

    <!-- ******Wedding Section****** -->
    <section id="wedding" class="wedding-section section">
      <div class="container text-center">
        <h3 class="title script"><span class="title-deco-left"></span><span class="title-text">The Wedding</span><span
            class="title-deco-right"></span></h3>
        <div id="countdown-box" class="countdown-box">

        </div><!--//countdown-box-->
        <div class="row cols-wrapper">
          <div class="ceremony-col col-12 col-md-6">
            <div class="col-inner px-4 px-md-5">
              <h4 class="subtitle">Ceremony</h4>
              <p class="intro">We are getting married at St Paul’s Church. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor aenean massa. </p>
              <ul class="meta-list list-unstyled text-start center-block">
                <li><span class="icon-calendar love-icon"></span>Saturday - July 16th, 2026</li>
                <li><span class="icon-clock love-icon"></span>11:00am - 2:00pm</li>
                <li><span class="icon-map love-icon"></span>St Paul's Church
                  <br>
                  <span class="direction-info display-block list-link"><a href="#" data-bs-toggle="modal"
                      data-bs-target="#direction-modal">How to get there</a></span>
                  <span class="facilities-info display-block list-link"><a href="#" data-bs-toggle="modal"
                      data-bs-target="#facilities-modal">Facilities</a></span>
                </li>
              </ul><!--//meta-list-->
            </div><!--//col-inner-->
          </div><!--//ceremony-col-->
          <div class="reception-col col-12 col-md-6">
            <div class="col-inner px-4 px-md-5">
              <h4 class="subtitle">Reception</h4>
              <p class="intro">The party will take place after the ceremony at the Manor House.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.
              </p>
              <ul class="meta-list list-unstyled text-start center-block">
                <li><span class="icon-calendar love-icon"></span>Saturday - July 16th, 2026</li>
                <li><span class="icon-clock love-icon"></span>16:00pm - 24:00pm</li>
                <li><span class="icon-map love-icon"></span>The Manor House
                  <br>
                  <span class="direction-info display-block list-link"><a href="#" data-bs-toggle="modal"
                      data-bs-target="#direction-modal">How to get there</a></span>
                  <span class="facilities-info display-block list-link"><a href="#" data-bs-toggle="modal"
                      data-bs-target="#facilities-modal">Facilities</a></span>
                </li>
              </ul><!--//meta-list-->
            </div><!--//col-inner-->
          </div><!--//ceremony-col-->
        </div><!--//row-->

        <div class="action-wrapper">
          <a class="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#rsvp-modal">RSVP Now</a>
        </div><!--//action-wrapper-->

      </div><!--//container-->
      <div id="map" class="map-container">
        <iframe class="map-iframe" src="https://www.google.com/maps/d/u/2/embed?mid=1-qDRFJocmqPd6r6HEErS2sWv7VYeNiCc"
          width="640" height="480"></iframe>
      </div><!--//map-container-->
    </section><!--//wedding-section-->

    <!-- ******Story Section****** -->

    <!-- ******Gallery Section****** -->
    <section id="gallery" class="gallery-section section">
      <div class="container text-center">
        <h3 class="title script"><span class="title-deco-left"></span><span class="title-text">Gallery</span><span
            class="title-deco-right"></span></h3>
        <div class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> Aenean commodo ligula eget
          dolor. </div>
        <div class="gallery-container">

          <div id="photos-wrapper" class="photos-wrapper">
            <div class="item"><a href="assets/images/gallery/pic-1.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-1.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-2.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-2.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-3.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-3.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-4.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-4.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-5.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-5.jpg" alt="" /></a></div>
            <div class="item w2"><a href="assets/images/gallery/pic-6.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-6.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-7.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-7.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-8.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-8.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-9.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-9.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-10.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-10.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-11.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-11.jpg" alt="" /></a></div>
            <div class="item w2"><a href="assets/images/gallery/pic-12.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-12.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-13.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-13.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-14.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-14.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-15.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-15.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-16.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-16.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-17.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-17.jpg" alt="" /></a></div>
            <div class="item"><a href="assets/images/gallery/pic-18.jpg" class="gallery-link"><img class="img-fluid"
                  src="assets/images/gallery/pic-18.jpg" alt="" /></a></div>
          </div><!--//photos-wrapper-->

        </div><!--//gallery-container-->
      </div><!--//container-->
    </section><!--//gallery-section-->

    <!-- ******Gift Section****** -->
    <section id="gift" class="gift-section section">
      <div class="container text-center">
        <h3 class="title script"><span class="title-deco-left"></span><span class="title-text"><span
              class="d-none d-lg-inline">Gift</span> Registries</span><span class="title-deco-right"></span></h3>
        <div class="message-container">
          <div class="message-inner mx-auto">
            <div class="intro">The most important gift to us is to have you
              share our day. However if you do wish to buy us a gift you can check out the registry lists below. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
            <div class="thank-you script">Thank you so much! :)</div>
            <div class="signature script">Amy & Nick</div>
            <div class="couple-profile"></div>
          </div><!--//message-inner-->
        </div><!--//message-container-->
        <div class="registries-container">
          <ul class="list-inline brand-list">
            <li class="list-inline-item"><a href="#"><img src="assets/images/brand-1.svg" alt="" /></a></li>
            <li class="list-inline-item"><a href="#"><img src="assets/images/brand-2.svg" alt="" /></a></li>
            <li class="list-inline-item"><a href="#"><img src="assets/images/brand-3.svg" alt="" /></a></li>
          </ul>
        </div>
      </div><!--//container-->
    </section><!--//gift-section-->


    <!-- ******FOOTER****** -->
    <footer class="footer">
      <div class="footer-content text-center">
        <div class="container">
          <div class="copyright">Template Copyright @ <a href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave
              Media</a></div>
          <div class="credit">Photos by <a href="https://www.flickr.com/photos/ryan_polei/" target="_blank">Ryan
              Polei</a></div>
        </div><!--//container-->
      </div><!--//footer-content-->
    </footer><!--//footer-->


    <!-- RSVP Modal -->
    <div id="rsvp-modal" class="modal modal-rsvp" tabindex="-1" role="dialog" aria-labelledby="rsvpModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">

            <h1 id="rsvpModalLabel" class="modal-title text-center">
              <span class="title script display-block"><span class="title-deco-left"></span><span
                  class="title-text">RSVP</span><span class="title-deco-right"></span></span>
              <span class="subtitle display-block">Come and celebrate with us! <br> Please RSVP by May 16, 2026</span>
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          </div><!--//modal-header-->
          <div class="modal-body">
            <form id="rsvp-form" class="rsvp-form form" method="post" action="#">
              <div id="form-messages" class="text-center"></div>
              <div class="row text-start">
                <div class="name-group form-group col-12 col-md-6">
                  <div class="form-group-inner">
                    <label for="cname">Name</label>
                    <input type="text" class="form-control" id="cname" name="name" placeholder="Your full name"
                      minlength="2" aria-required="true" required>
                  </div>
                </div>
                <div class="email-group form-group col-12 col-md-6">
                  <div class="form-group-inner">
                    <label for="cemail">Email</label>
                    <input type="email" class="form-control" id="cemail" name="email" placeholder="Your email address"
                      aria-required="true" required>
                  </div>
                </div>

                <div class="events-group form-group col-12 col-md-6">
                  <div class="form-group-inner">
                    <label for="cevents">Which events are you attending?</label>
                    <select class="form-select" id="cevents" name="events" required>
                      <option sselected>Please select</option>
                      <option value="Ceremony and Reception">Ceremony and Reception</option>
                      <option value="Ceremony Only">Ceremony Only</option>
                      <option value="Reception Only">Reception Only</option>
                      <option value="Sorry, can't make either">Sorry, can't make either</option>
                    </select>
                  </div>
                </div>

                <div class="guests-group form-group col-12 col-md-6">
                  <div class="form-group-inner">
                    <label for="cguests">How many guests are you bringing?</label>
                    <select class="form-select" id="cguests" name="guests" required>
                      <option selected>Please select</option>
                      <option value="No Guests">No Guests</option>
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5 Guests">5 Guests</option>
                    </select>
                  </div>
                </div>

                <div class="guestinfo-group form-group col-12" style="display:none">
                  <div class="form-group-inner">
                    <label for="cguestinfo">Guest(s) Name(s)</label>
                    <textarea class="form-control" id="cguestinfo" name="guestinfo"
                      placeholder="Please provide full name(s)" required></textarea>
                  </div>
                </div>

                <div class="message-group form-group col-12">
                  <div class="form-group-inner">
                    <label for="cmessage">Additional Information</label>
                    <textarea class="form-control" id="cmessage" name="message"
                      placeholder="eg. Vegetarian &amp; dietary requests"></textarea>
                  </div>
                </div>

                <div class="form-group col-12">
                  <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </div>

                <div class="additional-info text-center col-12">
                  If you have any questions please let us know. You can either email us at <a
                    href="#">amynickwedding@email.com</a> or give us a ring at 0123 45678
                </div><!--//notes-->

              </div><!--//row-->
            </form><!--//rsvp-form-->
          </div><!--//modal-body-->
        </div><!--//modal-content-->
      </div><!--//modal-dialog-->
    </div><!--//modal-->

    <!-- Direction Modal-->
    <div id="direction-modal" class="direction-modal modal" tabindex="-1" role="dialog"
      aria-labelledby="directionModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">

            <h1 class="modal-title" id="directionModalLabel">How to get to the events</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div><!--//modal-header-->
          <div class="modal-body">
            <div class="row">
              <div class="event-col col-12 col-md-6">
                <h4 class="col-title text-center">Ceremony</h4>
                <div class="col-subtitle script text-center">St. Paul's Church</div>
                <div class="figure-container"><img class="img-fluid" src="assets/images/ceremony-building.jpg" alt="" />
                </div>
                <h5 class="section-title"><i class="fas fa-car"></i> By Car</h5>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim.</p>

                <h5 class="section-title"><i class="fas fa-train"></i> By Train</h5>
                <p class="mb-5">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim.</p>
                <h5 class="section-title"><i class="fas fa-bus"></i> By Bus</h5>
                <p class="mb-5">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.</p>
              </div><!--//event-col-->
              <div class="event-col col-12 col-md-6">
                <h4 class="col-title text-center">Reception</h4>
                <div class="col-subtitle script text-center">The Manor House</div>
                <div class="figure-container"><img class="img-fluid" src="assets/images/reception-building.jpg"
                    alt="" /></div>

                <h5 class="section-title"><i class="fas fa-car"></i> By Car</h5>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus.</p>
                <h5 class="section-title"><i class="fas fa-train"></i> By Train</h5>
                <p class="mb-5">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Vivamus elementum semper nisi.
                  Aenean vulputate eleifend tellus. </p>
                <h5 class="section-title"><i class="fas fa-bus"></i> By Bus</h5>
                <p class="mb-5">Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim.</p>
              </div><!--//event-col-->
            </div><!--//row-->
          </div><!--//modal-body-->
        </div><!--//modal-content-->
      </div>
    </div><!--//modal-->


    <!-- Facilities Modal 1-->
    <div id="facilities-modal" class="facilities-modal modal" tabindex="-1" role="dialog"
      aria-labelledby="facilitiesModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title text-center" id="facilitiesModalLabel">Facilities</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div><!--//modal-header-->
          <div class="modal-body">
            <div class="row">
              <div class="event-col col-12 col-md-6">
                <h4 class="col-title text-center">Ceremony</h4>
                <div class="col-subtitle script text-center">St. Paul's Church</div>
                <ul class="list-unstyled facilities-list">
                  <li><i class="fas fa-check"></i> Internet Access / WiFi</li>
                  <li><i class="fas fa-check"></i> Disabled Access</li>
                  <li><i class="fas fa-check"></i> Bathroom and baby changing
                    <br>
                    <span class="details">There is a disabled bathroom with nappy changing facilities.</span>
                  </li>
                  <li><i class="fas fa-check"></i> Car Parking
                    <br>
                    <span class="details">There is a disabled bathroom with nappy changing facilities.</span>
                  </li>

                </ul>
              </div><!--//event-col-->
              <div class="event-col col-12 col-md-6">
                <h4 class="col-title text-center">Reception</h4>
                <div class="col-subtitle script text-center">The Manor House</div>
                <ul class="list-unstyled facilities-list">
                  <li><i class="fas fa-check"></i> Wine Bar</li>
                  <li><i class="fas fa-check"></i> Internet Access / WiFi
                    <br>
                    <span class="details">Aenean commodo ligula eget dolor.</span>
                  </li>
                  <li><i class="fas fa-check"></i> Disabled Access</li>
                  <li><i class="fas fa-check"></i> Bathroom and baby changing</li>
                  <li><i class="fas fa-check"></i> Car Parking
                    <br>
                    <span class="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque
                      penatibus et magnis dis parturient montes</span>
                  </li>
                </ul>
              </div><!--//event-col-->
            </div><!--//row-->
          </div><!--//modal-body-->
        </div><!--//modal-content-->
      </div>
    </div><!--//modal-->



    <!-- *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** -->
    <div id="config-panel" class="config-panel config-panel-hide d-none d-lg-block">
      <div class="panel-inner">
        <a id="config-trigger" class="config-trigger" href="#"><i class="fas fa-cog mx-auto"></i></a>
        <h5 class="panel-title">Choose Color</h5>
        <ul id="color-options" class="list-unstyled list-inline">
          <li class="theme-1 active list-inline-item"><a data-style="assets/css/theme-1.css" href="#"></a></li>
          <li class="theme-2 list-inline-item"><a data-style="assets/css/theme-2.css" href="#"></a></li>
          <li class="theme-3 list-inline-item"><a data-style="assets/css/theme-3.css" href="#"></a></li>
          <li class="theme-4 list-inline-item"><a data-style="assets/css/theme-4.css" href="#"></a></li>
          <li class="theme-5 list-inline-item"><a data-style="assets/css/theme-5.css" href="#"></a></li>
          <li class="theme-6 list-inline-item"><a data-style="assets/css/theme-6.css" href="#"></a></li>
          <li class="theme-7 list-inline-item"><a data-style="assets/css/theme-7.css" href="#"></a></li>
          <li class="theme-8 list-inline-item"><a data-style="assets/css/theme-8.css" href="#"></a></li>
        </ul><!--//color-options-->
        <a id="config-close" class="close" href="#"><i class="fas fa-times-circle"></i></a>
      </div><!--//panel-inner-->
    </div><!--//configure-panel-->





  </div>
</template>