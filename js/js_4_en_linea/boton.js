class Boton {

    constructor(nombre, inicioX, finX, inicioY, finY,ctx,canvas){

        this.nombre = nombre;        
        this.inicioX = inicioX;
        this.inicioY = inicioY;

        this.finX = finX;
        this.finY = finY;

        this.canvas = canvas;
        this.ctx = ctx;
    }

    drawBoton(radius, borderWidth, borderColor, fillColor) {
        let x = this.inicioX;
        let y = this.inicioY;
        let width = this.finX - this.inicioX;
        let height = this.finY - this.inicioY;
    
        // RECTÁNGULO BOTÓN
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
    
        // TEXTO BOTÓN
        this.ctx.fillStyle = '#665BAA'; // Color del texto    
        this.ctx.font = 'bold 40px Nunito, sans-serif'; // Estilo de la fuente
        const startY = y + (height / 2) + (40 / 3); // Ajustar la posición vertical para que el texto esté centrado

        // Establecer el alineamiento del texto a 'center'
        this.ctx.textAlign = 'center'; // Asegura que el texto se dibuje centrado

        // Calcular el centro en X y usarlo como startX
        const startX = x + width / 2;  // Centrar el texto horizontalmente dentro del botón

        this.ctx.fillText(this.nombre, startX, startY); // Dibujar el texto centrado
    }
    
    evaluarCLickEnbotones(x,y){
       /* console.log("CLICK X: "+x);
        console.log("CLICK Y: "+y);
        console.log("INICIO BOTON X: "+this.inicioX);
        console.log("INICIO BOTON Y: "+this.inicioY);
        console.log("FIN BOTON X: "+this.finX);
        console.log("FIN BOTON Y: "+this.finY);*/
        return ((x >= this.inicioX && x <= this.finX ) && (y  >= this.inicioY)
                            && (y <= this.finY));            
    }


}