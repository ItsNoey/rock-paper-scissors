'use strict';
//Starting conditions
let winningScore = 5;
let playerScore = 0;
let computerScore = 0;

//Grab DOM elements
const text = document.querySelector('h2');
const btnPlayer = document.querySelectorAll('.player-option');
const playerChoiceEl = document.querySelector('#human-choice');
const computerChoiceEl = document.querySelector('#computer-choice');
let playerScoreEl = document.querySelector('.player-score');
let computerScoreEl = document.querySelector('.computer-score');
const btnRestart = document.querySelector('.restart-game');

//Generate random choices for computer and change the the images accordingly
const getComputerChoice = function () {
  let choice = ['rock', 'paper', 'scissors'];
  let randomChoice = choice[Math.floor(Math.random() * choice.length)];
  computerChoiceEl.src = `./images/computer/${randomChoice}.png`;

  return randomChoice;
};

const displayScore = function () {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
};

const displayMessage = function (message) {
  text.textContent = message;
};

const restartGame = function () {
  btnRestart.style.display = 'block';

  btnRestart.addEventListener('click', function () {
    displayMessage('First to 5 points wins the game');
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    btnRestart.style.display = 'none';
    computerChoiceEl.src = `./images/computer/rock.png`;
    playerChoiceEl.src = `./images/human/rock.png`;
    btnPlayer.forEach(btn => (btn.disabled = false));
  });
};

//Game logic and find the winner
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    displayMessage('You lose! Paper beats Rock');
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    displayMessage('You win! Paper beats Rock');
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    displayMessage('You win! Rock beats Scissors');
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++;
    displayMessage('You lose! Rock beats Scissors');
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    displayMessage('You lose! Scissors beats Paper');
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    displayMessage('You win! Scissors beats Paper');
  } else if (playerSelection == computerSelection) {
    displayMessage(`It's a draw.`);
  }

  //Display current score
  displayScore();

  //Find the winner
  if (playerScore === winningScore || computerScore === winningScore) {
    text.textContent = `The absolute winner is ${
      playerScore === winningScore ? 'Human!' : 'Computer!'
    }`;
    btnPlayer.forEach(btn => (btn.disabled = true));
    //Reset the game
    restartGame();
  }
};

//Use the buttons to play the game
btnPlayer.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    if (
      e.target.id === `rock` ||
      e.target.id === `paper` ||
      e.target.id === `scissors`
    ) {
      playerChoiceEl.src = `./images/human/${e.target.id}.png`;
    }

    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    console.log(e.target.id);
    console.log(computerSelection);

    return playRound(playerSelection, computerSelection);
  });
});
