import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma palavra: ", (palavra: string) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let qtdVogais = 0;
    let qtdConsoantes = 0;

    const palavraFormatada = palavra.toLowerCase();

    for (let letra of palavraFormatada) {
        if (/[a-z]/.test(letra)) {
            if (vogais.includes(letra)) {
                qtdVogais++;
            } else {
                qtdConsoantes++;
            }
        }
    }

    console.log(`Vogais: ${qtdVogais}`);
    console.log(`Consoantes: ${qtdConsoantes}`);

    rl.close();
});
