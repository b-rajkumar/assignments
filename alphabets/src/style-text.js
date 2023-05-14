const applyStyle = function (sentence, letters, width, height) {
  const stylizedLetters = {
    "A": stylizeLetter(letters, 0, width, height),
    "B": stylizeLetter(letters, 1, width, height),
    "C": stylizeLetter(letters, 2, width, height),
    "D": stylizeLetter(letters, 3, width, height),
    "E": stylizeLetter(letters, 4, width, height),
    "F": stylizeLetter(letters, 5, width, height),
    "G": stylizeLetter(letters, 6, width, height),
    "H": stylizeLetter(letters, 7, width, height),
    "I": stylizeLetter(letters, 8, width, height),
    "J": stylizeLetter(letters, 9, width, height),
    "K": stylizeLetter(letters, 10, width, height),
    "L": stylizeLetter(letters, 11, width, height),
    "M": stylizeLetter(letters, 12, width, height),
    "N": stylizeLetter(letters, 13, width, height),
    "O": stylizeLetter(letters, 14, width, height),
    "P": stylizeLetter(letters, 15, width, height),
    "Q": stylizeLetter(letters, 16, width, height),
    "R": stylizeLetter(letters, 17, width, height),
    "S": stylizeLetter(letters, 18, width, height),
    "T": stylizeLetter(letters, 19, width, height),
    "U": stylizeLetter(letters, 20, width, height),
    "V": stylizeLetter(letters, 21, width, height),
    "W": stylizeLetter(letters, 22, width, height),
    "X": stylizeLetter(letters, 23, width, height),
    "Y": stylizeLetter(letters, 24, width, height),
    "Z": stylizeLetter(letters, 25, width, height)
  };

  const stylizedCharacters = sentence
    .split("")
    .map((letter) =>
      stylizedLetters[letter].split(
        "\n"
      )
    );

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
