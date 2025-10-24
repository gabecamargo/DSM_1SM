import mongoose, { Schema } from 'mongoose';
const DiscoSchema = new Schema({
    titulo: { type: String, required: true, trim: true },
    artista: { type: String, required: true, trim: true },
    ano: { type: Number, required: true, min: 1800, max: 2100 },
    genero: { type: String, required: true, trim: true },
    formato: { type: String, enum: ['vinil', 'cd'], required: true },
    preco: { type: Number, required: true, min: 0 }
}, { timestamps: { createdAt: true, updatedAt: true } });
export default mongoose.model('Disco', DiscoSchema);
