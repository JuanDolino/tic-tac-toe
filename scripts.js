let playTime = "X", checkIfOWins, checkIfXWins, whoWins;

let matrix =  [ [],
                [],
                []]

let popUp = document.querySelector(".resultAlert");
let squares = document.querySelectorAll(".square")
let winnerText = document.querySelector(".winnerText")


function insertElement(element, position) {

  let row = element.parentElement.classList[1];
  image = document.createElement("img")

  if(playTime == "X") {
    image.setAttribute("src", "./assets/imageX.png")
    image.setAttribute("class", "imageX")

    matrix[row == "firstRow" ? 0 : row == "secondRow" ? 1 : row == "thirdRow" ? 2 : null][position] = "X"
    
    playTime = "O";
  }

  else {
    image.setAttribute("src", "./assets/imageO.png")
    image.setAttribute("class", "imageO")

    matrix[row == "firstRow" ? 0 : row == "secondRow" ? 1 : row == "thirdRow" ? 2 : null][position] = "O"

    playTime = "X";
  }

  element.appendChild(image)
  element.style.pointerEvents = "none";


  checkRows()
  checkColumns()
  checkDiagonal()

  whoWins = whoWins == undefined && matrix[0].length == 3 && matrix[1].length == 3 && matrix[2].length == 3 ? "O jogo empatou" : whoWins;

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

function checkColumns() {

  for(let i = 0; i<3;i++) {
    checkIfOWins = 0;
    checkIfXWins = 0;
    for(let j = 0; j<3; j++) {
      if(matrix[j][i] == "O") {
        checkIfOWins++
      }

      else if(matrix[j][i] == "X") {
        checkIfXWins++
      }

      if(checkIfOWins==3 || checkIfXWins == 3) {
        whoWins = checkIfOWins == 3 ? "O venceu" : "X venceu"
      }
    }
  }

}

function checkRows() {
  for(let i = 0; i<3;i++) {
    checkIfOWins = 0;
    checkIfXWins = 0;
    for(let j = 0; j<3; j++) {
      if(matrix[i][j] == "O") {
        checkIfOWins++
      }

      else if(matrix[i][j] == "X") {
        checkIfXWins++
      }

      if(checkIfOWins==3 || checkIfXWins == 3) {
        whoWins = checkIfOWins == 3 ? "O venceu" : "X venceu"
      }
    }
  }
}

function checkDiagonal() {
  if(matrix[0][0] == "X" && matrix[1][1] == "X" && matrix[2][2] == "X") {
    whoWins = "X venceu"
  }

  else if(matrix[0][2] == "X" && matrix[1][1] == "X" && matrix[2][0] == "X") {
    whoWins = "X venceu"
  }

  else if(matrix[0][0] == "O" && matrix[1][1] == "O" && matrix[2][2] == "O") {
    whoWins = "O venceu"
  }

  else if(matrix[0][2] == "O" && matrix[1][1] == "O" && matrix[2][0] == "O") {
    whoWins = "O venceu"
  }

}

function takeAnswer(answer) {
  let images = document.querySelectorAll("img")

  if(answer == "YES") {
    for(let i = 0; i != images.length; i++) {
      images[i].remove()
    }

    for(i = 0; i != squares.length; i++) {
      squares[i].style.pointerEvents = "all"
    }

    popUp.style.opacity = 0;

    setTimeout(() => {
      popUp.style.display = "none";
    }, 500);


    matrix =  [[],
              [],
              []]    
  }
}
