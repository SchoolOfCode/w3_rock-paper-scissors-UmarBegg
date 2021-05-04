function getWinner(p1Move, p2Move) {
  switch (p1Move) {
    case "rock":
      switch (p2Move) {
        case "rock":
          return 0;
        case "scissors":
          return 1;
        case "paper":
          return -1;
      }
    case "scissors":
      switch (p2Move) {
        case "rock":
          return -1;
        case "scissors":
          return 0;
        case "paper":
          return 1;
      }
    case "paper":
      switch (p2Move) {
        case "rock":
          return 1;
        case "scissors":
          return -1;
        case "paper":
          return 0;
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
  let userMove = prompt("what are you?");
  let computerMove = generateComputerMove();
  console.log(getWinner(userMove, computerMove));
  yes = confirm("Continue?");
}
