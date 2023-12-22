const Tasks = require("../../models/task");

const updateSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority, deadline } = req.body;

    const result = await Tasks.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
        priority: priority,
        deadline: deadline,
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateSingleTask;
