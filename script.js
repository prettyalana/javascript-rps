const moves = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  const compMove = moves[Math.floor(Math.random() * 3)];
  document.getElementById(
    "compMove"
  ).textContent = `The computer played ${compMove}.`;
  let outcome = "";

  if (userChoice === compMove) {
    outcome = "You tied";
  } else {
    switch (userChoice) {
      case "rock":
        outcome = compMove === "scissors" ? "You won" : "You lost";
        break;
      case "paper":
        outcome = compMove === "rock" ? "You won" : "You lost";
        break;
      case "scissors":
        outcome = compMove === "paper" ? "You won" : "You lost";
        break;
    }
  }
  document.getElementById("outcome").textContent = `${outcome}!`;
}


