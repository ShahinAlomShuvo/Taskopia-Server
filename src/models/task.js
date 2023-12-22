const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "",
  },
});

const Tasks = model("todoTask", TaskSchema);
module.exports = Tasks;
