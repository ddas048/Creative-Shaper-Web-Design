$(function () {


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
    })
    /* venobox js */
     $('.venobox').venobox({
         
     }); 
});