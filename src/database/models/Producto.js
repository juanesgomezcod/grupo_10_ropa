

module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
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
        id_talla:{
            type: DataTypes.INTEGER
        },
        id_categoria:{
            type: DataTypes.INTEGER
        },
        imagen:{
            type: DataTypes.TEXT
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as:"Categories",
            foreignKey: "id_categoria"
        });


    }

    Product.associate = function(models){
        Product.belongsTo(models.Size, {
            as:"sizes",
            foreignKey: "id_talla"
        });


    }
    return Product;
}

