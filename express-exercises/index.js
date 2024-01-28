//create an express application

//create  a route called  users

// print ALL the requests body, params and query
//use all methods Get Puts Patch Delect
//connect  this APIs with params

const express = require("express");
const indexRouter = require("./routes");
 const app =express();

 app.use(express.json());
 app.use("/" , indexRouter)

 app.use((err,req,res,next)=>{
    const errMsg =err? err.toString():"Something went wrong";
    res.status(500).json({ msg: errMsg});
 });

 app.listen(7070, ()=>{
    console.log("App is running on port 7070.Url is http://localhost:7070")
 });


