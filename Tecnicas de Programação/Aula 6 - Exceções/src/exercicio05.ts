class Pilha<T> {
  private items: T[] = [];

  push(item: T): void {
    if (this.items.length == 5) {
      throw new Error("Pilha cheia");
    }
    this.items.push(item);
  }

  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw new Error("Pilha vazia");
    }
    return item;
  }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();

for (let i = 0; i < nomes.length; i++) {
  try {
    pilha.push(nomes[i]);
  } catch (erro: any) {
    if (erro.message === "Pilha cheia") {
      console.warn(`Erro ao adicionar "${nomes[i]}": ${erro.message}`);
    } else {
      throw erro;
    }
  }
}

try {
  while (true) {
    const item = pilha.pop();
    console.log(item);
  }
} catch (erro: any) {
  if (erro.message === "Pilha vazia") {
    console.log("Fim do programa");
  } else {
    throw erro;
  }
}
