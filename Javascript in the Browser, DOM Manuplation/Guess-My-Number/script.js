// generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const secretNumberElement = document.querySelector(".number");
const inputElement = document.querySelector(".guess");
const checkBtnElement = document.querySelector(".check");
const messageElement = document.querySelector(".message");
const highScoreElement = document.querySelector(".highscore");
const againButtonElement = document.querySelector(".again");
const scoreElement = document.querySelector(".score");

// function to display a message
function displayMessage(message) {
  messageElement.textContent = message;
}

inputElement.addEventListener("input", function (event) {
  if (event.target.value < 1 || event.target.value > 20) {
    displayMessage("⛔️ Number must be between 1 and 20!");
  } else {
    displayMessage("Start guessing...");
  }
});

checkBtnElement.addEventListener("click", function (event) {
  event.preventDefault();

  const gussedNumber = Number(inputElement.value);
  if (!gussedNumber) return;

  if (score < 1) {
    displayMessage("💥 You lost the game!");
    return;
  }

  if (gussedNumber < secretNumber) {
    displayMessage("📉 Too low!");
    score = score - 1;
    scoreElement.textContent = score;
    inputElement.value = "";
  } else if (gussedNumber > secretNumber) {
    displayMessage("📈 Too high!");
    score = score - 1;
    scoreElement.textContent = score;
    inputElement.value = "";
  } else {
    displayMessage("🎉 Correct Number!");
    secretNumberElement.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
    document.body.style.backgroundColor = "#60b347";
  }
});

// Handing again button
againButtonElement.addEventListener("click", function () {
  highScore = score > highScore ? score : highScore;
  highScoreElement.textContent = highScore;
  score = 20;
  scoreElement.textContent = score;
  secretNumberElement.textContent = "?";
  messageElement.textContent = "Start guessing...";
  inputElement.value = "";
  document.body.style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
