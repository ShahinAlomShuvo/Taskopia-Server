const Tasks = require("../../models/task");

const getTodoTasks = async (req, res) => {
  try {
    const { email } = req.params;
    const tasks = await Tasks.find({
      category: "todo",
      email: decodeURI(email),
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getTodoTasks;
