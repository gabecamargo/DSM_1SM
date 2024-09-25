function matriz(entrada){
    linha = 0;
    soma = 0;

    while(linha < entrada.length){
        coluna = 0;

        while(coluna < entrada[linha].length){
            soma = soma + entrada[linha][coluna];
            coluna = coluna + 1;
        }

        linha = linha + 1;
    }

    return soma;

}

numeros = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
  ]
  s = matriz(numeros)
  console.log('Somatório:', s)
  
  numeros = [
    [5,8,3,4],
    [9,7,2]
  ]
  s = matriz(numeros)
  console.log('Somatório:', s)