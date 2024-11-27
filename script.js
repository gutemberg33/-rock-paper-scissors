/* This is a javascript code for the rock, paper, scissors game. This game will be played entirely in the console.
   It contains logic to get human and computer choices, plays a single round, increments the round winner’s score 
   and logs a winner announcement. A function to play 5 rounds, keeps track of the scores and declares a winner at the end.
 */

// Global variables to keep track of players score.
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

    while (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}

/* A function that takes the human and computer player choices as arguments, 
plays a single round, increments the round winner’s score and logs a winner announcement. */
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

// A function that calls playRound 
function playGame() {
    playRound();
}

// A function to play 5 rounds, keeps track of the scores and declares a winner at the end.
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