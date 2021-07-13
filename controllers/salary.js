const express  = require('express')
var sequelize = require('../utils/database')
var Salary_Detail = require('../models/salary_detail')
var salary_detail_model = require('../models/salary_detail')



exports.get_salaryslip = (req,res)=>{

    res.render('salary_slip',{title:'Salary'})
}

exports.get_fill_details = (req,res)=>{
    res.render('fill_detail_salary',{title:'Fill Data'})
}
exports.post_fill_details = (req,res)=>{
    var name = req.body.fullName
    var dateOfjoining = req.body.dateOfjoining
    var current_date = req.body.current_date
    var designation = req.body.designation
    var no_of_days = req.body.totalpayableDays
    var basic = req.body.basic
    var hra = req.body.hra
    var medical  = req.body.medical
    var transport_allowance = req.body.transport_allowance
    var other_allowance = req.body.other_allowance
    var incentives = req.body.incentives
    var total = req.body.total
    var total_a = req.body.total_a
    var leave_status = req.body.leave_status
    var leave_deduction = req.body.leave_deduction
    var pf_deduction_employee = req.body.pf_deduction_employee
    var pf_deduction_employer =  req.body.pf_deduction_employer
    var advance_if_any = req.body.advance_if_any
    var ewf = req.body.ewf
    var tds = req.body.tds
    var total_b = req.body.total_b
    var final_salary = req.body.final_salary

Salary_Detail.create({
    name:name,
    dateOfjoining:dateOfjoining,
    current_date:current_date,
    designation:designation,
    no_of_days:no_of_days,
    basic:basic,
    hra:hra,
    medical:medical,
    transport_allowance:transport_allowance,
    other_allowance:other_allowance,
    incentives:incentives,
    total:total,
    total_a:total_a,
    leave_status:leave_status,
    leave_deduction:leave_deduction,
    pf_deduction_employee:pf_deduction_employee,
    pf_deduction_employer:pf_deduction_employer,
    advance_if_any:advance_if_any,
    ewf:ewf,
    tds:tds,
    total_b:total_b,
    final_salary:final_salary


}).then(result=>{
    res.redirect('/view_all_salary_list')
})
}

exports.get_all_salary_list = (req,res)=>{
    Salary_Detail.findAll().then(result=>{
        res.render('view_all_salary_list',{title:'salary list',result:result})
    })
   
}


exports.get_salary_of_single_employee = (req,res)=>{
    var id = req.params.id
    Salary_Detail.findByPk(id).then(result=>{
        if(result!=null){
            res.render('salary_slip',{title:'Salary',result:result})
        }
       else{
           console.log('User not found')
       }
        
    })
}