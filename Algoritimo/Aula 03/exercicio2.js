x = prompt("Entre com o menor número:");
y = prompt("Entre com o maior número:");

x = parseInt(x);
y = parseInt(y);

while(x < y){
    console.log(x);
    x = x + 1;
}