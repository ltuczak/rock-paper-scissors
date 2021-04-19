function computerPlay() {
    let rand = Math.random();
    if (rand <= 0.33333) {
        return "rock";
    } else if (rand >= 0.66666) {
        return "scissors";
    } else {
        return "paper";
    }
}


function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (player === "rock" && computer === "paper") {
        return "You lose! Paper beats rock!";
    } else if (player === "rock" && computer === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (player === "paper" && computer === "rock") {
        return "You win! Paper beats rock!";
    } else if (player === "scissors" && computer === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats paper!";
    }
}
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = computerPlay();

alert(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i <= 4; i++) {
        console.log(playRound(prompt("Rock, paper, or scissors?").toLowerCase(), computerPlay()));
    }
}

game();