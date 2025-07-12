// Import the 'readline' module to handle command-line input/output.
const readline = require('readline');

// Configure the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * A simple command-line number guessing game in Node.js.
 * The computer picks a number between 1 and 100, and the user tries to guess it.
 */
function numberGuessingGame() {
  // Generate a random integer between 1 and 100.
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  // Initialize variables
  let attempts = 0;

  console.log("--- Welcome to the Number Guessing Game! ---");
  console.log("I have selected a secret number between 1 and 100.");
  console.log("Can you guess what it is?\n");

  // Create a function to ask for the user's guess.
  // This is necessary because Node.js I/O is asynchronous.
  const askForGuess = () => {
    rl.question("Enter your guess: ", (answer) => {
      const guess = parseInt(answer, 10); // Parse the string input to an integer
      
      // Increment the attempt counter
      attempts++;

      // Validate the input
      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a whole number.");
        askForGuess(); // Ask again
        return;
      }
      
      // Provide feedback to the user.
      if (guess < secretNumber) {
        console.log("Too low! Try again.");
        askForGuess(); // The guess is wrong, so we ask again.
      } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
        askForGuess(); // The guess is wrong, so we ask again.
      } else {
        // The guess is correct.
        console.log(`\n🎉 Congratulations! You guessed the number!`);
        console.log(`The secret number was ${secretNumber}.`);
        console.log(`It took you ${attempts} attempts.`);
        rl.close(); // End the game and close the readline interface.
      }
    });
  };

  // Start the game by asking for the first guess.
  askForGuess();
}

// Run the game
numberGuessingGame();
