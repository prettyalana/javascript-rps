const moves = ["rock", "paper", "scissors"];

let random_index = Math.floor(Math.random() * 3);

let computer_move = moves[random_index];

document.getElementById('compMove').textContent = `The computer played ${computer_move}.`;

console.log(`The computer played ${computer_move}.`);

if (computer_move === "rock") {
    outcome = "tied";
} else if (computer_move === "paper") {
    outcome = "lost";
} else {
    outcome = "won";
}

document.getElementById('outcome').textContent = `We ${outcome}!`;