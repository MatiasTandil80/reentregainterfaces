class MenuJuego {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        
        this.numLinea = 4; // Valor por defecto
        this.j1;
        this.imgAndroidElegida  = 'images/imagenes_juego/android.png';
        this.imgAppleElegida = 'images/imagenes_juego/apple.png';

        //POSICIONES DE LOS NUMEROS DE LINEA
        this.numLineaX = 240;
        this.numLinea4Y = 300;
        this.numLinea5Y = 450;
        this.numLinea6Y = 600;
        this.numLinea7Y = 750;
        this.numLineaDiametro = 100;        

        //POSICIONES DE LAS FICHAS ANDROID
        this.fichaAndroidX = 760;
        this.fichaAndroid1Y = 500;
        this.fichaAndroid2Y = 625;
        this.fichaAndroid3Y = 750;
        this.fichaAndroidDiametro = 100;

        //POSICIONES DE LAS FICHAS APPLE
        this.fichaAppleX = 1290;
        this.fichaApple1Y = 500;
        this.fichaApple2Y = 625;
        this.fichaApple3Y = 750;
        this.fichaAppleDiametro = 100;

        //SELECCION DE ELEMENTOS NUMLINEA, FICHAANDROID Y FICHAAPPLE
        this.seleccionNumLinea = 4;
        this.seleccionFichaAndroid = 1;
        this.seleccionFichaApple = 1;

        //variable boolean 
        let primeraVez = true;

        this.drawMenu();

        this.seleccionarNumLinea();
        this.seleccionarFichaAndroid();
        this.seleccionarFichaApple();
        this.seleccionarStart();
        

}



    // Método para dibujar el menú
    drawMenu() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpiar el canvas

        // DIBUJO EL FONDO DEL CANVAS
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#190656'); // Color en la parte superior
        gradient.addColorStop(1, '#665BAA'); // Color en la parte inferior
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // TITULO MENÚ JUEGO
       /* const title = 'Seleccionar';
        this.ctx.fillStyle = '#665BAA'; // Color del texto    
        this.ctx.font = 'bold 70px Nunito, sans-serif'; // O usando "bold" para negrita
        const titleWidth = this.ctx.measureText(title).width; // Obtener el ancho del texto
        // Dibujar el texto del título
        const x = (this.canvas.width - titleWidth) / 2; // Posición X para centrar
        this.ctx.fillText(title, x, 100); // Dibujar el título centrado*/

        

/////////////////////////////BOTON START//////////////////////////////////////////
/*
        this.drawRoundedHollowRectangle(1398,45,160,80,30,5,'#7CFFDC','#10D4A3');
        const start = 'Start';
        this.ctx.fillStyle = '#665BAA'; // Color del texto    
        this.ctx.font = 'bold 48px Nunito, sans-serif'; // O usando "bold" para negrita
        const startWidth = this.ctx.measureText(start).width; // Obtener el ancho del texto
        // Dibujar el texto del título
        const startX = (this.canvas.width - startWidth) / 2; // Posición X para centrar
        this.ctx.fillText(start, 1420, 100); // Dibujar el título centrado
*/
        this.Boton12345 = new Boton('Start', 1400, 1558, 50, 130,this.ctx,this.canvas);
        this.Boton12345.drawBoton(35,5,'#7CFFDC','#10D4A3');
        
////////////////////////////////////////////////////////////////////////////////
       
        //RECUADROS HUECOS 
        this.drawRoundedHollowRectangle(70,150,450,720,20,5,'#A69BD2','transparent');
        this.drawRoundedHollowRectangle(590,150,450,720,20,5,'#A69BD2','transparent');
        this.drawRoundedHollowRectangle(1110,150,450,720,20,5,'#A69BD2','transparent');
        
        

        // Instrucciones
        this.ctx.font = 'bold 40px Nunito, sans-serif';
        this.ctx.fillStyle = '#665BAA'; // Color de las instrucciones
        //this.ctx.fillText('Número de líneas', 130, 230);
        /*this.ctx.fillStyle = '#160654';
        this.ctx.fillText('4', 200, 410);
        this.ctx.fillText('5', 200, 550);
        this.ctx.fillText('6', 200, 670);
        this.ctx.fillText('7', 200, 790);*/

        //Numeros de Linea
           
        this.dibujarNumeroLinea4(this.seleccionNumLinea == 4);
        this.dibujarNumeroLinea5(this.seleccionNumLinea == 5);
        this.dibujarNumeroLinea6(this.seleccionNumLinea == 6);
        this.dibujarNumeroLinea7(this.seleccionNumLinea == 7);

        // fichas Android
        if (this.seleccionFichaAndroid == 1) {
            this.dibujarFichaAndroid1(true);
            this.dibujarFichaAndroid2(false);
            this.dibujarFichaAndroid3(false);
        } else if (this.seleccionFichaAndroid == 2) {
            this.dibujarFichaAndroid1(false);
            this.dibujarFichaAndroid2(true);
            this.dibujarFichaAndroid3(false);
        } else if (this.seleccionFichaAndroid == 3) {
            this.dibujarFichaAndroid1(false);
            this.dibujarFichaAndroid2(false);
            this.dibujarFichaAndroid3(true);
        }
            
               
        // FICHAS APPLE
        if (this.seleccionFichaApple == 1) {
            this.dibujarFichaApple1(true);
            this.dibujarFichaApple2(false);
            this.dibujarFichaApple3(false);
        } else if (this.seleccionFichaApple == 2) {
            this.dibujarFichaApple1(false);
            this.dibujarFichaApple2(true);
            this.dibujarFichaApple3(false);
        } else if (this.seleccionFichaApple == 3) {
            this.dibujarFichaApple1(false);
            this.dibujarFichaApple2(false);
            this.dibujarFichaApple3(true);
        }


        this.ctx.fillStyle = '#1CA626';
        //this.ctx.fillText('Alias Android', 680, 230);
        //this.ctx.fillText('Ficha Android', 660, 460);

        this.ctx.fillStyle = '#157EE1';
        //this.ctx.fillText('Alias Apple', 1220, 230);
        //this.ctx.fillText('Ficha Apple', 1200, 460);

    }

    drawRoundedHollowRectangle(x, y, width, height, radius, borderWidth, borderColor, fillColor) {
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
        this.ctx.stroke(); // Dibujar el borde
    }

    dibujarNumeroLinea4(seleccionada){
        this.imageNumLinea4 = new Image();
        this.imageNumLinea4.src = 'images/imagenes_juego/numero-4.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageNumLinea4.onload = () => {
            //this.drawMenu(); // Dibuja el menú después de cargar la imagen
            this.ctx.drawImage(this.imageNumLinea4, this.numLineaX, this.numLinea4Y,
                 this.numLineaDiametro, this.numLineaDiametro);
            // Dibuja un borde rojo alrededor de la imagen
            if(seleccionada){
                // Dibuja un borde rojo alrededor de la imagen
                this.ctx.beginPath();
                this.ctx.arc(
                    this.numLineaX + this.numLineaDiametro / 2, // Centro X (la mitad del diámetro)
                    this.numLinea4Y + this.numLineaDiametro / 2, // Centro Y (la mitad del diámetro)
                    (this.numLineaDiametro / 2) + 8, // Radio (la mitad del diámetro de la imagen más el grosor del borde)
                    0, // Ángulo de inicio (en radianes)
                    2 * Math.PI // Ángulo final (completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }


        };
    };

    dibujarNumeroLinea5(seleccionada){
       
    this.imageNumLinea5 = new Image();
    this.imageNumLinea5.src = 'images/imagenes_juego/numero-5.png'; // Ruta de la imagen
    // Esperar a que la imagen se cargue para dibujar
    this.imageNumLinea5.onload = () => {
        //this.drawMenu(); // Dibuja el menú después de cargar la imagen
        this.ctx.drawImage(this.imageNumLinea5, this.numLineaX, this.numLinea5Y, this.numLineaDiametro, this.numLineaDiametro);
    
            // Dibuja un borde rojo alrededor de la imagen
            if(seleccionada){
                // Dibuja un borde rojo alrededor de la imagen
                this.ctx.beginPath();
                this.ctx.arc(
                    this.numLineaX + this.numLineaDiametro / 2, // Centro X (la mitad del diámetro)
                    this.numLinea5Y + this.numLineaDiametro / 2, // Centro Y (la mitad del diámetro)
                    (this.numLineaDiametro / 2) + 8, // Radio (la mitad del diámetro de la imagen más el grosor del borde)
                    0, // Ángulo de inicio (en radianes)
                    2 * Math.PI // Ángulo final (completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }


        };
    };


    dibujarNumeroLinea6(seleccionada){
       
        this.imageNumLinea6 = new Image();
        this.imageNumLinea6.src = 'images/imagenes_juego/numero-6.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageNumLinea6.onload = () => {
            //this.drawMenu(); // Dibuja el menú después de cargar la imagen
            this.ctx.drawImage(this.imageNumLinea6, this.numLineaX, this.numLinea6Y, this.numLineaDiametro, this.numLineaDiametro);
        
                // Dibuja un borde rojo alrededor de la imagen
                if(seleccionada){
                    // Dibuja un borde rojo alrededor de la imagen
                    this.ctx.beginPath();
                    this.ctx.arc(
                        this.numLineaX + this.numLineaDiametro / 2, // Centro X (la mitad del diámetro)
                        this.numLinea6Y + this.numLineaDiametro / 2, // Centro Y (la mitad del diámetro)
                        (this.numLineaDiametro / 2) + 8, // Radio (la mitad del diámetro de la imagen más el grosor del borde)
                        0, // Ángulo de inicio (en radianes)
                        2 * Math.PI // Ángulo final (completo)
                    );
                    this.ctx.lineWidth = 10; // Grosor del borde
                    this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                    this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
                }
            };
        };

    dibujarNumeroLinea7(seleccionada){
    
        this.imageNumLinea7 = new Image();
        this.imageNumLinea7.src = 'images/imagenes_juego/numero-7.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageNumLinea7.onload = () => {
            //this.drawMenu(); // Dibuja el menú después de cargar la imagen
            this.ctx.drawImage(this.imageNumLinea7, this.numLineaX, this.numLinea7Y, this.numLineaDiametro, this.numLineaDiametro);
        
                // Dibuja un borde rojo alrededor de la imagen
                if(seleccionada){
                    // Dibuja un borde rojo alrededor de la imagen
                    this.ctx.beginPath();
                    this.ctx.arc(
                        this.numLineaX + this.numLineaDiametro / 2, // Centro X (la mitad del diámetro)
                        this.numLinea7Y + this.numLineaDiametro / 2, // Centro Y (la mitad del diámetro)
                        (this.numLineaDiametro / 2) + 8, // Radio (la mitad del diámetro de la imagen más el grosor del borde)
                        0, // Ángulo de inicio (en radianes)
                        2 * Math.PI // Ángulo final (completo)
                    );
                    this.ctx.lineWidth = 10; // Grosor del borde
                    this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                    this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
                }
            };
        };


    seleccionarNumLinea() {
        // Función que maneja el evento
        const manejarMouseDown = (e) => {
            let numLineaRadius = this.numLineaDiametro / 2;
    
            if (this.evaluarClick(e.offsetX, e.offsetY, this.numLineaX, this.numLinea4Y, numLineaRadius)) {
                this.seleccionNumLinea = 4;
                this.drawMenu();
                this.dibujarNumeroLinea4(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.numLineaX, this.numLinea5Y, numLineaRadius)) {
                this.seleccionNumLinea = 5;
                this.drawMenu();
                this.dibujarNumeroLinea5(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.numLineaX, this.numLinea6Y, numLineaRadius)) {
                this.seleccionNumLinea = 6;
                this.drawMenu();
                this.dibujarNumeroLinea6(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.numLineaX, this.numLinea7Y, numLineaRadius)) {
                this.seleccionNumLinea = 7;
                this.drawMenu();
                this.dibujarNumeroLinea7(true);
            }
        };
    
        // Guardamos la referencia de la función manejadora para poder eliminarla más tarde
        this.manejadorMouseDown = manejarMouseDown;
    
        // Agregar el event listener
        this.canvas.addEventListener("mousedown", this.manejadorMouseDown);
    }

    eliminarEventListener() {
        // Eliminar el event listener
        this.canvas.removeEventListener("mousedown", this.manejadorMouseDown);
    }




    dibujarFichaAndroid1(seleccionada) {
        this.imageAndroid1 = new Image();
        this.imageAndroid1.src = 'images/imagenes_juego/android.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageAndroid1.onload = () => {
            // Dibuja la imagen de la ficha
            this.ctx.drawImage(this.imageAndroid1, this.fichaAndroidX, this.fichaAndroid1Y, this.fichaAndroidDiametro, this.fichaAndroidDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAndroidX + this.fichaAndroidDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaAndroid1Y + this.fichaAndroidDiametro / 2, // Centro Y
                    this.fichaAndroidDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    
    dibujarFichaAndroid2(seleccionada) {
        this.imageAndroid2 = new Image();
        this.imageAndroid2.src = 'images/imagenes_juego/android3.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageAndroid2.onload = () => {
            // Dibuja la imagen de la ficha
            this.ctx.drawImage(this.imageAndroid2, this.fichaAndroidX, this.fichaAndroid2Y, this.fichaAndroidDiametro, this.fichaAndroidDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAndroidX + this.fichaAndroidDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaAndroid2Y + this.fichaAndroidDiametro / 2, // Centro Y
                    this.fichaAndroidDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 8; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    
    dibujarFichaAndroid3(seleccionada) {
        this.imageAndroid3 = new Image();
        this.imageAndroid3.src = 'images/imagenes_juego/android4.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageAndroid3.onload = () => {
            // Dibuja la imagen de la ficha
            this.ctx.drawImage(this.imageAndroid3, this.fichaAndroidX, this.fichaAndroid3Y, this.fichaAndroidDiametro, this.fichaAndroidDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAndroidX + this.fichaAndroidDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaAndroid3Y + this.fichaAndroidDiametro / 2, // Centro Y
                    this.fichaAndroidDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    

    seleccionarFichaAndroid() {
        // Función que maneja el evento mousedown
        const manejarMouseDownFichaAndroid = (e) => {
            let fichaAndroidRadius = this.fichaAndroidDiametro / 2;
    
            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAndroidX, this.fichaAndroid1Y, fichaAndroidRadius)) {
                this.seleccionFichaAndroid = 1;
                this.imgAndroidElegida = this.imageAndroid1.src;
                this.drawMenu();
                this.dibujarFichaAndroid1(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAndroidX, this.fichaAndroid2Y, fichaAndroidRadius)) {
                this.seleccionFichaAndroid = 2;
                this.imgAndroidElegida = this.imageAndroid2.src;
                this.drawMenu();
                this.dibujarFichaAndroid2(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAndroidX, this.fichaAndroid3Y, fichaAndroidRadius)) {
                this.seleccionFichaAndroid = 3;
                this.imgAndroidElegida = this.imageAndroid3.src;
                this.drawMenu();
                this.dibujarFichaAndroid3(true);
            }
        };
    
        // Guardamos la referencia de la función manejadora para poder eliminarla más tarde
        this.manejadorMouseDownFichaAndroid = manejarMouseDownFichaAndroid;
    
        // Agregar el event listener
        this.canvas.addEventListener("mousedown", this.manejadorMouseDownFichaAndroid);
    }
    
    eliminarEventListenerFichaAndroid() {
        // Eliminar el event listener
        this.canvas.removeEventListener("mousedown", this.manejadorMouseDownFichaAndroid);
    }

    dibujarFichaApple1(seleccionada) {
        this.imageApple1 = new Image();
        this.imageApple1.src = 'images/imagenes_juego/apple.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageApple1.onload = () => {
            // Dibuja la imagen de la ficha
            console.log("COORDENADA this.fichaApple1Y "+ this.fichaApple1Y);
            this.ctx.drawImage(this.imageApple1, this.fichaAppleX, this.fichaApple1Y, this.fichaAppleDiametro, this.fichaAppleDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAppleX + this.fichaAppleDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaApple1Y + this.fichaAppleDiametro / 2, // Centro Y
                    this.fichaAppleDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    
    dibujarFichaApple2(seleccionada) {
        this.imageApple2 = new Image();
        this.imageApple2.src = 'images/imagenes_juego/apple2.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageApple2.onload = () => {
            // Dibuja la imagen de la ficha
            this.ctx.drawImage(this.imageApple2, this.fichaAppleX, this.fichaApple2Y, this.fichaAppleDiametro, this.fichaAppleDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAppleX + this.fichaAppleDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaApple2Y + this.fichaAppleDiametro / 2, // Centro Y
                    this.fichaAppleDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    
    dibujarFichaApple3(seleccionada) {
        this.imageApple3 = new Image();
        this.imageApple3.src = 'images/imagenes_juego/apple3.png'; // Ruta de la imagen
        // Esperar a que la imagen se cargue para dibujar
        this.imageApple3.onload = () => {
            // Dibuja la imagen de la ficha
            this.ctx.drawImage(this.imageApple3, this.fichaAppleX, this.fichaApple3Y, this.fichaAppleDiametro, this.fichaAppleDiametro);
    
            // Si la ficha está seleccionada, dibuja un borde rojo alrededor
            if (seleccionada) {
                this.ctx.beginPath();
                this.ctx.arc(
                    this.fichaAppleX + this.fichaAppleDiametro / 2, // Centro X (la mitad del diámetro de la ficha)
                    this.fichaApple3Y + this.fichaAppleDiametro / 2, // Centro Y
                    this.fichaAppleDiametro / 2 + 8, // Radio (la mitad del diámetro de la ficha)
                    0, // Ángulo de inicio
                    2 * Math.PI // Ángulo final (un círculo completo)
                );
                this.ctx.lineWidth = 10; // Grosor del borde
                this.ctx.strokeStyle = 'red'; // Color del borde (rojo)
                this.ctx.stroke(); // Dibuja el borde alrededor de la imagen
            }
        };
    }
    


    seleccionarFichaApple() {
        // Función que maneja el evento mousedown
        const manejarMouseDownFichaApple = (e) => {
            let fichaAppleRadius = this.fichaAppleDiametro / 2;

            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAppleX, this.fichaApple1Y, fichaAppleRadius)) {
                this.seleccionFichaApple = 1;
                this.imgAppleElegida = this.imageApple1.src;
                this.drawMenu();
                this.dibujarFichaApple1(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAppleX, this.fichaApple2Y, fichaAppleRadius)) {
                this.seleccionFichaApple = 2;
                this.imgAppleElegida = this.imageApple2.src;
                this.drawMenu();
                this.dibujarFichaApple2(true);
            }
            if (this.evaluarClick(e.offsetX, e.offsetY, this.fichaAppleX, this.fichaApple3Y, fichaAppleRadius)) {
                this.seleccionFichaApple = 3;
                this.imgAppleElegida = this.imageApple3.src;
                this.drawMenu();
                this.dibujarFichaApple3(true);
            }
        };

        // Guardamos la referencia de la función manejadora para poder eliminarla más tarde
        this.manejadorMouseDownFichaApple = manejarMouseDownFichaApple;

        // Agregar el event listener
        this.canvas.addEventListener("mousedown", this.manejadorMouseDownFichaApple);
    }

    eliminarEventListenerFichaApple() {
        // Eliminar el event listener
        this.canvas.removeEventListener("mousedown", this.manejadorMouseDownFichaApple);
    }

    evaluarClick(mouseX, mouseY,positionX ,positionY,radius) {

        let _x = Number(positionX + radius - mouseX);
        let _y = Number(positionY + radius - mouseY);

        // Calcular si el punto está dentro del círculo usando la fórmula de la distancia
        let resultado = (Math.sqrt((_x * _x) + (_y * _y)) < (40));
       
        return resultado; // Retornar true o false según si el punto está dentro del círculo

    }

    seleccionarStart() {
        // Definimos la función que manejará el evento mousedown
        const manejarMouseDownStart = (e) => {
            let inicioX = 1398;
            let inicioY = 45;
            let finX = 1398 + 160;
            let finY = 45 + 80;
            let inputAliasAndroid = document.querySelector('#input-alias-android');
            let inputAliasApple = document.querySelector('#input-alias-apple');
            let tituloSeleccionar = document.querySelector('#titulo-seleccionar');
            let numLineas = document.querySelector('#id-lineas');
            let aliasAndroid = document.querySelector('#id-alias-android');
            let aliasApple = document.querySelector('#id-alias-apple');
            let fichasAndroid = document.querySelector('#id-fichas-android');
            let fichasApple = document.querySelector('#id-fichas-apple');
    
            // Hago invisibles los HTML
            let presionoStart = this.evaluarClickRectangulo(e.offsetX, e.offsetY, inicioX, finX, inicioY, finY);
    
            if (presionoStart) {
                console.log(" numLinea: " + this.seleccionNumLinea)
                console.log(" ficha Android: " + this.seleccionFichaAndroid);
                console.log(" ficha Apple: " + this.seleccionFichaApple);
                if ((this.seleccionNumLinea != 0) && (this.seleccionFichaAndroid != 0) && (this.seleccionFichaApple != 0)) {
                    inputAliasAndroid.style.display = 'none';
                    inputAliasApple.style.display = 'none';
                    tituloSeleccionar.style.display = 'none';
                    numLineas.style.display = 'none';
                    aliasAndroid.style.display = 'none';
                    aliasApple.style.display = 'none';
                    fichasAndroid.style.display = 'none';
                    fichasApple.style.display = 'none';
    
                    if (inputAliasAndroid.value == "") {
                        inputAliasAndroid.value = "Android";
                    }
                    if (inputAliasApple.value == "") {
                        inputAliasApple.value = "Apple";
                    }
    
                    // Aquí es donde haces el paso al juego
                    console.log(" numLinea: " + this.seleccionNumLinea)
                    console.log(" ficha Android: " + this.seleccionFichaAndroid);
                    console.log(" ficha Apple: " + this.seleccionFichaApple);
                    console.log("N° imagen Android: " + this.seleccionFichaAndroid + " URL imagen Android: " + this.imgAndroidElegida);
                    console.log("N° imagen Android: " + this.seleccionFichaApple + " URL imagen apple: " + this.imgAppleElegida);
                    console.log("Alias Android: " + inputAliasAndroid.value);
                    console.log("Alias Apple: " + inputAliasApple.value);
    
                    this.j1 = new Juego(this.seleccionNumLinea, inputAliasAndroid.value, this.imgAndroidElegida,
                        inputAliasApple.value, this.imgAppleElegida, this.canvas, this.ctx);
    
                    this.seleccionNumLinea = 4;
                    this.imgAndroidElegida = 'images/imagenes_juego/android.png';
                    this.imgAppleElegida = 'images/imagenes_juego/apple.png';
                    this.seleccionFichaAndroid = 1;
                    this.seleccionFichaApple = 1;
                    this.eliminarEventListener();
                    this.eliminarEventListenerFichaAndroid();
                    this.eliminarEventListenerFichaApple();
                    this.eliminarEventListenerStart();
                }
            }
        };
    
        // Guardamos la referencia a la función manejadora para poder eliminarla más tarde
        this.manejadorMouseDownStart = manejarMouseDownStart;
    
        // Agregar el event listener
        this.canvas.addEventListener("mousedown", this.manejadorMouseDownStart);
    }

    eliminarEventListenerStart() {
        // Eliminar el event listener
        this.canvas.removeEventListener("mousedown", this.manejadorMouseDownStart);
    }
    

    evaluarClickRectangulo(x, y, inicioX, finX, inicioY, finY) {
        // Verificamos si x está dentro de los límites del rectángulo
        const dentroX = x >= inicioX && x <= finX;
        
        // Verificamos si y está dentro de los límites del rectángulo
        const dentroY = y >= inicioY && y <= finY;
        
        // Retornamos true si está dentro de ambos límites
        return dentroX && dentroY;
    }

        
}

document.addEventListener('DOMContentLoaded', () => {

    let canvas3 = document.querySelector("#idCanvas");
    let ctx3 = canvas3.getContext('2d');


    let mj = new MenuJuego(canvas3);
    console.log("Cargó el menu Juego");
    
        let btnAyuda = document.querySelector('#btn-ayuda');
        btnAyuda.style.display = 'none';

        let btnReseña = document.querySelector('#btn-reseña');
        btnReseña.style.display = 'none';        

        let btnGaleria = document.querySelector('#btn-galeria');
        btnGaleria.style.display = 'none';

        //let inputAliasAndroid = document.querySelector('#input-alias-android');
        //let inputAliasApple = document.querySelector('#input-alias-apple');
        //inputAliasAndroid.style.display = 'none';
        //inputAliasApple.style.display = 'none';

        /*let ctx = canvas.getContext('2d');

        let j1 = new Juego(4, 'Pepe Grillo', 'img/android.png', 'Manzanita', 'img/apple.png', canvas, ctx);
    */
   
});

