const express = require("express");
const indexRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/", indexRouter);

app.use((err,req,res,next)=>{
  
    err = err ? err.toString(): "Something went worng"
    res.status(500).json({msg: err});
});



//printing hello world (route 1)
//app.get("/",(req, res)=>{
   // res.json({msg:"Hello World"});
//});
//route 2
//app.get("/fname/:lname",(req, res)=>{
    //const fname = req.params.fname;
    //const lname =req.params.lname;
   // res.json({msg: `hello ${name} ${lname}`});
//});

//route3
//app.get("/a/:b",(req, res)=>{
    //sum a and b parameter
  //  const {a,b} = req.params;
    //const c = Number (a)+ Number(b);

    //res.json({msg:`The sum is ${c}`});
//});


app.listen(8000, ()=>{
    console.log("application is running");
});


// const arrA = ["pasta","pizza","ice-ceam"];
// const arrB = ["pasta","pizza","ice-cream"];
// //output=>['pasta', 'ice-cream']

// //write a js function to compare and find the common item in 2 array using cb function

// const result = (solution)=>{
//     return solution;
// };
// const itemFinder =(arr1, arr2, result)=>{
//     const answer = aee1.filter((food)=> arr2.includes(food));
//     return result(answer);
// };
// const response = itemFinder(arrA,arrB,result);
// console.log({response});








//{

   // "name":"prativa rawat",
    //"age" : 19,
  //  "gender": "F"
//}
//get => server yo fe
//post => fe to server
//delete= fe to server delet my 1 data
//Put => fe to server ; fix majority property of data
//PATCH => fe to server fix 1 single property of data