//const fs = require('fs');
//const path = require('path');
const db = require("../database/models")


const controller = {
   //listado
	store: (req, res) => {
		db.Product.findAll()
		.then(function(Product){
			res.render("store", {Product})
		})
	},


    // Detalle de un producto
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
		// 	, {
		// 	include: [{association: "id_categoria"}, {association: "Size"}]
		// })
			.then(function(Product){
				res.render("productDetail",{Product})
			})
        },
     

    productCart: (req, res) => {
        res.render("productCart");
    }, 

    

    // Crear Nuevo producto en el formulario
    create : async(req, res) => {
		const Category = await db.Category.findAll()
		const Size = await db.Size.findAll()
		res.render("newProduct",{Category, Size})

    },

    // nuevo producto para guardar
    adicional : (req, res) => {
		db.Product.create({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			talla: req.body.talla,
			categoria: req.body.Category,
			imagen: req.file.filename
		})
		res.redirect("/store")
		
	},

    // formulario para editar
	edit : (req, res) => {
		
		let productToEdit = db.Product.findByPk(req.params.id, {include:{all:true}})
			.then(function(productToEdit){
				res.render('editProduct', {productToEdit})
				
			})
	},

    // Update - Method to update
	update : (req, res) => {
		db.Product.update({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			talla: req.body.talla,
			categoria: req.body.Category
		},{
			where:{
				id : req.params.id
			}
		});
		
		res.redirect('/productDetail/' + req.params.id);
	},

    // Borrar un producto de la base de datos
	destroy : (req, res) => {
		db.Product.destroy({
			where: {
				id : req.params.id
			}
		})
		res.redirect('/store');
	}
}
    

module.exports = controller;