function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var compareTo = getRandomInt(0, 100)
var num = getRandomInt(0, 100)

var compare = document.getElementById('compare')
var low = document.getElementById('low')
var high = document.getElementById('high')
var turnstatus = document.getElementById('turnstatus')
var win = document.getElementById('win')
var seconds = document.getElementById('seconds')
var goal = document.getElementById('goal')
var scoreDisplay = document.getElementById('score')
var highScoreDisplay = document.getElementById('highScore')

var statusTimer
var score = 0
var goalScore = 10
var startTime = new Date()

function success() {
  score++
  scoreDisplay.innerHTML = score
  if (score >= goalScore) {
    end()
  }
  compareTo = getRandomInt(0, 100)
  num = getRandomInt(0, 100)
  compare.innerHTML = compareTo
  clearTimeout(statusTimer)
  turnstatus.innerHTML = '+1!'
  turnstatus.classList.add('success')
  statusTimer = setTimeout(function () {
    turnstatus.innerHTML = ''
  }, 1000)
}

function error() {
  score--
  scoreDisplay.innerHTML = score
  clearTimeout(statusTimer)
  turnstatus.innerHTML = '-1  :('
  turnstatus.classList.remove('success')
  statusTimer = setTimeout(function () {
    turnstatus.innerHTML = ''
  }, 1000)
}

function end() {
  var diffTime = new Date() - startTime
  var diffNoMs = diffTime /= 1000
  var secs = Math.round(diffNoMs % 60)
  win.classList.add('show')
  win.removeAttribute('aria-hidden')
  win.focus()
  seconds.innerHTML = secs

  var highScore = parseInt(localStorage.getItem('hl-highscore'), 10) || Infinity
  if (secs < highScore) {
    localStorage.setItem('hl-highscore', secs)
    highScore = secs
  }
  highScoreDisplay.innerHTML = highScore
}

low.addEventListener('click', function () {
  if (num < compareTo) {
    success()
  } else  {
    error()
  }
})

high.addEventListener('click', function () {
  if (num > compareTo) {
    success()
  } else  {
    error()
  }
})

compare.innerHTML = compareTo
goal.innerHTML = goalScore
scoreDisplay.innerHTML = score
