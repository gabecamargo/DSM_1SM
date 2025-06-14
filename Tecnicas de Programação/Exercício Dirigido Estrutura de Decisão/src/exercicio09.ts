import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const meses: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

rl.question("Digite um número de 1 a 12 para representar o mês: ", (input: string) => {
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 1 || numero > 12) {
        console.log("❌ Erro: o número deve estar entre 1 e 12.");
    } else {
        const nomeMes = meses[numero - 1]; // índice começa do 0
        console.log(`📅 Mês escolhido: ${nomeMes}`);
    }

    rl.close();
});
