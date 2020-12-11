const assert = require("assert");
const User = require("../src/user");

describe("Finding user", () => {
  let pabel;

  beforeEach((done) => {
    pabel = new User({ name: "MD Pabel" });
    pabel.save().then(() => {
      done();
    });
  });

  it("Find all users with a name of pabel", (done) => {
    User.find({ name: "MD Pabel" }).then((users) => {
      assert(users[1]._id.toString() === pabel._id.toString());
      done();
    });
  });

  it("Find a user with specified id", (done) => {
    User.findOne({ _id: pabel._id }).then((user) => {
      assert(user.name === pabel.name);
      done();
    });
  });
});
