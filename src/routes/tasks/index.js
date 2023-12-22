const express = require("express");
const {
  getTodoTasks,
  addTodoTask,
  getOngoingTasks,
  getCompletedTasks,
} = require("../../api/task");

const router = express.Router();
router.get("/get-todo-task/:email", getTodoTasks);
router.get("/get-ongoing-task/:email", getOngoingTasks);
router.get("/get-completed-task", getCompletedTasks);
router.post("/add-todo-task", addTodoTask);

module.exports = router;
