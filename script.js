function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33)
        return "rock";
    else if (choice > 0.33 && choice <= 0.66)
        return "scissors";
    else
        return "paper";
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper or scissors:");
    let keepGoing = true;
    while (keepGoing) {
        if (choice === "rock" || choice === "paper" || choice === "scissors")
            keepGoing = false;
        else
            choice = prompt("Try again: rock, paper or scissors:");
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;