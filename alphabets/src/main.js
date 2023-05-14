const fs = require("fs");
const { applyStyle } = require("./style-text.js");

const main = function () {
  const fileName = process.argv[2];
  const fileContents = fs.readFileSync(fileName, "utf-8");
  let [width, height, sentence, ...alphabets] = fileContents.trim().split("\n");
  width = +width;
  height = +height;
  alphabets = alphabets.join("\n");

  console.log(applyStyle(sentence, alphabets, width, height));
};

main();
