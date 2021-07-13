const express  = require('express')
const router = express.Router()
const salaryController = require('../controllers/salary')
var salary_detail_model = require('../models/salary_detail')
const formControllers = require('../controllers/form')

// router.get('/salary_slip',salaryController.get_salaryslip)
router.get('/',formControllers.form)

router.post('/',formControllers.postform)
router.get('/show_all_leaves',formControllers.get_showAllLeaves)
router.get('/fill_detail_salary',salaryController.get_fill_details)

router.post('/fill_detail_salary',salaryController.post_fill_details)

router.get('/view_all_salary_list',salaryController.get_all_salary_list)

router.get('/salary_slip/:id',salaryController.get_salary_of_single_employee)

module.exports =  router
