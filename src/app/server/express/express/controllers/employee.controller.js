const Designation = require('../models/designation').designation
const Role = require('../models/role').role
const Employee = require('../models').employee


const getEmployees = async function (req, res) {
  let err;
  console.log('getEmployees: ');
  [err, response] = await to(Employee.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  console.log('createEmployee: ', body);
  if (err) return ReE(res, err, 422);
  return ReS(res, { body });
}
module.exports.createEmployee = createEmployee;

const getDesignation = async function (req, res) {
  let err;
  [err, response] = await to(designation.findAll());
  console.log('gets: ', body);
  if (err) return ReE(res, err, 422);
  return ReS(res, { body });
}
module.exports.getDesignation = getDesignation;
