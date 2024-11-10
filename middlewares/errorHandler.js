const {customErrorAPI} = require("../Errors/Custom_error"); 

const errorHandlerMiddleWare = (err,req,res,next) =>{

    // 1.//return res.status(500).json({msg:"some thing went wrong"});
    //   2.//return res.status(err.status).json({msg:err.message});

    if(err instanceof customErrorAPI){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:"some thing went wrong!, please try again later "});
}
module.exports = errorHandlerMiddleWare;