const { exec } = require("child_process");

console.log("📤 Exportando coleção leituras para JSON...");

exec(
  `mongoexport --db atividade_bd --collection leituras --out leituras.json`,
  (err, stdout) => {
    if (err) return console.error("❌ Erro ao exportar:", err);
    console.log(stdout);
    console.log("✅ Exportação finalizada!");
  }
);
