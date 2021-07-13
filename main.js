var express = require('express')
var app = express()
var sequelize = require('./utils/database')
var bodyparser = require('body-parser')
var formRoutes = require('./routes/form')
var salaryRoutes = require('./routes/salary')

var form_models = require('./models/form_model')
var salary_detail_model = require('./models/salary_detail')
app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine','ejs')

// app.use('/',formRoutes)
app.use('/',salaryRoutes)


sequelize.sync().then(result=>{
    app.listen(3000)
})
