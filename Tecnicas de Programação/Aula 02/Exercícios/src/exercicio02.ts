class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return this.base * this.altura;
    }

    perimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

const meuRetangulo = new Retangulo(5, 10);

console.log("Área do retângulo:", meuRetangulo.area());
console.log("Perímetro do retângulo:", meuRetangulo.perimetro());