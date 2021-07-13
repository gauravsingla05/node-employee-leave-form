const express  = require('express')
const router = express.Router()
const formControllers = require('../controllers/form')

router.get('/',formControllers.form)

router.post('/',formControllers.postform)

router.post('/ajax_calculate_days',formControllers.post_ajax_total_days)

router.get('/show_all_leaves',formControllers.get_showAllLeaves)

// router.get('/salary_slip',formControllers.get_salaryslip)

// router.get('/fill_detail',formControllers.get_fill_details)

// router.post('/fill_detail',formControllers.post_fill_details)

// router.get('/view_all_salary_list',formControllers.get_all_salary_list)

// router.get('/salary_slip/:id',formControllers.get_salary_of_single_employee)

// module.exports =  router