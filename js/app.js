/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let tie, board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const tilesEl = document.querySelectorAll('.tile')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

/*----------------------------- Event Listeners -----------------------------*/
tilesEl.forEach(tile => tile.addEventListener('click', () => {
  console.log('clicked tiles el');
}))
resetBtnEl.addEventListener('click', () => {
  console.log('clicked reset');
})
/*-------------------------------- Functions --------------------------------*/

function init () {
  board = [1, -1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
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