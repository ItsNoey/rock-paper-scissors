'use strict';
//Starting scores
let winningScore = 3;
let playerScore = 0;
let computerScore = 0;

const header = document.querySelector('h1');
const result = document.querySelector('h2');
const playerChoice = document.querySelector('#player-choice');
const btnResult = document.querySelector('button');

//Generate random choices for computer
const getComputerChoice = function () {
  let choice = ['rock', 'paper', 'scissors'];
  let randomChoice = choice[Math.floor(Math.random() * choice.length)];
  return randomChoice;
};
getComputerChoice();

//Game logic and find the winner
const playRound = function (playerSelection, computerSelection) {
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

  //Find the winner
  if (playerScore === winningScore || computerScore === winningScore) {
    result.textContent = `The absolute winner is ${
      playerScore === winningScore ? 'Human!' : 'Computer!'
    }`;
    //Reset the game
    header.textContent = 'Restart the Page to Play Rock Paper Scissors';
    playerChoice.textContent = '';
  }
  console.log(playerScore);
  console.log(computerScore);
};

//Play game
btnResult.addEventListener('click', function game() {
  let playerSelection = playerChoice.value;
  let computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  return playRound(playerSelection, computerSelection);
});
