let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = '';

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1;

        result = 'You win!!!';

        if (playerScore == 5) {
            result += 'You won the game!';
        }
    } else if (playerSelection == computerSelection) {
        'it\'s a tie. You both chose ' + playerSelection;
    }
}
