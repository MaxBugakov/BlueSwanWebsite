$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1550,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });

    $('.card').on("click", function() {
        $('html,body').animate({
            scrollTop: $(".feedback-more-button-wrapper").offset().top},
            'slow');
    });
});


