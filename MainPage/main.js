$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2
      });
});


