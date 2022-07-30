let playerScore = 0;
let computerScore = 0;

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
      computerScore += 1;
      document.querySelector("#playerScore").textContent = playerScore;
      document.querySelector("#computerScore").textContent = computerScore;

      return "you lose this round";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      document.querySelector("#playerScore").textContent = playerScore;
      document.querySelector("#computerScore").textContent = computerScore;

      return "you lose this round";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      document.querySelector("#playerScore").textContent = playerScore;
      document.querySelector("#computerScore").textContent = computerScore;

      return "you lose this round";
   } else {
      playerScore += 1;
      document.querySelector("#playerScore").textContent = playerScore;
      document.querySelector("#computerScore").textContent = computerScore;

      return "you win this round";
   }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const result = document.querySelector("#result");

document
   .querySelectorAll("button")
   .forEach((key) =>
      key.addEventListener(
         "click",
         (e) =>
            (document.querySelector("#playerSelection").textContent =
               `your choice:` + e.target.id)
      )
   );

function getWinner() {
   if (playerScore == 5) {
      result.textContent = " wwwwwwwwwww u win the game!!!!!";
      playerScore = 0;
      computerScore = 0;
   } else if (computerScore == 5) {
      result.textContent = "hahahahaha u lose the game";
      playerScore = 0;
      computerScore = 0;
   }
}

function buttonEvent(e) {
   const pc = getComputerChoice();
   result.textContent = playRound(e.target.id, pc);
   document.querySelector(
      "#computerSelection"
   ).textContent = `pc's choice:${pc}`;
   getWinner();
}

rock.addEventListener("click", buttonEvent);

paper.addEventListener("click", buttonEvent);

scissors.addEventListener("click", buttonEvent);
