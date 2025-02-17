const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
};


const disciplina2 = {
    nome: "Algoritmos",
    carga: 80,
    pesos: {
        p1: 0.25,
        p2: 0.35,
        projeto: 0.4
    },

    notas: [8.2,7.5,9]
};

console.log("P1:",disciplina2.pesos.p1);
console.log("P2:",disciplina2.pesos.p2);