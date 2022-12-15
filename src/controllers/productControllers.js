const fs = require('fs');
const path = require('path');
let db = require("../../database/models")


const controller = {
   //listado
	store: (req, res) => {
		db.Productos.findAll()
		.then(function(productos){
			res.render("store", {products})
		})
	},


    // Detalle de un producto
    productDetail: (req, res) => {
        db.Productos.findByPk(req.params.id, {
			include: [{association: "categorias"}, {association: "tallas"}]
		})
			.then(function(pelicula){
				res.render("productDetail",{products})
			})
        },
     

    productCart: (req, res) => {
        res.render("productCart");
    }, 

    

    // Crear Nuevo producto en el formulario
    create : (req, res) => {
		db.Categorias.findAll()
		.then(function(categorias){
			return res.render("newProduct",{categorias});
		})
        //aca tambien hay que llamar las tallas

    },

    // nuevo producto para guardar
    adicional : (req, res) => {
		db.products.create({
			nombre: req.body.nombreProducto,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			talla: req.body.talla,
			categoria: req.body.Categorias
		})
		res.redirect("/store")
		
	},

    // formulario para editar
	edit : (req, res) => {
		let productToEdit = db.Productos.findByPk(req.params.id)
			.then(function(productToEdit){
				res.render('editProduct', {productToEdit})
			})
		
	},

    // Update - Method to update
	update : (req, res) => {
		db.products.update({
			nombre: req.body.nombreProducto,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			talla: req.body.talla,
			categoria: req.body.Categorias
		},{
			where:{
				id : req.params.id
			}
		});
		
		res.redirect('/productDetail/' + req.params.id);
	},

    // Borrar un producto de la base de datos
	destroy : (req, res) => {
		db.products.destroy({
			where: {
				id : req.params.id
			}
		})
		res.redirect('/store');
	}
}
    

module.exports = controller;