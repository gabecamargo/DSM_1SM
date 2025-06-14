const peso: number = 72; // kg
const altura: number = 1.75; // metros

const imc = peso / (altura ** 2);

let classificacao: string;

if (imc <= 18.5) {
    classificacao = "Abaixo do peso ideal.";
} else if (imc <= 24.9) {
    classificacao = "Dentro do peso ideal.";
} else if (imc <= 29.9) {
    classificacao = "Acima do peso ideal.";
} else if (imc <= 34.9) {
    classificacao = "Obesidade Grau I.";
} else if (imc <= 39.9) {
    classificacao = "Obesidade Grau II.";
} else {
    classificacao = "Obesidade Grau III.";
}

console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
