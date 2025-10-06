const express = require("express");
const router = express.Router();
const Leitura = require("../models/Leitura");

// Listar todas as leituras
router.get("/", async (req, res) => {
    const leituras = await Leitura.find();
    res.json(leituras);
});

// Inserir nova leitura
router.post("/", async (req,res) => {
    const leitura = new Leitura(req.body);
    await leitura.save();
    res.status(201).json(leitura);
});

module.exports = router;