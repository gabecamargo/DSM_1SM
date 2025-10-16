class CarrinhoDeCompras {
    [cite_start]private itens: string[] = []; [cite: 37]

    adicionarItem(item: string): void {
        this.itens.push(item);
        console.log(`"${item}" foi adicionado ao carrinho.`);
    }

    removerItem(item: string): void {
        const index = this.itens.indexOf(item);
        if (index > -1) {
            this.itens.splice(index, 1);
            console.log(`"${item}" foi removido do carrinho.`);
        } else {
            console.log(`"${item}" não encontrado no carrinho.`);
        }
    }

    imprimir(): void {
        console.log("Itens no carrinho:");
        if (this.itens.length === 0) {
            console.log("O carrinho está vazio.");
            return;
        }
        this.itens.forEach(item => console.log(`- ${item}`));
    }
}

console.log("--- Executando Exercício 2: Carrinho de Compras ---");
[cite_start]const carrinho = new CarrinhoDeCompras(); [cite: 52]
[cite_start]carrinho.adicionarItem("Camiseta"); [cite: 53]
[cite_start]carrinho.adicionarItem("Calça");    [cite: 54]
[cite_start]carrinho.adicionarItem("Meia");     [cite: 55]
[cite_start]carrinho.removerItem("Camiseta"); [cite: 56]
carrinho.imprimir();
console.log("--- Fim Exercício 2 ---\n");