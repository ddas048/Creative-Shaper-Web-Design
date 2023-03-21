$(function () {
    var system = $(window);
    var page = $('html, body');
    
    // scroll top active
    //====================================================================//
    $(".scrollTop").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });
    //
    //====================================================================//
    // menu fix on scroll
    //====================================================================//
    system.on('scroll', function () {
        if (system.scrollTop() > 100) {
            $('.header_part').addClass('animated slideInDown fix')
        }
        else {
            $('.header_part').removeClass('animated slideInDown fix')
        }
    });
    // Preloader js    
    system.on('load', function(){
        $('.preloader').delay(2500).fadeOut(500);

    });
    


    $('.slider_propuler_loctaion').owlCarousel({
        loop: true,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        navText:['<i class="fas fa-angle-left aroow_left"></i>', '<i class="fas fa-angle-right aroow_right"></i>'], 
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            768: {
                items: 3,

            },
            1000: {
                items: 4,
            }
        }
    });
    
    $('.test_slide').owlCarousel({
        loop: true,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav:false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,

            },
            768: {
                items: 2,

            },
            1000: {
                items: 2,
            }
        }
    });
    /* venobox js */
     $('.venobox').venobox({
         
     }); 
});