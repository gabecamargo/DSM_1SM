const cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];

cidades.push("Curitiba");
cidades.push("Fortaleza");
cidades.push("Salvador");

console.log("Lista de cidades:");
for (let i = 0; i < cidades.length; i++) {
    console.log(`Cidade ${i + 1}: ${cidades[i]}`);
}
