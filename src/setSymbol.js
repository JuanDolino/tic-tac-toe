let gameBoard = [["", "", ""],
                ["", "", ""],
                ["", "", ""]]

let turnToPlay = "X";

// this function set the symbol on square based on what row the square was clicked, the position of clicked square and whose its turn to play 

const setSymbol = (square, squarePosition) => { 
  const image = document.createElement("img");
  const row = square.parentNode.classList[1]; // get the current row where the square was clicked

  image.setAttribute("src", turnToPlay == "X" ? "./assets/xSymbol.png" : "./assets/oSymbol.png");
  
  gameBoard[row][squarePosition] = turnToPlay; // take the turnToPlay variable value(can be X or O) and set the symbol on square
  turnToPlay = turnToPlay == "X" ? "O" : "X";


  checkWinner(gameBoard)

  square.appendChild(image);
};
