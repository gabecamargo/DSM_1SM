numeros = prompt("Entre com os números separados por vírgula:");
nros = numeros.split(",")

for(contador = 0; contador < nros.length; contador++){
    if(contador %2 == 0){
        console.log(nros[contador]);
    }
}