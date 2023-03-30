const state = {
  players: ['x','o'],
  p2Name: '',
  p1Name: '',
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

function resetState() {
  state.board =  [ 
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  state.p1Name = '';
  state.p2Name = '';
};

//**DOM Selectors */
const body = document.querySelector('body');
const board = document.createElement('main');

//Header element
const title = document.createElement('h1');
body.appendChild(title);
title.className = 'title';
title.innerHTML = "Tic-Tac-Toe";

//main element
function renderBoard() {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
  board.id = 'board';
  const tile = document.createElement('tile');

  for(let i =0; i < 9; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.index = i; 
    board.appendChild(tile);
  }
    body.appendChild(board);
};

const renderPlayer = () => {
  if (document.querySelector('input')) return;

  const iBContainer = document.createElement('p');
  const inputP1 = document.createElement('input');
  inputP1.id = 'P1';
  inputP1.type = 'text';
  inputP1.placeholder = 'Enter P1 Name';
  iBContainer.appendChild(inputP1);

  const inputP2 = document.createElement('input');
  inputP2.id = 'P2';
  inputP2.type = 'text';
  inputP2.placeholder = 'Enter P2 Name';
  iBContainer.appendChild(inputP2);

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
  renderBoard();
  renderPlayer();
};
render();

let turnIdx = 0
function nextPlayerTurn() {
  turnIdx++;
  if(turnIdx === state.players.length) {
    turnIdx = 0;
  };
};

board.addEventListener('click', (event) => {
  if(!event.target.innerText) {
    event.target.innerText = state.players[turnIdx];
    let tileIdx = event.target.dataset.index;
    let x = idxFinder[tileIdx][0];
    let y = idxFinder[tileIdx][1];
    state.board[y][x] = state.players[turnIdx];
  };
  checkWin();
  nextPlayerTurn();
});

function getPlayerNames() {
  const P1Name = document.getElementById('P1');
  state.p1Name = P1Name.value;
  const P2Name = document.getElementById('P2');
  state.p2Name = P2Name.value;
};

const playButton = document.getElementById('play');
playButton.addEventListener('click', function () {
  getPlayerNames();
  if(state.p1Name === '' || (state.p1Name === '' && state.p2Name === '')) {
    alert("You need at least 1 player!");
  } 
  else if (state.p2Name === '') {
    alert('make computer logic');
  } else {
        //Computer Logic
  }
});

    
const reset = document.getElementById('reset');
reset.addEventListener('click', resetState());


function checkWin() {
    //Horizontal Wins
  if(state.board[0][0] === state.board[0][1] 
    && state.board[0][0] === state.board[0][2] 
    && state.board[0][0] !==null) {
        alert(state.board[0][0] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    } 
  else if (state.board[1][0] === state.board[1][1] 
    && state.board[1][0] === state.board[1][2] 
    && state.board[1][0] !==null){
        alert(state.board[1][0] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[2][0] === state.board[2][1] 
    && state.board[2][0] === state.board[2][2] 
    && state.board[2][0] !==null){
        alert(state.board[2][0] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
    //Vertical Wins
  else if (state.board[0][0] === state.board[1][0] 
    && state.board[0][0] === state.board[2][0] 
    && state.board[0][0] !==null){
        alert(state.board[0][0] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][1] === state.board[1][1] 
    && state.board[0][1] === state.board[2][1] 
    && state.board[0][1] !==null){
        alert(state.board[0][1] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][2] === state.board[1][2] 
    && state.board[0][2] === state.board[2][2] 
    && state.board[0][2] !==null){
        alert(state.board[0][2] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
    //Diagonal Wins
  else if (state.board[0][0] === state.board[1][1] 
    && state.board[0][0] === state.board[2][2] 
    && state.board[0][0] !==null){
        alert(state.board[0][0] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
  else if (state.board[0][2] === state.board[1][1] 
    && state.board[0][2] === state.board[2][0] 
    && state.board[0][2] !==null){
        alert(state.board[0][2] === 'x' ? `${state.p1Name} WINS!` : `${state.p2Name} WINS`);
    }
}
