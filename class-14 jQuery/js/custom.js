$(function () {
    $('.btn1').click(function () {
        $('.box1').hide(1000).css('background-color', 'yellow');
    });
    $('.btn2').click(function () {
        $('.box1').show(1000).css('background-color', 'yellow');
    });
    $('.btn3').click(function () {
        $('.box1').toggle(1000).addClass('bbb');
    });

    $('.btn4').click(function () {
        $('.box2').fadeOut(1000);
    });
    $('.btn5').click(function () {
        $('.box2').fadeIn(1000);
    });
    $('.btn6').click(function () {
        $('.box2').fadeToggle(1000);
    });

    $('.btn7').click(function () {
        $('.box3').slideUp(1000);
    });
    $('.btn8').click(function () {
        $('.box3').slideDown(1000);
    });
    $('.btn9').click(function () {
        $('.box3').slideToggle(1000);
    });

    $('.btn10').click(function () {
        $('.box4').animate({
            left: '550px',
            top: '2000px',
        });
    });
});
