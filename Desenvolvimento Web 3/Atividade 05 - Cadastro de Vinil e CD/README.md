# Cadastro de Vinil e CD (CRUD)

Stack: Node.js + Express + TypeScript + MongoDB (Mongoose) + Frontend estático (HTML/JS).

## Pré-requisitos
- Node.js 18+
- MongoDB local (ou Atlas)
- MongoDB Compass (opcional, para visualizar os dados)

## Como rodar
1. Instale dependências:
   ```bash
   npm i
   ```
2. Copie `.env.example` para `.env` e ajuste `MONGODB_URI` se necessário.
3. Inicie:
   ```bash
   npm run dev
   ```
4. Abra http://localhost:3000 para usar o frontend.
5. API base: `http://localhost:3000/api/discos`

## Endpoints
- `GET /api/discos`
- `GET /api/discos/:id`
- `POST /api/discos`
- `PUT /api/discos/:id`
- `DELETE /api/discos/:id`

## Modelo
```ts
{
  titulo: string;
  artista: string;
  ano: number;
  genero: string;
  formato: 'vinil' | 'cd';
  preco: number;
}
```
