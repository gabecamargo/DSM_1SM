class Filme {

    titulo: string;
    duracao: number;

    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
    
}
