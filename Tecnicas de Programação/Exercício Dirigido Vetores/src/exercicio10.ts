const n = 3;

function aleatorio(): number {
    return Math.floor(Math.random() * 100 + 1);
}

const matrizOriginal: number[][] = [];
for (let i = 0; i < n; i++) {
    const linha: number[] = [];
    for (let j = 0; j < n; j++) {
        linha.push(aleatorio());
    }
    matrizOriginal.push(linha);
}

const matrizSomada: number[][] = [];

for (let i = 0; i < n; i++) {
    const novaLinha: number[] = [];
    for (let j = 0; j < n; j++) {
        const valorSomado = matrizOriginal[i][j] + matrizOriginal[0][j];
        novaLinha.push(valorSomado);
    }
    matrizSomada.push(novaLinha);
}

console.log("Matriz Original:");
console.table(matrizOriginal);

console.log("Matriz Somada com a 1ª linha:");
console.table(matrizSomada);
