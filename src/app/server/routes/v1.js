var express = require('express');
var router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getDesignation', EmployeeController.getDesignation);
router.get('/getRole', EmployeeController.getRole);
router.post('/deleteEmployee', EmployeeController.deleteEmployee);

module.exports = router;
