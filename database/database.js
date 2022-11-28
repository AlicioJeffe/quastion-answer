const Sequelize = require('sequelize')

const connection = new Sequelize("question", "root", "programador", {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;