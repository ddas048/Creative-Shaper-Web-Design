$(function () {
    "use strict";


    $('.populer_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        navs: true,
        navText: ['<i class="fas fa-long-arrow-alt-left arrow_left"></i>', '<i class="fas fa-long-arrow-alt-right arrow_right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,

            },
            992: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.testomonial_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        navs: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,

            },
            992: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
    $('.test_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        navs: true,
        navText: ['<i class="fas fa-long-arrow-alt-left arrow_left1"></i>', '<i class="fas fa-long-arrow-alt-right arrow_right1"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,

            },
            992: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });


    /* venobox js*/
    $('.venobox').venobox({

    });


});

$(function () {
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
    });


});
