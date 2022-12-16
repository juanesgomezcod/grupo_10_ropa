

module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
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
    
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as:"products",
            foreignKey: "id_categoria"
        })
    }
    
    return Category;
}

