import mongoose, { Schema, Document } from 'mongoose';

export interface IDisco extends Document {
  titulo: string;
  artista: string;
  ano: number;
  genero: string;
  formato: 'vinil' | 'cd';
  preco: number;
  createdAt: Date;
}

const DiscoSchema = new Schema<IDisco>(
  {
    titulo: { type: String, required: true, trim: true },
    artista: { type: String, required: true, trim: true },
    ano: { type: Number, required: true, min: 1800, max: 2100 },
    genero: { type: String, required: true, trim: true },
    formato: { type: String, enum: ['vinil', 'cd'], required: true },
    preco: { type: Number, required: true, min: 0 }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model<IDisco>('Disco', DiscoSchema);
