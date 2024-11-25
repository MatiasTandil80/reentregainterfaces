document.addEventListener('DOMContentLoaded', function() {
    const imgUsuario = document.getElementById('img-usuario');
    const lista = document.getElementById('inicio-sesion-salir');

    imgUsuario.addEventListener('click', function() {
        // Cambia el estilo de display de la lista
        if (lista.style.display === 'none' || lista.style.display === '') {
            lista.style.display = 'flex'; // Muestra la lista
        } else {
            lista.style.display = 'none'; // Oculta la lista
        }
    });
});