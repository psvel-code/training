const getEmployees = async function (req, res) {
  let err;
  let response = { name: 'Boopathi' };
  console.log('getEmployees: ');
  // [err, response] = await to(Employee.findAll());
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