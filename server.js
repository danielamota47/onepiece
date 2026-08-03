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
    if (err) {
        console.log(err);
        return;
    }

    console.log("Ligado ao MySQL.");
});

//importar as rotas
const akumasRoutes = require("./routes/akumas")(db);
const personagensRoutes = require("./routes/characters")(db);
const tripulacoesRoutes = require("./routes/crews")(db);

//usar as rotas
app.use("/api/akumas", akumasRoutes);
app.use("/api/characters", personagensRoutes);
app.use("/api/crews",tripulacoesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});