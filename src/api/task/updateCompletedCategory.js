const Tasks = require("../../models/task");

const updateCompletedCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Tasks.findByIdAndUpdate(
      id,
      {
        category: "todo",
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCompletedCategory;
