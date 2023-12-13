const gameResultAlert = document.querySelector(".gameResultAlert");
const squares = document.querySelectorAll(".square");
let winnerText = document.querySelector(".winnerText");

// That function return the winner of the game and put an alert on the screen, saying who wins and asking if the user want to restart the game

const checkWinner = () => {
  const result = checkRow() || checkColumn() || checkDiagonal();

  if(result != undefined) {
    winnerText.innerText = result;
    
    gameResultAlert.style.display = "flex";
    gameResultAlert.style.opacity = 1;
    gameResultAlert.style.animation = "popupAnimation 0.5s";

    for (let i = 0; i < squares.length; i++) {
      squares[i].style.pointerEvents = "none";
    };
  };

  if(result == undefined && gameBoard[0].includes("") == false && gameBoard[1].includes("") == false && gameBoard[2].includes("") == false) { // That if statement check if the game ends tied, if all squares are filled and result is not defined, the game is tide.
    gameResultAlert.style.display = "flex";
    gameResultAlert.style.opacity = 1;
    gameResultAlert.style.animation = "popupAnimation 0.5s";

    for (let i = 0; i < squares.length; i++) {
      squares[i].style.pointerEvents = "none"; // Block all square for the player dont click on it after the game finishes.
    };

    winnerText.innerText = "O JOGO EMPATOU";
  };
};
