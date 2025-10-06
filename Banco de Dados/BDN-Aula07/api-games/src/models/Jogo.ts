import mongoose, { Schema, Document } from "mongoose";

// Interface para garantir a tipagem do documento
export interface IJogo extends Document{
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}

// Definição do Schema do Mongoose
const JogoSchema: Schema = new Schema({
    nome: {type: String, required: true},
    categoria: {type: String, required: true},
    preco: {type: Number, required: true},
    estoque: {type: Number, required: true},
});

export default mongoose.model<IJogo>("Jogo", JogoSchema, "jogos");