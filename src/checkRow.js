/**  Check each row and according with what symbol is on the square increment one to the corresponding variable,
if at the row have three symbols from the same player, the variable will have the value "3" and this player wins the game. **/ 

const checkRow = () => {
  let xFilledSquareOnSequence, oFilledSquareOnSequence;

  for (let row = 0; row < 3; row++) {
    xFilledSquareOnSequence = 0;
    oFilledSquareOnSequence = 0;

    for (let column = 0; column < 3; column++) {
      if(gameBoard[row][column] != "") {
        gameBoard[row][column] == "X" ? xFilledSquareOnSequence++ : oFilledSquareOnSequence++;
      }

      if(xFilledSquareOnSequence == 3 || oFilledSquareOnSequence == 3) {
        return xFilledSquareOnSequence == 3 ? "X VENCEU!" : "O VENCEU!";
      };
    };
  };
};