/*Exercício 5: Altere o código do Exercício 4 para imprimir no console somente os números pares.
Dica: use a estrutura de decisão if.*/

let i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num % 2 === 0) {
        i = i + 1;
        console.log(num);
    }

}