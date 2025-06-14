const nota1: number = 7.5;
const nota2: number = 6.0;
const nota3: number = 8.2;

const media: number = (nota1 + nota2 + nota3) / 3;

let situacao: string;

if (media >= 6) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
console.log(`Média final: ${media.toFixed(2)}`);
console.log(`Situação: ${situacao}`);
