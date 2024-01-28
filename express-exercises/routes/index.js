const router = require(`express`).Router();
const bookRouter =require("./book.route");

const apiIndex ="/api/v1";

router.get("/",( req,res,next )=>{
    try{
    res.json({msg:"Hello form index"});
} catch(e) {
    next(e);
}
});

router.use(`${apiIndex}/books`,bookRouter);

module.exports = router;