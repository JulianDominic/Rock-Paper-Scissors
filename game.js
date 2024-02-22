let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * 100)) % 3;
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // Player chooses rock
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie! Rock and Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    }

    // Player chooses paper
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! Paper and Paper";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
    }

    // Player chooses scissors
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! Scissors and Scissors";
    }
}

const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'")
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
