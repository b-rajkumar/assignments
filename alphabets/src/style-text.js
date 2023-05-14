const applyStyle = function (sentence, letters, width, height) {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const stylizedLetters = alphabets.reduce((stylizedLetters, letter, index) => {
    stylizedLetters[letter] = stylizeLetter(letters, index, width, height);

    return stylizedLetters;
  }, {});

  const stylizedCharacters = sentence
    .split("")
    .map((letter) => stylizedLetters[letter].split("\n"));

  return join(stylizedCharacters, height);
};

const join = function (stylizedCharacters, height) {
  let stylizedSentence = "";

  for (let line = 0; line < height; line++) {
    for (let i = 0; i < stylizedCharacters.length; i++) {
      stylizedSentence += stylizedCharacters[i][line];
    }
    stylizedSentence += "\n";
  }

  return stylizedSentence;
};

const stylizeLetter = function (letters, letterPosition, width, height) {
  let letter = "";
  let lineStartPos = letterPosition * width;
  const delta = width * 27;

  for (let line = 0; line < height; line++, lineStartPos += delta + 1) {
    letter += letters.slice(lineStartPos, lineStartPos + width) + "\n";
  }
  return letter;
};

exports.applyStyle = applyStyle;
