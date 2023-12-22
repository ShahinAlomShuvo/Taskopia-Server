const Tasks = require("../../models/task");

const getCompletedTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({ category: "completed" });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getCompletedTasks;
