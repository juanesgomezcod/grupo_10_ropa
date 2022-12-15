const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = "Categorias";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria:{
            type: DataTypes.TEXT
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };
    
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Productos, {
            as:"productos",
            foreignKey: "idcategoria"
        })
    }
    
    return Categoria;
}

