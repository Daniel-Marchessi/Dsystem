// $(document).ready(function() {

//     var altura = $('.menu').offset().top;

//     $(window).on('scroll', function() {

//         if ($(window).scrollTop() > altura) {

//             $('.menu').addClass('fixed');

//         } else {
//             $('.menu').removeClass('fixed');
//         }

//     });

// });



// var imageArray = ["img/Freelancer1.png", "img/Freelancer2.png", "img/Freelancer3.png"];
// var image = document.getElementById("imagen");
// var indexImagen = 0;



// function next(){
// indexImagen++;
// if(indexImagen >= imageArray.length){
//     indexImagen = 0;
// }
//     image.setAttribute("src", imageArray[indexImagen]);


// }

// function previous(){

// if(indexImagen > 0){
//     indexImagen--;
// }else{
//     indexImagen = imageArray.length - 1;
    
// }
// image.setAttribute("src", imageArray[indexImagen]);


// }


// $(document).ready(function() {
//     var slideIndex = 0;


//     if (screen.width > 576) {


//         window.onload = function showSlides() {
//             var i;
//             var slides = document.getElementsByClassName("mySlides");
//             for (i = 0; i < slides.length; i++) {
//                 slides[i].style.display = "none";
//             }
//             slideIndex++;
//             if (slideIndex > slides.length) {
//                 slideIndex = 1
//             }
//             slides[slideIndex - 1].style.display = "block";
//             setTimeout(showSlides, 4000);
//         }
//         showSlides();
//     }
// });


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