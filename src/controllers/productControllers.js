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


    // Crear Nuevo producto
    newProduct : (req, res) => {
        res.render("newProduct");

        // let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body,
		// 	image: image
		// };
		// products.push(newProduct)
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		// res.redirect('/');
    }
    };

module.exports = controller;