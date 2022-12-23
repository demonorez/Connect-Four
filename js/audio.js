let getDunked = new Audio('../Audio/get-dunked.mp3')
let byebye = new Audio('../Audio/goodbye.mp3')
let shutDown = new Audio('../Audio/shut-down.mp3')
let victory = new Audio('../Audio/victory.mp3')

function playGetDunked() {
  getDunked.volume = 0.25
  getDunked.play()
}

function playByebye() {
  byebye.volume = 0.25
  byebye.play()
}

function playShutdown() {
  shutDown.volume = 0.25
  shutDown.play()
}

function playVictory() {
  victory.volume = 0.25
  victory.play()
}

export {
  playByebye,
  playGetDunked,
  playShutdown,
  playVictory
}