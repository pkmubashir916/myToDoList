const mongoose = require("mongoose");

const taskSchema =new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true, "must enter name"],
        maxlenght:[20,"you crossed more than 20 characters"],
    },
    compleeted:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task',taskSchema);