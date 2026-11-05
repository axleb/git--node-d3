const Employee = require('./../models/employee');
exports.getdefault = function(req, res){
  res.send('You are on the root route.');
};
exports.aboutus=function(req, res){
  res.send('You are on the about us route.');
};
//
exports.addemployee=function(req, res){
  const empName = req.body.empName;
  const empPass = req.body.empPass;
  new Employee({ empName, empPass }).save()
    .then(() => res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`))
    .catch((err) => res.status(500).send(err.message));
};
//
exports.getemployees = function(req, res){  
  Employee.find({})
  .then(
    employeeData => res.send(employeeData)
  )
  .catch((err)=>{
    res.send(err);
  })
};
