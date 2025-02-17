class Numero {
    nros: number[] = [];

    add(nro: number): void {
        this.nros.push(nro);
    }

    sum(): number {
        let s = 0;
        for (let i = 0; i < this.nros.length; i++) {
            s += this.nros[i];
        }
        return s;
    }

    max(): number {
        let maior = this.nros[0];
        for (let i = 1; i < this.nros.length; i++) {
            if (this.nros[i] > maior) {
                maior = this.nros[i];
            }
        }
        return maior;
    }
}

const numeros = new Numero();
numeros.add(10);
numeros.add(25);
numeros.add(7);
numeros.add(42);
numeros.add(18);

console.log("Somatório:", numeros.sum());
console.log("Maior valor:", numeros.max());
