

var imageArray = ["img/Freelancer1.png", "img/Freelancer2.png", "img/Freelancer3.png"];
var image = document.getElementById("imagen");
var indexImagen = 0;
var imageArray2 = ["img/Frontend_Store1.png", "img/Frontend_Store2.png", "img/Frontend_Store3.png"];
var image2 = document.getElementById("imagen2");
var indexI = 0;
var imageArray3 = ["img/bienesraices-1.png", "img/bienesraices-2.png", "img/bienesraices-3.png", "img/bienesraices-4.png"];
var image3 = document.getElementById("imagen3");
var indexImagen3 = 0;

function next(){
indexImagen++;
if(indexImagen >= imageArray.length){
    indexImagen = 0;
}
    image.setAttribute("src", imageArray[indexImagen]);


}

function previous(){

if(indexImagen > 0){
    indexImagen--;
}else{
    indexImagen = imageArray.length - 1;
    
}
image.setAttribute("src", imageArray[indexImagen]);
}

    function next1(){
    indexI++;
    if(indexI >= imageArray2.length){
        indexI = 0;
    }
        image2.setAttribute("src", imageArray2[indexI]);
    
    
    }
    function previous1(){

        if(indexI > 0){
            indexI--;
        }else{
            indexI = imageArray2.length - 1;
            
        }
        image2.setAttribute("src", imageArray2[indexI]);
        }



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
    console.log('funcionando');



function next3(){
    indexImagen3++;
    if(indexImagen3 >= imageArray3.length){
        indexImagen3 = 0;
    }
        image3.setAttribute("src", imageArray3[indexImagen3]);
    
    
    }
    
    function previous3(){
    
    if(indexImagen3 > 0){
        indexImagen3--;
    }else{
        indexImagen3 = imageArray3.length - 1;
        
    }
    image3.setAttribute("src", imageArray3[indexImagen3]);
    }