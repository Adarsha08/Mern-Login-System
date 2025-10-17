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
app.post('/Login',(req,res)=>
{
    const {email,password}=req.body;
    Employee.findOne({email:email,password:password})
    .then(user=>{
        if(user){
            res.send({message:"Login Successful",user:user});
        }
        else{
            res.send({message:"Invalid Credentials"});
        }
    })
    .catch(err=>console.log(err));
    
})
app.listen(3001,()=>{
    console.log("Server started on port 3001");
});


