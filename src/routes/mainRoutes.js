
const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainControllers');

router.get('/', controller.index); 
router.get('/howToBuy', controller.howToBuy); 
router.get('/sizeGuide', controller.sizeGuide); 

module.exports = router;   