const { exec } = require("child_process");

console.log("🗑️ Removendo coleção leituras...");

exec(`
mongosh <<EOF
use atividade_bd
db.leituras.drop()
EOF`, (err, stdout) => {
  if (err) return console.error("❌ Erro:", err);
  console.log(stdout);
  console.log("✅ Coleção removida!");
});
