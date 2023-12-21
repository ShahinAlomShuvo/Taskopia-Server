const express = require("express");
const getTodoTasks = require("../../api/task/getTodoTasks");

const router = express.Router();
router.get("/get-todo-task", getTodoTasks);

module.exports = router;
