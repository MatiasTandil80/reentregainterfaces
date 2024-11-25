class DisplayJugador {
    constructor(urlImagen, alias, cantidadFichas, coordenada, ctx) {
        this.urlImagen = urlImagen;
        this.alias = alias;
        this.cantidadFichas = cantidadFichas;
        
        this.coordenada = coordenada;
        this.ancho = 140;
        this.alto = 180;
        this.radioEsquinas = 15;
        this.imgWidth = 80;
        this.imgHeight = 80;
        this.imgX = coordenada.getX() + (this.ancho / 2) - (this.imgWidth / 2);
        this.imgY = coordenada.getY() + 10; // Espacio desde la parte superior
        this.ctx = ctx;


        this.img = new Image();
        this.img.src = this.urlImagen;
        this.img.onload = () => {
            this.drawDisplayJugador(); // Dibuja cuando la imagen esté lista
        };

       
        ctx.fillStyle = "black"; // Color del punto
        ctx.beginPath(); // Comienza un nuevo camino
        ctx.arc((this.imgX + 40), (this.imgY + 40), 2, 0, Math.PI * 2); // Dibuja un círculo (radio de 1px)
        ctx.fill(); // Rellena el círculo

    }

    drawDisplayJugador() { // Tamaño por defecto de la imagen
        let ctx = this.ctx;
        let coordenada = this.coordenada;
        let radioEsquinas = this.radioEsquinas;
        let ancho = this.ancho;
        let alto = this.alto;
        let imgX = this.imgX;
        let imgY = this.imgY;
        let imgWidth = this.imgWidth;
        let imgHeight = this.imgHeight;

        // Dibujar el fondo con esquinas redondeadas
        ctx.fillStyle = 'rgba(104,67,255, 1)';
        ctx.beginPath();
        ctx.moveTo(coordenada.getX() + radioEsquinas, coordenada.getY());
        ctx.lineTo(coordenada.getX() + ancho - radioEsquinas, coordenada.getY());
        ctx.quadraticCurveTo(coordenada.getX() + ancho, coordenada.getY(), coordenada.getX() + ancho, coordenada.getY() + radioEsquinas);
        ctx.lineTo(coordenada.getX() + ancho, coordenada.getY() + alto - radioEsquinas);
        ctx.quadraticCurveTo(coordenada.getX() + ancho, coordenada.getY() + alto, coordenada.getX() + ancho - radioEsquinas, coordenada.getY() + alto);
        ctx.lineTo(coordenada.getX() + radioEsquinas, coordenada.getY() + alto);
        ctx.quadraticCurveTo(coordenada.getX(), coordenada.getY() + alto, coordenada.getX(), coordenada.getY() + alto - radioEsquinas);
        ctx.lineTo(coordenada.getX(), coordenada.getY() + radioEsquinas);
        ctx.quadraticCurveTo(coordenada.getX(), coordenada.getY(), coordenada.getX() + radioEsquinas, coordenada.getY());
        ctx.closePath();
        ctx.fill();

        // Dibujar el borde
        ctx.strokeStyle = 'rgba(189,170,254,255)';
        ctx.lineWidth = 10;
        ctx.stroke();

        // Cargar la imagen
        const img = new Image();
        img.src = this.urlImagen;
      
            ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight); // Cambiar tamaño aquí

            // Dibujar el alias
            ctx.fillStyle = 'rgba(189,170,254,255)';
            ctx.font = '24px Nunito';
            ctx.textAlign = 'center';
            ctx.fillText(this.alias, this.coordenada.getX() + (ancho / 2), imgY + imgHeight + 70); // Espacio bajo la imagen

            // Dibujar el contador
            ctx.fillText(this.cantidadFichas, this.coordenada.getX() + (ancho / 2), imgY + imgHeight + 40); // Espacio bajo el alias
       
    }

    getCentroImagen() {
        
        return new Coordenada(this.imgX, this.imgY)
    }

    evaluarClick(x, y) {
        let _x = Number(this.imgX + 40 - x);
        let _y = Number(this.imgY + 40 - y);
        //console.log("X:" + _x + " Y: "+ _y)

        // Calcular si el punto está dentro del círculo usando la fórmula de la distancia
        let resultado = (Math.sqrt((_x * _x) + (_y * _y)) < (40));
       
        return resultado; // Retornar true o false según si el punto está dentro del círculo

    }



}
