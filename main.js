const resultText = document.querySelector('.result-text');
const result = document.querySelector('.result');
const gameScore = document.querySelector('.game-score');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let computerSelection;


// COMPUTER CHOICE

function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    choice = weapons[Math.floor(Math.random() * weapons.length)]
    return choice;
}

// GAME LOGIC

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (
    (playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'scissors' && computerSelection == 'scissors')
    ) {
        result.textContent = `DRAW`
        resultText.textContent = 'It\'s a tie! No winner.'
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
        playerScore++;
        result.textContent = `WIN!`
        resultText.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
    } else if (
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'rock' && computerSelection == 'paper')
        ) {
        computerScore++;
        result.textContent = `LOSS`
        resultText.textContent = `You lose... ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }
}


// SCORE KEEPING AND GAME INITIALIZATION

let playerScore = 0;
let computerScore = 0;
gameScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

function updateScore(playerScore, computerScore) {
    gameScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
}

function playGame() {
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
}

// PLAYER CHOICE

rockButton.addEventListener('click', () => {playerSelection = 'rock'; playGame();});
paperButton.addEventListener('click', () => {playerSelection = 'paper'; playGame();});
scissorsButton.addEventListener('click', () => {playerSelection = 'scissors'; playGame();});

// HELPER FUNCTIONS

function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return string;
}