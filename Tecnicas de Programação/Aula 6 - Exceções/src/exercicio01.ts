function calcular(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('Os parâmetros precisam ser números');
}

try {
  console.log("Soma:", calcular('oi', 2));
} catch (erro: any) {
  console.error("Erro na primeira soma:", erro.message);
}

try {
  console.log("Soma:", calcular(1, 2));
} catch (erro: any) {
  console.error("Erro na segunda soma:", erro.message);
}

console.log("Fim do programa");