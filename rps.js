const weapons = ['rock', 'paper', 'scissors']
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = weapons[Math.floor(Math.random() * weapons.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors')) {
        return 'It\'s a tie! No winner.'
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}.`
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')) {
        computerScore++;
        return `You lose... ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`
    }
}

function game() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            console.log('You won!')
        } else if (computerScore > playerScore) {
            console.log('You lost...')
        } else {
            console.log('DRAW')
        }
    }
}

for (let i = 0; i < 100; i++) {
    playRound(playerSelection, computerSelection);
    console.log(game());
}
