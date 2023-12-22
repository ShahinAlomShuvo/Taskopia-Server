const Tasks = require("../../models/task");

const addTodoTask = async (req, res) => {
  try {
    const task = req.body;
    const result = await Tasks.create(task);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = addTodoTask;
