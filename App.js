const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 90);

let guesses = 0;

do {
  const guess = Number(prompt("Guess the number (0 - 100): "));

  if (guess == target) {
    console.log("yay you do it");
    return;
  }
  else if (guess < target) {
    console.log("Too low");
    guesses += 1;
  }
  else if (guess > target) {
    console.log("too high");
    guesses += 1;
  }
  else {
    console.log("Please input a valid number within the range.");
    guesses += 1;
  }
}
while (guesses < 10);

console.log("Game Over!")