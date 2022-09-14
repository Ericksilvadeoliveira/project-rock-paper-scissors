let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const result = document.querySelector(".result");


function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
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

const theWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        result.appendChild(h2);
        p.innerText = `Congratulations Player! You Win!`;
    }

    if (computerScore === 5) {
        const h2 = document.createElement('h2');
        result.appendChild(h2);
        p.innerText = `You have lost to Me!`;
    }
}


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, computerScore);
})


scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, computerScore);
})