const response= require('../response');

Book=require("../models/bookModel");

exports.list=(req,res) =>{
    Book.find({},(err,books)=>{
        if(err){
            console.log("hata");
            return new response(null,err).error500(res);
        }
        return new response(books,null,).success(res);
    })
}
exports.getById=(req,res) =>{
    Book.find({id:req.params.category_id},(err,book)=>{
        if(err){
            return new response(null,err).notFound(res);
        }
        return new response(book,null).success(res);
    })
}

exports.create=(req,res) =>{
    console.log(req.body);
    const{
        title,
        author,
        price,
        stock,
        categoryBy
    }=req.body;

    let book=new Book();
    book.title=title;
    book.author=author;
    book.price=price;
    book.stock=stock;
    book.categoryBy=categoryBy.id;

    book.save((err) => {
        if(err){
            return new response(null,err).error500(res);
        }
        return new response(book,null).created(res);
    });
}

exports.update=(req,res)=>{

        var id=req.params.id;
        var update=req.body;
        Book.findOneAndUpdate(id,update,(err,book)=>{
            if(err){
                console.log("hata");
                return new response(null,err).error500(res);
            }
            console.log(req.body)
            return new response(book,null).success(res);
        })

}
exports.delete=(req,res)=>{
    var id=req.params.id;
    Book.findOneAndDelete(id,(err,book)=>{
        if(err){ 
            return new response(null,err).error500(res);
        }
        return new response(book,null).success(res);
    })
}