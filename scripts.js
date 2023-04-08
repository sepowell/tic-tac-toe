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

  return {
    render,
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
  }

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    alert(index);
  }

  return {
    start,
    handleClick
  }

})();

const startButton = document.querySelector("#start-button");

startButton.addEventListener('click', ()=> {
  Game.start();
});