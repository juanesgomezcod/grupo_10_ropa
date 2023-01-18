const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
const Categories = db.Category;
const Users = db.User;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const categoriesAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
        .then(categories => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: categories.length,
                    url: 'api/categories'
                },
                data: categories
            }
                res.json(respuesta);
            })
    },
    
    // 'detail': (req, res) => {
    //     db.Genre.findByPk(req.params.id)
    //         .then(genre => {
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     total: genre.length,
    //                     url: '/api/genre/:id'
    //                 },
    //                 data: genre
    //             }
    //             res.json(respuesta);
    //         });
    // },
    // 'genreMovies': (req, res) => {
    //     db.Genre.findByPk(req.params.id,{
    //         include: ['movies']
    //     })
    //         .then(genre => {
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     total: genre.length,
    //                     url: '/api/genre/:id/movies'
    //                 },
    //                 data: genre
    //             }
    //             res.json(respuesta);
    //         });
    // }
}

module.exports = categoriesAPIController;