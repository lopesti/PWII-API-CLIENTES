const express = require('express');
const router = express.Router();
const ClienteController = require('../controller/ClienteController');

// Ajustado para os nomes corretos definidos no Controller:
router.get('/', ClienteController.ListarClientes);
router.get('/:id', ClienteController.BuscarClientePorId);
router.post('/', ClienteController.adicionarCliente);
router.put('/:id', ClienteController.atualizarCliente);
router.delete('/:id', ClienteController.deletarCliente);

module.exports = router;