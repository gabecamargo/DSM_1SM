const mongoose = require("mongoose");

const USER = "devAluno";
const PASS = "senha123";

const uri = `mongodb://${USER}:${PASS}@127.0.0.1:27017/atividade_bd?authSource=atividade_bd`;

mongoose.connect(uri);

mongoose.connection.on("connected", () =>
  console.log("✅ Mongoose conectado com sucesso!")
);

mongoose.connection.on("disconnected", () =>
  console.log("❌ Mongoose desconectado!")
);

mongoose.connection.on("error", err =>
  console.error("🚨 Erro Mongoose:", err)
);
