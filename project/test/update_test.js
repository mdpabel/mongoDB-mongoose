const assert = require("assert");
const User = require("../src/user");

describe("Updating", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("Instance update using set and save", (done) => {
    joe.set("name", "MD");
    joe
      .save()
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "MD");
        done();
      });
  });
});
