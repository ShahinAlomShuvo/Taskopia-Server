const Tasks = require("../../models/task");

const getTodoTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    console.log(tasks);

    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getTodoTasks;
