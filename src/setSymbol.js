let gameBoard = [["", "", ""], // gameBoard represent the board of the tic-tac-toe game
                ["", "", ""],
                ["", "", ""]];

let turnToPlay = "X";

// That function set the symbol on square based on what row the square was clicked, the position of clicked square and whose its turn to play.

const setSymbol = (square, squarePosition) => { 
  square.style.pointerEvents = "none";
  const image = document.createElement("img");
  const row = square.parentNode.classList[1]; // Get the current row where the square was clicked.

  image.setAttribute("src", turnToPlay == "X" ? "./assets/xSymbol.png" : "./assets/oSymbol.png");
  
  gameBoard[row][squarePosition] = turnToPlay; // Get the turnToPlay variable value(can be "X" or "O") and set the symbol on square.
  turnToPlay = turnToPlay == "X" ? "O" : "X";


  checkWinner();

  square.appendChild(image); // Put the symbol image to the corresponding square.
};
