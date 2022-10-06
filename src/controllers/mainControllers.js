let productos = [
    {
        nombreProducto:'Camiseta Azul',
        descripcion: 'Camiseta Azul con estampado amarillo',
        categoria: 'Remeras',
        img: 'producto1.jpg',
        tamaño: 'L',
        precio: '39500'
    },
    {
        nombreProducto:'Tote Bag con Negro',
        descripcion: 'Tote Bag Beige con estampado en negro',
        categoria: 'Tote Bag',
        img: 'producto2.jpg',
        tamaño: 'S',
        precio: '39500'
    },
    {
        nombreProducto:'Tote Bag con Cafe',
        descripcion: 'Tote Bag Beige con estampado en cafe',
        categoria: 'Tote Bag',
        img: 'producto3.jpg',
        tamaño: 'S',
        precio: '39500'
    },
    {
        nombreProducto:'Jean Cruces',
        descripcion: 'Jean desgastado con estampados de cruces negras',
        categoria: 'Jeans',
        img: 'producto4.jpg',
        tamaño: 'XL',
        precio: '39500'
    }
]

const controller = {
    index: (req, res) => {
        res.render("index");
    }
    }     
module.exports = controller; 