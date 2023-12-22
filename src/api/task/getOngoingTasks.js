const Tasks = require("../../models/task");

const getOngoingTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({ category: "ongoing" });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getOngoingTasks;
