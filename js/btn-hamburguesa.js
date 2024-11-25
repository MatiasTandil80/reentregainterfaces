
//BOTON MENU HAMBURGUESA (MOVIMIENTO)

document.querySelector(".bars__menu").addEventListener("click",animateBars);

let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");

function animateBars(){
   
    line1.classList.toggle("active_line1");
    line2.classList.toggle("active_line2");
    line3.classList.toggle("active_line3");

}