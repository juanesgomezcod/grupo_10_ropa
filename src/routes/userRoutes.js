//requerimientos 
const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require("multer")

const controller = require('../controllers/userControllers');
const validationCreate = require('../middlewares/validation'); 

//configuración del multer
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./public/images/avatars")
    },
//generamos un nombre dinamico
    filename: (req, file, cb)=>{
        console.log(file);
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename)
    }
})

const uploadFile = multer({storage});

//


router.get('/login', controller.login); 
router.get('/register', controller.register); 

//prcocesar el registro de un usuario 
router.post('/register', uploadFile.single("avatar"), validationCreate, controller.processRegister);
//procesar el Login 
router.post('/login', controller.loginProcess)


module.exports = router;   