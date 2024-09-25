function inverter(lista){
    x = lista.length-1;

    while(x >= 0){
        console.log(x, ":", lista[x]);
        x = x - 1;

    }

}

console.log("Lista:")
numeros = [8,3,4,7,5]
inverter(numeros)

console.log("\nLista:")
numeros = [5,4,3]
inverter(numeros)