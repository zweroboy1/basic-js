const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  values: [],
  getLength() {
    return values.length;
  },
  addLink(value) {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position == "number" && position > 0 && position <= this.values.length) {
      this.values.splice(position - 1, 1);
      return this;
    } else {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.values.map((el) => `( ${el} )`).join("~~");
    this.values = [];
    return chainString;
  },
};

module.exports = {
  chainMaker,
};
