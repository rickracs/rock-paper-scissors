let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let pick = Math.floor(Math.random()*3)+1;
    if (pick == 1) return "rock"
    else if (pick == 2) return "paper"
    return "scissors";
}

function capitalize (pick) {
    return pick.charAt(0).toUpperCase()+pick.slice(1);
}

function playRound () {
    let computerSelection=computerPlay();
    let playerSelection=prompt().toLowerCase();

    if (playerSelection == computerSelection) return "It's a DRAW!"
    else if (playerSelection=="rock" && computerSelection=="scissors" ||
            playerSelection=="paper" && computerSelection=="rock" ||
            playerSelection=="scissors" && computerSelection=="paper") {
                playerWins++;
            return ("You WON! "+ capitalize(playerSelection) + " beats "+capitalize(computerSelection) + ".");
            }
            else {
                computerWins++;
            return ("You LOST! "+ capitalize(computerSelection) + " beats "+capitalize(playerSelection) + ".");
            }
}

function game() {
    for (i=0; i<5; i++) {
console.log(playRound());
    }
console.log("Your score: " + playerWins);
console.log("Computer Score: "+computerWins);
}

game();