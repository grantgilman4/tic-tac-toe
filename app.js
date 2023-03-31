const state = {
  players: ['x','o'],
  p2Name: '',
  p1Name: '',
  p1Value: '',
  p2Value: '',
  board: [ 
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
};

const idxFinder = {
  0: [0,0], 1: [0,1], 2: [0,2],
  3: [1,0], 4: [1,1,], 5: [1,2],
  6: [2,0], 7: [2,1], 8: [2,2]
};

function resetState(parent) {
  state.board =  [ 
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  state.p1Name = '';
  state.p2Name = '';
  state.p1Value = '';
  state.p2Value = '';
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  render();
};

//**DOM Selectors */
const body = document.querySelector('body');
const board = document.createElement('main');
board.id = 'board';

//main element
function renderBoard() {
  for(let i =0; i < 9; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.index = i; 
    board.appendChild(tile);
  }
    body.appendChild(board);
};

const renderPlayer = () => {
  //Header element
const title = document.createElement('h1');
body.prepend(title);
title.className = 'title';
title.innerHTML = "Tic-Tac-Toe";

  const iBContainer = document.createElement('p');
  const inputP1 = document.createElement('input');
  inputP1.id = 'P1';
  inputP1.type = 'text';
  inputP1.placeholder = 'Enter P1 Name';
  iBContainer.appendChild(inputP1);

  const inputP2 = document.createElement('input');
  inputP2.id = 'P2';
  inputP2.type = 'text';
  inputP2.label = 'Player 2';
  inputP2.placeholder = 'Enter P2 Name';
  iBContainer.appendChild(inputP2);

  const turnPrompt = document.createElement('h3');
  turnPrompt.innerText = 'Add Player Names & Click Start !';
  iBContainer.appendChild(turnPrompt);

  const playBtn = document.createElement('button');
  playBtn.id = 'play';
  playBtn.innerText = 'Play Game';
  iBContainer.appendChild(playBtn);

  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset';
  resetBtn.innerText = 'New Game';
  iBContainer.appendChild(resetBtn);

  body.appendChild(iBContainer);
};

function render() {
  renderPlayer()

};
render();

let turnIdx = 0;
function nextPlayerTurn() {
  turnIdx++;
  if(turnIdx === state.players.length) {
    turnIdx = 0;
  };
};

let turnCounter = 0;

board.addEventListener('click', function playerTurn(event) {
  if(!event.target.innerText) {
    event.target.innerText = state.players[turnIdx];
      let tileIdx = event.target.dataset.index;
      let x = idxFinder[tileIdx][0];
      let y = idxFinder[tileIdx][1];
      state.board[y][x] = state.players[turnIdx];
    } else {
      return;
    }
  if(turnPrompt.innerText === `${state.p1Name}'s Turn!`) {
      turnPrompt.innerText = `${state.p2Name}'s Turn!`;
    } else {
      turnPrompt.innerText = `${state.p1Name}'s Turn!`;
    }
  setTimeout(() => {
      checkWin();
  }, 500)
    turnCounter++
  setTimeout(() => {
      checkTie();
  }, 500)
  nextPlayerTurn();
});

const P1Name = document.getElementById('P1');
const P2Name = document.getElementById('P2');

function getPlayerNames() {
  state.p1Name = P1Name.value;
  state.p2Name = P2Name.value;
};

const turnPrompt = document.querySelector('h3');
function assignPlayerChar() {
  let p1char = Math.floor(Math.random() * (state.players.length));
  state.p1Value = state.players[p1char];
  if(state.p1Value === 'x') {
    state.p2Value = 'o';
    turnPrompt.innerText = `${state.p1Name}'s Turn!`;
  } else {
    state.p2Value = 'x';
    turnPrompt.innerText = `${state.p2Name}'s Turn!`;
  }
}

const playButton = document.getElementById('play');
playButton.addEventListener('click', function () {
  getPlayerNames();
  assignPlayerChar();
  if(state.p1Name === '' || state.p2Name === '') {
    alert("You need player names before starting the game!");
  } else if (state.p1Name === state.p2Name) {
    alert("Player names can't be the same!");
  } else {
    renderBoard();
    playButton.classList.toggle('display');
    
    //when players have been entered and board is rendered, disable inputs and start game button until new game button is clicked
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  resetState(body);

});

function checkWin() {
    //Horizontal Wins
  if(state.board[0][0] === state.board[0][1] && state.board[0][0] === state.board[0][2] && state.board[0][0] !==null) {
        alert(state.board[0][0] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    } 
  else if (state.board[1][0] === state.board[1][1] && state.board[1][0] === state.board[1][2] && state.board[1][0] !==null){
        alert(state.board[1][0] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[2][0] === state.board[2][1] && state.board[2][0] === state.board[2][2] && state.board[2][0] !==null){
        alert(state.board[2][0] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
    //Vertical Wins
  else if (state.board[0][0] === state.board[1][0] && state.board[0][0] === state.board[2][0] && state.board[0][0] !==null){
        alert(state.board[0][0] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][1] === state.board[1][1] && state.board[0][1] === state.board[2][1] && state.board[0][1] !==null){
        alert(state.board[0][1] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][2] === state.board[1][2] && state.board[0][2] === state.board[2][2] && state.board[0][2] !==null){
        alert(state.board[0][2] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
    //Diagonal Wins
  else if (state.board[0][0] === state.board[1][1] && state.board[0][0] === state.board[2][2] && state.board[0][0] !==null){
        alert(state.board[0][0] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][2] === state.board[1][1] && state.board[0][2] === state.board[2][0] && state.board[0][2] !==null){
        alert(state.board[0][2] === state.p1Value ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
}

function checkTie() {
  let results = [];
  for(i=0; i < state.board.length; i++) {
   let rowResult = state.board[i].filter(tile => tile != null);
   results.push(rowResult);
  }
   let merge = results.flat(1);
  if(merge.length === 9) {
    alert('TIE GAME...click New Game to try again.')
  }
}
