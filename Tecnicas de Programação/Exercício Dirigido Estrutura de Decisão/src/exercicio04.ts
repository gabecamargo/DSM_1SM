import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (input: string) => {
    const idade = parseInt(input);

    let categoria: string;

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida. Por favor, digite um número inteiro positivo.");
        rl.close();
        return;
    }

    if (idade <= 10) {
        categoria = "Criança";
    } else if (idade <= 13) {
        categoria = "Pré-Adolescente";
    } else if (idade <= 17) {
        categoria = "Adolescente";
    } else if (idade <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    console.log(`Você tem ${idade} anos e se enquadra na categoria: ${categoria}`);
    rl.close();
});
