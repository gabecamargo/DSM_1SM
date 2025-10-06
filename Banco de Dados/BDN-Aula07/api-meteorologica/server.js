const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Conexão com o MongoDB local
mongoose.connect("mongodb://1270.0.0.1:27017/estacao_meteorologica")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.error("Erro ao conectar",err));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

const leituraRoutes = require("./routes/leituras");
app.use("/leituras",leituraRoutes);