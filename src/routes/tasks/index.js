const express = require("express");
const {
  getTodoTasks,
  addTodoTask,
  getOngoingTasks,
  getCompletedTasks,
  deleteTask,
  getSingleTask,
  updateSingleTask,
  updateTodoCategory,
  updateOngoingCategory,
  updateCompletedCategory,
} = require("../../api/task");

const router = express.Router();
router.get("/get-todo-task/:email", getTodoTasks);
router.get("/get-ongoing-task/:email", getOngoingTasks);
router.get("/get-completed-task/:email", getCompletedTasks);
router.get("/single-todo-contest/:id", getSingleTask);
router.post("/add-todo-task", addTodoTask);
router.patch("/update-todo-task/:id", updateSingleTask);
router.patch("/update-todo-category/:id", updateTodoCategory);
router.patch("/update-ongoing-category/:id", updateOngoingCategory);
router.patch("/update-completed-category/:id", updateCompletedCategory);
router.delete("/todo-task/:id", deleteTask);

module.exports = router;
