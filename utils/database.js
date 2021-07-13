var Sequelize = require('sequelize')
var sequelize = new Sequelize('leave_form', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });
module.exports = sequelize;