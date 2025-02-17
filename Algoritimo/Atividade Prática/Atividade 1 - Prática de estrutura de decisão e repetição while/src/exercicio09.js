/*Exercício 9: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios menores que vinte ou maiores que 80*/

i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num < 20 || num > 80) {
        i = i + 1;
        console.log(num);
    }

}