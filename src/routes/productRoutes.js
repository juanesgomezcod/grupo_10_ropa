const express = require('express');
const router = express.Router();

const controller = require('../controllers/productControllers');

router.get('/store', controller.store);
router.get('/store/#jeans', controller.store);
router.get('/productDetail', controller.productDetail);
router.get('/productDetail/:id', controller.productDetail);
router.get('/newProduct', controller.newProduct);
router.get('/productCart', controller.productCart);


module.exports = router;