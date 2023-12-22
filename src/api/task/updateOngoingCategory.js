const Tasks = require("../../models/task");

const updateOngoingCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Tasks.findByIdAndUpdate(
      id,
      {
        category: "completed",
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateOngoingCategory;
