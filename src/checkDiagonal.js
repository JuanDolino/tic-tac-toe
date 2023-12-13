/* That function check both diagonal of the gameBody, and increments one to the corresponding variable depending which symbol are in the square.
When either of the two variables reach 3 the function return the winner */

const checkDiagonal = () => {
  let xFilledSquareOnSequence = 0;
  let oFilledSquareOnSequence = 0;

  for(let row = 0; row < 3; row++) { // That for loop check the first diagonal of gameBoard, ([0][0], [1][1], [2][2]).
    if(gameBoard[row][row] != "") {
      gameBoard[row][row] == "X" ? xFilledSquareOnSequence++ : oFilledSquareOnSequence++;
    };

    if(xFilledSquareOnSequence == 3 || oFilledSquareOnSequence == 3) {
      return xFilledSquareOnSequence == 3 ? "X VENCEU!" : "O VENCEU!";
    };

    if(row == 2) { // When the first diagonal is completely checked the row variable are 2, That if statement will not happen if someone win before, because the "return" finishes the code.
      xFilledSquareOnSequence = 0;
      oFilledSquareOnSequence = 0;

      for(let column = 0; column < 3;column++) { // That for loop check the second diagonal of gameBoard, ([0][2], [1][1], [2][0])
        if(gameBoard[column][row] != "") {
          gameBoard[column][row] == "X" ? xFilledSquareOnSequence++ : oFilledSquareOnSequence++;
        }

        if(xFilledSquareOnSequence == 3 || oFilledSquareOnSequence == 3) {
          return xFilledSquareOnSequence == 3 ? "X VENCEU!" : "O VENCEU!";
        };

        row--;
      };
      row = 2;
    };
  };
};
