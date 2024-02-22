let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * 100)) % 3;
    return choices[randomIndex];
}

function capitalise(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function playRound(playerSelection, computerSelection) {
    // Function returns the victory string, player score, and computer score
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    let gameResult;

    // Player ties with computer
    if (playerSelection === computerSelection) {
        gameResult = "tie";
    }

    // Player chooses rock
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            gameResult = "win";
        }
        else {
            gameResult = "loss";
        }
    }

    // Player chooses paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            gameResult = "win";
        }
        else {
            gameResult = "loss";
        }
    }

    // Player chooses scissors
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            gameResult = "win";
        }
        else {
            gameResult = "loss";
        }
    }

    // Compute/Form the return results
    let victoryString, playerScore, computerScore;
    if (gameResult === "win") {
        victoryString = "You win! " + capitalise(playerSelection) + " beats " + capitalise(computerSelection)
        playerScore = 1;
        computerScore = 0;
    }
    else if (gameResult === "loss") {
        victoryString = "You lose! " + capitalise(computerSelection) + " beats " + capitalise(playerSelection)
        playerScore = 0;
        computerScore = 1;
    }
    else if (gameResult === "tie") {
        victoryString = "It's a tie! " + capitalise(playerSelection) + " and " + capitalise(computerSelection)
        playerScore = 0;
        computerScore = 0;
    }

    return [victoryString, playerScore, computerScore]
}

// Loop method
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
        const computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        console.log(results[0])
        playerScore += results[1];
        computerScore += results[2];
    }

    if (playerScore > computerScore) {
        return "Winnner! You won the most games"
    }
    else if (playerScore < computerScore) {
        return "Loser! The computer won the most games"
    }
    else {
        return "It's a tie!"
    }
}

console.log(playGame())
