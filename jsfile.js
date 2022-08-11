let playerScore = 0;
let computerScore = 0;
let button = document.querySelectorAll('input');

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

        if (playerScore == 5) {
            result = 'Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore + '<br><br>You won the game!<br><br><br><br>The page will be reloaded in 5 seconds.';
            disable();
            
            setTimeout(function() {
                location.reload(true);
            }, 5000);
            
            
        }

    } else if (playerChoice == computerChoice) {
        result = 'it\'s a tie. You both chose ' + playerChoice + '<br></br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;

    } else {
        computerScore +=1;
        result = 'You lose!<br></br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;

        if (computerScore == 5) {
            result = 'Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore + '<br><br>I won the game!<br><br>The page will be reloaded in 5 seconds.';
            disable();

            setTimeout(function() {
                location.reload(true);
            }, 5000);

        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

button.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
