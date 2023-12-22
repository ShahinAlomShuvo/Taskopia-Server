const express = require("express");
const {
  getTodoTasks,
  addTodoTask,
  getOngoingTasks,
} = require("../../api/task");

const router = express.Router();
router.get("/get-todo-task", getTodoTasks);
router.get("/get-ongoing-task", getOngoingTasks);
router.post("/add-todo-task", addTodoTask);

module.exports = router;
