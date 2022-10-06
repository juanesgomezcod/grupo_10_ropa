const express = require('express');
const router = express.Router();

const controller = require('../controllers/productControllers');

router.get('/store', controller.store);


module.exports = router;