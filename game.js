const game = {
  xState: [],
  oState: [],
  winningStates: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  gameState: [],
};

let turn = "X";

function reset() {
  console.log("reset");
  game.gameState = [];
  game.xState = [];
  game.oState = [];

  for (let i = 0; i <= 8; i++) {
    let box = document.getElementById(i);
    box.classList.remove("disabled");
    box.innerHTML = "";
    document.getElementById("status").textContent = "";
    console.log(box);
  }
}

function checkWin() {
  game.winningStates.forEach((winningState) => {
    const xWins = winningState.every((state) => game.xState.includes(state));
    const oWins = winningState.every((state) => game.oState.includes(state));

    if (xWins || oWins) {
      document.getElementById("status").classList.add("visible");
      document.getElementById("status").textContent = xWins
        ? "X wins!"
        : "O wins!";

      for (let i = 0; i <= 8; i++) {
        let box = document.getElementById(i);
        box.classList.add("disabled");
      }
    } else if (
      game.gameState.includes(0) &&
      game.gameState.includes(1) &&
      game.gameState.includes(2) &&
      game.gameState.includes(3) &&
      game.gameState.includes(4) &&
      game.gameState.includes(5) &&
      game.gameState.includes(6) &&
      game.gameState.includes(7) &&
      game.gameState.includes(8)
    ) {
      document.getElementById("status").classList.add("visible");
      document.getElementById("status").textContent = "Tie!";
    }
  });
}

function ticTacToe(boxId) {
  let box = document.getElementById(boxId);

  if (
    turn == "X" &&
    !game.xState.includes(boxId) &&
    !game.gameState.includes(boxId)
  ) {
    box.style.transition = ".5s";
    box.innerHTML = turn;
    box.classList.add("disabled");
    game.xState.push(boxId);
    game.gameState.push(boxId);

    turn = "O";
    console.log(game.gameState);
  } else if (
    turn == "O" &&
    !game.oState.includes(boxId) &&
    !game.gameState.includes(boxId)
  ) {
    box.style.transition = ".5s";
    box.innerHTML = turn;
    box.classList.add("disabled");
    game.oState.push(boxId);
    game.gameState.push(boxId);

    turn = "X";
    console.log(game.gameState);
  }

  checkWin();
}
