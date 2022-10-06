let productos = [
    {
        id:1,
        nombreProducto:'Camiseta Azul',
        descripcion: 'Camiseta Azul con estampado amarillo',
        categoria: 'Remeras',
        img: 'producto1.jpg',
        tamaño: 'L',
        precio: '39500'
    },
    {
        id:2,
        nombreProducto:'Tote Bag con Negro',
        descripcion: 'Tote Bag Beige con estampado en negro',
        categoria: 'Tote Bag',
        img: 'producto2.jpg',
        tamaño: 'S',
        precio: '39500'
    },
    {
        id:3,
        nombreProducto:'Tote Bag con Cafe',
        descripcion: 'Tote Bag Beige con estampado en cafe',
        categoria: 'Tote Bag',
        img: 'producto3.jpg',
        tamaño: 'S',
        precio: '39500'
    },
    {
        id:4,
        nombreProducto:'Jean Cruces',
        descripcion: 'Jean desgastado con estampados de cruces negras',
        categoria: 'Jeans',
        img: 'producto4.jpg',
        tamaño: 'XL',
        precio: '39500'
    }
]

const controller = {
    store: (req, res) => {
        res.render("store");
    }, 

    productDetail: (req, res) => {
        let productId = req.params.id;
        let product = productos.find(product => product.id == productId);
        res.render("productDetail", {product});
    }, 

    productCart: (req, res) => {
        res.render("productCart");
    }, 

    newProduct : (req, res) => {
        res.render("newProduct");
    }
    }

module.exports = controller;