const numeros: number[] = [25, 78, 13, 56, 89, 42];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior número do vetor:", maior);
