const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  //Check valid input
  if (userInput === 'rock' || userInput === 'paper' || userInput === "scissors") {
    return userInput;
  } else {
    console.log('Not valid input!');
  }
};

/*var a = 0;
var userChoice = "0"
function changetheVariable() {
   a = document.getElementById('rockbtn').innerHTML;
  userChoice = a
  userChoice = userChoice.toLowerCase();
   alert(a);
}

function changetheVariable2() {
   a = document.getElementById('paperbtn').innerHTML;
  userChoice = a
  userChoice = userChoice.toLowerCase();
   alert(a);
}

function changetheVariable3() {
   a = document.getElementById('scissorbtn').innerHTML;
  userChoice = a
  userChoice = userChoice.toLowerCase();
   alert(a);
}
*/

//Test getUserChoice ("rocky");

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log("Uh oh!");
  }
};
var winner;
var userScore = 0;
var cpuScore = 0;
//Test console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice) {
  var winner;
  if (userChoice === computerChoice) { //ties
    winner = 'The game is a tie!';
  } else if (userChoice === 'rock') { //rock vs paper
    if (computerChoice === 'paper') {
      winner = 'The computer won!';
      cpuScore++;
    } else {
      winner = 'You won!';
      userScore++;
    }
  } else if (userChoice === 'paper') { //paper vs scissors
    if (computerChoice === 'scissors') {
      winner = 'The computer won!';
      cpuScore++;
    } else {
      winner = 'You won!';
      userScore++;
    }
  } else if (userChoice === 'scissors') { //scissors vs rock
    if (computerChoice === 'rock') {
      winner = 'The computer won!';
      cpuScore++;
    } else {
      winner = 'You won!';
      userScore++;
    }
  }
  displayWinner(winner);
}

//Test console.log(determineWinner("paper", "rock"));
function displayWinner(winner) {
  document.getElementById("outputbox").innerHTML = winner;
  console.log(winner);
}

function displayUserScore() {
  document.getElementById("userscorebox").innerHTML = userScore;
}
function displaycpuScore() {
  document.getElementById("cpuscorebox").innerHTML = cpuScore;
}

function playGame(choice) {
  var userChoice = getUserChoice(choice);
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  determineWinner(userChoice, computerChoice);

}




//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
//console.log(getUserChoice('Paper')); // should print 'paper'
//console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`