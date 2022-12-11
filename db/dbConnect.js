const { Sequelize } = require('sequelize')

module.exports = new Sequelize('userTest','root','Lionaides-1920',{dialect:'mysql',host:'localhost'})