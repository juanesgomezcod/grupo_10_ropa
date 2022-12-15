const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "Productos";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.CHAR
        },
        descripcion:{
            type: DataTypes.TEXT
        },
        precio:{
            type: DataTypes.INTEGER
        },
        idtalla:{
            type: DataTypes.INTEGER
        },
        idcategoria:{
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Productos.associate = function(models){
        Productos.belongsTo(models.Categoria, {
            as:"categorias",
            foreignKey: "idcategoria"
        });


    }

    Productos.associate = function(models){
        Productos.belongsTo(models.Tallas, {
            as:"tallas",
            foreignKey: "idtalla"
        });


    }
    return Producto;
}

