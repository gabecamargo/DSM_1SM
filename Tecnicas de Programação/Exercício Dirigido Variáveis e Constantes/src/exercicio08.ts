const salarioAtual: number = 3000;
const percentualReajuste: number = 10;

const valorReajuste: number = (salarioAtual * percentualReajuste) / 100;
const novoSalario: number = salarioAtual + valorReajuste;

console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
console.log(`Percentual de reajuste: ${percentualReajuste}%`);
console.log(`Valor do reajuste: R$ ${valorReajuste.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
