// Gerar vetor com 30 números aleatórios entre 1 e 100
const numeros: number[] = [];

for (let i = 0; i < 30; i++) {
    numeros.push(Math.floor(Math.random() * 100 + 1));
}
console.log("Números gerados:", numeros);

let maior = numeros[0];
let menor = numeros[0];
let posMaior = 0;
let posMenor = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
        posMaior = i;
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
        posMenor = i;
    }
}

console.log(`Maior número: ${maior} (posição ${posMaior})`);
console.log(`Menor número: ${menor} (posição ${posMenor})`);
