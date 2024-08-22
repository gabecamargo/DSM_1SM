senha = "abc";
x = 0;
y = undefined;

while(y != senha && x < 3){
    y = prompt("Entre com senha:");

    if (y != senha){
        console.log("Senha incorreta");
        x = x + 1;
    }
}

if (y == senha){
    console.log("Acesso liberado.");

}else if (x >= 3){
    console.log("Excedeu o número de tentativas!");
}