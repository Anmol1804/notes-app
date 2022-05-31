const fs = require("fs");

const writeAndAppend = function () {
  fs.writeFileSync("notepad.txt", "I am anmol hehhe..  LOL");

  fs.appendFileSync("notepad.txt", "\nThis is appended line");
};

module.exports = writeAndAppend;
