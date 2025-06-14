import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o salário atual do funcionário (em R$): ", (entrada: string) => {
    const salario = parseFloat(entrada);
    
    if (isNaN(salario) || salario <= 0) {
        console.log("❌ Valor inválido. Digite um número maior que zero.");
        rl.close();
        return;
    }

    let percentualReajuste: number;

    if (salario <= 650) {
        percentualReajuste = 10;
    } else {
        percentualReajuste = 5;
    }

    const valorReajuste = (salario * percentualReajuste) / 100;
    const novoSalario = salario + valorReajuste;

    console.log(`\n💼 Salário original: R$ ${salario.toFixed(2)}`);
    console.log(`📈 Percentual de reajuste: ${percentualReajuste}%`);
    console.log(`💰 Novo salário com reajuste: R$ ${novoSalario.toFixed(2)}`);

    rl.close();
});
