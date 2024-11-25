class Coordenada {
    
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    
        // Getter para x
        getX() {
            return this.x;
        }
    
        // Setter para x
        setX(valor) {
            this.x = valor;
        }
    
        // Getter para y
        getY() {
            return this.y;
        }
    
        // Setter para y
        setY(valor) {
            this.y = valor;
        }
        setCoordenada(coordenada) {
            this.setX(coordenada.getX());
            this.setY(coordenada.getY());
        }
    
        // Método para comparar dos coordenadas
        comparar(otraCoordenada) {
            return this.x === otraCoordenada.getX && this.y === otraCoordenada.getY;
        }
}