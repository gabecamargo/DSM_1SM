class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }

    ultima(): string {
        return this.charAt(this.length - 1);
    }
}

const frase = new Texto("Boa noite");

console.log("Quantidade de letras:", frase.length);
console.log("Primeira letra:", frase.primeira());
console.log("Última letra:", frase.ultima());
console.log("Texto em minúsculo:", frase.toLowerCase());
