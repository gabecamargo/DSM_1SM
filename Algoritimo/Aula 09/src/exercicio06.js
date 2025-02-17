const contrato = {
    inicio: "01/02/1995",
    fim: "30/07/1997",
    tipo: "locação",
    valor: "123.45"
};

const contrato2 = {
    data: [
        {
            inicio: "01/02/1995",
            fim: "30/07/1997",
        }
    ],

    tipo: "locação",
    valor: "123.45"
};

console.log("Início:", contrato2.data[0].inicio);
console.log("Fim:",contrato2.data[0].fim);