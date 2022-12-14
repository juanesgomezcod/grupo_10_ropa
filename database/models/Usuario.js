const { DataTypes } = require("sequelize/types");

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
            type: DataTypes.VARCHAR
        },
        contraseña:{
            type: DataTypes.VARCHAR
        },
        admin:{
            type: DataTypes.TINYINT
        },
        avatar:{
            type: DataTypes.VARCHAR
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };
    
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}