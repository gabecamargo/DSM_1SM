[cite_start]

class Item {
    descricao: string;
    valor: number;
    quantidade: number;

    [cite_start]constructor(descricao: string, valor: number, quantidade: number) { [cite: 70]
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}


class Carrinho {
    [cite_start]itens: Item[] = []; [cite: 62]

    [cite_start]adicionarItem(item: Item): void { [cite: 63]
        this.itens.push(item);
        console.log(`Item adicionado: ${item.quantidade}x ${item.descricao}`);
    }

    removerItem(item: Item): void {
        const index = this.itens.findIndex(i => i.descricao === item.descricao);
        if (index > -1) {
            this.itens.splice(index, 1);
            console.log(`Item removido: ${item.descricao}`);
        }
    }

    [cite_start]calcularTotal(): number { [cite: 65, 73]
        [cite_start]// Lógica para calcular o total dos itens no carrinho [cite: 75]
        return this.itens.reduce((total, item) => total + (item.valor * item.quantidade), 0);
    }
}

class Pagamento {
    [cite_start]processarPagamento(total: number, forma: string): void { [cite: 79]
        [cite_start]// Lógica para processar o pagamento [cite: 80]
        [cite_start]console.log(`Pagamento de R$ ${total.toFixed(2)} em ${forma}, processado com sucesso!`); [cite: 81]
    }
}

[cite_start]// --- Testes do Exercício 3 --- [cite: 87]
console.log("--- Executando Exercício 3: Carrinho e Pagamento ---");
[cite_start]const carrinhoc = new Carrinho(); [cite: 88]
[cite_start]let item = new Item("Camiseta", 50, 2); [cite: 89]
[cite_start]carrinhoc.adicionarItem(item); [cite: 90]
item = new Item("Calça", 130, 1);
carrinhoc.adicionarItem(item);
item = new Item("Meia", 20, 3);
carrinhoc.adicionarItem(item);

[cite_start]const total = carrinhoc.calcularTotal(); [cite: 91]
[cite_start]console.log(`Total do carrinho: R$ ${total.toFixed(2)}`); [cite: 94]

[cite_start]const pagamento = new Pagamento(); [cite: 97]
[cite_start]pagamento.processarPagamento(total, "dinheiro"); [cite: 98]
console.log("--- Fim Exercício 3 ---\n");