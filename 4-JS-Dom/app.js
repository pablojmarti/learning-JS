/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// declaring vars
var scores, roundScore, activePlayer, gamePlaying;

initializeGame();

// using an anonymous function to set an event listener
document.querySelector('.btn-roll').addEventListener('click', function() {

  // only run if the game is playing
  if ( gamePlaying ) {
    // get random number
    var dice1 = Math.floor( Math.random() * 6 ) + 1;
    var dice2 = Math.floor( Math.random() * 6 ) + 1;


    // set a variable to a query selector
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    if ( dice1 !== 1  && dice2 !== 1 ) {
      // add the score
      roundScore += dice1;
      roundScore += dice2;

      // set the score in the html
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();

    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() { 
  if ( gamePlaying ) { 
    // add the current 'roundScore' to the activePlayers global score
    scores[activePlayer] += roundScore;

    // Update UI to reflect this new global score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // get input from user
    var input = document.querySelector('.final-score').value;
    var winningScore;
    // Undefined, 0, null or "" are COERCED to false
    if(input){
      winningScore = input;
    } else {
      winningScore = 100;
    }
    // Check if the active player won the game
    if ( scores[activePlayer] >= winningScore ) {

      // update ui to show the winner
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

      // hide dice
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';


      //
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      gamePlaying = false;

    } else {
      // next player
      nextPlayer();
    }


  }
});

document.querySelector('.btn-new').addEventListener('click', initializeGame );

function initializeGame() {
  scores = [ 0, 0 ];
  activePlayer = 0;
  roundScore = 0;

  // example of changing a css attribute
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  // !!!!! Events and Event Handling !!!!!!!

  // selecting elements by id instead of query selector
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // remove class lists
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  // add class list
  document.querySelector('.player-0-panel').classList.add('active');

  gamePlaying = true;
}

function nextPlayer() {
  // example of the tertiary operator ( pretty cool stuff )
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  // set round score to 0
  roundScore = 0;

  // set current scores to 0 on change
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // instead of adding and remove we can just TOGGLE
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');


  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

}
