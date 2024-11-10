class customErrorAPI extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode; 
    }
}

const customError=(statusCode,message) =>{
   return new customErrorAPI(statusCode,message);
}

module.exports = {customError,customErrorAPI};