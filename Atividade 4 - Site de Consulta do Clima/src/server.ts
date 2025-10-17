import express from "express";
import dotenv from "dotenv";
import path from "path";
import weatherRoutes from "./routes/weatherRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../views")));
app.use(express.json());
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
