const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/employeedb'
).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String
},{
    collection:'ftemployees'
});
//
module.exports = mongoose.model('Employees', empSchema);
