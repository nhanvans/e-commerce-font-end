$('.slider-container').slick({
  speed: 2000,
  autoplay: false,
  infinite: true,
  dots: false,
  slidesToShow: 10,
  slidesToScroll: 10,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});