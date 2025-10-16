[cite_start]

class AutenticacaoDeUsuario {
    private usuarios: Map<string, string> = new Map();

    registrarUsuario(usuario: string, senha: string): void {
        if (this.usuarios.has(usuario)) {
            console.log(`Usuário "${usuario}" já existe.`);
        } else {
            this.usuarios.set(usuario, senha);
            console.log(`Usuário "${usuario}" registrado com sucesso.`);
        }
    }

    autenticarUsuario(usuario: string, senha: string): boolean {
        if (this.usuarios.has(usuario) && this.usuarios.get(usuario) === senha) {
            return true;
        }
        return false;
    }
}

[cite_start]// --- Testes do Exercício 5 --- [cite: 113]
console.log("--- Executando Exercício 5: Autenticação de Usuário ---");
[cite_start]const autenticacao = new AutenticacaoDeUsuario(); [cite: 114]
[cite_start]autenticacao.registrarUsuario("alice", "senha123"); [cite: 115]
[cite_start]autenticacao.registrarUsuario("bob", "outrasenha"); [cite: 116]

[cite_start]let usuarioAutenticado = autenticacao.autenticarUsuario("alice", "senha123"); [cite: 117]
[cite_start]if (usuarioAutenticado) { [cite: 118]
    [cite_start]console.log("Usuário autenticado com sucesso!"); [cite: 119]
} else {
    [cite_start]console.log("Falha na autenticação do Usuário!"); [cite: 121]
}

usuarioAutenticado = autenticacao.autenticarUsuario("bob", "senhaerrada");
if (usuarioAutenticado) {
    console.log("Usuário autenticado com sucesso!");
} else {
    [cite_start]console.log("Falha na autenticação do Usuário!"); [cite: 121]
}
console.log("--- Fim Exercício 5 ---");