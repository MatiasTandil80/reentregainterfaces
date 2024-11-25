document.querySelector("#btn-login").addEventListener("click", function(event) {

    event.preventDefault(); // Evita el envío del formulario
    let valid = true;

    let inputs = document.querySelectorAll(".input-login");

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            
            valid = false;
            input.style.border = " 1px solid red";
             
        } else {
            input.style.border = ""; // Limpia el estilo si está completo
        }
    });

    if (valid) {
        window.location.href = "loading.html"; // Redirige a index.html
    }
    
    // Aquí podrías continuar solo si valid es true
});
