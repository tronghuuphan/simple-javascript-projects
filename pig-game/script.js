'use strict';

const scoreElement = document.querySelectorAll('.score');
const currentScoreElement = document.querySelectorAll('.current-score');

const diceElement = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');

let score, currentScore;
let activePlayer = 0;
let gameState;

const init = function () {
  gameState = 1;
  score = [0, 0];
  currentScore = 0;
  for (let element of scoreElement) element.textContent = 0;
  for (let element of currentScoreElement) element.textContent = 0;
  diceElement.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

const switchPlayer = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  currentScore = 0;
  currentScoreElement[activePlayer].textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

init();
buttonRoll.addEventListener('click', function () {
  if (gameState) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove('hidden');
    if (dice === 1) {
      dice = 0;
      switchPlayer();
    }
    currentScore += dice;
    currentScoreElement[activePlayer].textContent = currentScore;
  }
});
buttonHold.addEventListener('click', function () {
  if (gameState) {
    score[activePlayer] += currentScore;
    scoreElement[activePlayer].textContent = score[activePlayer];
    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      currentScoreElement[activePlayer].textContent = 0;
      gameState = 0;
    } else switchPlayer();
  }
});

buttonNew.addEventListener('click', init);
