class Casillero {

    constructor(x,y, lado, ctx){
        this.x = x;
        this.y = y;
        this.lado = lado;
        this.jugador = -1;
        this.ctx = ctx;
        this.ficha = null;
    }

    setJugador(jugador){
        let urlImage;
        this.jugador = jugador;
        if(this.jugador == 1 ){
            urlImage = 'Android.png';
        }
        if (this.jugador == 2 ){
            urlImage = 'Apple.png';
        }
        
        let coordenada = new Coordenada(this.x+(this.lado/2), this.y+(this.lado/2));
        this.ficha = new Ficha(coordenada, (this.lado*0.4), urlImage,this.ctx, 'lightblue');

    }

    setFicha(ficha, jugador){
        this.jugador = jugador;
        this.ficha = ficha;
        this.ficha.setCoordenada(new Coordenada(this.x+(this.lado/2), this.y+(this.lado/2)));
    }

    resaltarFicha(){
        this.ficha.setResaltado(true);
    }

    getPositionX(){
        return this.x;
    }

    getPositionY(){
        return this.y;
    }

    getJugador(){
        return this.jugador;
    }

    ocupado(){
        return (this.ficha != null);
    }

    drawCasillero(){

        this.ctx.fillStyle = "rgba(189, 170, 254, 1)"; // Color fondo 
        this.ctx.fillRect(this.x, this.y,this.lado, this.lado); // Dibuja relleno del fondo

        this.ctx.strokeStyle = "rgba(189, 170, 254, 1)"; // Cambia el color según lo necesites
        this.ctx.lineWidth = 1; // Cambia el grosor del borde si es necesario
        this.ctx.strokeRect(this.x, this.y, this.lado, this.lado); // Dibuja el borde
        
        if(this.ficha == null) {
            this.ctx.fillStyle = "rgba(83, 51, 212, 1)"; // Color circulo
            this.ctx.beginPath(); // Inicia un nuevo camino
            this.ctx.arc(this.x + this.lado / 2, this.y + this.lado / 2, this.lado*(0.4), 0, Math.PI * 2); // Dibuja el círculo
            this.ctx.fill(); // Rellena el círculo
        }else{
            
            this.ficha.dibujarFicha();
        }
    }
    
    drawCasilleroHover(){

        /*this.ctx.fillStyle = "rgba(200, 150, 100, 0.5)"; // Color semi-transparente
        this.ctx.fillRect(this.x, this.y,this.lado, this.lado); // Dibuja relleno del fondo

        this.ctx.strokeStyle = "black"; // Cambia el color según lo necesites
        this.ctx.lineWidth = 1; // Cambia el grosor del borde si es necesario
        this.ctx.strokeRect(this.x, this.y, this.lado, this.lado); // Dibuja el borde*/
        
        if(this.ficha == null) {
            console.log("Casillero esta libre");
            this.ctx.fillStyle = "rgba(73, 254, 206, 1)"; // Color hover circulo
            this.ctx.beginPath(); // Inicia un nuevo camino
            this.ctx.arc(this.x + this.lado / 2, this.y + this.lado / 2, this.lado*(0.4), 0, Math.PI * 2); // Dibuja el círculo
            this.ctx.fill(); // Rellena el círculo
        }else{
            
            this.ficha.dibujarFicha();
        }
    }


}