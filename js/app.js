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
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render ()
}

init()

function render() {

}