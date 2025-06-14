function gerarVetorAleatorio(): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.floor(Math.random() * 100 + 1));
    }
    return vetor;
}

const v1 = gerarVetorAleatorio();
const v2 = gerarVetorAleatorio();

const v3 = v1.concat(v2); 

console.log("Vetor v1:", v1);
console.log("Vetor v2:", v2);
console.log("Vetor v3 (v1 + v2):", v3);
