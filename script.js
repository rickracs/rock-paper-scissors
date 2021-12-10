let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let pick = Math.floor(Math.random() * 3) + 1;
    if (pick == 1) return "rock"
    else if (pick == 2) return "paper"
    return "scissors";
}

function capitalize(pick) {
    return pick.charAt(0).toUpperCase() + pick.slice(1);
}

function playRound(e) {
    
    let computerSelection = computerPlay();
  let playerSelection = e.originalTarget.id;
  
    if (playerSelection == computerSelection) return "It's a DRAW!"
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        //return
        yourScore.textContent = "Your score: " + playerWins;
        result.textContent = "You WON! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ".";
    }
    else {
        computerWins++;
        //return 
        computerScore.textContent = "Computer score: "+computerWins;
        result.textContent = "You LOST! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + ".";
    }
}


const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector(".lastGame");
const buttons = document.querySelectorAll("button");

//add listener for button click here, call function playRound
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});



//add reset game after 5 wins







/*
function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound());
    }
    console.log("Your score: " + playerWins);
    console.log("Computer Score: " + computerWins);
}

game();*/