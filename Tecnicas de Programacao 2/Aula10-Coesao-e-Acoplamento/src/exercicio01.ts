class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    sacar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }
    
    getSaldo(): number {
        return this.saldo;
    }
}

class Cliente {
    nome: string;
    cpf: string;
    nasc: Date;
    nomemae: string;
    conta: ContaBancaria;

    constructor(nome: string, cpf: string, nasc: Date, nomemae: string, conta: ContaBancaria) {
        this.nome = nome;
        this.cpf = cpf;
        this.nasc = nasc;
        this.nomemae = nomemae;
        this.conta = conta;
    }
}

// --- Testes do Exercício 1 ---
console.log("--- Executando Exercício 1: Conta Bancária e Cliente ---");
const minhaConta = new ContaBancaria(); [cite_start]

[cite_start]
const cliente = new Cliente(
    "Meu Nome Completo",
    "123.456.789-00",
    new Date("1990-01-01"),
    "PrimeiroNomeMae",
    minhaConta
);

console.log(`Cliente: ${cliente.nome}`);
console.log(`Saldo inicial: R$ ${cliente.conta.getSaldo().toFixed(2)}`);

cliente.conta.depositar(100.00);[cite_start]
cliente.conta.sacar(50.00);
cliente.conta.sacar(60.00);[cite_start]

console.log(`Saldo final: R$ ${cliente.conta.getSaldo().toFixed(2)}`);
console.log("--- Fim Exercício 1 ---\n");