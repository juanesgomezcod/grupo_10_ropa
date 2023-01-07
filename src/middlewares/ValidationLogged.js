const {check} = require("express-validator");

const validationLogged = [
  check("email").notEmpty().withMessage("Ingresa tú email").bail().isEmail().withMessage("Por favor, ingresa un email válido"),
  check("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().isLength({ min: 8 }).withMessage("Tú contraseña debe contener mínimo 8 cáracteres" )
];

module.exports = validationLogged;