let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('rock');
const paperBtn = document.querySelector('paper');
const scissorsBtn = document.querySelector('scissors');

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disable() {
    button.forEach(elem => {
        elem.disabled = true;
    })
}
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = '';

    if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {

        playerScore += 1;

        result = 'You win!!!<br></br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;

    } else if (playerChoice == computerChoice) {
        result = 'it\'s a tie. You both chose ' + playerChoice + '<br></br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;

    } else {
        computerScore +=1;
        result = 'You lose!<br></br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;
    }

    document.getElementById('result').innerHTML = result;
    return;
}

rockBtn.addEventListener ('click'), () => {
    const computerSelection = computerChoice();
    const playerSelection = 'rock';
    playerRound(playerSelection, computerSelection);
}