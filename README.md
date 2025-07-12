# JavaScript (Node.js) - Number Guessing Game

A simple, interactive command-line game built with Node.js where the user tries to guess a secret number chosen by the computer.

## Description

This script generates a random integer between 1 and 100. It then uses Node.js's `readline` module to prompt the user to guess the number. After each guess, the program provides feedback, telling the user if their guess was "Too high!" or "Too low!". Once the user guesses the correct number, the game ends and displays a congratulatory message along with the total number of attempts.

The code is structured around an `askForGuess` function to handle the asynchronous nature of command-line input in Node.js.

## Features

-   Generates a random secret number using `Math.random()`.
-   Accepts user input from the command line via the `readline` module.
-   Provides hints (too high/too low).
-   Tracks the number of guessing attempts.
-   Handles invalid (non-numeric) input gracefully.

## Requirements

-   [Node.js](https://nodejs.org/) (which includes npm)

## How to Run

1.  Save the code as `numberGuesser.js`.
2.  Open your terminal or command prompt.
3.  Navigate to the directory where you saved the file.
4.  Run the script with the following command:

    ```bash
    node numberGuesser.js
    ```

5.  Follow the on-screen prompts to play the game.
