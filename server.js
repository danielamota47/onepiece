const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Benfica1904kevin!",
    database: "onepiece"
});

db.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Ligado ao MySQL.");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});

app.get("/api/akumas/:nome", (req, res) => {

    const nome = req.params.nome;
    const sql = "SELECT * FROM akumas WHERE nome = ?";

    db.query(sql, [nome], (err, resultado) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(resultado);
    });

});