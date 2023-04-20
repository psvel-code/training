const employee = require('../models/employee');

const Designation = require('../models').designation;
const Role = require('../models').role;
const Employee = require('../models').employee;


const getEmployees = async function (req, res) {
  let err;
  console.log('getEmployees: ');
  [err, response] = await to(Employee.findAll({
    include: [
      { model: Role },
      { model: Designation }
    ]
  }));

  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body', body)
  [err, employee] = await to(Employee.create(body));
  console.log('createEmployee: ', employee);
  if (err) return ReE(res, err, 422);
  return ReS(res, { body });
}
module.exports.createEmployee = createEmployee;

const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;

const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;

const deleteEmployee = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body', body)
  [err, employee] = await to(Employee.destroy({
    where: {
      id: body.id
    }
  }));
  console.log('deleteEmployee: ', employee);
  if (err) return ReE(res, err, 422);
  return ReS(res, { body });
}
module.exports.deleteEmployee = deleteEmployee;