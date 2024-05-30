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
            },
            {
                breakpoint: 460,
                settings: {
                  slidesToShow: 1,
                  arrows: false
                }
            }
        ]
    });

    $('.card').on("click", function() {
        $('html,body').animate({
            scrollTop: $(".feedback-more-button-wrapper").offset().top},
            'slow');
    });


    // Выпадающее меню.
    let click_menu_flag=false;
    $(".header_burger-menu").on("click", function() {
        if (click_menu_flag==false) {
            $('.pop-up-menu').addClass('open-menu');
            click_menu_flag=true;
            $('html').css('overflow-y', 'hidden');
            $('.header_burger-menu').css('background-image', 'url(../static/close_ico.png)');
            $('.header_burger-menu').css('background-size', '120%');
        }
        else {
            $('.pop-up-menu').removeClass('open-menu');
            click_menu_flag=false;
            $('html').css('overflow-y', 'scroll');
            $('.header_burger-menu').css('background-image', 'url(../static/burger_menu_icon.png)');
            $('.header_burger-menu').css('background-size', '100%');
        }
    });
});


