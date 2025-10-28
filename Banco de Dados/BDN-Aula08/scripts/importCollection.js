const { exec } = require("child_process");

console.log("📥 Importando dados...");

exec(
  `mongoimport --db atividade_bd --collection leituras --file leituras.json`,
  (err, stdout) => {
    if (err) return console.error("❌ Erro ao importar:", err);
    console.log(stdout);
    console.log("✅ Coleção restaurada!");
  }
);
