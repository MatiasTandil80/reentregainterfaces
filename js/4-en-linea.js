
"uses strict";

//BOTON AYUDA
document.getElementById("btn-ayuda").addEventListener("click", function() {
    var instrucciones = document.getElementById("instrucciones-juego");
    var overlay = document.getElementById("overlay");
    
    if (instrucciones.classList.contains("show")) {
        instrucciones.classList.remove("show"); // Ocultar instrucciones
        overlay.style.display = "none"; // Ocultar overlay
    } else {
        overlay.style.display = "block"; // Mostrar overlay
        setTimeout(() => {
            instrucciones.classList.add("show"); // Mostrar instrucciones
        }, 10); // Delay para permitir que el overlay se muestre
    }
});

document.getElementById("btn-cerrar").addEventListener("click", function() {
    var instrucciones = document.getElementById("instrucciones-juego");
    var overlay = document.getElementById("overlay");
    
    instrucciones.classList.remove("show"); // Ocultar instrucciones
    overlay.style.display = "none"; // Ocultar overlay
});

//BOTON RESEÑA HISTORICA
document.getElementById("btn-reseña").addEventListener("click", function() {
    var reseña = document.getElementById("reseña-historica");
    var overlay = document.getElementById("overlay");
    
    if (reseña.classList.contains("show")) {
        reseña.classList.remove("show"); // Ocultar instrucciones
        overlay.style.display = "none"; // Ocultar overlay
    } else {
        overlay.style.display = "block"; // Mostrar overlay
        setTimeout(() => {
            reseña.classList.add("show"); // Mostrar instrucciones
        }, 10); // Delay para permitir que el overlay se muestre
    }
});

document.getElementById("btn-cerrar-reseña").addEventListener("click", function() {
    var reseña = document.getElementById("reseña-historica");
    var overlay = document.getElementById("overlay");
    
    reseña.classList.remove("show"); // Ocultar instrucciones
    overlay.style.display = "none"; // Ocultar overlay
});

//BOTON GALERIA DE IMAGENES
document.getElementById("btn-galeria").addEventListener("click", function() {
    var reseña = document.getElementById("galeria-imagenes");
    var overlay = document.getElementById("overlay");
    
    if (reseña.classList.contains("show")) {
        reseña.classList.remove("show"); // Ocultar instrucciones
        overlay.style.display = "none"; // Ocultar overlay
    } else {
        overlay.style.display = "block"; // Mostrar overlay
        setTimeout(() => {
            reseña.classList.add("show"); // Mostrar instrucciones
        }, 10); // Delay para permitir que el overlay se muestre
    }
});

document.getElementById("btn-cerrar-galeria").addEventListener("click", function() {
    var reseña = document.getElementById("galeria-imagenes");
    var overlay = document.getElementById("overlay");
    
    reseña.classList.remove("show"); // Ocultar instrucciones
    overlay.style.display = "none"; // Ocultar overlay
});

//FUNCIONALIDAD ROTAR LAS IMAGENES QUE ESTAN EN LA CARPETA IMAGENES (1.JPG A 7.JPG)
let currentImageIndex = 1; // Índice inicial
let interval; // Variable para guardar el intervalo

const totalImages = 7; // Total de imágenes
const gallery = document.getElementById('galeria-imagenes');
const imgElement = document.getElementById('foto-galeria');

document.getElementById('btn-galeria').addEventListener('click', () => {
    gallery.classList.add('show'); // Muestra la galería
    startImageRotation(); // Inicia la rotación de imágenes
});

document.getElementById('btn-cerrar-galeria').addEventListener('click', () => {
    gallery.classList.remove('show'); // Oculta la galería
    stopImageRotation(); // Detiene la rotación de imágenes
});

function startImageRotation() {
    interval = setInterval(() => {
        imgElement.style.opacity = 0; // Reduce la opacidad a 0
        setTimeout(() => {
            currentImageIndex = (currentImageIndex % totalImages) + 1; // Cambia el índice
            imgElement.src = `./images/galeria/${currentImageIndex}.jpg`; // Cambia la imagen
            imgElement.style.opacity = 1; // Restaura la opacidad
        }, 500); // Espera el tiempo de la transición antes de cambiar la imagen
    }, 2500); // Cada 3 segundos
}

function stopImageRotation() {
    clearInterval(interval); // Detiene el intervalo
}



