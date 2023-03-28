const gameState = {};


const body = document.querySelector('body');
//Header Structure
const title = document.createElement('h1');
body.appendChild(title);
title.className = 'title';
title.innerHTML = "Tic-Tac-Toe";
//Structure of GameBoard
const board = document.createElement('main');
board.id = 'board';

const tile = document.createElement('tile');
    for(let i =0; i < 9; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        board.appendChild(tile);
    }
    body.appendChild(board);
// Structure of Input & Button Menu
const iBContainer = document.createElement('p');

const inputP1 = document.createElement('input');
inputP1.type = 'text';
inputP1.placeholder = 'Enter P1 Name';
iBContainer.appendChild(inputP1);

const inputP2 = document.createElement('input');
inputP2.type = 'text';
inputP2.placeholder = 'Enter P2 Name';

iBContainer.appendChild(inputP2);
const playBtn = document.createElement('button');
playBtn.innerText = 'Play Game';

iBContainer.appendChild(playBtn);
const resetBtn = document.createElement('button');
resetBtn.innerText = 'New Game';

iBContainer.appendChild(resetBtn);

body.appendChild(iBContainer);