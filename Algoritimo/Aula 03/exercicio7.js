x = 0;
maior = 0;

while(x < 5){
    y = prompt("Entre com o número:");
    y = parseInt(y);
    
    if (maior < y){
        maior = y;
    }

    x = x + 1;
}
console.log("Maior valor: "+maior);