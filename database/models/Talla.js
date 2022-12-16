

module.exports = (sequelize, DataTypes) => {
    let alias = "Size";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        talla:{
            type: DataTypes.TEXT
        }
    };
    let config = {
        tableName: "sizes",
        timestamps: false
    };
    
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models){
        Size.hasMany(models.Product, {
            as:"products",
            foreignKey: "id_talla"
        })
    }

    return Size;
}