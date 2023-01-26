//requerimientos 
const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require("multer")

//requerimos los middlewares

const controller = require('../controllers/userControllers');
const validationCreate = require('../middlewares/validationCreate'); 
const validationLogged = require('../middlewares/validationLogged');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

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

//listar todos los usuarios
router.get('/list', controller.list);

//Login y registro de usuarios
router.get('/login', guestMiddleware, controller.login); 
router.get('/register', guestMiddleware, controller.register); 

//procesar el registro de un usuario 
router.post('/register', uploadFile.single("avatar"), validationCreate, controller.processRegister);

//procesar el Login 
router.post('/login', validationLogged, controller.loginProcess);

//perfil del usuario
router.get('/profile/', authMiddleware, controller.profile);

//editar perfil del usuario AQUI SE PISAN LAS RUTAS CON EL EDIT DE PRODUCTOS 
// router.get('/edit/:id', controller.editProfile);
// router.put('/edit/:id', uploadFile.single("avatar"), validationCreate, controller.UpdateProfile);

//logout
router.get('/logout/', controller.logout);

//borrar un usuario
router.delete('/delete/:id', controller.delete);

module.exports = router;   