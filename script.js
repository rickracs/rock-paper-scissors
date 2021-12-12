let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let pick = Math.floor(Math.random() * 3) + 1;
    if (pick == 1) return "Rock"
    else if (pick == 2) return "Paper"
    return "Scissors";
}
/* no need for this after changing code
function capitalize(pick) {
    return pick.charAt(0).toUpperCase() + pick.slice(1);
}
*/
function playRound(e) {
/*   maybe if I set timeout 
    buttons.forEach(btn => {
       btn.disabled = true;
    });*/
    let computerSelection = computerPlay();
    let playerSelection = e.srcElement.innerHTML;

    if (playerWins == 5 || computerWins == 5) return;

    if (playerSelection == computerSelection) result.textContent = "It's a DRAW!";
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        playerWins++;
        //return
        yourScore.textContent = "Your score: " + playerWins;
        result.textContent = "You WON! " + playerSelection + " beats " + computerSelection + ".";
        if (playerWins == 5) gameEval();
    }
    else {
        computerWins++;
        //return 
        computerScore.textContent = "Computer score: " + computerWins;
        result.textContent = "You LOST! " + computerSelection + " beats " + playerSelection + ".";
        if (computerWins == 5) gameEval();
    }
 /*   buttons.forEach(btn => {
        btn.disabled = false;
     });*/
}

function gameEval() {
    //show message in new div, ask for rematch, add button for rematch

    if (playerWins == 5) rematch.textContent = "Congratulations! You were first to 5! Want a rematch?";
    if (computerWins == 5) rematch.textContent = "Game over! The computer was first to 5! Want a rematch?";
    endGame.appendChild(rematch);
    rematchButton.textContent = "Restart game";
    endGame.appendChild(rematchButton);
}

function resetGame() {
    playerWins =0;
    computerWins=0;
    result.textContent = "-"
    yourScore.textContent = "Your score: " + playerWins;
    computerScore.textContent = "Computer score: " + computerWins;
    endGame.removeChild(rematch);
    endGame.removeChild(rematchButton);

}


const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector(".lastGame");
const buttons = document.querySelectorAll("button");
const endGame = document.querySelector(".results");
const rematch = document.createElement("div");
const rematchButton = document.createElement("button");

//add listener for button click here, call function playRound
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

//add reset game after 5 wins
rematchButton.addEventListener("click", resetGame);





