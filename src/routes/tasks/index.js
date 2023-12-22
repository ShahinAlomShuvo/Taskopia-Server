const express = require("express");
const { getTodoTasks, addTodoTask } = require("../../api/task");

const router = express.Router();
router.get("/get-todo-task", getTodoTasks);
router.post("/add-todo-task", addTodoTask);

module.exports = router;
