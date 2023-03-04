
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissors";
}


function playRound(computerSelection, playerSelection) {

    if (computerSelection == playerSelection) {
        return "Tie";
        // console.log("Tie");
    }

    if(

        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")

    ) return "You Won"
    // console.log("You won");

    if(

        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")

    ) return "Computer Won"
    // console.log("computer won");
}

let computerScore = 0;
let playerScore = 0;

const answer = document.querySelector(".results");

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const winner = playRound(getComputerChoice(), "rock");

    if(winner == "Computer Won") {
        computerScore += 1;
    }
    if(winner == "You Won") {
        playerScore += 1;
    }

    answer.innerHTML = `${winner} <br> You: ${playerScore} Computer: ${computerScore}`;

    if(playerScore == 5) {
        answer.textContent = "YOU WON THE GAME"
    }
    if(computerScore == 5) {
        answer.textContent = "COMPUTER WON THE GAME"
    }

})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const winner = playRound(getComputerChoice(), "paper");
    
    if(winner == "Computer Won") {
        computerScore += 1;
    }
    if(winner == "You Won") {
        playerScore += 1;
    }

    answer.innerHTML = `${winner} <br> You: ${playerScore} Computer: ${computerScore}`;

    if(playerScore == 5) {
        answer.textContent = "YOU WON THE GAME"
    }
    if(computerScore == 5) {
        answer.textContent = "COMPUTER WON THE GAME"
    }
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const winner = playRound(getComputerChoice(), "scissors");
    
    if(winner == "Computer Won") {
        computerScore += 1;
    }
    if(winner == "You Won") {
        playerScore += 1;
    }

    answer.innerHTML = `${winner} <br> You: ${playerScore} Computer: ${computerScore}`;

    if(playerScore == 5) {
        answer.textContent = "YOU WON THE GAME"
    }
    if(computerScore == 5) {
        answer.textContent = "COMPUTER WON THE GAME"
    }
})


