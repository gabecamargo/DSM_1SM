function inverte(nome){
    x = 0;
    final = "";

    while(x < nome.length){
        final = nome[x] + final;
        x = x + 1;
    }

    return final;
}

r = inverte("Pedro")
console.log("Invertido:", r)

r = inverte("Mariana")
console.log("Invertido:", r)