$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
});


