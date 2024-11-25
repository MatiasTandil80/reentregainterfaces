/*******************************************************
 * 
 *                  CARRUSEL 1
 */
// Seleccionamos el track del carrusel y los botones
const track = document.querySelector('.carrusel');
const moveLeftButton = document.getElementById('btn-izquierda');
const moveRightButton = document.getElementById('btn-derecha');

// Variables de estado para el movimiento
let translateX = 0;
const skewXAngle = 15; // Inclinación inicial
let movementStep = 800; // Cuánto se moverá en cada clic
const maxTranslateX = -2225; // Límite izquierdo del carrusel
const minTranslateX = 0; // Límite derecho del carrusel (posición inicial)
let isAnimating = false;


// Función que mueve y aplica skew al carrusel hacia la izquierda
function moveRight() {
    if (isAnimating) return;
    isAnimating = true;

    translateX -= movementStep;
    
    // Nos aseguramos de no sobrepasar el límite izquierdo
    if (translateX <= maxTranslateX) {
        translateX = maxTranslateX;
    }

    // Aplicamos skew hacia la izquierda
    track.style.transform = `translateX(${translateX}px) skewX(${skewXAngle}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track.style.transform = `translateX(${translateX}px) skewX(0deg)`;
        isAnimating = false;
    }, 500);
}

// Función que mueve y aplica skew al carrusel hacia la derecha
function moveLeft() {
    if (isAnimating) return;
    isAnimating = true;

    translateX += movementStep;
    
    // Nos aseguramos de no sobrepasar el límite derecho (posición inicial)
    if (translateX >= minTranslateX) {
        translateX = minTranslateX;
    }

    // Aplicamos skew inverso hacia la derecha
    track.style.transform = `translateX(${translateX}px) skewX(${-skewXAngle}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track.style.transform = `translateX(${translateX}px) skewX(0deg)`;
        isAnimating = false;
    }, 500);
}

// Eventos para mover el carrusel en ambas direcciones
moveLeftButton.addEventListener('click', moveLeft);
moveRightButton.addEventListener('click', moveRight);

/*******************************************************
 * 
 *                  CARRUSEL 2
 */


// Seleccionamos el track del carrusel y los botones
const track2 = document.querySelector('.carrusel2');
const moveLeftButton2 = document.getElementById('btn-izquierda2');
const moveRightButton2 = document.getElementById('btn-derecha2');

// Variables de estado para el movimiento
let translateX2 = 0;
const skewXAngle2 = 15; // Inclinación inicial
let movementStep2 = 800; // Cuánto se moverá en cada clic
const maxTranslateX2 = -2225; // Límite izquierdo del carrusel
const minTranslateX2 = 0; // Límite derecho del carrusel (posición inicial)
let isAnimating2 = false;

// Función que mueve y aplica skew al carrusel hacia la izquierda
function moveRight2() {
    if (isAnimating2) return;
    isAnimating2 = true;

    translateX2 -= movementStep2;
    
    // Nos aseguramos de no sobrepasar el límite izquierdo
    if (translateX2 <= maxTranslateX2) {
        translateX2 = maxTranslateX2;
    }

    // Aplicamos skew hacia la izquierda
    track2.style.transform = `translateX(${translateX2}px) skewX(${skewXAngle2}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track2.style.transform = `translateX(${translateX2}px) skewX(0deg)`;
        isAnimating2 = false;
    }, 500);
}

// Función que mueve y aplica skew al carrusel hacia la derecha
function moveLeft2() {
    if (isAnimating2) return;
    isAnimating2 = true;

    translateX2 += movementStep2;
    
    // Nos aseguramos de no sobrepasar el límite derecho (posición inicial)
    if (translateX2 >= minTranslateX2) {
        translateX2 = minTranslateX2;
    }

    // Aplicamos skew inverso hacia la derecha
    track2.style.transform = `translateX(${translateX2}px) skewX(${-skewXAngle2}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track2.style.transform = `translateX(${translateX2}px) skewX(0deg)`;
        isAnimating2 = false;
    }, 500);
}

// Eventos para mover el carrusel en ambas direcciones
moveLeftButton2.addEventListener('click', moveLeft2);
moveRightButton2.addEventListener('click', moveRight2);

/*******************************************************
 * 
 *                  CARRUSEL 3
 */


// Seleccionamos el track del carrusel y los botones
const track3 = document.querySelector('.carrusel3');
const moveLeftButton3 = document.getElementById('btn-izquierda3');
const moveRightButton3 = document.getElementById('btn-derecha3');

// Variables de estado para el movimiento
let translateX3 = 0;
const skewXAngle3 = 15; // Inclinación inicial
let movementStep3 = 800; // Cuánto se moverá en cada clic
const maxTranslateX3 = -2225; // Límite izquierdo del carrusel
const minTranslateX3 = 0; // Límite derecho del carrusel (posición inicial)
let isAnimating3 = false;

// Función que mueve y aplica skew al carrusel hacia la izquierda
function moveRight3() {
    if (isAnimating3) return;
    isAnimating3 = true;

    translateX3 -= movementStep3;
    
    // Nos aseguramos de no sobrepasar el límite izquierdo
    if (translateX3 <= maxTranslateX3) {
        translateX3 = maxTranslateX3;
    }

    // Aplicamos skew hacia la izquierda
    track3.style.transform = `translateX(${translateX3}px) skewX(${skewXAngle3}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track3.style.transform = `translateX(${translateX3}px) skewX(0deg)`;
        isAnimating3 = false;
    }, 500);
}

// Función que mueve y aplica skew al carrusel hacia la derecha
function moveLeft3() {
    if (isAnimating3) return;
    isAnimating3 = true;

    translateX3 += movementStep3;
    
    // Nos aseguramos de no sobrepasar el límite derecho (posición inicial)
    if (translateX3 >= minTranslateX3) {
        translateX3 = minTranslateX3;
    }

    // Aplicamos skew inverso hacia la derecha
    track3.style.transform = `translateX(${translateX3}px) skewX(${-skewXAngle3}deg)`;

    // Después de 500ms quitamos el skew
    setTimeout(() => {
        track3.style.transform = `translateX(${translateX3}px) skewX(0deg)`;
        isAnimating3 = false;
    }, 500);
}

// Eventos para mover el carrusel en ambas direcciones
moveLeftButton3.addEventListener('click', moveLeft3);
moveRightButton3.addEventListener('click', moveRight3);

///////////////////////////////////////////////////////////////
function velocidadCarrusel(){
    if (window.matchMedia("(max-width: 600px)").matches) {//MOBILE
        movementStep = 200;
        movementStep2 = 200;
        movementStep3 = 200;
        
    }else{                                               //DESKTOP
        movementStep = 800;
        movementStep2 = 800;
        movementStep3 = 800;
       
    }
}
velocidadCarrusel();

/////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
window.addEventListener('resize', ()=>{
    velocidadCarrusel();
    //intercambiarCartas();
});

///////////////////////////////////////////////////////////////
let currentCardIndex = 1; // Índice inicial
let cardInterval; // Variable para guardar el intervalo
const totalCards = 3; // Total de imágenes de cartas
const cardElement = document.getElementById('imagen-vertical-mobile'); // Elemento de la imagen
const gameNameElement = document.getElementById('nombre-juego-mobile'); // Elemento para el nombre del juego
let resizeTimeout; // Declarar resizeTimeout aquí

// Nombres de los juegos
const gameNames = [
    "Formula 1",
    "Jump Man",
    "Invaders"
];

function startCardRotation() {
    cardInterval = setInterval(() => {
        currentCardIndex = (currentCardIndex % totalCards) + 1; // Cambia el índice
        cardElement.src = `./images/carrusel/vertical/card-vertical-${currentCardIndex}.png`; // Cambia la imagen
        gameNameElement.textContent = gameNames[currentCardIndex - 1]; // Cambia el nombre del juego
    }, 2000); // Cada 2 segundos
}

function stopCardRotation() {
    clearInterval(cardInterval); // Detiene el intervalo
}

// Función para comprobar el ancho de la ventana
function checkViewport() {
    if (window.innerWidth <= 600) {
        startCardRotation(); // Inicia la rotación si está en móvil
    } else {
        stopCardRotation(); // Detiene la rotación si no está en móvil
    }
}

// Comprobamos el tamaño al cargar la página
checkViewport();

// Añadir un listener para redimensionar la ventana
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout); // Limpiar el temporizador anterior
    stopCardRotation(); // Detener la rotación inmediatamente

    // Iniciar un nuevo temporizador
    resizeTimeout = setTimeout(() => {
        checkViewport(); // Comprobar el tamaño después de que se termine el redimensionamiento
    }, 300); // Ajusta el tiempo según lo necesites (300 ms es un buen valor)
});
