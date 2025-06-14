const vetor: number[] = [];

for (let i = 0; i < 5; i++) {
    const valor = Math.floor(Math.random() * 100 + 1);
    vetor.push(valor);
}

console.log("Valores gerados:", vetor);
