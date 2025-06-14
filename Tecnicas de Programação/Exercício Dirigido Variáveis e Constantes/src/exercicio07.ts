const totalEleitores: number = 1000;
const votosBrancos: number = 150;
const votosNulos: number = 100;
const votosValidos: number = 750;

const percentualBrancos: number = (votosBrancos / totalEleitores) * 100;
const percentualNulos: number = (votosNulos / totalEleitores) * 100;
const percentualValidos: number = (votosValidos / totalEleitores) * 100;

console.log(`Total de eleitores: ${totalEleitores}`);
console.log(`Votos brancos: ${votosBrancos} (${percentualBrancos.toFixed(2)}%)`);
console.log(`Votos nulos: ${votosNulos} (${percentualNulos.toFixed(2)}%)`);
console.log(`Votos válidos: ${votosValidos} (${percentualValidos.toFixed(2)}%)`);
