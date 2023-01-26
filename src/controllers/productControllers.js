//const fs = require('fs');
//const path = require('path');
const db = require("../database/models")
const Op = db.Sequelize.Op;


const controller = {
   //listado
	store: (req, res) => {
		db.Product.findAll({include:{all:true}})
		.then(function(Product){
			res.render("store", {Product})
		})
	},

	// Barra de Busqueda
	search: async (req, res) => {
		try {
		  let products = await db.Product.findAll({
			where: {
			  products: { [Op.like]: `%${req.query.search}%` },
			},
		  });
		  return res.render("/search", {
			allProducts: nombre,
			titulo: "Search Result's",
		  });
		} catch (error) {
		  console.log(error);
		}
	  },


    // Detalle de un producto
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id, {include:{all:true}})
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
		res.render("newProduct", {Category, Size})
    },

    // nuevo producto para guardar

    adicional : (req, res) => {
		db.Product.create({
			nombre: req.body.nombreProducto,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			id_talla: req.body.size,
			id_categoria: req.body.category,
			imagen: req.file?.filename || "default.png",
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
			nombre: req.body.nombreProducto,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			talla: req.body.talla,
			categoria: req.body.Category,
			imagen: req.file?.filename || "default.png",
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