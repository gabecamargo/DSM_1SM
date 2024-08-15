numero = prompt("Entre um número inteiro:");
numero = parseInt(numero);

resultado = numero%2;

if (resultado == 0){
    console.log("Esse número é par");
}else{
    console.log("Esse número é ímpar");
}
console.log("Fim do programa.");