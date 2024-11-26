// Global variables to keep track of olayers score.

let humanScore = 0;
let computerScore = 0;

/* A function that will randomly return one of the following string values: 
“rock”, “paper” or “scissors”.
 */

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);

    if (randomValue === 0) {
        return 'rock';
    } else if (randomValue === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// A function that takes the user choice and returns it.

function getHumanChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (!userChoice) {
        prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}