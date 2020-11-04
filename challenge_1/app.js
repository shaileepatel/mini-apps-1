var tiles;
var decision;
var restart;
var pairs;
var count;
var endGame;

init();

function init() {
  tiles = document.getElementsByTagName("td");
  decision = document.getElementById("decision");
  restart = document.getElementById('restart');
  pairs = [
    [tiles[0], tiles[1], tiles[2]],
    [tiles[3], tiles[4], tiles[5]],
    [tiles[6], tiles[7], tiles[8]],
    [tiles[0], tiles[3], tiles[6]],
    [tiles[1], tiles[4], tiles[7]],
    [tiles[2], tiles[5], tiles[8]],
    [tiles[0], tiles[4], tiles[8]],
    [tiles[2], tiles[4], tiles[6]],
  ];
  count = 0;
  endGame = false;

  eventListeners();
}

function eventListeners () {
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", playTurn);
  }
  restart.addEventListener("click", resetGame)
}

function playTurn (event) {
  if (event.target.textContent) {
    return;
  }
  if (endGame) {
    return;
  }
  var currentPlayer = (count % 2 === 0 ? 'X' : 'O');
  event.target.textContent = currentPlayer;
  count++;
  if (didWin()) {
    endGame = true;
    decision.textContent = `${currentPlayer} wins!`;
    return;
  }
  if (count === 9) {
    endGame = true;
    decision.textContent = 'Its a tie!';
  }
}

function resetGame(event) {
  count = 0;
  endGame = false;
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].textContent = '';
  }
  decision.textContent = '';
}

function didWin () {
  for(var i = 0; i < pairs.length; i++) {
    if (pairs[i][0].textContent === pairs[i][1].textContent && pairs[i][1].textContent === pairs[i][2].textContent && pairs[i][2].textContent !== "") {
      return true;
    }
  }
  return false;
}

