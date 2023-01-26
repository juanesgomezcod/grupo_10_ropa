//requerimientos
const {body} = require('express-validator');
const path = require('path');
const db = require("../database/models")


const validationProduct = [

    body('nombreProducto').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail().isLength({ min: 3}),
    body('descripcion').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail(), 
    body('imagen').custom((value, {req})=>{
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

module.exports = validationProduct;


