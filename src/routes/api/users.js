const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los actores
router.get('/', usersAPIController.list);
//Detalle del usuario
router.get('/:id', usersAPIController.detail);


module.exports = router;