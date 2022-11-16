$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 800,
    prevArrow: '<button type="button" class="slick_prev"><img src="images/icons/Arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick_next"><img src="images/icons/Arrow_right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          dots: true,
          dotsClass: 'slick-dots',
          arrows: false
        }
      },

    ]
  });
});

