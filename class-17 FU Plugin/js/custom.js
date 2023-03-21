$(function(){
    $('.venobox').venobox({
        spinColor: '#fff',
        spinner: 'wandering-cubes',
    }); 
    
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
    
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
    
    function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("27 January 2021 19:20:00 GMT+06:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
});