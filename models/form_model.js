var Sequelize = require('sequelize')
var sequelize = require('../utils/database')
module.exports = sequelize.define('leave_details',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user_name:{
        type:Sequelize.STRING
    },
    user_department:{
        type:Sequelize.STRING
    },
    user_designation:{
        type:Sequelize.STRING,
    },
    applied_date:{
        type:Sequelize.STRING
    },
    type_of_leave:{
        type:Sequelize.STRING
    },
    reason_for_leave:{
        type:Sequelize.STRING,
    },
    leave_from:{
        type:Sequelize.STRING
    },

    resumption_date:{
        type:Sequelize.STRING
    },
    reachable_contact:{
        type:Sequelize.STRING,
    },
    no_of_days:{
        type:Sequelize.STRING
    },
    information_status:{
        type:Sequelize.STRING
    }









}
)


