pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]

x = 0;
result = 0;
soma = 0;

while(x < pesos.length){
    result = pesos[x]*notas[x];
    soma = soma + result;
    x = x + 1
}

console.log("Nota final: "+soma)