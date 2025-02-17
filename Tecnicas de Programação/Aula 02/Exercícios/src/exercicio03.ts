class Aleatorio {
    get(): number {
        return Math.floor(Math.random() * 100 + 1);
    }
}

const gerador = new Aleatorio();

for (let i = 0; i < 5; i++) {
    console.log("Número aleatório:", gerador.get());
}
