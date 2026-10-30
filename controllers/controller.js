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
  res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};
//
exports.getemployee= function(req, res){
    let empToFind = req.params.employeeName;    
    Employee.find({})
    .then(
        employeeData => res.send(employeeData);
    )
    .catch((err)=>{
        res.send(err);
    })
};

