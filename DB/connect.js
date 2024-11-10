const mongoose = require("mongoose");


const connectDB = (url) =>{
    mongoose.connect(url)
    .then(()=>console.log("database is connected "))
    .catch((error)=>console.log(error))
}

module.exports = connectDB;