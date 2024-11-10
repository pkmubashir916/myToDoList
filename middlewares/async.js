
// higher order function 
// there "wrap" is another function from controller 
const asyncWrapper = (wrap) =>{

return async(req,res,next) =>{  // created an anonimous function 
    try {
        await wrap(req,res,next); // 

    } catch (error) {
        
        next(error);
    }
}
}

module.exports = asyncWrapper;