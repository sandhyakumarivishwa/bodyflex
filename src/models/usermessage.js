const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    number:{
        type:Number,
        minlength:10,
        required:true
    
    },
    message:{
        type:String
    }
})


const User=mongoose.model("User" , userSchema);
module.exports=User;