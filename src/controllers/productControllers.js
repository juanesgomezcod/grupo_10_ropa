const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    store: (req, res) => {
        res.render("store", {
            products,
            toThousand
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
        res.render("newProduct");

    },

    // nuevo producto para guardar
    adicional: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}
		let nuevoProducto = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image,
		};
		products.push(nuevoProducto)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/store');
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
		res.redirect('/store');
	},

    // Borrar un producto de la base de datos
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/store');
	}

    };

module.exports = controller;