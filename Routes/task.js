const express = require("express");
const router = express.Router();
const {createTask,getAllTasks,getTask,updateTask,deleteTask} = require("../Controller/task");

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports=router;