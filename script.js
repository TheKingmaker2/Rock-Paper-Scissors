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

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Paper");
        humanScore++;
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }

    else if (humanChoice == "rock" && computerChoice == "rock")
        console.log("It's a draw! Both choices are Rock");

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper");
        humanScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "scissors")
        console.log("It's a draw! Both choices are Scissors");

    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "paper")
        console.log("It's a draw! Both choices are Paper");
}

