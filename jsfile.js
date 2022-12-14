let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const result = document.querySelector(".result");
const outWin = document.querySelector('.out');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');


function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disable() {
    button.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        const p = document.createElement('p');
        result.appendChild(p);
        playerScoreSpan.innerText = playerScore += 1;

        p.innerText = `You win!!!`;

    } else if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        result.appendChild(p);
        p.innerText = `it\'s a tie. You both chose ${playerSelection}`;

    } else {
        const p = document.createElement('p');
        result.appendChild(p);
        computerScoreSpan.innerText = compScore += 1;
        p.innerText = `You lose!`;
    }

    result.innerHTML;
    return;
}

const theWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `Congratulations Player! You Win!`
        outWin.append(h2);
        disable();
    }

    if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You have lost to Me!`
        outWin.append(h2);
        disable();
    }
}


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, compScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, compScore);
})


scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    theWinner(playerScore, compScore);
})