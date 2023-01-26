//requerimientos
//const fs = require('fs');
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
				res.render('userList', { users })
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

	processRegister: (req, res) => {
		try {
			const resultadosValidar = validationResult(req);

			if (!resultadosValidar.isEmpty()) {
				return res.render("register", {
					errors: resultadosValidar.mapped(),
					old: req.body,
				});
			}

			db.User.findOne({

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
							nombres: req.body.nombres,
							apellidos: req.body.apellidos,
							email: req.body.email,
							clave: bcryptjs.hashSync(req.body.clave, 10),
							administrador: '0',
							avatar: req.file?.filename || "default.png",
						})
							.then(() => {
								return res.redirect("/login");
							})
							.catch((error) => {
								//crear pagina de error y borrar este console
								console.log(error);
							});
					}

				});

		} catch (error) {
			res.send(error)
		}
	},

	loginProcess: async (req, res) => {

		const resultadosValidar = validationResult(req);
		if (!resultadosValidar.isEmpty()) {
			return res.render('login', {
				errors: resultadosValidar.mapped(),
				oldData: req.body,
			});
		}

		usuarioLogin = await db.User.findOne({
			where: {
				email: req.body.email
			}
		});


		if (usuarioLogin) {
			let claveOk = bcryptjs.compareSync(
				req.body.clave,
				usuarioLogin.clave
			);

			if (claveOk) {
				delete usuarioLogin.clave;
				req.session.userLogged = usuarioLogin;

				if (req.body.userEmail != undefined) {
					res.cookie('userLoggedMiddleware', usuarioLogin.email, { maxAge: 1000 * 60 });
					
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
		})
		.catch((error) => {
			res.send(error);
		});
	},


	profile: (req, res) => {
		
		return res.render('profile', {
		user: req.session.userLogged
	});
	},

	editProfile: (req, res) => {
	db.User.findByPk(req.params.id)
		.then(function (userToEdit) {
			res.render('editProfile', {
				userToEdit: userToEdit
			});
		})
		.catch((error) => {
			res.send(error);
		});
	},

	updateProfile: (req, res) => {

		const resultValidation = validationResult(req);
		let userToEdit = db.User.findByPk(req.params.id)

		if (resultValidation.errors.length > 0) {

			return res.render('editProfile', {
				errors: resultValidation.mapped(),
				oldData: req.body,
				userToEdit
			},
				req.body = null);


		} else {

			db.User.findByPk(req.params.id)
				.then((userEdit) => {
					db.User.update({
						nombre: req.body.nombre || userEdit.nombre,
						apellidos: req.body.apellidos || userEdit.apellidos,
						email: userEdit.email,
						clave: userEdit.clave,
						avatar: req.file == undefined ? userEdit.avatar : req.file.filename,
					}, {
						where: {
							id: req.params.id
						},
					})
						.then(() => {
							return res.redirect('/store');
						})
						.catch((error) => res.send(error));
				});
		}

	},

		logout: (req, res) => {
			res.clearCookie("userEmail");
			req.session.destroy();
			return res.redirect("/");
		},

		delete: function (req, res) {
				db.User.destroy({
					where: {
						id: req.params.id
					}
				})
					.then(() => {
						req.session.destroy();
						res.clearCookie("userEmail");
						return res.redirect("/");
					})
					.catch((error) => res.send(error));
		},
    
};


module.exports = controller; 