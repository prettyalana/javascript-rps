const moves = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  const compMove = moves[Math.floor(Math.random() * 3)];
  document.getElementById(
    "compMove"
  ).textContent = `The computer played ${compMove}.`;
  let outcome = "";

  if (userChoice === compMove) {
    outcome = "We tied";
  } else {
    switch (userChoice) {
      case "rock":
        outcome = compMove === "scissors" ? "We won" : "We lost";
        break;
      case "paper":
        outcome = compMove === "rock" ? "We won" : "We lost";
        break;
      case "scissors":
        outcome = compMove === "paper" ? "We won" : "We lost";
        break;
    }
  }
  document.getElementById("outcome").textContent = `${outcome}!`;
}


