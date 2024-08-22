senha = "abc";
y = undefined;

while(y != senha){
    y = prompt("Entre com senha:");
    
    if (y != senha){
        console.log("Senha incorreta");
    }
}

if (y == senha){
    console.log("Acesso liberado.");
}