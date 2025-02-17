numero1 = prompt("Insira o primeiro número:");
numero2 = prompt("Insira o segundo número:");
numero3 = prompt("Insira o terceiro número:");

if (numero1 <= numero2 && numero2 <= numero3){
    maior = numero3;

}else{
    if (numero1 <= numero2 && numero3 <= numero2){
        maior = numero2;
    }else{
        maior = numero1;
    }

}
console.log("O maior número é "+maior);