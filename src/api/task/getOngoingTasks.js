const Tasks = require("../../models/task");

const getOngoingTasks = async (req, res) => {
  try {
    const { email } = req.params;
    const tasks = await Tasks.find({
      category: "ongoing",
      email: decodeURI(email),
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getOngoingTasks;
