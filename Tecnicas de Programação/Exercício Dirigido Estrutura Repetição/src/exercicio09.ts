import * as readline from 'readline';

function ehPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function fatoresPrimosUnicos(n: number): number[] {
    const fatores: number[] = [];
    let divisor = 2;
    while (n > 1) {
        if (n % divisor === 0) {
            if (!fatores.includes(divisor)) {
                fatores.push(divisor);
            }
            n /= divisor;
        } else {
            divisor++;
        }
    }
    return fatores;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro: ", (entrada: string) => {
    const numero = parseInt(entrada);

    if (isNaN(numero) || numero < 1) {
        console.log("Por favor, digite um número inteiro válido e maior que zero.");
    } else if (ehPrimo(numero)) {
        console.log(`${numero} é um número primo.`);
    } else {
        const fatores = fatoresPrimosUnicos(numero);
        console.log(`${numero} NÃO é primo.`);
        console.log(`Fatores primos únicos: ${fatores.join(", ")}`);
    }

    rl.close();
});
