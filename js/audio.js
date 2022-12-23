let getDunked = new Audio('../Audio/get-dunked.mp3')
let byebye = new Audio('../Audio/goodbye.mp3')
let shutDown = new Audio('../Audio/shut-down.mp3')
let victory = new Audio('../Audio/victory.mp3')
let enemy = new Audio('../Audio/enemy-imagine-dragon.mp3')
let welcome = new Audio('../Audio/welcome-to-summoners-rift.mp3')


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

function playWelcome() {
  welcome.volume = 0.25
  welcome.play()
}

function playEnemy() {
  enemy.volume = 0.25
  enemy.play()
}

function pauseMusic() {
  enemy.pause()
}

export {
  playByebye,
  playGetDunked,
  playShutdown,
  playVictory,
  playWelcome,
  playEnemy,
  pauseMusic
}