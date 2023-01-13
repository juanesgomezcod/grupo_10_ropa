const {body} = require('express-validator');

const validationCreate = [

    body('nombres').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido'),
    body('apellidos').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail(),
    body('email').isEmail().withMessage('Debe ser un email válido').isString().withMessage('Ingrese un nombre válido').bail(),
    body('clave').isLength({ min: 8}).withMessage('Debe tener como maximo 8 caracteres').bail() ,
    body('claveconfirm').isLength({ min: 8 }).withMessage('Debe tener como maximo 8 caracteres').bail(), 

]

module.exports = validationCreate;