const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Users = model("Users", UserSchema);

module.exports = Users;
