let playTime = "X";

let checkIfOWins, checkIfXWins, whoWins;

let gameBoard =  [ ["", "", ""],
                ["", "", ""],
                ["", "", ""]]

let popUp = document.querySelector(".resultAlert");
let squares = document.querySelectorAll(".square")
let winnerText = document.querySelector(".winnerText")


function insertElement(element, position) {

  let row = element.parentElement.classList[1];
  image = document.createElement("img")


  image.setAttribute("src", playTime == "X" ? "./assets/imageX.png" : "./assets/imageO.png");
  image.setAttribute("class", playTime == "X" ? "imageX" : "imageO")

  gameBoard[row == "firstRow" ? 0 : row == "secondRow" ? 1 : row == "thirdRow" ? 2 : null][position] = playTime;
  
  playTime = playTime == "X" ? "O" : "X";

  element.appendChild(image)
  element.style.pointerEvents = "none";


  rowColumnsCheck()
  checkDiagonal()

  whoWins = whoWins == undefined && gameBoard[0].includes("") == false && gameBoard[1].includes("") == false && gameBoard[2].includes("") == false ? "O JOGO EMPATOU" : whoWins;

  winnerText.innerText = whoWins;

  if(whoWins != undefined) {
    popUp.style.display = "flex"
    popUp.style.opacity = 1
    popUp.style.animation = "popupAnimation 0.5s"  
    whoWins = undefined
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.pointerEvents = "none"
    }
  }
}

function rowColumnsCheck() {

  for(let row = 0; row<3;row++) {
    checkIfOWins = 0;
    checkIfXWins = 0;

    for(let column = 0; column<3; column++) {
      if(gameBoard[row][column] == "X") {
        checkIfXWins++
      }
      if(gameBoard[row][column] == "O") {
        checkIfOWins++;
      }

      if(checkIfXWins != 3 && checkIfOWins != 3 && column == 2) {
        checkIfOWins = 0;
        checkIfXWins = 0;
        for(column=0; column<3;column++) {
          if(gameBoard[column][row] == "X") {
            checkIfXWins++;
          }
          if(gameBoard[column][row] == "O") {
            checkIfOWins++;
          }

        }

        column = 2
      }

      if(checkIfOWins == 3 || checkIfXWins == 3) {
        whoWins = checkIfOWins == 3 ? "O VENCEU!" : "X VENCEU";
        return;
      }

    }
  }

}

function checkDiagonal() {
  checkIfXWins = 0
  checkIfOWins = 0
  for(let i = 0; i < 3; i++) {
    if(gameBoard[i][i] != "") {
      gameBoard[i][i] == "X" ? checkIfXWins++ : checkIfOWins++;
    }

    if(i == 2 && checkIfXWins != 3 && checkIfOWins != 3) {
      checkIfXWins = 0
      checkIfOWins = 0
      for (let j = 0; j < 3; j++) {
        gameBoard[j][i] == "X" ? checkIfXWins++ : gameBoard[j][i] == "O" ? checkIfOWins++ : null;
        i--;
      }
      i = 2;
    }

  }
  whoWins = checkIfXWins == 3 ? "X VENCEU!" : checkIfOWins == 3 ?  "O VENCEU!" : whoWins; 
}

function restartGame() {
  let images = document.querySelectorAll("img")

  for(let i = 0; i != images.length; i++) {
    images[i].remove()
  }

  for(i = 0; i != squares.length; i++) {
    squares[i].style.pointerEvents = "all"
  }

  popUp.style.opacity = 0;

  setTimeout(() => {
    popUp.style.display = "none";
  }, 300);


  gameBoard =  [["", "", ""],
            ["", "", ""],
            ["", "", ""]]    
}
