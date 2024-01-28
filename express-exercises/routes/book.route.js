const router = require("express");

router.get("/",(req,res,next) => {
    try{
        res.json({msg:"hello from books"})
    }catch(e){
        next(e);
    }
});

router.post("/",(req,res,next) => {
    try{
        res.json({msg:"create new books"})
    }catch(e){
        next(e);
    }
});

router.put("/:id",(req,res,next) => {
    try{
        const {id}= req.params;
        if(!id)throw new Error("Id missing");
        //logic
        res.json({msg:"update multiple props of books"})
    }catch(e){
        next(e);
    }
});

router.patch("/:id",(req,res,next) => {
    try{
        const {id}= req.params;
        if(!id)throw new Error("Id missing");
        res.json({msg:"update single item of books"})
    }catch(e){
        next(e);
    }
});

router.delete("/:id",(req,res,next) => {
    try{
        const {id}= req.params;
        if(!id)throw new Error("Id missing");
        res.json({msg:"delete the  books"})
    }catch(e){
        next(e);
    }
});


module.exports = router;