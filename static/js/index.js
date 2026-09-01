window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Navbar burger toggle (mobile).
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 2,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    breakpoints: [
      { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 1024, slidesToShow: 2, slidesToScroll: 1 }
    ]
  };

  bulmaCarousel.attach('.carousel', options);
  bulmaSlider.attach();
});
