class Tablero{

    constructor(numLinea,ctx){

        this.numLinea = numLinea;
        
        this.cantidadCasilleros = this.numLinea+3;
        
        //medida de cada lado del casillero
        this.ladoCasillero = 860/this.cantidadCasilleros;

        this.coordenadaInicial = new Coordenada(385,20);

        this.ctx = ctx;
        
        this.matriz = Array.from({ length: this.cantidadCasilleros }, 
            () => Array(this.cantidadCasilleros).fill(null));
        
            for (let j = 1; j < this.cantidadCasilleros; j++) { // cantidad de filas
                for (let i = 0; i < this.cantidadCasilleros; i++) { // cantidad de columnas
                    //posicion donde empieza la matriz a dibujarse
                    let x = this.coordenadaInicial.getX() + (i*this.ladoCasillero);
                    let y = this.coordenadaInicial.getY() + (j*this.ladoCasillero);
                    //constructor(x,y, lado, ctx)
                    let c = new Casillero(x,y,this.ladoCasillero,ctx);
                    this.matriz[j][i] = c;
                }
            }
            
    }

    vaciarTablero() {
        // Vaciar la matriz, reiniciando las referencias de cada casillero a null
        this.matriz = Array.from({ length: this.cantidadCasilleros }, 
            () => Array(this.cantidadCasilleros).fill(null));
        
        
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

    drawTablero(){
        for (let j = 1; j < this.cantidadCasilleros; j++) { // cantidad de filas
            for (let i = 0; i < this.cantidadCasilleros; i++) { // cantidad de columnas
                this.matriz[j][i].drawCasillero();
            }
        }

        let x = 377; // 385
        let y = 12 /*20*/ + this.ladoCasillero;
        let width = 16 + (this.ladoCasillero * this.cantidadCasilleros);
        let height = 16 + (this.ladoCasillero * (this.cantidadCasilleros - 1));

      // drawRectanguloRedondeado(x, y, width, height, radius, borderWidth, borderColor, fillColor)  
        this.drawRectanguloRedondeado(x, y, width, height, 30, 15, 'rgba(83,50,213, 1)', 'transparent');

    }

    setCasillero(x, y, jugador){
        if ((0 <= x < this.cantidadCasilleros) && (1 <= y < this.cantidadCasilleros) && ((jugador == 1) || (jugador == 2))) {

            this.matriz[x][y].setJugador(jugador);
            return true;
        }
        else{
            return false;
        }
    }

    resaltarPosicionGanador(fila,columna){
        this.matriz[fila][columna].resaltarFicha();
    }

    evaluarHover(x, y) {
        // Suponiendo que imgX e imgY son las coordenadas de la esquina superior izquierda del cuadrado
    
        let inicioCasilleroX = this.coordenadaInicial.getX();
        let finCasilleroX = inicioCasilleroX + this.ladoCasillero;
        let inicioCasilleroY = this.coordenadaInicial.getY() + this.ladoCasillero;
        let i = 0;
        while (i <= this.cantidadCasilleros - 1){
        // Verificar si el punto (x, y) está dentro del cuadrado
            if ((x >= inicioCasilleroX && x <= finCasilleroX ) && (y < inicioCasilleroY))
                return i;

            inicioCasilleroX = finCasilleroX + 1
            finCasilleroX = finCasilleroX + this.ladoCasillero;
            i++ ;
        }
        return -1;
    }

    /*drawHover(j) {

        let xInicial = this.coordenadaInicial.getX() + (this.ladoCasillero * j);
        let yInicial = this.coordenadaInicial.getY();
        
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Color semi-transparente
        this.ctx.fillRect(xInicial, yInicial, this.ladoCasillero, this.ladoCasillero); // Dibuja relleno del fondo

        this.ctx.strokeStyle = "rgba(73, 254, 206, 1)"; // Cambia el color según lo necesites
        this.ctx.lineWidth = 3; // Cambia el grosor del borde si es necesario
        this.ctx.strokeRect(xInicial, yInicial, this.ladoCasillero, this.ladoCasillero); // Dibuja el borde
 
        let i = this.hayCasilleroLibre(j)
        if (i >= 1) {
            this.matriz[i][j].drawCasilleroHover();
        }
    }*/

        drawHover(j) {
            let xInicial = this.coordenadaInicial.getX() + (this.ladoCasillero * j);
            let yInicial = this.coordenadaInicial.getY();
            let radius = 20; // Radio de los bordes redondeados
        
            // Dibujar el fondo con borde redondeado
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Color semi-transparente
            this.ctx.beginPath();
            this.ctx.moveTo(xInicial + radius, yInicial); // Empezamos en la esquina superior izquierda
            this.ctx.arcTo(xInicial + this.ladoCasillero, yInicial, xInicial + this.ladoCasillero, yInicial + this.ladoCasillero, radius); // Esquina superior derecha
            this.ctx.arcTo(xInicial + this.ladoCasillero, yInicial + this.ladoCasillero, xInicial, yInicial + this.ladoCasillero, radius); // Esquina inferior derecha
            this.ctx.arcTo(xInicial, yInicial + this.ladoCasillero, xInicial, yInicial, radius); // Esquina inferior izquierda
            this.ctx.arcTo(xInicial, yInicial, xInicial + radius, yInicial, radius); // Esquina superior izquierda
            this.ctx.closePath();
            this.ctx.fill(); // Rellenar el fondo
        
            // Dibujar el borde con borde redondeado
            this.ctx.strokeStyle = "rgba(73, 254, 206, 1)"; // Color del borde
            this.ctx.lineWidth = 3; // Grosor del borde
            this.ctx.beginPath();
            this.ctx.moveTo(xInicial + radius, yInicial); // Empezamos en la esquina superior izquierda
            this.ctx.arcTo(xInicial + this.ladoCasillero, yInicial, xInicial + this.ladoCasillero, yInicial + this.ladoCasillero, radius); // Esquina superior derecha
            this.ctx.arcTo(xInicial + this.ladoCasillero, yInicial + this.ladoCasillero, xInicial, yInicial + this.ladoCasillero, radius); // Esquina inferior derecha
            this.ctx.arcTo(xInicial, yInicial + this.ladoCasillero, xInicial, yInicial, radius); // Esquina inferior izquierda
            this.ctx.arcTo(xInicial, yInicial, xInicial + radius, yInicial, radius); // Esquina superior izquierda
            this.ctx.closePath();
            this.ctx.stroke(); // Dibujar el borde
        
            // Llamar a la función adicional si hay casillero libre
            let i = this.hayCasilleroLibre(j);
            if (i >= 1) {
                this.matriz[i][j].drawCasilleroHover();
            }
        }

    hayCasilleroLibre (j) {

        let i = this.cantidadCasilleros - 1;
        while ((i >= 1) && this.matriz[i][j].ocupado()) {
            i--;
        }
        if (i >= 1) {
            return i;
        }
        else {
            return -1;
        }
    }

    colocarFicha(fila, columna, ficha, turnoJugador){
        
        if (!this.matriz[fila][columna].ocupado()){

            this.matriz[fila][columna].setFicha(ficha, turnoJugador);
            return fila; // Retorna la fila donde coloca la ficha. Si no colocó la ficha, retorna -1
        }
        else {
            return -1;
        }
    }
///////////////////////////METODOS EVALUAR GANADOR/////////////////////////////////////

posicionEsValida (fila, columna) {
    return ((1 <= fila) && (fila < this.cantidadCasilleros) &&
    (0 <= columna) && (columna < this.cantidadCasilleros));
}

evaluarRecursivo (fila, columna, jugador, sentido) {
    
    if (this.posicionEsValida(fila, columna)) {
        if (this.matriz[fila][columna].getJugador() == jugador) {
            console.log("this.matriz[fila][columna].getJugador(): "+ this.matriz[fila][columna].getJugador());
            console.log("jugador: "+jugador);
            let filaR;
            let columnaR;
            switch (sentido) {
                case "arriba":
                    console.log("ARRIBA");
                    filaR = fila - 1;
                    columnaR = columna;
                    break;
                case "abajo":
                    console.log("ABAJO");
                    filaR = fila + 1;
                    columnaR = columna;
                    break;
                case "izquierda":
                    console.log("IZQUIERDA");
                    filaR = fila;
                    columnaR = columna - 1;
                    break;
                case "derecha":
                    console.log("DERECHO");
                    filaR = fila;
                    columnaR = columna + 1;
                    break;
                case "superiorIzquierda":
                    filaR = fila - 1;
                    columnaR = columna - 1;
                    break;
                case "superiorDerecha":
                    console.log("SUPERIOR DERECHA");
                    filaR = fila - 1;
                    columnaR = columna + 1;
                    break;
                case "inferiorIzquierda":
                    console.log("INFERIOR IZQUIERDA");
                    filaR = fila + 1;
                    columnaR = columna - 1;
                    break;
                case "inferiorDerecha":
                    console.log("INFERIOR DERECHA");
                    filaR = fila + 1;
                    columnaR = columna + 1;
                    break;            
                default:
                    // Console.log("El sentido NO coincide");
                    break;
                }
            let resultado = this.evaluarRecursivo(filaR, columnaR, jugador, sentido);
            if (resultado.length != 0) {
                return (resultado.concat([[fila,columna]]));
            }
            else {
                return (new Array([fila,columna]));
            }
        }
    }
    return [];
}

concatenar(arreglo1, arreglo2) {

    if (arreglo1 == null) {
        return [arreglo2];
    }
    if (arreglo2 == null) {
        return [arreglo1];
    }
    let resultado = arreglo1.concat(arreglo2);
    
    console.log("Arreglo concatenado: ")
    resultado.forEach(elemento => {
        console.log("Elemento: "+elemento);
    });
    return resultado;
} 


evaluarGanador(fila, columna) {
    let jugador = this.matriz[fila][columna].getJugador();

    let resultado = this.concatenar(this.evaluarRecursivo(fila - 1, columna, jugador, "arriba"), [[fila, columna]]);
            
    resultado = this.concatenar(resultado, this.evaluarRecursivo(fila + 1, columna, jugador, "abajo"));
        
    console.log("Tamaño resultado: "+resultado.length );
        console.log("tamaño numlinea: "+this.numLinea);
    if (resultado.length >= this.numLinea) {
        
        return resultado;
    }

    resultado = this.concatenar(this.evaluarRecursivo(fila, columna - 1, jugador, "izquierda"), [[fila,columna]]);
    resultado = this.concatenar(resultado, this.evaluarRecursivo(fila, columna + 1, jugador, "derecha"));
    
    if (resultado.length >= this.numLinea) {
        console.log("Tamaño resultado: "+resultado.length );
        console.log("tamaño numlinea: "+this.numLinea);
        return resultado;
    }

    resultado = this.concatenar(this.evaluarRecursivo(fila - 1, columna - 1, jugador, "superiorIzquierda"), [[fila, columna]]);
    resultado = this.concatenar(resultado, this.evaluarRecursivo(fila + 1, columna + 1, jugador, "inferiorDerecha"));
    
    if (resultado.length >= this.numLinea) {
        console.log("Tamaño resultado: "+resultado.length );
        console.log("tamaño numlinea: "+this.numLinea);
        return resultado;
    }

    resultado = this.concatenar(this.evaluarRecursivo(fila - 1, columna + 1, jugador, "superiorDerecha"), [[fila,columna]]);
    resultado = this.concatenar(resultado, this.evaluarRecursivo(fila + 1, columna - 1, jugador, "inferiorIzquierda"));
    
    if (resultado.length >= this.numLinea) {
        console.log("Tamaño resultado: "+resultado.length );
        console.log("tamaño numlinea: "+this.numLinea);
        return resultado;
    }

    return (new Array());

}
///////////////////////////////////////////////////////////////////////////////////////    
}