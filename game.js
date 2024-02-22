let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * 100)) % 3;
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Function returns the victory string, player score, and computer score
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // Player chooses rock
    if (playerSelection == "rock" && computerSelection == "rock") {
        return ["It's a tie! Rock and Rock", 0, 0];
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return ["You lose! Paper beats Rock", 0, 1];
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ["You win! Rock beats Scissors", 1, 0];
    }

    // Player chooses paper
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ["You win! Paper beats Rock", 1, 0];
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return ["It's a tie! Paper and Paper", 0, 0];
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ["You lose! Scissors beats Paper", 0, 1];
    }

    // Player chooses scissors
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ["You lose! Rock beats Scissors", 0, 1];
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ["You win! Scissors beats Paper", 1, 0];
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ["It's a tie! Scissors and Scissors", 0, 0];
    }
}

// Loop method
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
        const computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        playerScore += results[1];
        computerScore += results[2];
    }

    if (playerScore > computerScore) {
        return "Winnner! You won the most games"
    }
    else {
        return "Loser! The computer won the most games"
    }
}

console.log(playGame())
