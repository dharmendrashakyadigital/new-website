$(".figma-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-arrow-left fa-2x"></i>',
    '<i class="fa fa-arrow-right fa-2x"></i>'
  ],
  dots: true,

  autoplay: true,

  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 1
    }
  }
});

// <!-- <<<<<<<<<<<<<<< meet doctors>>>>>>>>>>> -->
$(".figma-20").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-arrow-left fa-2x"></i>',
    '<i class="fa fa-arrow-right fa-2x"></i>'
  ],
  dots: false,

  autoplay: false,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

// <!-- <<<<<<<<<<<<< our testimonials >>>>>>>>>>>>>> -->
$(".company-logo").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    '<i class="fa fa-arrow-left fa-2x"></i>',
    '<i class="fa fa-arrow-right fa-2x"></i>'
  ],
  dots: false,

  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});
