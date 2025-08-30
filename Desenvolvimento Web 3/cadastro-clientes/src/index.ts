import express from "express";
import mongoose, { mongo } from "mongoose";
import path from "path";
import clienteRoutes from "./routes/clienteRoutes";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/cadastroDB")
    .then(() => console.log("Conectado ao MongoDB Compass."))
    .catch((erro) => console.log("Error ao conectar:", erro));

app.use("/clientes", clienteRoutes);

app.use(express.static(path.join(__dirname,"../public")));

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})
