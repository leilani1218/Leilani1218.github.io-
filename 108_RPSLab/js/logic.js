const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS ="SCISSORS";

function getRandomPick () {
  let chance = Math.random();

  /*
  if chance is between 0.66 and 1
  then ROCK
  if chance is between 0.33 and 0.66
  then PAPER
  if chance is between 0 and 0.33
  then SCISSORS
  */
  if (chance > 0.66) {
    return ROCK;
  } else if (chance > 0.33) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function getResultText(computerPick, playerPick) {
  const TIE = "It's a tie!";
  const WIN = "You win!";
  const LOSE = "You lose!";

  if (computerPick) == playerPick {
    return TIE;
  }

  if (computerPick == PAPER && player == ROCK) {
    return LOSE;
  } else if (computerPick == PAPER && playerPick  == SCISSORS) {
    return WIN;
  }

  if (computerPick == ROCK && playerPick == SCISSORS) {
    return LOSE;
  } else if (computerPick == ROCK && playerPick == PAPER) {
    return WIN;
  }

  if (computerPick == SCISSORS && playerPick == SCISSORS) {
    return LOSE;
  } else if (computerPick == SCISSORS && playerPick == ROCK) {
    return WIN;
  }
}
