/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5,], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], 
[0, 8, 16, 24], [7, 15, 23, 31], [14, 22, 30, 38], [20, 26, 32, 38], [6, 12, 18, 24], [13, 19, 25, 31], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27], [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34], [12, 18, 24, 30], [11, 17, 23, 29], [10, 16, 22, 28], [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [17, 25, 33, 41], [16, 24, 32, 40], [15, 23, 31, 39]]
/*---------------------------- Variables (state) ----------------------------*/

let tie, board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const tilesEl = document.querySelectorAll('.tile')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

/*----------------------------- Event Listeners -----------------------------*/
tilesEl.forEach(tile => tile.addEventListener('click', handleClick))
resetBtnEl.addEventListener('click', () => {
  console.log('clicked reset');
})
/*-------------------------------- Functions --------------------------------*/

function init () {
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render ()
}

init()

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach(function (box, index) {
    if (box === -1) {
      tilesEl[index].textContent = "⚫"
      return
    }
    if (box === 1) {
      tilesEl[index].textContent = "🔴"
      return
    }
    if (box === null) {
    tilesEl[index].textContent = ""
    return
    }
  })
}

function updateMessage() {
  if (!winner && !tie) {
  messageEl.textContent = `It's ${turn === 1 ? '🔴' : '⚫'}'s turn!`
  } else if (!winner && tie) {
    messageEl.textContent = `It's a tie!`
  } else {
    messageEl.textContent = `${turn === -1 ? '🔴' : '⚫'} wins!!`
  }
}

function handleClick(evt) {
  const intIdx = parseInt(evt.target.id.replace('l', ''))
  if (board[intIdx || winner]) 
  return
  //creates a variable to match the spaces in the board. 35 indexes between 0 and 35.
  let gravity = 35
  // places the piece at the bottom so long as it is not taken. 
  while (board[intIdx + gravity] !== null) {
    gravity -=7
  }
  board[intIdx + gravity] = turn
  render()
  console.log(intIdx);
}

function checkForTie() {
  if (board.includes(null)) 
  return tie = true
}

