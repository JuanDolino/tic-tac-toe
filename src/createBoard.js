const createBoard = () => {
  let gameBody = document.querySelector(".gameBody");
  let row, square;


// That function create each row and square on the div "gameBody"

  for (let i = 0; i < 3; i++) {
    row = document.createElement("div");
    row.setAttribute("class", `row ${i}`);

    gameBody.appendChild(row);
    for (let j = 0; j < 3; j++) {
      square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("onClick", `setSymbol(this, ${j})`);

      row.appendChild(square);
    }
  };
}

createBoard();

