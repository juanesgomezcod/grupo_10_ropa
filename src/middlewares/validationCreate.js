//requerimos
const {body} = require('express-validator');
const path = require('path');
const db = require("../database/models")


const validationCreate = [

    body('nombres').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail().isLength({ min: 2}),
    body('apellidos').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail(),
    body('email').notEmpty().withMessage('No puede estar vacio').isEmail().withMessage('Debe ser un email válido').bail().isString().withMessage('Ingrese una cadena de cáracteres').bail(),
    body('clave')
    .notEmpty()
    .withMessage('No puede estar vacio')
    .isLength({ min: 8})
    .withMessage('Debe tener como mínimo 8 caracteres')
    .bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/, )
	.withMessage("Debe contener al menos un número, mayúsculas y minúsculas, mínimo 8 o más caracteres"),
    body('claveconfirm').notEmpty().withMessage('Debes confirmar tu contraseña').bail(), 
    body('avatar').custom((value, {req})=>{
        let file = req.file;
        let extensionsAccepted = [".jpg", ".jpeg", "png", "gif"];
        if(!file){
            throw new Error('Debes subir una imagen de perfil');
        } else {
            let fileExtension = path.extname(file.originalname); 
            if(!extensionsAccepted.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${extensionsAccepted.join(", ")}`);
        }
        }
        return true 
    })
]

module.exports = validationCreate;


