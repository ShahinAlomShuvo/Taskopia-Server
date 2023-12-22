const getTodoTasks = require("./getTodoTasks");
const addTodoTask = require("./addTodoTask");
const getOngoingTasks = require("./getOngoingTasks");
const getCompletedTasks = require("./getCompletedTasks");
const deleteTask = require("./deleteTask");
const getSingleTask = require("./getSingleTask");

module.exports = {
  getTodoTasks,
  addTodoTask,
  getOngoingTasks,
  getCompletedTasks,
  getSingleTask,
  deleteTask,
};
