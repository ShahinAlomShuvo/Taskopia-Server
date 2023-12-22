const Tasks = require("../../models/task");

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Tasks.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteTask;
