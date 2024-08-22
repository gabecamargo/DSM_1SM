x = 0;
z = 0;

while(x < 5){
    y = prompt("Entre com o número:");
    y = parseInt(y);
    
    z = z + y;
    x = x + 1;
}
console.log("Somatório: "+z);