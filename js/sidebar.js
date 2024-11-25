let nPantalla = window.matchMedia("(max-width: 600px)").matches ? 1 : 2; 

function barraLateralCarga() {
    const lista = document.querySelector('#id-sidebar');
    const menuButton = document.querySelector('.bars__menu');

    // Limpiar eventos previos
    menuButton.removeEventListener('click', handleMenuClick);
    
    if (nPantalla === 1) { // MOBILE
        resetHamburgerButton();
        lista.classList.add('ocultado');
        lista.classList.remove('sidebar-expandido', 'sidebar-contraido');
    } else { // DESKTOP
        resetHamburgerButton();
        lista.classList.add('sidebar-contraido');
        lista.classList.remove('ocultado');
    }

    menuButton.addEventListener('click', handleMenuClick);
}

function handleMenuClick() {
    const lista = document.querySelector('#id-sidebar');
    if (nPantalla === 1) { // MOBILE
        lista.classList.toggle('ocultado');
        lista.classList.toggle('sidebar-expandido'); 
        
    } else { // DESKTOP
        lista.classList.toggle('sidebar-expandido');
    }
}

function resetHamburgerButton() {
    const line1 = document.querySelector("#line1");
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");

    // Restablecer las clases del botón hamburguesa
    line1.classList.remove("active_line1");
    line2.classList.remove("active_line2");
    line3.classList.remove("active_line3");
}

function barraLateralResize() {
    const esMovil = window.matchMedia("(max-width: 600px)").matches;
    nPantalla = esMovil ? 1 : 2; // Actualizar el estado

    if (nPantalla === 2) {
        resetHamburgerButton(); // Restablecer el botón al cambiar a escritorio
    }

    // Recargar la barra lateral
    barraLateralCarga();
}

// Inicializar
barraLateralCarga();
window.addEventListener('resize', barraLateralResize);
