var tiles = document.getElementsByTagName("td");

var pairs = [
  [tiles[0], tiles[1], tiles[2]],
  [tiles[3], tiles[4], tiles[5]],
  [tiles[6], tiles[7], tiles[8]],
  [tiles[0], tiles[3], tiles[6]],
  [tiles[1], tiles[4], tiles[7]],
  [tiles[2], tiles[5], tiles[8]],
  [tiles[0], tiles[4], tiles[8]],
  [tiles[2], tiles[4], tiles[6]],
]

var count = 0;

var endGame = false;


for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", (event) => {
    if (event.target.textContent) {
      return;
    }
    if (endGame) {
      return;
    }
    event.target.textContent = (count % 2 === 0 ? 'X' : 'O');
    count++;
    if (didWin()) {
      endGame = true;
      return;
    }
    if (count === 9) {
      endGame = true;
    }
  });
}


function didWin () {
  for(var i = 0; i < pairs.length; i++) {
    if (pairs[i][0].textContent === pairs[i][1].textContent && pairs[i][1].textContent === pairs[i][2].textContent && pairs[i][2].textContent !== "") {
      return true;
    }
  }
  return false;
}

