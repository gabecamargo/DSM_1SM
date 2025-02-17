x = prompt("Entre com o menor número:");
y = prompt("Entre com o maior número:");

x = parseInt(x);
y = parseInt(y);

if (x > y){
    x2 = y;
    y2 = x;

    while(x2 < y2){
        console.log(x2);
        x2 = x2 + 1;
    }

}else{
    while(x < y){
        console.log(x);
        x = x + 1;
    }
}