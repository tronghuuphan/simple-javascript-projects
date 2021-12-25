'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const message = function (content) {
  document.querySelector('.message').textContent = content;
};
const scoreDisplay = function (score) {
  document.querySelector('.score').textContent = score;
};
// Testing
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('Not a valid number!');
  } else if (guess === secretNumber) {
    message('Correct number!');
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').style.visibility = 'hidden';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (score <= 1) {
      message('You lose!');
      document.querySelector('.number').textContent = secretNumber;
      scoreDisplay(0);
      document.querySelector('.check').style.visibility = 'hidden';
    } else {
      guess > secretNumber ? message('Too high') : message('Too low');
      score--;
      scoreDisplay(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  message('Start guessing...');
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  score = 20;
  scoreDisplay(score);
});
