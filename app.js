'use strict';

//Generate random choices for computer
const getComputerChoice = function () {
  let choice = ['rock', 'paper', 'scissors'];
  let randomChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomChoice);
};
getComputerChoice();
