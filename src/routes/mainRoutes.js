// Acá nos falta express y el router
const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const controller = require('../controllers/mainControllers');

// Acá definimos las rutas
router.get('/', controller.index); 

// Acá exportamos el resultado
module.exports = router;   