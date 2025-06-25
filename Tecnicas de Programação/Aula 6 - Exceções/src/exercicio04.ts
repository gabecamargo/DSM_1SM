class Pilha<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw Error("Pilha vazia");
    }
    return item;
  }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();

for (let i = 0; i < nomes.length; i++) {
  pilha.push(nomes[i]);
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
