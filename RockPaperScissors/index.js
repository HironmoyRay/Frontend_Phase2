let result = "";
function rockPaperScissors(){
console.log("Welcome to Rock, Paper, Scissors!");
const userPrompt = prompt("Press Enter your Choice and click 'OK' to start the game.");
const userChoice = userPrompt.toLowerCase();
console.log("Your choice: " + userChoice);
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log("Computer choice: " + computerChoice);


if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    result = "Invalid choice. Please choose rock, paper, or scissors.";
    document.getElementById("result").style.color = "red";
}
else if(userChoice === computerChoice) {
    console.log("It's a tie!");
    result = "Tie";
}else if (
    userChoice === "rock" && computerChoice === "scissors" ||
    userChoice === "paper" && computerChoice === "rock" ||
    userChoice === "scissors" && computerChoice === "paper" 
) {
    console.log("You win!");
    result = "Win";
    document.getElementById("result").style.color = "green";
}
else {
    console.log("You lose!");
    result = "Lose";
    document.getElementById("result").style.color = "red";
} 

document.getElementById("result").innerHTML = result;
}

rockPaperScissors();

const playAgainPrompt = prompt("Do you play again? yes/no");
const playAgain =playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

if(playAgain==="yes"){
    rockPaperScissors();
}
else{
    document.getElementById("result").style.color = "black";
    document.getElementById("result").innerHTML = "Thank You So much. See you next time.";

}