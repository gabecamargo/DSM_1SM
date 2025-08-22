import express from "express";
import carroRoutes from "./routes/carroRoutes";
import pessoaRoutes from "./routes/pessoaRoutes";
import pessoaPorCarroRoutes from "./routes/pessoaPorCarroRoutes";

const app = express();
app.use(express.json());

app.use("/api", carroRoutes);
app.use("/api", pessoaRoutes);
app.use("/api", pessoaPorCarroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
