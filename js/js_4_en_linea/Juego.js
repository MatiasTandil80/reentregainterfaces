class Juego {



    constructor(modo, aliasAndroid, urlAndroid, aliasApple, urlApple, canvas, ctx) {

        this.modo = modo;
        this.urlAndroid = urlAndroid;
        this.urlApple = urlApple;
        this.cantidadFichas = ((this.modo + 2)*(this.modo + 3))/2; // Calcula la cantidad de fichas
        this.aliasAndroid = aliasAndroid;
        this.aliasApple = aliasApple;

        this.canvas = canvas;
        this.ctx = ctx; // Contexto del canvas
        this.tiempoRestante = 10 * 60; // 10 minutos en segundos
        this.tiempoRestanteInicial = this.tiempoRestante;
        this.intervalo = null; // Variable para el intervalo
        this.minutos = 0;
        this.segundos = 0;
        this.ficha;
        this.turno = 1;
        this.turnoCaida = 20;
        

        this.BotonMenu = new Boton('Menú', 48, 208, 180, 260,this.ctx,this.canvas);
        this.BotonReinicio = new Boton('Restart', 1398, 1558, 180, 260,this.ctx,this.canvas);

        
        let coordenada = new Coordenada(170, 400);
        this.displayJugadorIzq = new DisplayJugador(urlAndroid,this.aliasAndroid, this.cantidadFichas, coordenada, ctx);
        coordenada = new Coordenada(1320, 400);
        this.displayJugadorDer = new DisplayJugador(urlApple,this.aliasApple, this.cantidadFichas, coordenada, ctx);
        
        this.timer = new Timer(this.tiempoRestante,this.ctx);

        this.t1 = new Tablero(modo,ctx);
        
        //this.t1.drawTablero();
        this.drawCanvas();
        this.jugar();


    }


/*
    drawBotonReiniciar(){
        /////////////////////////////BOTON REINICIAR//////////////////////////////////////////

        this.drawRoundedHollowRectangle(1360,50,200,80,30,5,'#7CFFDC','#10D4A3');
        const start = 'Reiniciar';
        this.ctx.fillStyle = '#665BAA'; // Color del texto    
        this.ctx.font = 'bold 40px Nunito, sans-serif'; // O usando "bold" para negrita
        const startWidth = this.ctx.measureText(start).width; // Obtener el ancho del texto
        // Dibujar el texto del título
        const startX = (this.canvas.width - startWidth) / 2; // Posición X para centrar
        this.ctx.fillText(start, 1460, 105); // Dibujar el título centrado
        
        ////////////////////////////////////////////////////////////////////////////////

    }*/
/*
    drawBotonMenu(){
        /////////////////////////////BOTON MENU//////////////////////////////////////////

        this.drawRoundedHollowRectangle(1360,150,200,80,30,5,'#7CFFDC','#10D4A3');
        const start = 'Menú';
        this.ctx.fillStyle = '#665BAA'; // Color del texto    
        this.ctx.font = 'bold 40px Nunito, sans-serif'; // O usando "bold" para negrita
        const startWidth = this.ctx.measureText(start).width; // Obtener el ancho del texto
        // Dibujar el texto del título
        const startX = (this.canvas.width - startWidth) / 2; // Posición X para centrar
        this.ctx.fillText(start, 1460, 205); // Dibujar el título centrado
        
        ////////////////////////////////////////////////////////////////////////////////

    }*/

  /*  ClickearBotonMenu(){
        this.canvas.addEventListener("mousedown", (e) => {
            if(this.BotonMenu.evaluarCLickEnbotones(e.offsetX,e.offsetY)){
                    console.log("BOTON MENU");
            }
        });
    }

    ClickearBotonReiniciar(){
        this.canvas.addEventListener("mousedown", (e) => {
            if(this.BotonReiniciar.evaluarCLickEnbotones(e.offsetX,e.offsetY)){
                    console.log("BOTON REINICIAR");
                   
            }
        });
    }*/

 
    
    
    cambiarTurno() {
        this.turno = 1 - this.turno; // Cambia entre 0 y 1
        console.log(this.turno === 0 ? "Es el turno del Jugador 1" : "Es el turno del Jugador 2");
    }
    
    jugar() {
        // Variable para seguir el estado de la ficha
        let fichaSigueClickeada = false;
    
        // Función para manejar el evento 'mousedown'
        const manejarMouseDown = (e) => {
            if (this.BotonMenu.evaluarCLickEnbotones(e.offsetX, e.offsetY)) {
                const canvas2 = document.getElementById('idCanvas');
                this.timer.detenerReloj();
                this.detenerCaida();
                this.t1.vaciarTablero();
                this.modo = null;
                this.urlAndroid = null;
                this.urlApple = null;
                this.cantidadFichas = null;
                this.aliasAndroid = null;
                this.aliasApple = null;
    
                this.seleccionNumLinea = 4;
                this.imgAndroidElegida = 'images/imagenes_juego/android.png';
                this.imgAppleElegida = 'images/imagenes_juego/apple.png';
                this.seleccionFichaAndroid = 1;
                this.seleccionFichaApple = 1;
    
                this.eliminarEventListeners();

                let mj123 = new MenuJuego(this.canvas);
    
                let inputAliasAndroid = document.querySelector('#input-alias-android');
                let inputAliasApple = document.querySelector('#input-alias-apple');
                inputAliasAndroid.style.display = 'block';
                inputAliasApple.style.display = 'block';
                inputAliasAndroid.value = '';
                inputAliasApple.value = '';
                inputAliasAndroid.placeholder = 'Alias Jugador 1';
                inputAliasApple.placeholder = 'Alias Jugador 2';
    
                let tituloSeleccionar = document.querySelector('#titulo-seleccionar');
                let numLineas = document.querySelector('#id-lineas');
                let aliasAndroid = document.querySelector('#id-alias-android');
                let aliasApple = document.querySelector('#id-alias-apple');
                let fichasAndroid = document.querySelector('#id-fichas-android');
                let fichasApple = document.querySelector('#id-fichas-apple');
    
                tituloSeleccionar.style.display = 'block';
                numLineas.style.display = 'block';
                aliasAndroid.style.display = 'block';
                aliasApple.style.display = 'block';
                fichasAndroid.style.display = 'block';
                fichasApple.style.display = 'block';
            }
    
            if (this.BotonReinicio.evaluarCLickEnbotones(e.offsetX, e.offsetY)) {
                let coordenada2 = new Coordenada(170, 400);
                this.displayJugadorIzq = new DisplayJugador(this.urlAndroid, this.aliasAndroid, this.cantidadFichas, coordenada2, this.ctx);
                coordenada2 = new Coordenada(1320, 400);
                this.displayJugadorDer = new DisplayJugador(this.urlApple, this.aliasApple, this.cantidadFichas, coordenada2, this.ctx);
                this.timer.reiniciarReloj(this.tiempoRestante);
                this.t1.vaciarTablero();
                this.t1 = new Tablero(this.modo, this.ctx);
                this.drawCanvas();
                this.turno = 1;
            }
    
            if (this.timer.tiempoRestante > 0) {
                if ((this.turno == 1) && (this.displayJugadorIzq.evaluarClick(e.offsetX, e.offsetY))) {
                    fichaSigueClickeada = true;
                    let coordenada = new Coordenada(e.offsetX, e.offsetY);
                    let radio = (860 / (this.modo + 3)) * 0.4;
                    this.ficha = new Ficha(coordenada, radio, this.urlAndroid, 1, this.ctx, null);
                    this.ficha.dibujarFicha();
                } else if ((this.turno == 0) && (this.displayJugadorDer.evaluarClick(e.offsetX, e.offsetY))) {
                    fichaSigueClickeada = true;
                    let coordenada = new Coordenada(e.offsetX, e.offsetY);
                    let radio = (860 / (this.modo + 3)) * 0.4;
                    this.ficha = new Ficha(coordenada, radio, this.urlApple, 2, this.ctx, null);
                    this.ficha.dibujarFicha();
                }
            }
        };
    
        // Función para manejar el evento 'mousemove'
        const manejarMouseMove = (e) => {
            if (this.timer.tiempoRestante > 0) {
                if (fichaSigueClickeada) {
                    this.moverFicha(e.offsetX, e.offsetY);
                }
            } else {
                fichaSigueClickeada = false;
            }
        };
    
        // Función para manejar el evento 'mouseup'
        const manejarMouseUp = (e) => {
            if (this.timer.tiempoRestante > 0) {
                if (fichaSigueClickeada) {
                    fichaSigueClickeada = false;
                    let soltoEnColumna = this.t1.evaluarHover(e.offsetX, e.offsetY);
    
                    if (soltoEnColumna != -1) {
                        this.turnoCaida = this.turno;
                        this.turno = 20;
    
                        let filaCasilleroLibre = this.t1.hayCasilleroLibre(soltoEnColumna);
                        if (filaCasilleroLibre != -1) {
                            this.ejecutarCaerFicha(filaCasilleroLibre, soltoEnColumna);
                            let filaColocoFicha = this.t1.colocarFicha(filaCasilleroLibre, soltoEnColumna, this.ficha, this.turnoCaida);
    
                            if (filaColocoFicha != -1) {
                                if (this.turnoCaida == 1) {
                                    this.displayJugadorIzq.cantidadFichas--;
                                } else {
                                    this.displayJugadorDer.cantidadFichas--;
                                }
                                this.drawCanvas();
                                let ganador = this.t1.evaluarGanador(filaColocoFicha, soltoEnColumna);
                                if (ganador.length == 0) {
                                    this.cambiarTurno();
                                } else {
                                    ganador.forEach(posicion => {
                                        this.t1.resaltarPosicionGanador(posicion[0], posicion[1]);
                                    });
                                    clearInterval(this.timer.intervalo);
                                    this.turno = this.turnoCaida;
                                    this.turnoCaida = -1;
                                    return ganador;
                                }
                            }
                        } else {
                            this.drawCanvas();
                        }
                    } else {
                        this.drawCanvas();
                    }
                }
            } else {
                this.drawCanvas();
            }
        };
    
        // Guardar las referencias a las funciones manejadoras
        this.manejarMouseDown = manejarMouseDown;
        this.manejarMouseMove = manejarMouseMove;
        this.manejarMouseUp = manejarMouseUp;
    
        // Agregar los event listeners
        this.canvas.addEventListener("mousedown", this.manejarMouseDown);
        this.canvas.addEventListener("mousemove", this.manejarMouseMove);
        this.canvas.addEventListener("mouseup", this.manejarMouseUp);
    }

    
    eliminarEventListeners() {
        this.canvas.removeEventListener("mousedown", this.manejarMouseDown);
        this.canvas.removeEventListener("mousemove", this.manejarMouseMove);
        this.canvas.removeEventListener("mouseup", this.manejarMouseUp);
    }

    dibujarImagenDeFondo(){

        const gradiente = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradiente.addColorStop(0, '#03010c'); // Color inicial
        gradiente.addColorStop(1, '#5236cd'); // Color final 

        // Rellenar el canvas con el degradado
        this.ctx.fillStyle = gradiente;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }
    
    drawCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpiar todo el canvas
    
        
            // Dibuja la imagen de fondo
            //  this.ctx.drawImage(this.fondo, 0, 0, this.canvas.width, this.canvas.height);

        
        this.dibujarImagenDeFondo();//color de fondo

        this.timer.dibujarReloj();
        
        this.displayJugadorDer.drawDisplayJugador();
        this.displayJugadorIzq.drawDisplayJugador();
        this.t1.drawTablero();


        
        this.BotonMenu.drawBoton(30,5,'#7CFFDC','#10D4A3');
        this.BotonReinicio.drawBoton(30,5,'#7CFFDC','#10D4A3');

    }

    moverFicha (x, y) {

        this.ficha.setCoordenada(new Coordenada(x, y));
        this.drawCanvas();
        this.ficha.dibujarFicha();
        let posicionHover = this.t1.evaluarHover(x, y);
        
        if (posicionHover != -1){

            if (this.t1.hayCasilleroLibre(posicionHover)){
                this.t1.drawHover(posicionHover);
            }
        }
    }
   
 /*   caerFicha(fila, columna) {
        
        let x = this.t1.coordenadaInicial.getX() + (this.t1.ladoCasillero * columna) + (this.t1.ladoCasillero/2);
        let yInicial = this.t1.coordenadaInicial.getY() + this.t1.ladoCasillero;
        let yFinal = yInicial + ((fila- 1) * this.t1.ladoCasillero) + (this.t1.ladoCasillero / 2)

        let i = yInicial;

        this.intervalo = setInterval(() => {
            
            if (i >= yFinal) {
                clearInterval(this.intervalo);
                return; // Salir de la función si llego a la posicion
            }

            this.ficha.setCoordenada(new Coordenada(x, i));
            this.drawCanvas();
            
            this.ficha.dibujarFicha();
            i = i + 1;
            
        }, 1); // Tiempo actualizacion
        
        return 1000;
    }*/

/*    caerFicha(fila, columna) {
        return new Promise((resolve, reject) => {
            let x = this.t1.coordenadaInicial.getX() + (this.t1.ladoCasillero * columna) + (this.t1.ladoCasillero / 2);
            let yInicial = this.t1.coordenadaInicial.getY() + this.t1.ladoCasillero;
            let yFinal = yInicial + ((fila - 1) * this.t1.ladoCasillero) + (this.t1.ladoCasillero / 2);
    
            let i = yInicial;
    
            this.intervalo = setInterval(() => {
                if (i >= yFinal) {
                    clearInterval(this.intervalo);
                    resolve(); // Aquí se resuelve la promesa cuando el setInterval termina
                }
    
                this.ficha.setCoordenada(new Coordenada(x, i));
                this.ficha.dibujarFicha();
                i = i + 1;
            }, 1);
        });
    }*/

    caerFicha(fila, columna) {
        return new Promise((resolve, reject) => {
            let x = this.t1.coordenadaInicial.getX() + (this.t1.ladoCasillero * columna) + (this.t1.ladoCasillero / 2);
            let yInicial = this.t1.coordenadaInicial.getY() + this.t1.ladoCasillero;
            let yFinal = yInicial + ((fila - 1) * this.t1.ladoCasillero) + (this.t1.ladoCasillero / 2);
    
            let i = yInicial;
    
            this.intervalo = setInterval(() => {
                if (i >= yFinal) {
                    clearInterval(this.intervalo);
                    resolve(); // Resuelve la promesa cuando el setInterval termina
                }
    
                // Limpia el canvas y dibuja todo nuevamente
                this.drawCanvas(); 
    
                // Dibuja la ficha en la nueva posición
                this.ficha.setCoordenada(new Coordenada(x, i));
                this.ficha.dibujarFicha();
                
                i = i + 8;
            }, 1);
        });
    }

    // Método para detener el intervalo
    detenerCaida() {
        if (this.intervalo) {
            clearInterval(this.intervalo);
            console.log("Intervalo detenido");
        }
    }

    async ejecutarCaerFicha(filaCasilleroLibre, soltoEnColumna) {
        await this.caerFicha(filaCasilleroLibre, soltoEnColumna) // Espera a que el setInterval termine
        console.log("La ficha ha caído completamente.");
        this.drawCanvas();
        if(this.turnoCaida != -1){
            this.turno = 1-this.turnoCaida;

            console.log("TURNOOOO: "+ this.turno);
        }
        
        if(this.turnoCaida == -1){
            this.drawCartelGanador();
        }
            
    }




    drawRectanguloRedondeado(x, y, width, height, radius, borderWidth, borderColor, fillColor) {
        this.ctx.fillStyle = fillColor; // Color de relleno
        this.ctx.strokeStyle = borderColor; // Color del borde
        this.ctx.lineWidth = borderWidth; // Grosor del borde
    
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height - radius);
        this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.ctx.lineTo(x + radius, y + height);
        this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
    
        this.ctx.fill(); // Rellenar el interior
        this.ctx.stroke(); // Dibujar el borde
    }

    
                
    retornarAliasGanador(){
        let inputAliasAndroid = document.querySelector('#input-alias-android');
        let inputAliasApple = document.querySelector('#input-alias-apple');
        let nombre;
        //console.log("TURNO GANADOOOOOOOOOOOOOR: "+this.turno);
        if(this.turno == 1){
            
            nombre = inputAliasAndroid.value;
            
        }else{
            nombre = inputAliasApple.value;
        }
        return nombre;
    }

   /* drawCartelGanador(){
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        //this.drawRectanguloRedondeado(525, 250, 600, 400, 20, 5, 'rgba(189,170,254,255)', 'rgba(104,67,255,255)');

        this.ctx.fillStyle = 'rgba(189,170,254,255)';
        this.ctx.font = '60px Nunito';
        this.ctx.textAlign = 'center';
        //this.ctx.fillText("Hay ganador", this.coordenada.getX() + (ancho / 2), imgY + imgHeight + 70); // Espacio bajo la imagen
        this.ctx.fillText("Ganador: "+this.retornarAliasGanador(), 825, 90); // Espacio bajo la imagen
    }*/


    drawCartelGanador() {
        // Eliminar el intervalo para titilar el texto
        // this.intervalGanador = setInterval(() => { ... } ); // ya no es necesario

        // Establecer el color del texto
        this.ctx.fillStyle = 'aqua'; // Color fijo

        // Establecer la fuente y alineación
        this.ctx.font = '70px Nunito';
        this.ctx.textAlign = 'center';

        // Dibujar el texto del cartel del ganador
        this.ctx.fillText("Ganador " + this.retornarAliasGanador(), 825, 90); // Posición y texto

        // Si deseas asegurarte de que el cartel no se dibuje más de una vez
        // podrías agregar una bandera o alguna lógica para que no se repita.
    }



            





}