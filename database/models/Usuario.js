

module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres:{
            type: DataTypes.TEXT
        },
        apellidos:{
            type: DataTypes.TEXT
        },
        email:{
            type: DataTypes.STRING
        },
        contraseña:{
            type: DataTypes.STRING
        },
        admin:{
            type: DataTypes.TINYINT
        },
        avatar:{
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };
    
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}