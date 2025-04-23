const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter Something: ', (input) => {
  console.log("Input is: " + input);
  readline.close();
});