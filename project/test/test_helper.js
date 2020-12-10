const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user_test", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("good to go!");
});
