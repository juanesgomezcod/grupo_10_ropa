const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
const Categories = db.Category;
const Users = db.User;

const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll()
        //esto va dentro del parentesis
        // {
        //     "include": ['category']
        // }
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(respuesta);
            })

            
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            //esto esta dentro del parentesis
            // req.params.id,
            // {
            //     "include" : ['category']
            // }
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/product/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
    'recomended': (req, res) => {
        db.Product.findAll({
            include: ['category'],
            where: {
                precio: {[db.Sequelize.Op.gte] : req.params.precio}
            },
            order: [
                ['precio', 'DESC']
            ]
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products/recomended/:precio'
                },
                data: products
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    },
    
    
}

module.exports = productsAPIController;