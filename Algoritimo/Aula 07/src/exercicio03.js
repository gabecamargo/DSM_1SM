nros = [5,8,4,2,9,6,1,7,3];

soma = 0;
contador = 0;

while(contador <= nros.length-1){
    soma += nros[contador];
    contador += 1;
}
console.log("Somatório: " + soma);