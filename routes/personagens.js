const express = require("express");

module.exports = (db) => {

    const router = express.Router();
    router.get("/:nome", (req, res) => {
        const nome = req.params.nome;
        const sql = `SELECT * FROM personagens WHERE LOWER(nome) LIKE ?`;

        db.query(sql, [`%${nome.toLowerCase()}%`], (err, resultado) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(resultado);
        });
    });

    return router;
};