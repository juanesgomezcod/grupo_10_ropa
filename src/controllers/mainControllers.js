const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        res.render("index");
    },

    // store: (req,res)=> {
    //     res.render("store");
    //     toThousand
    // },

    howToBuy: (req, res) => {
        res.render("howToBuy");
    },

    sizeGuide: (req, res) => {
        res.render("sizeGuide");
    }
    }     

module.exports = controller; 