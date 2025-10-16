[cite_start]

class Contato {
    nome: string;
    telefone: string;
    email: string;

    constructor(nome: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda {
    [cite_start]contatos: Contato[] = []; [cite: 102]

    [cite_start]adicionarContato(contato: Contato): void { [cite: 104]
        this.contatos.push(contato);
        console.log(`Contato "${contato.nome}" adicionado.`);
    }

    [cite_start]removerContato(contato: Contato): void { [cite: 105]
        const index = this.contatos.findIndex(c => c.nome === contato.nome);
        if (index > -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato "${contato.nome}" removido.`);
        } else {
            console.log(`Contato "${contato.nome}" não encontrado.`);
        }
    }
    
    listarContatos(): void {
        console.log("--- Lista de Contatos ---");
        if (this.contatos.length === 0) {
            console.log("Agenda vazia.");
            return;
        }
        this.contatos.forEach(c => {
            console.log(`Nome: ${c.nome}, Tel: ${c.telefone}, Email: ${c.email}`);
        });
    }
}

[cite_start]// --- Testes do Exercício 4 --- [cite: 109]
console.log("--- Executando Exercício 4: Agenda de Contatos ---");
const minhaAgenda = new Agenda();
const contato1 = new Contato("Carlos", "9999-8888", "carlos@email.com");
const contato2 = new Contato("Ana", "7777-6666", "ana@email.com");

minhaAgenda.adicionarContato(contato1);
minhaAgenda.adicionarContato(contato2);
minhaAgenda.listarContatos();

minhaAgenda.removerContato(contato1);
minhaAgenda.listarContatos();
console.log("--- Fim Exercício 4 ---\n");