let buttons = document.querySelectorAll('.btn-hover-4enlinea');

// Recorre cada botón y agrega el event listener
buttons.forEach(btn => {
    btn.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        btn.style.setProperty('--x', x + 'deg');
        console.log("anduvo");
    });
});