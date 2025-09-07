const mongoose=require('mongoose');
const Employeeschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const Employee=new mongoose.model("Employee",Employeeschema);
module.exports=Employee;