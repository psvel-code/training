// const employee = require('../models/employee');

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
  console.log('body', body);
  [err, response] = await to(Employee.create(body));
  console.log('createEmployee: ', response);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
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
  let body = req.body
  console.log('body', body);
  [err, response] = await to(Employee.destroy({
    where: { id: body.id }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.deleteEmployee = deleteEmployee

const updateEmployee = async function (req, res) {
  let err;
  let body = req.body
  console.log('body', body);
  [err, response] = await to(Employee.update(body, {
    where: { id: body.id }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.updateEmployee = updateEmployee

const getOneEmployee = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findOne({
    where: { id: req.body.id }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getOneEmployee = getOneEmployee;

const checkEmail = async function (req, res) {
  let body = req.body;
  let err, email;
  [err, email] = await to(Employee.findOne({
    where: { email: body.email }
  }));

  if (err) ReE(res, err, 422);
  if (body.id && email && email.id === body.id) {
    email = null;
  }
  return ReS(res, { emailExist: email ? true : false })
}
module.exports.checkEmail = checkEmail;