/*Exercício 7: Altere o código do Exercício 6 para imprimir na tela seis números que são múltiplos de três ou cinco.
Dica: use o operador lógico ou no teste do if.*/

let i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num % 3 === 0 || num % 5 === 0) {
        i = i + 1;
        console.log(num);
    }

}