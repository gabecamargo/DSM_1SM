nome = prompt("Entre com o seu nome:");
contador = 0;

while(contador <= nome.length-1){
    if (contador %2 == 0){
        console.log(nome[contador]);
    }
    contador += 1;

}