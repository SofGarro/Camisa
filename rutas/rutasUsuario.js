const express = require('express');
const router = express.Router();
const UsuarioController = require('../controladores/usuarioControlador');
router.get('', UsuarioController.obtenerUsuarios);
router.get('/:id', UsuarioController.obtenerusuarioxid);
router.post('/', UsuarioController.crearUsuario);
router.put('/:id', UsuarioController.modificarUsuario);
router.delete('/:id', UsuarioController.eliminarUsuario);
router.post('/login', UsuarioController.login);

module.exports = router;