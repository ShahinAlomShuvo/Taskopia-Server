const getTodoTasks = require("./getTodoTasks");
const addTodoTask = require("./addTodoTask");
const getOngoingTasks = require("./getOngoingTasks");
const getCompletedTasks = require("./getCompletedTasks");
const deleteTask = require("./deleteTask");
const getSingleTask = require("./getSingleTask");
const updateSingleTask = require("./updateSingleTask");

module.exports = {
  getTodoTasks,
  addTodoTask,
  getOngoingTasks,
  getCompletedTasks,
  getSingleTask,
  deleteTask,
  updateSingleTask,
};
