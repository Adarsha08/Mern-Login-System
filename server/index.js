const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const Employee=require('./model/employee');

const  app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register',(req,res)=>
{
    Employee.create(req.body)
    .then(user=>console.log(user))
    .catch(err=>console.log(err));
    res.send("Data received");
})
app.listen(3001,()=>{
    console.log("Server started on port 3001");
});


