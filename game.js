let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * 100)) % 3
    return choices[randomIndex]
}
