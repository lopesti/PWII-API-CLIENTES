const path = require("path");
const prisma = require("./config/prisma"); // Importação correta do seu config
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); // Ajuste o caminho do .env se necessário
const express = require("express");
const clienteRoutes = require("./routes/clienteRoutes"); // Nome da pasta em minúsculo
const { clearScreenDown } = require("readline");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API de clientes",
        versao: "1.0.0",
        endpoints: {
            ListarTodos: "GET /clientes",
            BuscarPorId: "GET /clientes/:id",
        }
    });
});

app.use("/clientes", clienteRoutes);

app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;clearScreenDown