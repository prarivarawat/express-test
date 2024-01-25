const router = require("express").Router();
const {numberFormatter} = require("../utils/numberFormatter");

router.get("/",(req, res)=>{
    res.json({msg:"hello from book"});

});

router.post("/:number",(req,res)=>{
    //req.prams=>/:id=>req.params.id
    //req.qurrey=>7key=value
    //req.body=>raw json ({"key": "value"})
    console.log({query: req.query});
    console.log( {body: req.body});
    console.log({params:req.params});
    const result =numberFormatter(req.query.number||req.body.number
        ||req.params.number);
        res.json({msg:result});

});

router.get("/:id",(req, res)=>{
    const {id} = req.params;
    res.json({msg:`Hello from book id ${id}`});
});

module.expores =router;
//get 
//Post , Put, Delet, Patch