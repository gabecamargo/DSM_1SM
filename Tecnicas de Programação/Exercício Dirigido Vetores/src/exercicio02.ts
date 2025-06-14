const vetor: number[] = [];

for (let i = 0; i < 5; i++) {
    vetor[i] = Math.floor(Math.random() * 100 + 1);
}

console.log("Valores gerados:", vetor);

console.log("Quarto elemento do vetor:", vetor[3]);
