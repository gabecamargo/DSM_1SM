x = prompt("Insira seu peso(Kg):");
y = prompt("Insira sua altura(m):");

x = parseFloat(x);
y = parseFloat(y);

z = x*y;

z = parseFloat(z);

if (z >= 40){
    console.log("Obesidade III(mórbida)");

}else{
    if(z >= 35 && z <= 39,9){
        console.log("Obesidade grau II(severa)");
    }else if(z >= 30 && z <= 34,9){
        console.log("Obesidade grau I");
    }else if (z >= 25 && z <= 29,9){
        console.log("Levemente acima do peso");
    }else if (z >= 18,6 && z <= 24,9){
        console.log("Peso ideal(parabéns)");
    }else{
        console.log("Abaixo do peso");
    }
}