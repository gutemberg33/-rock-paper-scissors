/*
   Rock, Paper, Scissors Game in JavaScript (Console-based)
   - Implements logic to get human and computer choices.
   - Plays a single round, updates scores, and logs the winner.
   - Includes a 5-round game mode that tracks scores and declares a winner.

   Author: [Gutu Fetene Balcha]
   Date: [28/11/2024]
*/


// Global variables to keep track of players score.
let humanScore = 0;
let computerScore = 0;

// This function randomly returns string values.
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

//This function returns user choice.
function getHumanChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}

//This function plays a round, updates scores, and logs the winner.
function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    if (humanSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${humanSelection}.`);
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore += 1;
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
    } else {
        computerScore += 1;
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
    }
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}


function playGame() {
    playRound();
}

// This function plays rounds, updates scores, and declares a winner at the end.
function PlayFiveRounds() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! The computer wins the game with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log("It's a tie! No one wins.");
    }
}

// Call PlayFiveRound to play the game
PlayFiveRounds();