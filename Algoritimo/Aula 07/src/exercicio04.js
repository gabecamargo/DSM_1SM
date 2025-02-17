numeros = prompt("Entre com os números separados por vírgula:");
nros = numeros.split(",")

for(contador = 0; contador < nros.length; contador++){
    console.log(nros[contador]);
}  