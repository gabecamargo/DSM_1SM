entradas = [9,2,4,5,8]
saidas = [3,5,2,7,4]

x = 0;

while (x < entradas.length){
    if(entradas[x] > saidas[x]){
        console.log(entradas[x]);
    }else{
        console.log(saidas[x]);
    }

    x = x + 1;
}