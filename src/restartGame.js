// That function restart the game, deleting all symbol images, hiding the gameResultAlert and return the pointerEvents to all squares.

function restartGame() {
  const images = document.querySelectorAll("img");

  for(let i = 0; i != images.length; i++) {
    images[i].remove(); // Delete all symbol images.
  };

  for(i = 0; i != squares.length; i++) {
    squares[i].style.pointerEvents = "all"; // Give back pointerEvents from squares.
  };

  gameResultAlert.style.opacity = 0;

  setTimeout(() => {
    gameResultAlert.style.display = "none"; // Hide the gameResultAlert.
  }, 300);


  gameBoard =  [["", "", ""],
            ["", "", ""],
            ["", "", ""]]; // Set the gameBoard to an empty gameBoard, like the start of the game.
};
