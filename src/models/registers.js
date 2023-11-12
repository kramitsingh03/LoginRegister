const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    }
})
//now we need to create a collection
const Register = new mongoose.model("Register",loginSchema);
module.exports = Register;