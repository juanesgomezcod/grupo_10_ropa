const fs = require('fs');
const path = require('path');
let db = require("../../database/models")

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
   
	store: (req, res) => {
		db.Productos.findAll()
		.then(function(productos){
			res.render("store", {products})
		})
	},


    // Detalle de un producto
    productDetail: (req, res) => {
        let productId = req.params.id;
        let product = products.find(product => product.id == productId);
        res.render("productDetail", {
        product,
        toThousand
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
    adicional: (req, res) => {
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
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('editProduct', {productToEdit})
	},

    // Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

    // Borrar un producto de la base de datos
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}

    };

module.exports = controller;