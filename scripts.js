const Gameboard = (() => {

  let gameboard = ['', '', '', '', '', '', '', '', '']

  const render = () => {
    let boardHTML = '';
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="section" id="square-${index}">${square}</div>`
    })
    document.querySelector(".game-grid").innerHTML = boardHTML;

    const squares = document.querySelectorAll(".section");
    squares.forEach((square) => {
      square.addEventListener('click', Game.handleClick);
    })
  }

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  }

  const getGameboard = () => gameboard; 

  return {
    render,
    update,
    getGameboard
  }

})();

const createPlayer = (name, mark) => {

  return {
    name,
    mark
  }

}

const Game = (() => {

  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {

    players = [
      createPlayer(document.querySelector('#player1').value, "X"),
      createPlayer(document.querySelector('#player2').value, "O")
    ]

    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();

    const squares = document.querySelectorAll(".section");
    squares.forEach((square) => {
      square.addEventListener('click', handleClick);
    })
  }

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);

    if (Gameboard.getGameboard()[index] !=="")
      return;
  
    Gameboard.update(index, players[currentPlayerIndex].mark);

    if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark) {
      gameOver = true;
      alert(`${players[currentPlayerIndex].name} Won!`)
    }

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  }

  const restart = () => {
    for (let i=0; i < 9; i++) {
      Gameboard.update(i, "");
    }
    Gameboard.render();
  }

  return {
    start,
    restart,
    handleClick
  }

})();

const restartButton = document.querySelector('#restart-button');
const startButton = document.querySelector("#start-button");

startButton.addEventListener('click', ()=> {
  Game.start();
});

restartButton.addEventListener('click', () => {
  Game.restart();
})