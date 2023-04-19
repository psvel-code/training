var express = require('express');
var router = express.Router();

const EmployeeController = require('../controllers/employee.controller');
router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/createEmployee', EmployeeController.createEmployee);

module.exports = router;
