const route =require("express").Router();
const bookRouter= require("./book.route");

Router.get("/",(req,res)=>{
    res.json({msg:"hello from index"});
});
router.get("/home:id",(req, res)=>{
    const {id} = req.params;
    res.json({msg:`Hello from home id ${id}`});
});

Router.use("/books",bookRouter);
//Router.use("/users",bookRouter);
//Router.use("/roles",bookRouter);
//Router.use("/blogs",bookRouter);//always plural form

module.exports = router;

//creat another router for the following
// 1. blogs
// 2. roles
//3. categories 