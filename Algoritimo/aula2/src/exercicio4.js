numero = prompt("Entre com um número inteiro:");
numero2 = prompt("Entre com outro número inteiro:");

resultado = numero%numero2;

if (resultado == 0){
    console.log("O primeiro número é múltiplo do segundo número.");
}else{
    console.log("O primeiro número não é múltiplo do segundo número.");
}
console.log("Fim do programa.");