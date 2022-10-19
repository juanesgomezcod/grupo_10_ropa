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
        cb(null, '/public/images/store')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

// Todos los productos
router.get('/store', controller.store);

//llamar un producto
router.get('/productDetail/:id', controller.productDetail);

//crear nuevo producto
router.get('/newProduct', controller.newProduct);


router.get('/productCart', controller.productCart);


module.exports = router;