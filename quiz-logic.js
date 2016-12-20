//Game Logic

// question constructor
function Question (prompt, options, answer) {
  this.prompt = prompt
  this.options = options
  this.correctAnswerIndex = answer
}

function Quiz (questions, type) {
  this.questions = questions
  this.isGameOver = false
  this.completedQuestion = 0
  this.currentQuestion = 0
  this.player1Points = 0
  this.player2Points = 0
  this.sequence = [0, 1, 2, 3, 4, 5, 6, 7]
  this.type = type
}

// Prototype Method
Quiz.prototype.numberOfQuestions = function () {
  // console.log('numberOfQuestion', this.questions.length)
  return this.questions.length
}

Quiz.prototype.currentQuestionNo = function () {
//  console.log('currentQuestionNo', this.currentQuestion)
  return this.currentQuestion
}

Quiz.prototype.numberOfAnswers = function () {
  // console.log('numberOfAnswers', this.questions[this.currentQuestionNo()].options.length)
  return this.questions[this.currentQuestionNo()].options.length
}

Quiz.prototype.correctAnswer = function () {
//  console.log('correct answer', this.questions[this.currentQuestionNo()].correctAnswerIndex)
  return this.questions[this.currentQuestionNo()].correctAnswerIndex
}

Quiz.prototype.checkGameOver = function () {
  console.log(this.completedQuestion)
  if (this.completedQuestion === this.numberOfQuestions()) {
    this.whoWon()
  //  console.log('passed')
    return true
  }
  return false
}

Quiz.prototype.playTurn = function (choice) {
  // console.log('start', quiz.currentQuestion)
  // console.log(this);
  // var gameover = typeof(this.checkGameOver())
  // console.log(gameover);
  if (this.checkGameOver()) { return false }
  if (this.correctAnswer() === choice) {
    if (currentPlayer === 1) {
      this['player1Points'] += 1
    } else {
      (
      this['player2Points'] += 1
    )
    }
    this.completedQuestion += 1
    result = true
  } else {
    result = false
  }
  // console.log('fired')

  currentPlayer = 3 - currentPlayer
  // console.log('player', currentPlayer)
  console.log('player1', this.player1Points)
  console.log('player2', this.player2Points)
  // console.log('end', quiz.currentQuestion)
  this.checkGameOver()

  return result
}

Quiz.prototype.whoWon = function () {
  if (this.player1Points === 0 && this.player2Points === 0) {
    return 0
  }
  var point = this.player1Points - this.player2Points
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

Quiz.prototype.restart = function () {
  this.isGameOver = false,
  this.currentQuestion = 0,
  this.completedQuestion = 0,
  this.player1Points = 0,
  this.player2Points = 0,
  currentPlayer = 1
}
