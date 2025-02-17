/*Exercício 6: O programa do Exercício 5 imprime no console somente os números pares, ou seja, dificilmente teremos seis números sendo impresso no console. Altere o código do Exercício 5 para imprimir na tela seis números pares.
Dica: coloque a instrução i = i + 1 dentro do corpo da estrutura de decisão if.*/

let i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num % 2 === 0) {
        i = i + 1;
        console.log(num);
    }

}