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

// This function randomly returns array values.
function getComputerChoice() {
    const choises = ['rock', 'paper', 'scissors'];
    return choises[Math.floor(Math.random() * 3)];
}

//This function plays a round, updates scores, and logs the winner.
function playRound(humanSelection) {
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        displayResult.textContent = `It's a tie! Both chose ${humanSelection}.`;
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore += 1;
        displayResult.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
    } else {
        computerScore += 1;
        displayResult.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
    // Update score display
    displayScore.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;

    // Check for game end
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            displayResult.textContent = `Congratulations! You win the game ${humanScore} to ${computerScore}.`;
        } else {
            displayResult.textContent = `You lose! The computer wins the game ${computerScore} to ${humanScore}.`;
        }

        // Disable buttons after the game ends
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}

// Create buttons and result display
const sect = document.createElement("section");
document.body.appendChild(sect);

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

const displayResult = document.createElement("div");
const displayScore = document.createElement("div");
document.body.appendChild(displayResult);
document.body.appendChild(displayScore);

btnRock.setAttribute("id", "rock");
btnPaper.setAttribute("id", "paper");
btnScissors.setAttribute("id", "scissors");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

sect.appendChild(btnRock);
sect.appendChild(btnPaper);
sect.appendChild(btnScissors);

// Add event listeners to buttons
btnRock.addEventListener('click', () => playRound('rock'));
btnPaper.addEventListener('click', () => playRound('paper'));
btnScissors.addEventListener('click', () => playRound('scissors'));

// Initialize display
displayScore.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;
displayResult.textContent = "Make your move!";


