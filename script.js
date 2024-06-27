function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33)
        return "rock";
    else if (choice > 0.33 && choice <= 0.66)
        return "scissors";
    else
        return "paper";
}

let test = getComputerChoice();
console.log(test);