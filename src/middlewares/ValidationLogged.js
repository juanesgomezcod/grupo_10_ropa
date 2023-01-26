const {check} = require("express-validator");
const db = require("../database/models");

const validationLogged = [
  check("email").notEmpty().withMessage("Ingresa tú email").bail().isEmail().withMessage("Por favor, ingresa un email válido"),
  check("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail()
];

module.exports = validationLogged;

