$(document).ready(function(){
    // Выпадающее меню.
    let click_menu_flag=false;
    $(".header_burger-menu").on("click", function() {
        if (click_menu_flag==false) {
            $('.pop-up-menu').addClass('open-menu');
            click_menu_flag=true;
            $('body').css('overflow', 'hidden');
            $('.header_burger-menu').css('background-image', 'url(../static/close_ico.png)');
            $('.header_burger-menu').css('background-size', '120%');
        }
        else {
            $('.pop-up-menu').removeClass('open-menu');
            click_menu_flag=false;
            $('body').css('overflow', 'scroll');
            $('.header_burger-menu').css('background-image', 'url(../static/burger_menu_icon.png)');
            $('.header_burger-menu').css('background-size', '100%');
        }
    });
});


