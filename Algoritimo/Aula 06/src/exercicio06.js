function somatorio(lista){
    x = 0;
    soma = 0;
    
    while(x < lista.length){
        soma = lista[x] + soma;
        x = x + 1;
    }

    return soma;

}

numeros = [8,3,4,7,5]
s = somatorio(numeros)
console.log("Somatório:", s)

numeros = [5,4,3]
s = somatorio(numeros)
console.log("Somatório:", s)
