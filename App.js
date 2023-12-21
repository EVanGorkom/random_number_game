const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 90);

let guesses = 0;

do {
  console.log("\n");
  const guess = Number(prompt("Guess the number (0 - 100): "));
  let triesRemaining = 5 - guesses

  if (guess == target) {
    console.log("Yay you do it!");
    return;
  }
  else if (guess < target) {
    guesses += 1;
    console.log("Too low. Try again. \n" + triesRemaining + " tries remaining.");
  }
  else if (guess > target) {
    guesses += 1;
    console.log("Too high. Try again. \n" + triesRemaining + " tries remaining.");
  }
  else {
    guesses += 1;
    console.log("Please input a valid number within the range. \n" + triesRemaining + " tries remaining.");
  }
}
while (guesses < 5);

console.log("Game Over!")