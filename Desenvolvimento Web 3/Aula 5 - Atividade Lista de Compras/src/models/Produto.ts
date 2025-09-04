import mongoose, {Schema, Document} from "mongoose";
export interface IProduto extends Document {
    produto:string;
    valor:number;
}

const ProdutoSchema:Schema = new Schema({
    produto: { type:String, required:true },
    valor: {type:Number, required:true },
});

export default mongoose.model<IProduto>("shoppingitems", ProdutoSchema);