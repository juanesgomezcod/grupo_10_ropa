//requerimientos
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');

//requerimos la función Validation Result
const { validationResult } = require("express-validator")

//requerimos la base de datos
const db = require("../database/models")



const controller = {

    // Lista de usuarios completa

    list: (req, res) => {
		db.User.findAll()
			.then(users => {
				res.render('userList', {
					users
				})
			})
	},

    // renderizamos las vistas de Login y Register

    login: (req, res) => {
        res.render("login");
    },

    profile: (req, res) => {
        res.render("profile", {
            user: req.session.userLogged,
        })
    },

    register: (req, res) => {
        res.cookie();
        res.render("register");
    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
    },


    //validacion y proceso de registro
    
    processRegister: async (req, res) => {
        try {
            const resultadosValidar = validationResult(req);

            if (!resultadosValidar.isEmpty()) {
                return res.render("register", {
                    errors: resultadosValidar.mapped(),
                    old: req.body,
                });
            }

            await db.User.findOne({

                where: {
                    email: req.body.email
                }

            })
                .then((userinDB) => {
                    if (userinDB) {
                        return res.render('register', {
                            errors: {
                                email: {
                                    msg: "Este email ya está registrado",
                                },
                            },
                            oldData: req.body,
                        });

                    } else if (req.body.clave != req.body.claveconfirm) {
                        return res.render('register', {
                            errors: {
                                clave: {
                                    msg: "Las contraseñas no coinciden",
                                }
                            },
                            oldData: req.body,
                        })
                    } else {
                        db.User.create({
                            nombre: req.body.nombre,
                            apellido : req.body.apellido,
                            email: req.body.email,
                            clave: bcrypt.hashSync(req.body.clave, 10),
                            administrador: '0',
                            avatar: req.file?.filename || "default.png",
                        })
                            .then(() => {
                                return res.redirect("/login");
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }

                });

        } catch (error) {
            res.send(error)
        }
    },

    //Guardar Usuario

    getData: function () {
        return usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
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

    //crear un Usuario y eliminarlo

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

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
        return finalUsers;
    },


    //login
    //Login process, autenticación con express, validación de los campos

    loginProcess: (req, res) => {

		const resultadosValidar = validationResult(req);
		if (!resultadosValidar.isEmpty()) {
			return res.render('login', {
				errors: resultadosValidar.mapped(),
				oldData: req.body,
			});
		}
		db.User.findOne({
				where: {
					email: req.body.email
				}
			})
			.then((usuarioLogin) => {
				if (usuarioLogin) {
					let claveOk = bcrypt.compareSync(
						req.body.clave,
						usuarioLogin.clave
					);
					if (claveOk) {
						delete usuarioLogin.clave;
						req.session.userLogged = usuarioLogin;

                        // remember - user
                        
                           //             if (req.body.remember - user) {
    //                 res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
    //             }

						if (req.body.remember) {
							res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 });
						} 

						return res.redirect('/profile');
					}

					return res.render('login', {
						errors: {
							email: {
								msg: 'El email o la contraseña son inválidos',
							},
						},
					});
				}

				return res.render('login', {
					errors: {
						email: {
							msg: 'El email o la contraseña son inválidos',
						},
					},
				});
			})
			.catch((error) => {
				res.send(error);
			});

	},




    //no sirve --

    // loginPrRocess: (req, res) => {
    //     let usuarioLogin = controller.findField("email", req.body.email);

    //     if (usuarioLogin) {
    //         let isOkTheclave = bcryptjs.compareSync(rec.body.clave, usuarioLogin.clave)
    //         if (isOkTheclave) {
    //             delete usuarioLogin.clave;
    //             req.session.userLogged = usuarioLogin

    //             if (req.body.remember - user) {
    //                 res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
    //             }

    //             return res.redirect('/user/profile')
    //         }
    //         return res.render("login", {
    //             errors: {
    //                 email: {
    //                     msg: "Las credenciales son invalidas"
    //                 }
    //             }
    //         });
    //     }
        // return res.render("login",{
        //     errors:{
        //         email:{
        //             msg: "Datos incorrectos"
        //         }
        //     }
        // });
    
};


module.exports = controller; 