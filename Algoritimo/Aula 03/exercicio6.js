x = 0;
menor = 0;

while(x < 5){
    y = prompt("Entre com o número:");
    y = parseInt(y);
    
    if (menor > y){
        menor = y;
    }

    x = x + 1;
}
console.log("Menor valor: "+menor);