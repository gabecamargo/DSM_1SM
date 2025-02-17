x = prompt("Insira sua temperatura corporal(ºC):")
x = parseFloat(x);

if (x >= 41){
    console.log("Hipertemia.");

}else{
    if (x < 41 && x >= 39,6){
        console.log("Febre alta.");
    }else if (x <= 39,5 && x >= 37,8){
        console.log("Febre.");
    }else if (x <= 37,7 && x >= 35,1){
        console.log("Normal.");
    }else{
        console.log("Hipotermia.");
    }
}
console.log("Fim do programa.");