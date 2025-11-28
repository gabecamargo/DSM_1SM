import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventoRoutes from "./routes/eventoRoutes";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/evento")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

app.use("/eventos", eventoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});