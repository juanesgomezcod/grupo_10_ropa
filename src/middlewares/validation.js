
const {body} = require('express-validator');

const validationCreate = [

    body('nombre').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido'),
    body('apellidos').notEmpty().withMessage('No puede estar vacio').isString().withMessage('Ingrese un nombre válido').bail(),
    body('email').isEmail().withMessage('Debe ser un email válido').isString().withMessage('Ingrese un nombre válido').bail(),
    body('clave').isLength({ max: 10}).withMessage('Debe tener como maxim 10 caracteres').bail() ,
    body('claveconfirm').isLength({ max: 10 }).withMessage('Debe tener como maxim 10 caracteres').bail(), 

]

module.exports = validationCreate;