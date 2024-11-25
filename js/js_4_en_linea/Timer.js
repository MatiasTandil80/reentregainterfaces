class Timer {
    constructor(tiempoRestante, ctx) {
        this.tiempoRestanteInicial = tiempoRestante;
        this.tiempoRestante = tiempoRestante;
        this.ctx = ctx;

        // Calcular minutos y segundos inicialmente
        this.minutos = Math.floor(this.tiempoRestante / 60);
        this.segundos = this.tiempoRestante % 60;

        // Iniciar el intervalo
        this.intervalo = setInterval(() => {
         

            // Calcular minutos y segundos
            this.minutos = Math.floor(this.tiempoRestante / 60);
            this.segundos = this.tiempoRestante % 60;

            // Dibujar el tiempo en el canvas
            this.dibujarReloj();

            // Reducir el tiempo restante
            this.tiempoRestante--;
        }, 1000); // Actualiza cada segundo
    }

    // Método para dibujar un rectángulo redondeado
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
        this.ctx.stroke(); // Dibujar el borde
    }

    // Método para dibujar el reloj en el canvas
    dibujarReloj() {
        // Limpiar el canvas antes de dibujar
        this.ctx.clearRect(50, 50, 200, 100); // Limpiar el área del reloj

        // Dibujar el fondo del reloj
        this.drawRectanguloRedondeado(50, 50, 200, 100, 30, 10, 'rgba(189,170,254,255)', 'rgba(104,67,255,255)');

        // Dibujar el tiempo
        this.ctx.fillStyle = 'rgba(189,170,254,255)'; // Color del texto
        this.ctx.font = 'bold 50px Nunito, sans-serif'; // Estilo de la fuente
        this.ctx.textAlign = 'center'; // Alinear el texto al centro
        this.ctx.fillText(`${String(this.minutos).padStart(2, '0')}:${String(this.segundos).padStart(2, '0')}`, 151, 117); // Dibujar el tiempo
    }

    relojFuncionando(){
        return (this.tiempoRestante == this.tiempoRestanteInicial);
    }


    reiniciarReloj(){
        this.tiempoRestante = this.tiempoRestanteInicial;
    }


    detenerReloj() {
        clearInterval(this.intervalo);  // Detiene el intervalo
        console.log("Reloj detenido");
    }
}
