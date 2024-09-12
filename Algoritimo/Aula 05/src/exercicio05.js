numeros = [8,3,4,7,5,6,4]
x = 0

while(x < numeros.length){
    if (numeros[x]%2 == 1){
        console.log("Ímpar: ",numeros[x]);
    }

    x = x + 1;
}