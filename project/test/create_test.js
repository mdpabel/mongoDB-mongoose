const assert = require("assert");
const User = require("../src/user");

describe("Creating a record", () => {
  it("Saves a user", () => {
    const pabel = new User({ name: "MD Pabel" });
    pabel.save();
  });
});
