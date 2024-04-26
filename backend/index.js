var express = require("express");
const bodyparser = require("body-parser");
const multer  = require('multer');

const PORT = 8080;
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads');
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({storage:storage});


app.post("/fileupload",upload.single('file'),(req,res)=>{
  console.log("server conect with fornt end ");

  res.json({filename:req.file.originalname});
})

app.listen(PORT , (req,res)=>{
console.log("app is runing 8000");
});

// const mongoose = require("mongoose");
// require("dotenv").config();


// mongoose.connect('mongodb://127.0.0.1:27017/cloudinary');

// app.use("/product",prorouter);
// const route=require("./route/proRouter")

// app.use("/product", route)

// var productRouter = require("./router/productRoute.js")
// const prorouter = require("./route/proRouter.js")
