module.exports = (sequelize, DataTypes) => {
    let alias = "User";
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
        clave:{
            type: DataTypes.STRING
        },
        administrador:{
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
    
    const User = sequelize.define(alias, cols, config);
    return User;
}