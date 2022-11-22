//requerimientos
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

//requerimos la función Validation Result
const { validationResult } = require("express-validator")


const controller = {

    // renderizamos las vistas de Login y Register
    login: (req, res) => {
        res.render("login");
    },

    register: (req, res) => {
        res.render("register");
    },


    //validacion y proceso de registro
    processRegister: (req, res) => {
        const resultadosValidar = validationResult(req);

        if (!resultadosValidar.isEmpty()) {
            return res.render("register", {
                errors: resultadosValidar.mapped(),
                old: req.body,
            })
        }

        controller.create(req.body)
        return res.render("index")
    },

    //Guardar Usuario

    getData: function () {
        return usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    findField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    //crear un Usuario

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },


    //login

    loginProcess: (req,res)=>{
        let usuarioLogin = controller.findField("email", req.body.email);

        if(usuarioLogin){
            if(usuarioLogin.password === req.password)
            return res.render("index")
        }
        return res.render("register",{
            errors:{
                email:{
                    msg: "Datos incorrectos"
                }
            }
        })
     }




};


module.exports = controller; 