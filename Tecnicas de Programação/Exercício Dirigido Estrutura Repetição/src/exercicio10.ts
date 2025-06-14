import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros: number[] = [];

function solicitarNumero() {
    if (numeros.length >= 10) {
        const menor = Math.min(...numeros);
        const maior = Math.max(...numeros);
        const soma = numeros.reduce((acc, val) => acc + val, 0);
        const ordenado = [...numeros].sort((a, b) => a - b);

        console.log("\n✅ Resultado final:");
        console.log("Números informados (ordenados):", ordenado);
        console.log("Menor número:", menor);
        console.log("Maior número:", maior);
        console.log("Soma dos números:", soma);

        rl.close();
        return;
    }

    rl.question(`Digite o ${numeros.length + 1}º número (entre 1 e 100, sem repetir): `, (input: string) => {
        const numero = parseInt(input);

        if (isNaN(numero) || numero < 1 || numero > 100) {
            console.log("❌ Número inválido. Deve ser um inteiro entre 1 e 100.");
        } else if (numeros.includes(numero)) {
            console.log("❌ Número repetido. Digite um número diferente.");
        } else {
            numeros.push(numero);
        }

        solicitarNumero();
    });
}

console.log("🔢 Digite 10 números inteiros entre 1 e 100 (sem repetir):");
solicitarNumero();
