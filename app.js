'use strict';
//Starting scores
let winningScore = 3;
let playerScore = 0;
let computerScore = 0;

const header = document.querySelector('h1');
const result = document.querySelector('h2');
const btnResult = document.querySelector('button');
const playerChoice = document.querySelector('#player-choice');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');

//Generate random choices for computer
const getComputerChoice = function () {
  let choice = ['rock', 'paper', 'scissors'];
  let randomChoice = choice[Math.floor(Math.random() * choice.length)];
  return randomChoice;
};

//Show current score
const displayScore = function () {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
};

//Game logic and find the winner
const playRound = function (playerSelection, computerSelection) {
  //Enable the game button
  btnResult.disabled = false;
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    result.textContent = 'You lose! Paper beats Rock';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    result.textContent = 'You win! Paper beats Rock';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    result.textContent = 'You win! Rock beats Scissors';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++;
    result.textContent = 'You lose! Rock beats Scissors';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    result.textContent = 'You lose! Scissors beats Paper';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    result.textContent = 'You win! Scissors beats Paper';
  } else if (playerSelection == computerSelection) {
    result.textContent = `It's a draw.`;
  }

  //Display current score
  displayScore();

  //Find the winner
  if (playerScore === winningScore || computerScore === winningScore) {
    result.textContent = `The absolute winner is ${
      playerScore === winningScore ? 'Human!' : 'Computer!'
    }`;
    //Reset the game
    header.textContent = 'Restart the Page to Play Rock Paper Scissors';
    playerChoice.textContent = '';
    //Disable the game button
    btnResult.disabled = true;
  }
};

//Play game
btnResult.addEventListener('click', function game() {
  let playerSelection = playerChoice.value;
  let computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  return playRound(playerSelection, computerSelection);
});
