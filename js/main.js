window.onload = function() {

    let aqua = document.querySelector('.aqua');
    let number = document.querySelector('.number');
    let percentBar = document.querySelector('.percent-bar');
    let logo = document.getElementById('atari-logo');
    let body = document.body; // Selecciono el body

    let i = 0;    

    let interval = setInterval(function(){

        number.innerHTML = i + '<span>%</span>';
        percentBar.style.width = i + '%';
        i++;

        if(i == 101 ){
            clearInterval(interval);
            setTimeout(function(){
            
                aqua.style.opacity = '0';
                logo.classList.add('cambio');
                body.classList.add('cambio-fondo');
            
                setTimeout(function() {
                    // Cambia a la URL de la nueva página
                    window.location.href = 'index.html'; 
                    
                }, 2500); // Tiempo en milisegundos que dura el logo hasta que
                        //se redirecciona al home (segundos)
                
            })
        
        } 

},50)}/*EL 50 SON LOS 5 SEGUNDOS DE LA CARGA DE LA PAGINA*/

