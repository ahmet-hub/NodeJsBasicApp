let express= require("express");
let bodyParser=require("body-parser");
let mongoose=require("mongoose");
const dotenv= require("dotenv");
let cors=require("cors");
let apiRouter=require("./api-router");
let passport=require('passport');


dotenv.config();

let port=process.env.port; 
let dbcon=process.env.cloud_mongodb_con;


let app=new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// app.use((req,res,next )=>{
// res.locals.passportFailure=req.flash('error');
// res.locals.passportSuccess=req.flash('success');
// next();




mongoose.connect(dbcon,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var connection=mongoose.connection;


if(!connection) console.log("mongo db'ye baglanilamadi.")
else{ 
    console.log("mongo db ye basariyla baglanildi")
}

app.use("/api",apiRouter);


app.get("/",(req,res)=>{
    res.send("Hello world.")
})

app.post("/",(req,res)=>{
    res.send("Hello world. Post")
    console.log("asdsad")
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
      console.log("111");
    res.redirect('/');
  });


//   app.get('/login',(req,res) => {

//     res.send("Helloxxx");
//   })



app.listen(port,()=>{
    console.log("node js calisiyor...")
})


