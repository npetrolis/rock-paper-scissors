const resultText = document.querySelector('.result-text');
const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player-score-display')
const computerScoreDisplay = document.querySelector('.computer-score-display')
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const botRock = document.querySelector('.bot-rock');
const botPaper = document.querySelector('.bot-paper');
const botScissors = document.querySelector('.bot-scissors');
const endDisplay = document.querySelector('.end-display');
const replayButton = document.querySelector('.replay-game');
const endDisplayStatus = document.querySelector('.end-display-status');
const endDisplayMsg = document.querySelector('.end-display-msg');

let computerSelection;

// COMPUTER CHOICE

function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    choice = weapons[Math.floor(Math.random() * weapons.length)];
    switch (choice) {
        case 'rock': 
            botRock.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            botRock.style.color = 'black';
            botPaper.style.backgroundColor = '';
            botPaper.style.color = '';
            botScissors.style.backgroundColor = '';
            botScissors.style.color = '';
        break;
        case 'paper':
            botRock.style.backgroundColor = '';
            botRock.style.color = '';
            botPaper.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            botPaper.style.color = 'black';
            botScissors.style.backgroundColor = '';
            botScissors.style.color = '';
        break;
        case 'scissors':
            botRock.style.backgroundColor = '';
            botRock.style.color = '';
            botPaper.style.backgroundColor = '';
            botPaper.style.color = '';
            botScissors.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            botScissors.style.color = 'black';
        break;
    }
    
    return choice;
}

// GAME LOGIC

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        declareWinner();
    }
    else {
    
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
}



// SCORE KEEPING AND GAME INITIALIZATION

let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = `Player: ${playerScore}`;
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

function updateScore(playerScore, computerScore) {
    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
}

function playGame() {
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
}

// DETERMINING THE WINNER

function declareWinner() {
    if (playerScore > computerScore) {
        endDisplay.style.display = 'block';
        endDisplayStatus.textContent = 'VICTORY!';
        endDisplayMsg.textContent = `You won with a score of ${playerScore} to ${computerScore}. Press the button below to play again.`
    } else {
        endDisplay.style.display = 'block';
        endDisplayStatus.textContent = 'DEFEAT...';
        endDisplayMsg.textContent = `You lost with a score of ${playerScore} to ${computerScore}. Press the button below to try again!`
    }
}

// RESETTING THE GAME

replayButton.addEventListener('click', () => {
    window.location.reload();
})

// PLAYER CHOICE

rockButton.addEventListener('click', () => {
    playerSelection = 'rock'; 
    playGame();
    playerButtons(playerSelection);
});
paperButton.addEventListener('click', () => {
    playerSelection = 'paper'; 
    playGame();
    playerButtons(playerSelection);
});
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors'; 
    playGame();
    playerButtons(playerSelection);
});

// HELPER FUNCTIONS

function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return string;
}

function playerButtons(playerSelection) {
    switch (playerSelection) {
        case 'rock': 
            rockButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            rockButton.style.color = 'black';
            paperButton.style.backgroundColor = '';
            paperButton.style.color = '';
            scissorsButton.style.backgroundColor = '';
            scissorsButton.style.color = '';
        break;
        case 'paper':
            rockButton.style.backgroundColor = '';
            rockButton.style.color = '';
            paperButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            paperButton.style.color = 'black';
            scissorsButton.style.backgroundColor = '';
            scissorsButton.style.color = '';
        break;
        case 'scissors':
            rockButton.style.backgroundColor = '';
            rockButton.style.color = '';
            paperButton.style.backgroundColor = '';
            paperButton.style.color = '';
            scissorsButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            scissorsButton.style.color = 'black';
        break;
    }
}