/*Exercício 10: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios. Os números menores que 50 precisam ser ímpares e os maiores ou iguais a 50 precisam ser pares.*/

let i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num > 50 && num % 2 === 0) {
        i = i + 1;
        console.log(num);

    }else if (num < 50 && num % 2 === 1){
        i = i + 1;
        console.log(num);
    }

}