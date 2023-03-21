$(function(){
    
$('.banner_slide').slick({
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.arrow_lft',
  nextArrow: '.arrow_rt',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
        
$('.banner_slide2').slick({
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    $('.banner_slide3').slick({
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
   autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
 $('.banner_slide4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
     speed: 500,
  autoplaySpeed: 2000,
  arrows: false,
  fade: true,
  asNavFor: '.banner_slide5'
});
$('.banner_slide5').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: true,
     speed: 500,
     centerPadding: '0px',
  autoplaySpeed: 2000,
  asNavFor: '.banner_slide4',
  dots: false,
 arrows: false,
  centerMode: true,
  focusOnSelect: true
});
        
    $('.banner_slide6').slick({
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
   autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
    vertical: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});