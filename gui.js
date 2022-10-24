
document.getElementById("rockbtn").addEventListener("click", function(){
  playGame('rock');
});

document.getElementById("paperbtn").addEventListener("click", function(){
  playGame('paper');
});

document.getElementById("scissorbtn").addEventListener("click", function(){
  playGame('scissors');
});

document.getElementById("output").addEventListener("click", function(){
  displayUserScore();
  displaycpuScore();
});

