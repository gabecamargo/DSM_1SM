import Disco from '../models/discoModel.js';
export async function listar(req, res) {
    const itens = await Disco.find().sort({ createdAt: -1 });
    res.json(itens);
}
export async function obter(req, res) {
    const { id } = req.params;
    const item = await Disco.findById(id);
    if (!item)
        return res.status(404).json({ message: 'Não encontrado' });
    res.json(item);
}
export async function criar(req, res) {
    try {
        const novo = await Disco.create(req.body);
        res.status(201).json(novo);
    }
    catch (err) {
        res.status(400).json({ message: 'Erro de validação', error: err.message });
    }
}
export async function atualizar(req, res) {
    const { id } = req.params;
    try {
        const item = await Disco.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!item)
            return res.status(404).json({ message: 'Não encontrado' });
        res.json(item);
    }
    catch (err) {
        res.status(400).json({ message: 'Erro ao atualizar', error: err.message });
    }
}
export async function remover(req, res) {
    const { id } = req.params;
    const del = await Disco.findByIdAndDelete(id);
    if (!del)
        return res.status(404).json({ message: 'Não encontrado' });
    res.status(204).send();
}
