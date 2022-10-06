const controller = {
    index: (req, res) => {
        res.render("index");
    },

    howToBuy: (req, res) => {
        res.render("howToBuy");
    },

    sizeGuide: (req, res) => {
        res.render("sizeGuide");
    }
    }     

module.exports = controller; 