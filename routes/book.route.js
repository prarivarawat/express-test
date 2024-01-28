const router = require("express").Router();
const {numberFormatter} = require("../utils/numberFormatter");

router.get("/",(req, res)=>{
    res.json({msg:"hello from book"});

});
router.get("/:id",(req, res ,next) => {
    try{
    const { id } = req.params;
    const { name } = req.body;
    if(!id || !name) throw new Error("Id or name is missing");
    res.json({msg:`Hello from book id ${id}`});
}catch(e){
    next(e);
}
});

router.post("/:number",(req,res)=>{
    //req.prams=>/:id=>req.params.id
    //req.qurrey=>7key=value
    //req.body=>raw json ({"key": "value"})
    //console.log({query: req.query});
    //console.log( {body: req.body});
    //console.log({params:req.params});
    const result =numberFormatter(req.query.number||req.body.number
        ||req.params.number);
        res.json({msg: result});

});

module.exports =router;
//get 
//Post , Put, Delet, Patch