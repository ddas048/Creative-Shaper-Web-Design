$(function () {
    $('.banner_slide').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navs: true,
        navText: [
            '<i class="fas fa-angle-left arrow_lft"></i>',
            '<i class="fas fa-angle-right arrow_rt"></i>',
        ],
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
            },
        },
    });

    $('.banner_slide2').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navs: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
            },
        },
    });

    $('.banner_slide3').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        center: true,
        autoplayHoverPause: true,
        navs: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
            },
        },
    });
});
