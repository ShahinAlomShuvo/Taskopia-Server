const Tasks = require("../../models/task");

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Tasks.findById(id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getSingleTask;
