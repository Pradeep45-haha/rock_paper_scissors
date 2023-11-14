let userScore = 0;
let computerScore = 0;
let currentRound = 0;



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let wepnChoice = "null";
    if (choice == 0) {
        wepnChoice = "rock";
    }
    if (choice == 1) {
        wepnChoice = "paper";
    }
    if (choice == 2) {
        wepnChoice = "scissors";
    }
    console.log(`computer choose ${wepnChoice}`);
    return wepnChoice;

}

function checkGameWinner(computerScore, userScore) {
    if (computerScore > userScore) {
        console.log("game winner is computer");
        return;
    }
    if (userScore > computerScore) {
        console.log("game winner is user");
        return;
    }
    if (userScore == computerScore) {
        console.log("draw");
        return;
    }
    return;
}

function checkRoundWinner(computerChoice, userChoice) {
    if (computerChoice == "rock") {
        if (userChoice == "rock") {
            return "draw";
        }
        if (userChoice == "scissors") {
            computerScore++;
            return "winner is computer";
        }
        if (userChoice == "paper") {
            userScore++;
            return "winner is user";
        }
        return "null";
    }
    if (computerChoice == "paper") {
        if (userChoice == "rock") {
            computerScore++;
            return "winner is computer";
        }
        if (userChoice == "scissors") {
            userScore++;
            return "winner is user";
        }
        if (userChoice == "paper") {
            return "draw";
        }
        return "null";
    }
    if (computerChoice == "scissors") {
        if (userChoice == "rock") {
            userScore++;
            return "winner is user";
        }
        if (userChoice == "scissors") {
            return "draw";
        }
        if (userChoice == "paper") {
            computerScore++;
            return "winner is computer";
        }
        return "null";
    }
    return "null";

}




let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");



rock.addEventListener("click", () => {
    if (currentRound <= 5) {
        currentRound++;
        let userChoice = "rock";
        console.log("user chose rock");
        let computerChoice = getComputerChoice();
        console.log(checkRoundWinner(computerChoice, userChoice));
        if (currentRound == 5) {
            checkGameWinner(computerScore, userScore);
            console.log("game over");
        }
        return;
    }



});

paper.addEventListener("click", () => {
    if (currentRound <= 5) {
        currentRound++;
        let userChoice = "paper";
        console.log("user chose paper");
        let computerChoice = getComputerChoice();
        console.log(checkRoundWinner(computerChoice, userChoice));
        if (currentRound == 5) {
            checkGameWinner(computerScore, userScore);
            console.log("game over");
        }
        return;
    }



});



scissors.addEventListener("click", () => {
    if (currentRound <= 5) {
        currentRound++;
        let userChoice = "scissors";
        console.log("user chose scissors");
        let computerChoice = getComputerChoice();
        console.log(checkRoundWinner(computerChoice, userChoice));
        if (currentRound == 5) {
            checkGameWinner(computerScore, userScore);
            console.log("game over");
        }
        return;
    }
});












