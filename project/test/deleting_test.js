const assert = require("assert");
const User = require("../src/user");

describe("Deleting user", () => {
  var joe;
  beforeEach(() => {
    joe = new User({ name: "Joe" });
  });
  // remove one specific records
  it("model instance remove", (done) => {
    joe
      .remove()
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => assert(user === null));
    done();
  });

  // remove bunch of records with some given criteria

  it("class remove", (done) => {
    User.deleteMany({ name: "Joe" })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => assert(user === null));
    done();
  });

  // remove a bunch of record with some given criteria
  it("class remove by deleteOne", (done) => {
    User.deleteOne({ name: "Joe" })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => assert(user === null));
    done();
  });

  // remove a bunch of record with ID
  it("class remove by deleteOne", (done) => {
    User.findByIdAndDelete(joe._id)
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => assert(user === null));
    done();
  });
});
