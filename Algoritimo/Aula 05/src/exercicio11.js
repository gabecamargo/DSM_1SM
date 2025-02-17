matriz = [
  [9,2,4],
  [6,5,7],
  [2,1,3]
]
 
linha = 0;
soma = 0;

while( linha < matriz.length ){
  coluna = 0;

  while( coluna < matriz[linha].length ){
    soma = soma + matriz[linha][coluna];
    coluna = coluna + 1;
  }

  linha = linha + 1;
}

console.log("Somatório:", soma);
