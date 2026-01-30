// convert random number betweeen 1 & 3 to Rock, Paper, or Scissors string
function getComputerChoice() { 

    let rand = Math.floor(Math.random() * 3) + 1;

    switch (rand) {
        //when computer returns 1
        case 1:
            return "Rock";
        //when computer returns 2
        case 2:
            return "Paper";
        //when computer returns 3
        case 3:
            return "Scissors";
        //when computer doesn't return either 1-3
        default:
            return "not an option";
    }
}

//accept intput into a prompt, and then capitalize the answer
function getHumanChoice() {
    let answer = prompt("Choose rock, paper, or scissors: ");
    return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
    
}

//
function playRound(humanChoice, computerChoice, hScore, cScore) {
    if (humanChoice === computerChoice) {
        console.log("You tied! Try again.");
        return "tie";
    }
    
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You won!");
        return "human";
    } else {
        console.log("You lost!");
        return "computer";
    }
}

function playGame() {
    //initialize scores of human and computer
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("\n=== FINAL SCORE ===");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();