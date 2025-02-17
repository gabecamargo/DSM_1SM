class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distancia(ponto: Ponto): number {
        const dx = this.x - ponto.x;
        const dy = this.y - ponto.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);

console.log("Distância:", a.distancia(b));