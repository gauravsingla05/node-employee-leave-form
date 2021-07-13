var Sequelize = require('sequelize')
var sequelize = require('../utils/database')
module.exports = sequelize.define('salary_details',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    dateOfjoining:{
        type:Sequelize.STRING
    },
    current_date:{
        type:Sequelize.STRING
    },
    
    designation:{
        type:Sequelize.STRING,
    },
    no_of_days:{
        type:Sequelize.INTEGER
    },
    basic:{
        type:Sequelize.INTEGER
    },
    hra:{
        type:Sequelize.INTEGER,
    },
    medical:{
        type:Sequelize.INTEGER
    },

    transport_allowance:{
        type:Sequelize.INTEGER
    },
    other_allowance:{
        type:Sequelize.INTEGER,
    },
    incentives:{
        type:Sequelize.INTEGER
    },
    total:{
        type:Sequelize.INTEGER
    },   

    total_a:{
        type:Sequelize.INTEGER
    },
    leave_status:{
        type:Sequelize.INTEGER,
    },
    leave_deduction:{
        type:Sequelize.INTEGER
    },
    pf_deduction_employee:{
        type:Sequelize.INTEGER
    }

    ,
    pf_deduction_employer:{
        type:Sequelize.INTEGER,
    },
    advance_if_any:{
        type:Sequelize.INTEGER
    },
    ewf:{
        type:Sequelize.INTEGER
    },    

    tds:{
        type:Sequelize.INTEGER
    },
    total_b:{
        type:Sequelize.INTEGER,
    },
    final_salary:{
        type:Sequelize.INTEGER
    }







}
)


