const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
require("./db/conn");
const Register = require("./models/registers");

const static_path = path.join(__dirname,"../public");
const partials_path = path.join(__dirname,"../views/include")
// using static folder
app.use(express.static(static_path));

//set view engine
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"../views"))
hbs.registerPartials(partials_path);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.render("index.hbs");
})
//login
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register",async (req,res)=>{
try{
    console.log(req.body);
    //check password and confirm password
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if(password === cpassword){
        
        const registerEmployee = new Register({
            email : req.body.email,
            password : req.body.password,
            cpassword : req.body.cpassword
        })
        //save to database
       const registered = await registerEmployee.save();
        res.status(201).render("index");
    }else{
        res.send("password not matching");
    }
   
} catch(error){
res.status(400).send(error);
}
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})