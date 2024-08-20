// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the result of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Function to handle button click
function handleButtonClick(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Adding event listeners to buttons
document.getElementById('rock').addEventListener('click', handleButtonClick);
document.getElementById('paper').addEventListener('click', handleButtonClick);
document.getElementById('scissors').addEventListener('click', handleButtonClick);