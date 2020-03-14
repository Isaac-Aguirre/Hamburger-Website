module.exports = (Sequelize, DataTypes) =>{
    const Burger = Sequelize.define('Burger', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        eaten:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};