const numeros: number[] = [];

for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100 + 1));
}

numeros.sort((a, b) => a - b);

console.log("Vetor ordenado em ordem crescente:", numeros);
