let gamesPlayed = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

function getWinner(p1Move, p2Move) {
  switch (p1Move) {
    case "rock":
      switch (p2Move) {
        case "rock":
          return 0 + numberOfDraws++;
        case "scissors":
          return 1 + numberOfWins++;
        case "paper":
          return -1 + numberOfLosses++;
      }
    case "scissors":
      switch (p2Move) {
        case "rock":
          return -1 + numberOfLosses++;
        case "scissors":
          return 0 + numberOfDraws++;
        case "paper":
          return 1 + numberOfWins++;
      }
    case "paper":
      switch (p2Move) {
        case "rock":
          return 1 + numberOfWins++;
        case "scissors":
          return -1 + numberOfLosses++;
        case "paper":
          return 0 + numberOfDraws++;
      }
  }
}

function generateComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3);
  let moves = ["rock", "paper", "scissors"];
  return moves[randomNumber];
}

let yes = true;

while (yes === true) {
  let userMove = prompt("what are you? rock, paper, or scissors?");
  if (yes === true && userMove !== ("rock" || "paper" || "scissors")) {
    console.log("you must use rock, paper, or scissors");
    userMove = prompt("what are you?");
    continue;
  }
  let computerMove = generateComputerMove();
  console.log(getWinner(userMove, computerMove));
  gamesPlayed++;
  console.log("you have played: " + gamesPlayed + " games");
  console.log("you have: " + numberOfWins + " Wins");
  console.log("you have: " + numberOfDraws + " Draws");
  console.log("you have: " + numberOfLosses + " Losses");
  yes = confirm("Continue?");
}
