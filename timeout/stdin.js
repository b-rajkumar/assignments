// process.stdin.setEncoding("utf-8");

// const guessNumber = function () {
//   const readInterval = setInterval(() => {
//     const input = process.stdin.read();
//     if (input) {
//       onData(input);
//       clearInterval(readInterval);
//     }
//   }, 500);

//   return readInterval;
// };

// const onData = function (data) {
//   if (+data === randomNumber) {
//     console.log("You guessed the correct number !");
//   } else {
//     console.log("Try one more time");
//     guessNumber();
//   }
// };

// const randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
// guessNumber();