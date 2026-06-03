const prisma = require("../config/prisma");

const ListarClientes = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        return res.status(200).json({
            sucesso: true,
            total: clientes.length,
            dados: clientes,
        });
    } catch (error) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar", erro: error.message });
    }
};

const BuscarClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({ where: { id: Number(id) } });

        if (!cliente) return res.status(404).json({ sucesso: false, mensagem: "Cliente não encontrado" });
        return res.status(200).json({ sucesso: true, dados: cliente });
    } catch (error) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar", erro: error.message });
    }
};

const adicionarCliente = async (req, res) => {
    try {
        const { nome, telefone, endereco } = req.body;
        const novoCliente = await prisma.cliente.create({
            data: { nome, telefone, endereco }
        });
        return res.status(201).json({ sucesso: true, dados: novoCliente });
    } catch (error) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao criar", erro: error.message });
    }
};

const atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, telefone, endereco } = req.body;
        const clienteAtualizado = await prisma.cliente.update({
            where: { id: Number(id) },
            data: { nome, telefone, endereco }
        });
        return res.status(200).json({ sucesso: true, dados: clienteAtualizado });
    } catch (error) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao atualizar", erro: error.message });
    }
};

const deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.cliente.delete({ where: { id: Number(id) } });
        return res.status(200).json({ sucesso: true, mensagem: "Cliente removido" });
    } catch (error) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao deletar", erro: error.message });
    }
};

module.exports = { ListarClientes, BuscarClientePorId, adicionarCliente, atualizarCliente, deletarCliente };