const express = require("express");
const clientesRoutes = requere("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

// Rota raiz:

app.get("/", (req, res) =>{
    res.json({
        mensagem:"API de clientes",
        Versao: "1.0.0",
        endpoints: {
            listarTodos: "GET /clientes",
            buscarPorId:"GET /clientes/:id",
        }
    })
})

app.use("/clientes", clientesRoutes);
/*app.use(req, res) => {
res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
    })
}*/

app.use((req, res) =>{
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT,()=> {
    console.log(`servidor rodando na porta ${PORT}`)
})


module.exports = app;
