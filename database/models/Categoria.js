

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
    
    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function(models){
        Categorias.hasMany(models.Productos, {
            as:"productos",
            foreignKey: "idcategoria"
        })
    }
    
    return Categorias;
}

