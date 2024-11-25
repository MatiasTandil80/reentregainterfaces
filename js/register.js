document.getElementById("btn-registro").addEventListener("click", function(event) {

    let valid = true;

    // Selecciono todos los campos de entrada
    let inputs = document.querySelectorAll(".input-login");
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {//el trim elimina los vacios (princ y final)
            input.classList.add("empty"); // Agrego la clase si está vacío
            valid = false;
        } else {
            input.classList.remove("empty"); // Remueve la clase si está completo
        }
    });

    // Valido que las contraseñas sean iguales
    let contraseña = document.querySelector("#contraseña").value;
    let confirmContraseña = document.querySelector("#confirm-contraseña").value;

    if (contraseña !== confirmContraseña) {
        alert("Las contraseñas no coinciden.");
        valid = false;
    }

    const checkbox = document.getElementById("no-soy-un-robot");
    if (!checkbox.checked) {
        alert("Debes marcar la casilla de 'No soy un robot'.");
        valid = false;
    }

    if (valid) {
        // Animacion
         
            let contenedorRegistro = document.getElementById("contenedor-registro");
            let mensaje = document.getElementById("mensaje");
        
            // Cierra el formulario lentamente
            contenedorRegistro.style.opacity = "0"; // Comienza a desvanecerse
            
            // Espera que la animación termine antes de mostrar el mensaje
            setTimeout(() => {

                mensaje.style.opacity = "1"; // Hace el mensaje visible
               
            }, 1000); // Debe coincidir con el tiempo de transición
            setTimeout(()=>{
                mensaje.style.opacity = "0"; // Hace el mensaje invisible
            },3000);
            
            setTimeout(() => {
                window.location.href = "loading.html"; // Redirige a index.html
            }, 4000); // Tiempo que quieres que el mensaje permanezca visible
          
    }
});
/*********************************************************************/
