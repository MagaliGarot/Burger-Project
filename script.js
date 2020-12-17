/*--------------- BUTTON + & - --------------- */
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
/*CLASSIC BURGER*/
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

        /*TITRE PRICE*/
        document.getElementById("container_columnOne_title").innerText = "Classic Burger";
        document.getElementById("price").innerText = "10€";
}
/*DOUBLE BURGER*/ 
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

         /*TITRE PRICE*/
        document.getElementById("container_columnOne_title").innerText = "Double Burger";
        document.getElementById("price").innerText = "14€";
}
/*MEAT BURGER*/
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

         /*TITRE PRICE*/
        document.getElementById("container_columnOne_title").innerText = "Meat Burger";
        document.getElementById("price").innerText = "10€";
}
/*VEGETARIAN BURGER*/ 
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

         /*TITRE PRICE*/
        document.getElementById("container_columnOne_title").innerText = "Vegetarian Burger";
        document.getElementById("price").innerText = "9€";
}
/*CHEESE BURGER*/ 
function carouselButtonFive(){

    let gallery= [
        "Picture/bread-pixabay-removebg.png",
    ];

    let index = 0;

   const image = document.getElementById("container_columnOne_picture");

        if (++index === gallery.length){
            index = 0;
        }
        image.src = gallery[index];
        
         /*TITRE PRICE*/
        document.getElementById("container_columnOne_title").innerText = "Cheese Burger";
        document.getElementById("price").innerText = "8€";
}




