const response=require("../response");
User=require("../models/userModel");

//getByID
//create
//update
//delete

exports.list=(req,res)=>{
    User.find({},(err,users)=>{
            if(err){
                return new response(null,err).error500(res);
            }
            return new response(users,null).success(res);
    })

}

exports.getById=(req,res)=>{
    User.find({id:req.params.id},(err,user)=>{
        if(err){
            console.log("xx");
            return new response(null,err).error500(res);
        }
        return new response(user,null).success(res);
    })
}

exports.create=(req,res) =>{
    var user=new User();
    user.name=req.body.name;
    user.surName=req.body.surName;
    user.email=req.body.email;
    user.password=req.body.password;

    user.save(function(err){
        if(err){
            console.log("hata")
            return new response(err).error500(res);
          
        }
        return new response(user,null).success(res);
    })
     
}

exports.update=(req,res) => {

    var id=req.params.user_id;
    var updateUser=req.body;
    User.findOneAndUpdate(id, updateUser,(err,user)=>{
        if(err){ 
            return new response(null,err).error500(res);
        }
        return new response(user,null).success(res);
    })

}

exports.delete=(req,res)=>{
    var id=req.params.user_id;
    User.findOneAndDelete(id,(err,user)=>{
        if(err){ 
            return new response(null,err).error500(res);
        }
       
        console.log(user);
        return new response(user,null).success(res);
    })
}


