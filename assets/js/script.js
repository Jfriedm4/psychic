$(function(){

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var guessMade = [];
  var resetBtn;

  // score holding variables
  var wins = 0;
  var losses = 0;
  var lives = 10;

  // write scores to page
  document.getElementById('wins').innerHTML = wins;
  document.getElementById('losses').innerHTML = losses;
  document.getElementById('lives').innerHTML = lives;

  var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomLetter);


  document.onkeyup = function(event){
    var guess = String.fromCharCode(event.keyCode).toLowerCase()

    if (guess === randomLetter) {
      wins++;
      lives = 10;
      guessMade = [];
      document.getElementById('wins').innerHTML = wins;
      document.getElementById('lives').innerHTML = lives;
      document.getElementById('guessMade').innerHTML = guessMade;

    } else if(guessMade.indexOf(guess) < 0 && alphabet.indexOf(guess) >= 0) {
      guessMade[guessMade.length]=guess;
      document.getElementById('guessMade').innerHTML = guessMade;
      lives--;
      document.getElementById('lives').innerHTML = lives;

    } else if (lives === 0) {
      losses++;
      lives = 10;
      guessMade = [];
      document.getElementById('losses').innerHTML = losses;
      document.getElementById('lives').innerHTML = lives;
      document.getElementById('guessMade').innerHTML = guessMade;
    }
  }

  $('#resetBtn').on('click', function(e){
    wins = 0;
    losses = 0;
    lives = 10;
    guessMade = [];
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('lives').innerHTML = lives;
    document.getElementById('guessMade').innerHTML = guessMade;
  });

});
