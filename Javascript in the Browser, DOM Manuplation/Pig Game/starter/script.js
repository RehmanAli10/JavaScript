'use strict';

// Selecting elements

const player1El = document.querySelector('.player--0');
const scorePlayer1El = document.getElementById('score--0');
const player2El = document.querySelector('.player--1');
const scorePlayer2El = document.getElementById('score--1');
const currentScoreElPlayer1 = document.getElementById('current--0');
const currentScoreElPlayer2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameBtnEle = document.querySelector('.btn--new');
const rollDiceBtnEle = document.querySelector('.btn--roll');
const holdBtnEle = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
let player_1Score = 0;
let player_2Score = 0;

function switchPlayer() {
  if (activePlayer === 0) {
    player1El.classList.remove('player--active');
    player2El.classList.add('player--active');
    player_1Score = 0;
    currentScore = 0;
    scorePlayer1El.textContent = player_1Score;
    currentScoreElPlayer1.textContent = currentScore;
    activePlayer = 1;
  } else {
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');
    player_2Score = 0;
    currentScore = 0;
    scorePlayer2El.textContent = player_2Score;
    currentScoreElPlayer2.textContent = currentScore;
    activePlayer = 0;
  }
}

// clicking on roll dice button
rollDiceBtnEle.addEventListener('click', function () {
  // generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // display the dice image based on the random number
  diceEl.src = `dice-${randomNumber}.png`;

  // remove the hidden class to show the dice
  diceEl.classList.remove('hidden');

  // if the random number is 1, switch to the next player
  if (randomNumber === 1) {
    switchPlayer();
  } else {
    currentScore = currentScore + randomNumber;
    currentScoreElPlayer1.textContent =
      activePlayer === 0 ? currentScore : currentScoreElPlayer1.textContent;
    currentScoreElPlayer2.textContent =
      activePlayer === 1 ? currentScore : currentScoreElPlayer2.textContent;
  }
});

// Hold button logic, current active player can hold score
holdBtnEle.addEventListener('click', function (event) {
  event.preventDefault();
  if (activePlayer) {
    player_2Score = player_2Score + currentScore;
    if (player_2Score >= 100) {
      player2El.classList.add('player--winner');
      rollDiceBtnEle.disabled = true;
      holdBtnEle.disabled = true;
      return;
    }
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');
    scorePlayer2El.textContent = player_2Score;
    currentScore = 0;
    currentScoreElPlayer2.textContent = currentScore;
    activePlayer = 0;
  } else {
    player_1Score = player_1Score + currentScore;
    if (player_1Score >= 100) {
      player1El.classList.add('player--winner');
      rollDiceBtnEle.disabled = true;
      holdBtnEle.disabled = true;
      return;
    }
    player1El.classList.remove('player--active');
    player2El.classList.add('player--active');
    scorePlayer1El.textContent = player_1Score;
    currentScore = 0;
    currentScoreElPlayer1.textContent = currentScore;
    activePlayer = 1;
  }
});

// Again button to reset game
newGameBtnEle.addEventListener('click', function () {
  activePlayer = 0;
  player_1Score = 0;
  player_2Score = 0;
  currentScore = 0;
  player1El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  scorePlayer1El.textContent = currentScore;
  scorePlayer2El.textContent - currentScore;
  currentScoreElPlayer1.textContent = currentScore;
  currentScoreElPlayer2.textContent = currentScore;
  diceEl.classList.add('hidden');
  rollDiceBtnEle.disabled = false;
  holdBtnEle.disabled = false;
});

rollDiceBtnEle.disabled = false;
holdBtnEle.disabled = false;
scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
diceEl.classList.add('hidden');
