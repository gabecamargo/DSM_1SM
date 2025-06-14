import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(parseInt(resposta));
        });
    });
}

async function executar() {
    const totalEleitores = await perguntar("Total de eleitores: ");
    const votosBrancos = await perguntar("Votos brancos: ");
    const votosNulos = await perguntar("Votos nulos: ");
    const votosValidos = await perguntar("Votos válidos: ");
    const votosCandidato = await perguntar("Votos recebidos pelo candidato: ");

    const votosValidosMaisBrancos = votosValidos + votosBrancos;
    const percentualVotacao = (votosCandidato / totalEleitores) * 100;
    const percentualParaEleicao = (votosCandidato / votosValidosMaisBrancos) * 100;

    console.log(`\nO candidato recebeu ${votosCandidato} votos.`);
    console.log(`Percentual sobre total de eleitores: ${percentualVotacao.toFixed(2)}%`);

    if (percentualParaEleicao > 10) {
        console.log("✅ O candidato FOI ELEITO (mais de 10% dos votos válidos + brancos).");
    } else {
        console.log("❌ O candidato NÃO foi eleito.");
    }

    rl.close();
}

executar();
