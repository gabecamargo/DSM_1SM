const disciplina = {
    nome: "Algoritmos",
    carga: 80,

    pesos: {
        p1: 0.25,
        p2: 0.35,
        projeto: 0.4
    },

    notas: {
        p1: 8.2,
        p2: 7.5,
        projeto: 9
    }
}

const disciplina2 = {
    nome: "Algoritmos",
    carga: 80,
    
    pesos: [0.25,0.35,0.4],

    notas: {
        p1: 8.2,
        p2: 7.5,
        projeto: 9
    }
}

console.log("Peso P1:",disciplina2.pesos[0]);
console.log("Peso P2:",disciplina2.pesos[1]);