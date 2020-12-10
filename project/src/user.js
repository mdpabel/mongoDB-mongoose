const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: "string",
});

const User = mongoose.model("user", userSchema);

module.exports = User;
