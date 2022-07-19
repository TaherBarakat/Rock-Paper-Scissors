function getComputerChoice() {
   let x = Math.random();
   if (x <= 0.3) {
      return "rock";
   } else if (x >= 0.3 && x <= 0.6) {
      return "paper";
   } else {
      return "scissors";
   }
}

function playRound(playerSelection, computerSelection) {
   playerSelection.toLowerCase();
   computerSelection.toLowerCase();
   if (playerSelection === computerSelection) {
      return "tie!";
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "you lose";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "you lose";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "you lose";
   } else return "you win";
}

function game() {
   let playerScore = 0;
   let computerScore = 0;
   for (let i = 0; i < 5; i++) {
      let x = prompt("wt???", "");
      let roundScore = playRound(x, getComputerChoice());
      console.log(roundScore);
      if (roundScore == "you win") playerScore += 1;
      else if (roundScore == "tie!") playerScore += 0;
      else computerScore += 1;
      console.log(`playerscore:${playerScore} 
      computerscore: ${computerScore}`);
   }
   if (computerScore > playerScore) console.log("you fuckin loser");
   else if (computerScore === playerScore) console("you lucky basterd");
   else console.log("we are the same");
}
game();
