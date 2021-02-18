var mongoose= require("mongoose");

var categorySchema=mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    created:{
        type:Date,
        default:()=> {return new Date()}
    }
})
module.exports=mongoose.model("category",categorySchema);




























