const Task = require("../Model/task");
const asyncWrapper =require("../middlewares/async");
const {customError} = require("../Errors/Custom_error");

const createTask =asyncWrapper(async(req,res) =>{
        const task =await Task.create(req.body);
       res.status(200).json({task,msg:"task is added to database "});
    });

const getAllTasks =asyncWrapper(async(req,res)=>{
        const task = await Task.find({}); 
     if(!task){
        return res.status(404).json({msg:"there is not presenting any tasks"})
     }  
     res.status(200).json({task});
    }); 

const getTask = asyncWrapper(async(req,res,next)=>{
    const {id:taskID}= req.params;
    const task =await Task.findOne({_id:taskID});
    if(!task){
        //1. //return res.status(404).json({msg:`there is not found ${taskID}`});
        //2.// const error = new Error("Not Found");
        // error.status = 404 ;
        // return next(error);
        //3//
        return next(customError(404,`no task with id ${id}`));
        
    }
    res.status(200).json({task});

});

const updateTask = asyncWrapper( async(req,res)=>{

    const{id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true});
    if(!task){
        return res.status(404).json({msg:`there is not found this id ${taskID}`})
    }    
    res.status(200).json({task});
});

const deleteTask =asyncWrapper(async(req,res)=>{
        const {id:taskID} =req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`there is not found this id ${taskID}` });
        }
        res.status(200).json({task,msg:"task is deleted successfully"});
    });

module.exports = {createTask,getAllTasks,getTask,updateTask,deleteTask};