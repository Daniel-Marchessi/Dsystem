$(document).ready(function() {

    var altura = $('.menu').offset().top;

    $(window).on('scroll', function() {

        if ($(window).scrollTop() > altura) {

            $('.menu').addClass('fixed');

        } else {
            $('.menu').removeClass('fixed');
        }

    });

});
$(document).ready(function hola() {
    $('.slider1').bxSlider({
        mode: 'fade',

    });
    setInterval(1000);

});
$(document).ready(function hola() {
    $('.slider2').bxSlider({
        mode: 'fade',

    });


});
$(document).ready(function() {
    var slideIndex = 0;


    if (screen.width > 576) {


        window.onload = function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 4000);
        }
        showSlides();
    }


});

$(document).ready(function hola() {
    if (screen.width < 576)
        $('.slideshow-container').bxSlider({
            mode: 'fade',

        });


});

// Slider automatico 







//$(window).on('scroll', function() {

//if ($(window).scrollTop() > altura) {

//  $('.menu').addClass('fixed');
//} //else {
//$('.menu').removeClass('fixed');
//}