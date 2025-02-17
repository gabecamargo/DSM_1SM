/*Exercício 8: Altere o código do Exercício 7 para imprimir na tela seis números que são múltiplos de três ou cinco e que seja maior que 20.
Dica: use o operador lógico e no teste do if e agrupe as operações lógicas usando parênteses.*/

let i = 0;

while (i < 6) {
    let nro = Math.random();
    let num = Math.floor(nro * 100);

    if (num % 3 === 0 || num % 5 === 0) {
        if (num > 20){
            i = i + 1;
            console.log(num);
        }
        
    }

}