
// question constructor
function Question (prompt, options, answer) {
  this.prompt = prompt
  this.options = options
  this.correctAnswerIndex = answer
}

var question1 = new Question('Question1', ['answer a', 'answer b', 'answer c', 'answer d'], 0)

var quiz = {
  questions: [question1, question1, question1, question1],
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

var currentPlayer = 1

// Prototype Method
function numberOfQuestions () {
  console.log('numberOfQuestion', quiz.questions.length)
  return quiz.questions.length
}

function currentQuestion () {
  console.log('currentQuestion', quiz.currentQuestion)
  return quiz.currentQuestion
}

function numberOfAnswers () {
  console.log('numberOfAnswers', quiz.questions[currentQuestion() ]['options'].length)
  return quiz.questions[currentQuestion()].options.length
}

function correctAnswer () {
//  console.log(quiz.questions[currentQuestion()].correctAnswerIndex)
  return quiz.questions[currentQuestion()].correctAnswerIndex
}

function playTurn (choice) {
  console.log('start', quiz.currentQuestion)
  if (isGameOver()) { return false }
  if (correctAnswer() === choice) {
    quiz['player' + currentPlayer + 'Points'] += 1
    result = true
  } else { result = false }
  console.log('fired')
  quiz.currentQuestion += 1
  currentPlayer = 3 - currentPlayer
  console.log('player', currentPlayer)

  console.log('end', quiz.currentQuestion)
  isGameOver()

  return result
}

function isGameOver () {
  if (currentQuestion() === numberOfQuestions()) {
    whoWon()
    return true
  }
  return false
}

function whoWon () {
  if (quiz.player1Points === 0 && quiz.player2Points === 0) {
    return 0
  }
  var point = quiz.player1Points - quiz.player2Points
  if (point > 0) {
    console.log('player 1')
    return 1
  } else if (point < 0) {
    console.log('player 2')
    return 2
  } else if (point === 0) {
    return 3
    console.log('draw')
  }
}

function restart () {
  quiz.isGameOver = false,
  quiz.currentQuestion = 0,
  quiz.player1Points = 0,
  quiz.player2Points = 0,
  currentPlayer = 1
}
