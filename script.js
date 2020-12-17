/*--------------- + --------------- */
function incrementButton(){
    let element = document.getElementById('result');
    let value = element.innerHTML;

    if(value <= 29){
    ++value;
    document.getElementById('result').innerHTML = value;
    }
}

/*---------------   -   ---------------*/
function decrementButton(){
    let element = document.getElementById('result');
    let value = element.innerHTML;
/*Bien mettre la variable au dessous pour que le if puisse fonctionner,
sinon l'e programme ne peut pas rentrer dans la condition */
    if(value >= 1){
    --value;

    document.getElementById('result').innerHTML = value;
    }
}

/* ---------------Carousel--------------- */
function carouselButtonOne(){

    let gallery= [
        "Picture/beef-pixabay-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
}

function carouselButtonTwo(){

    let gallery= [
        "Picture/appetite-pixabay-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
}

function carouselButtonThree(){

    let gallery= [
        "Picture/food-pixabay-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
}

function carouselButtonFour(){

    let gallery= [
        "Picture/hamburger-pixabayTwo-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
}

function carouselButtonFive(){

    let gallery= [
        "Picture/hamburger-pixabay-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
}




