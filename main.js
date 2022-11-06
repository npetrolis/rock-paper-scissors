const para = document.querySelector('p');
const title = document.querySelector('h1');
const select = document.querySelector('select');
let computerSelection;

select.addEventListener('change', playGame);

function playerChoice() {
    if (select.value == 'rock') {
        playerSelection = 'rock';
        return playerSelection;
    } else if (select.value == 'paper') {
        playerSelection = 'paper';
        return playerSelection;
    } else if (select.value == 'scissors') {
        playerSelection = 'scissors';
        return playerSelection;
    }
}

function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    choice = weapons[Math.floor(Math.random() * weapons.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerChoice();
    computerSelection = getComputerChoice();
    if (
    (playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'scissors' && computerSelection == 'scissors')
    ) {
        title.textContent = `DRAW`
        para.textContent = 'It\'s a tie! No winner.'
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
        title.textContent = `WIN!`
        para.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
    } else if (
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'rock' && computerSelection == 'paper')
        ) {
        title.textContent = `LOSS`
        para.textContent = `You lose... ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }
}

function playGame() {
    playerChoice();
    playRound(playerSelection, computerSelection);
}


//HELPER FUNCTIONS

function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return string;
}