const setTimer = function(seconds) {
  console.log(seconds);

  if(seconds === 0) {
    console.log('Times up');
    return;
  }

  setTimeout(() => {
    setTimer(seconds - 1);
  }, 1000);
};

console.log('Timer started');
setTimer(10);