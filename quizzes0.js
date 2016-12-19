
// question constructor
function Question (prompt, options, answer) {
  this.prompt = prompt
  this.options = options
  this.correctAnswerIndex = answer
}

var question1 = new Question('Which of the following is a subset of  {b, c, d}?', ['{ }', '{a}', '{1 , 2 , 3} ', '{a, b, c}'], 0)
var question2 = new Question('The value of 5 in the number  357.21 is', ['5 tenths', '5 ones', '5 tens', '5 hundreds'], 2)
var question3 = new Question('In coordinate geometry, the equation of the x-axis is  ', ['y = x', 'y = 0', 'x = 0', 'y = 1'], 1)
var question4 = new Question('3x - 4(x + 6) =', ['x + 6', '-x - 24', '7x + 6', '-7x - 24'], 1)
var question5 = new Question('3 4/5 expressed as a decimal is', ['3.40', '3.45', '3.50', '3.80', '3.90'], 3)
var question6 = new Question('Which of the following is the Highest Common Factor of 18, 24 and 36?', ['6', '18', '36', '72'], 0)
var question7 = new Question('If  -2<-x/2< 4 ,  then', ['4 > x < -8', '4 < x > -8', '4 < x < -8', '4 > x > -8'], 3)
var question8 = new Question('Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is', ['2.5%', '20%', '25%', '50%'], 2)

var science1 = new Question('Brass gets discoloured in air because of the presence of which of the following gases in air?', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 1)
var science2 = new Question('Which of the following is a non metal that remains liquid at room temperature?', ['Phosphorous', 'Bromine', 'Chlorine', 'Helium'], 1)
var science3 = new Question('Chlorophyll is a naturally occurring chelate compound in which central metal is', ['Copper', 'Magnesium', 'Iron', 'Calcium'], 1)
var science4 = new Question('Which of the following is used in pencils?', ['Graphite', 'Silicon', 'Charcoal', 'Phosphorous'], 0)
var science5 = new Question('Which of the following metals forms an amalgam with other metals?', ['Tin', 'Mercury', 'Lead', 'Zinc'], 1)
var science6 = new Question('The gas usually filled in the electric bulb is', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 3)
var science7 = new Question('Washing soda is the common name for', ['Sodium bicarbonate', 'Calcium bicarbonate', 'Sodium carbonate', 'Calcium carbonate'], 2)
var science8 = new Question('Which of the gas is not known as green house gas?', ['Hydrogen', 'Nitrus Oxide', 'Carbon dioxide', 'Mathane'], 0)

function Quiz (questions) {
  this.questions = questions
  this.isGameOver = false
  this.currentQuestion = 0
  this.player1Points = 0
  this.player2Points = 0
}

var math = new Quiz([question1, question2, question3, question4, question5, question6, question7, question8])

var science = new Quiz([science1, science2, science3, science4, science5, science6, science7, science7])

var currentPlayer = 1

// Prototype Method
Quiz.prototype.numberOfQuestions = function () {
  console.log('numberOfQuestion', this.questions.length)
  return this.questions.length
}

Quiz.prototype.currentQuestionNo = function () {
  console.log('currentQuestionNo', this.currentQuestion)
  return this.currentQuestion
}

Quiz.prototype.numberOfAnswers = function () {
  console.log('numberOfAnswers', this.questions[this.currentQuestionNo()].options.length)
  return this.questions[this.currentQuestionNo()].options.length
}

Quiz.prototype.correctAnswer = function () {
  console.log('correct answer', this.questions[this.currentQuestionNo()].correctAnswerIndex)
  return this.questions[this.currentQuestionNo()].correctAnswerIndex
}

Quiz.prototype.checkGameOver = function () {
  if (this.currentQuestionNo() === this.numberOfQuestions()) {
    // whoWon()
    console.log('passed')
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
    this['player' + currentPlayer + 'Points'] += 1
    this.currentQuestion += 1
    result = true
  } else {
    result = false
  }
  // console.log('fired')

  currentPlayer = 3 - currentPlayer
  // console.log('player', currentPlayer)

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
  this.player1Points = 0,
  this.player2Points = 0,
  currentPlayer = 1
}

$(document).ready(function () {
  var whichDiv
  var subject
  $('.menu div div').click(function () {
    whichDiv = $('div').index(this)
    console.log('whichDiv', whichDiv)
    if (whichDiv === 2) {
      subject = math
    } else if (whichDiv === 3) {
      subject = science
    }
    $('.menu').fadeOut()
    $('.quiz').fadeIn()

    subject.uI(subject)
  })
})

Quiz.prototype.updateDisplay = function () {
  $('h3:nth-child(2)').text('Player 1: ' + this.player1Points)
  $('h3:nth-child(4)').text('Player 2: ' + this.player2Points)
  if (this.checkGameOver() === true) {
    $('.row').css({
      background: 'rgba(0,0,0,0.1)'
    })
    $('.answer button, h1').css({
      opacity: 0.5
    })
    if (this.whoWon() === 3) {
      $('.alert p').text('It is a draw game.')
    } else if (this.whoWon() > 0) {
      $('.alert p').text('Player ' + this.whoWon() + ' won quiz round.')
    }

    $('.alert').removeClass('invisible')
    .css('z-index', '1')
  } else {
    $('h1').text(this.questions[this.currentQuestion].prompt).bind(this)
    $('.answer button').remove()
    for (var i = 0; i < this.numberOfAnswers(); i++) {
      $('.answer').append('<button>' + this.questions[this.currentQuestion].options[i] + '</button>').bind(this)
      $('.answer button').addClass('btn btn-default btn-lg')
      .fadeIn()
    }
  }
}

Quiz.prototype.uI = function (subject) {
  //  updateDisplay when webpage first loaded
  subject.updateDisplay()
  var index
  // call playTurn(choice) and updateDispaly() when answer has been selected
  $('body').on('click', 'button', function () {
    index = $('button').index(this)
    console.log(index)
    if (subject.checkGameOver() === false) {
      if (subject.playTurn(index) === true) {
        $('.answer button:nth-child(' + (index + 1) + ')').addClass('btn-success')
      } else {
        $('.answer button:nth-child(' + (index + 1) + ')').addClass('btn-danger')
      }
      timeout = setTimeout(function () { subject.updateDisplay() }, 500)
    }
  })

  $('.alert button').click(function () {
    $('.alert').addClass('invisible')
    $('.row, .answer button, h1').removeAttr('style')
    subject.restart()
  })
}
