let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const result = document.querySelector(".result");


function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        const p = document.createElement('p')
        result.appendChild(p);
        playerScore += 1;

        p.innerText = `You win!!!
        Player Score: ${playerScore}
        Computer Score: ${computerScore}`;

    } else if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        result.appendChild(p);
        p.innerText = `it\'s a tie. You both chose ${playerSelection}
        Player Score: ${playerScore}
        Computer Score:${computerScore}`;

    } else {
        const p = document.createElement('p');
        result.appendChild(p);
        computerScore += 1;
        p.innerText = `You lose!
        Player Score: ${playerScore}
        Computer Score: ${computerScore}`;
    }

    result.innerHTML;
    return;

}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})


scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
})