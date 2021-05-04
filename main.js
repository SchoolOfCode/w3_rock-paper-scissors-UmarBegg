let yes = true;
let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function getWinner(p1Move, p2Move) {
  switch (p1Move) {
    case "rock":
      switch (p2Move) {
        case "rock":
          return 0 + draws++;
        case "scissors":
          return 1 + wins++;
        case "paper":
          return -1 + losses++;
      }
    case "scissors":
      switch (p2Move) {
        case "rock":
          return -1 + losses++;
        case "scissors":
          return 0 + draws++;
        case "paper":
          return 1 + wins++;
      }
    case "paper":
      switch (p2Move) {
        case "rock":
          return 1 + wins++;
        case "scissors":
          return -1 + losses++;
        case "paper":
          return 0 + draws++;
      }
  }
}

function generateComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3);
  let moves = ["rock", "paper", "scissors"];
  return moves[randomNumber];
}

while (yes === true) {
  let userMove = prompt("what are you?");
  let computerMove = generateComputerMove();
  console.log(getWinner(userMove, computerMove));
  gamesPlayed++;
  console.log("you have played: " + gamesPlayed + " games");
  console.log("you have: " + wins + " wins");
  console.log("you have: " + draws + " draws");
  console.log("you have: " + losses + " losses");
  yes = confirm("Continue?");
}
