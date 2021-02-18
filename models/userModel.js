var mongoose=require("mongoose");

var userSchema=mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    surName:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    }

})
module.exports=mongoose.model("user",userSchema);