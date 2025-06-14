import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function executar() {
    const nome = await perguntar("Digite o nome do funcionário: ");
    const categoriaInput = await perguntar("Digite a categoria (letra): ");
    const salarioInput = await perguntar("Digite o salário atual (R$): ");

    const categoria = categoriaInput.trim().toUpperCase();
    const salario = parseFloat(salarioInput);
    let percentual = 0;

    if (isNaN(salario) || salario <= 0) {
        console.log("❌ Salário inválido.");
        rl.close();
        return;
    }

    switch (categoria) {
        case 'A':
        case 'C':
        case 'F':
        case 'H':
            percentual = 10;
            break;

        case 'B':
        case 'D':
        case 'E':
        case 'I':
        case 'J':
        case 'T':
            percentual = 15;
            break;

        case 'K':
        case 'R':
            percentual = 25;
            break;

        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'S':
            percentual = 35;
            break;

        case 'U':
        case 'V':
        case 'X':
        case 'Y':
        case 'W':
        case 'Z':
            percentual = 50;
            break;

        default:
            console.log("❌ Categoria inválida.");
            rl.close();
            return;
    }

    const aumento = salario * (percentual / 100);
    const novoSalario = salario + aumento;

    console.log("\n📋 Dados do funcionário:");
    console.log(`Nome: ${nome}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Salário atual: R$ ${salario.toFixed(2)}`);
    console.log(`Percentual de reajuste: ${percentual}%`);
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);

    rl.close();
}

executar();
