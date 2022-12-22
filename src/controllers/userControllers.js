//requerimientos
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');

//requerimos la función Validation Result
const { validationResult } = require("express-validator")


const controller = {

    // renderizamos las vistas de Login y Register
    login: (req, res) => {
        res.render("login");
    },

    profile: (req,res) => {
        res.render("profile", {
            user: req.session.userLogged,
        })
    },

    register: (req, res) => {
        res.cookie();
        res.render("register");
    },

    logout: (req,res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
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

        let userinDb = user.findField('email', req.body.email);

        if (userinDb){
            return res.render("register", {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    },
                },
                old: req.body
            });
        }

        return res.send(userinDb);

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = controller.create(userToCreate)
        return res.redirect('/login')
    },

    //Guardar Usuario

    getData: function () {
        return usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
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

    delete: function (id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
        return finalUsers;
    },


    //login

    loginProcess: (req,res)=>{
        let usuarioLogin = controller.findField("email", req.body.email);

        if(usuarioLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, usuarioLogin.password)
            if(isOkThePassword){
                delete usuarioLogin.password;
                req.session.userLogged = usuarioLogin

                if(req.body.remember-user){
                    res.cookie('userEmail', req.body.email, {maxAge: 1000 * 60})
                }

                return res.redirect('/user/profile')
            }
            return res.render("login",{
                errors:{
                    email:{
                        msg: "Las credenciales son invalidas"
                    }
                }
            });
        }
        return res.render("login",{
            errors:{
                email:{
                    msg: "Datos incorrectos"
                }
            }
        });
     }
};


module.exports = controller; 