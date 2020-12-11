const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: "string",
});

const User = mongoose.model("user", userSchema);

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});

module.exports = User;
