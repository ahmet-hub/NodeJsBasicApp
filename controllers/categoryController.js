const response = require("../response");

Category= require("../models/categoryModel");


exports.list=(req,res) =>{
    Category.find({},(err,categories)=>{
        if(err){
            return new response(null,err).error500(res);
        }
        return new response(categories).success(res);

    })
}
////////////////
exports.getById=(req,res)=>{
  
    Category.find({id:req.params.category_id},(err,category)=>{
        if(err){
            console.log("hata")
            return new response(null,err).error500(res);
        }
        console.log(category.name)
        return new response(category,null).success(res);     
    })

}



//////
exports.create=(req,res)=>{

    var category=new Category();
    category.name=req.body.name;
    category.save(function(err){
        if(err){ 
            return new response(null,err).error500(res);
        }
        return new response(category,null).created(res);
        
    })
}
////////////////////////////////
exports.update=(req,res) =>{
   var id=req.params.category_id;
   var update=req.body;
   console.log(JSON.stringify(update))
   Category.findOneAndUpdate(id,update,(err,category)=>{
       if(err){ 
           return new response(null,err).error500(res);
       }
       return new response(category,null).success(res);
   })



}
//////
exports.delete=(req,res)=>{
    var id=req.params.category_id;
    console.log(id);
    Category.findOneAndDelete({_id:req.params.category_id},(err,category)=>{
        if(err){
            console.log("hata var")
            return new response(null,err).error500(res)
        }
        if(!category){
            console.log("hata category")
            return new response(null,err).notFound(res)
        }
        console.log("silindi");
        return new response(category,null).success(res);
        
    })
}


