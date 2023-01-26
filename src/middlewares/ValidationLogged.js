const {check} = require("express-validator");
const db = require("../database/models");

const validationLogged = [
  check("email").notEmpty().withMessage("Ingresa tú email").bail().isEmail().withMessage("Por favor, ingresa un email válido").equals(db.User.email).withMessage('las contraseñas no coinciden'),
  check("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().equals(db.User.clave).withMessage('Datos inválidos')
];

module.exports = validationLogged;