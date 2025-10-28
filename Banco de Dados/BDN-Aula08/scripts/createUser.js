const { exec } = require("child_process");

const DB_NAME = "atividade_bd";
const USER = "devAluno";
const PASS = "senha123";

console.log("👤 Criando usuário somente leitura...");

exec(`
mongosh <<EOF
use ${DB_NAME}
db.createUser({
  user: "${USER}",
  pwd: "${PASS}",
  roles: [{ role: "read", db: "${DB_NAME}" }]
})
EOF`, (err, stdout) => {
  if (err) return console.error("❌ Erro:", err);
  console.log(stdout);
  console.log("✅ Usuário criado com sucesso!");
});
