# Projeto: Controle de Despesas (TypeScript + Node.js + MongoDB + Mongoose)

Atende aos requisitos do enunciado (CRUD completo, rota de somatório via aggregate, validações, data padrão, UI com lista/editar/excluir/total).

## Como executar

### 1) MongoDB
- Inicie o MongoDB local (mongodb://localhost:27017).
- Opcional: visualize no MongoDB Compass.

### 2) Backend
```bash
cd backend
cp .env.example .env    # ajuste ALLOW_ORIGIN conforme a origem do seu frontend
npm install
npm run dev             # usa tsx (ESM) e sobe em http://localhost:3000
```

### 3) Frontend
Abra `frontend/index.html` via um servidor estático (ex.: extensão Live Server do VSCode).
Se o Live Server abrir em `http://127.0.0.1:5500`, deixe no backend `.env`:
```
ALLOW_ORIGIN=http://127.0.0.1:5500
```

## Endpoints
- `GET /api/expenses` — lista despesas
- `GET /api/expenses/total` — retorna `{ total }`
- `POST /api/expenses` — body `{ description, amount, date? }`
- `PUT /api/expenses/:id` — atualiza campos
- `DELETE /api/expenses/:id` — exclui despesa

## Observações
- Valida campos vazios e valores negativos no backend e no frontend.
- Se a data não for informada, assume a data atual.
- O frontend formata valor (BRL) e data (dd/mm/aaaa) e recalcula o total após incluir/editar/excluir.
