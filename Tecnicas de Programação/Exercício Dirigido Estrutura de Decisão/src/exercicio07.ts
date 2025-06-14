import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarLado(pergunta: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(parseFloat(resposta));
        });
    });
}

async function executar() {
    const X = await perguntarLado("Digite o valor do lado X: ");
    const Y = await perguntarLado("Digite o valor do lado Y: ");
    const Z = await perguntarLado("Digite o valor do lado Z: ");

    const ehTriangulo = (X < Y + Z) && (Y < X + Z) && (Z < X + Y);

    if (!ehTriangulo) {
        console.log("❌ Os valores informados NÃO formam um triângulo.");
    } else {
        if (X === Y && Y === Z) {
            console.log("🔺 Triângulo Equilátero: todos os lados iguais.");
        } else if (X === Y || X === Z || Y === Z) {
            console.log("🔺 Triângulo Isósceles: dois lados iguais.");
        } else {
            console.log("🔺 Triângulo Escaleno: todos os lados diferentes.");
        }
    }

    rl.close();
}

executar();
