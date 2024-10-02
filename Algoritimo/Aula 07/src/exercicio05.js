numeros = prompt("Entre com os números separados por vírgula:");
nros = numeros.split(",")
soma = 0;

for(contador = 0; contador < nros.length; contador++){
    console.log(nros[contador]);
    soma += parseInt(nros[contador]);
}
console.log("Somatório: "+soma);