const clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleString().split(',')[1]);
}, 1000);