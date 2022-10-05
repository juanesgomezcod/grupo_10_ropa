const express  =require('express');
const router = require('router');
const controller = require('../controllers/productControllers');


router.get('/ ', controller.store);


module.exports = router;