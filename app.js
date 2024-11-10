const express = require("express");
const app = express();
const task = require("./Routes/task");
const connectDB=require("./DB/connect");
const notFound = require("./middlewares/notfound");
const errorHandlerMiddleWare = require("./middlewares/errorHandler");
require('dotenv').config();
const port = 5000;

app.use(express.json());
app.use('/api/v1/tasks',task);
app.use(notFound);
app.use(errorHandlerMiddleWare);

const start = ()=>{
    try{
    connectDB(process.env.MONGO_URL);
    app.listen(port,()=>console.log(`ther server is listening at ${port}`));
    }catch(error){
        console.log(error);
    }
}

start();