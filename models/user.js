const sequelize = require('sequelize')

const Db = require("../db/dbConnect.js")


const {DataTypes} = sequelize
const User = Db.define('user',{
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull :false,
        

    },
    nom : {
        type : DataTypes.STRING,
        // allowNull :false
    },
    prenom : {
        type : DataTypes.STRING,
        // allowNull :false
    }
})

module.exports = User
