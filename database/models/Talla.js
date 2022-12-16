

module.exports = (sequelize, DataTypes) => {
    let alias = "Tallas";
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
    
    const Tallas = sequelize.define(alias, cols, config);

    Tallas.associate = function(models){
        Tallas.hasMany(models.Productos, {
            as:"productos",
            foreignKey: "idtalla"
        })
    }

    return Tallas;
}