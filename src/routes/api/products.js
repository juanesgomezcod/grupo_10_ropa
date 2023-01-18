const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get('/', productsAPIController.list);
//Detalle de una productos
router.get('/:id', productsAPIController.detail);
//Filtrar productos por precio. Puede colocar desde 1 hasta 10
router.get('/recomended/:precios', productsAPIController.recomended);
//Agregar una película
// router.post('/create', moviesAPIController.create);
//Modificar una película
// router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
// router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;