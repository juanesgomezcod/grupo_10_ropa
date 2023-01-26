// require
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// controller
const controller = require('../controllers/productControllers');

// Multer
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, process.cwd()+'/public/images/store')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

// Todos los productos
router.get('/store', controller.store);

//Barra de Busqueda
router.get("/search", controller.search);

//llamar un producto
router.get('/productDetail/:id', controller.productDetail);

//CREAR UN PRODUCTO
router.get('/newProduct', controller.create);
router.post('/store', upload.single("imagen"), controller.adicional)

//editar un producto
router.get('/edit/:id', controller.edit); 
router.patch('/edit/:id', upload.single("imagen"), controller.update); 

//borrar un producto
router.post('/delete/:id', controller.destroy); 


router.get('/productCart', controller.productCart);


module.exports = router;