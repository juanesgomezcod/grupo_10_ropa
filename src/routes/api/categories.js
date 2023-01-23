const express = require('express');
const router = express.Router();
const categoriesAPIController = require('../../controllers/api/categoriesAPIController');

//Rutas
//Listado de Categorias
router.get('/', categoriesAPIController.list);


module.exports = router;